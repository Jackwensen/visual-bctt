<template>
  <div class="app-container">
    <el-row :gutter="0">
      <el-col :span="22" :offset="1">
        <el-alert
          title="区块链节点可视化"
          type="info"
          description="包括节点信息和边信息"
          show-icon
        />
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="22" :offset="1">
        <div id="mountNode" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import G6 from '@antv/g6'
// import { getNode } from '@/api/graph'
import insertCss from 'insert-css'
import { getNode } from '@/api/graph'

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.initG6()
  },
  methods: {
    async initG6() {
      getNode().then((res) => res.data.items)
        .then((data) => {
          const container = document.getElementById('mountNode')
          insertCss(`
						.g6-component-tooltip {
							border: 1px solid #e2e2e2;
							border-radius: 4px;
							font-size: 12px;
							color: #000;
							background-color: rgba(255, 255, 255, 0.9);
							padding: 10px 8px;
							box-shadow: rgb(174, 174, 174) 0px 0px 10px;
						}
					`)

          const grid = new G6.Grid()
          const tooltip = new G6.Tooltip({
            // offsetX and offsetY include the padding of the parent container
            // offsetX 与 offsetY 需要加上父容器的 padding
            offsetX: 140 + 10,
            offsetY: 100 + 10,
            // the types of items that allow the tooltip show up
            // 允许出现 tooltip 的 item 类型
            itemTypes: ['node', 'edge'],
            // custom the tooltip's content
            // 自定义 tooltip 内容
            getContent: (e) => {
              const outDiv = document.createElement('div')
              outDiv.style.width = 'fit-content'
              outDiv.style.height = 'fit-content'
              // const model = e.item.getModel()
              if (e.item.getType() === 'node') {
                outDiv.innerHTML = `0x0be3c0882a99c2cc0efde505abc25ad`
              } else {
                outDiv.innerHTML = `来源：0x8f2b779ad02ac7d099ece9a9563a3bec723c<br/>去向：0xd26f0ebe9d21b435086ea722a5453065b59a`
                // const source = e.item.getSource()
                // const target = e.item.getTarget()
                // outDiv.innerHTML = `来源：${source.getModel().name}<br/>去向：${target.getModel().name}`
              }
              return outDiv
            }
          })

          const graph = new G6.Graph({
            container: 'mountNode',
            width: container.scrollWidth, // 图的宽度
            height: container.scrollHeight || 650,
            layout: {
              type: 'force',
              edgeStrength: 0.7
            },
            plugins: [tooltip, grid],
            modes: {
              default: ['drag-canvas', 'activate-relations']
            },
            defaultNode: {
              size: [10, 10]
              /* style for the keyShape */
              // style: {
              //   lineWidth: 2,
              //   fill: '#DEE9FF',
              //   stroke: '#5B8FF9',
              // },
            },
            defaultEdge: {
              /* style for the keyShape */
              style: {
                stroke: '#aaa',
                lineAppendWidth: 2,
                opacity: 0.3
              }
            }
            /* styles for different states, there are built-in styles for states: active, inactive, selected, highlight, disable */
            // nodeStateStyles: {
            //   active: {
            //     opacity: 1
            //   },
            //   inactive: {
            //     opacity: 0.2
            //   }
            // },
            // edgeStateStyles: {
            //   active: {
            //     stroke: '#999'
            //   }
            // }
          })

          // graph.node(function(node) {
          //   return {
          //     label: node.id
          //   }
          // })

          graph.data(data)
          graph.render()
          // graph.fitView()

          if (typeof window !== 'undefined') {
            window.onresize = () => {
              if (!graph || graph.get('destroyed')) return
              if (!container || !container.scrollWidth || !container.scrollHeight) return
              graph.changeSize(container.scrollWidth, container.scrollHeight)
            }
          }
        })
    }
  }
}
</script>

<style>
.line{
  text-align: center;
}
/* 提示框的样式 */
.g6-tooltip {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-size: 12px;
  color: #545454;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 8px;
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
}
.g6-component-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
</style>

