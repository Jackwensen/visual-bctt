<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      highlight-current-row
      max-height="800"
    >
      <el-table-column width="80" align="center" label="区块高度">
        <template slot-scope="scope">
          <router-link :to="{ path: '/getfromchain/getOneBlock', query: { height: scope.row.Height }}">
            <el-link type="primary">
              {{ scope.row.Height }}
            </el-link>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column width="380" align="center" label="前一区块hash">
        <template slot-scope="scope">
          <!-- <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">0x{{ scope.row.from }}</div>
            <router-link :to="{ path: '/address/index', query: { id: scope.row.to }}">
              <el-link type="primary"> -->
          <span>{{ scope.row.PrevHash }}</span>
          <!-- </el-link>
            </router-link>
          </el-tooltip> -->
        </template>
      </el-table-column>
      <el-table-column width="210" align="center" label="Merkle根">
        <template slot-scope="scope">
          {{ scope.row.MerkleRoot }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" width="200" align="center" label="签名">
        <template slot-scope="scope">
          {{ scope.row.Signature }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="区块hash">
        <template slot-scope="scope">
          <span>{{ scope.row.Hash }}</span>
        </template>
      </el-table-column>
      <el-table-column width="220" align="center" label="时间戳">
        <template slot-scope="scope">
          <!-- <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">0x{{ scope.row.from }}</div>
            <router-link :to="{ path: '/address/index', query: { id: scope.row.from }}">
              <el-link type="primary"> -->
          <span>{{ scope.row.Timestamp }}</span>
          <!-- </el-link>
            </router-link>
          </el-tooltip> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.listLoading = true
      fetch('http://localhost:9999/getBlockChain', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
        // body: JSON.stringify({
        //   id: this.state.user.id
        // })
      })
        .then((res) => {
          return { data: res }
        })
        .then(response => {
          response.data.json().then((res) => {
            console.log('getBlockChain:', res)
            this.list = res.Data
            this.listLoading = false
          })
        })
    }
  }
}
</script>

<style>
.item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
</style>
