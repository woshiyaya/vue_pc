<template>
  <div class="container-article">
    <!-- 筛选区域 -->
    <el-card>
      <!-- 头部 面包屑-->
      <div slot="header">
        <my-bread>内容管理</my-bread>
      </div>
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model="filterData.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="filterData.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="dateArr"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选结果 -->
  </div>
</template>

<script>
/*eslint-disable*/ 
import MyBread from "../../components/my-bread"
export default {
  name: "app-article",
  components: {
    MyBread
  },
  data () {
    return {
      // 声明筛选条件
      filterData: {
        status: null,
        channel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      channelOptions: [
        { label: "前端", value: 1 },
        { label: "java", value: 2 }
      ],
      dateArr: []
    };
  }
};
</script>

<style lang="less" scoped>
</style>
