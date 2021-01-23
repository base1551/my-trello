<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <!-- クリックイベント-->
      <div class="deletelist" @click="removeList">×</div>
    </div>
  </div>
</template>

<script>
export default {
  //親コンポーネントからデータを受け取りdataとして利用できる
  //type stringで受け取る
  //required 必ず受け取る
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeList() {
      if (confirm('本当にこのリストを削除しますか？')) {
        this.$store.dispatch('removelist', {listIndex: this.listIndex})
      }
    }
  }
}
</script>

<style scoped>

</style>