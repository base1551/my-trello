<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
    />
    <card-add :listIndex="listIndex"/>
  </div>
</template>

<script>
import CardAdd from "./CardAdd";
import Card from "./Card";

export default {
  components: {Card, CardAdd},
  //親コンポーネントからデータを受け取りdataとして利用できる
  //type stringで受け取る
  //required 必ず受け取る
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCardInList() {
      return this.cards.length
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