<template>
  <div>
    <header>my Trello</header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <!-- v-bindは:と省略できる-->
        <list v-for="(item, index) in lists"
              :key="item.id"
              :title="item.title"
              :cards="item.cards"
              :listIndex="index"
              @change="movingCard"/>
        <list-add/>
      </div>
    </main>
  </div>
</template>
<script>
import ListAdd from "./ListAdd";

import List from './List'
import {mapState} from 'vuex'

export default {
  components: {ListAdd, List},
  computed: {
    //storeのstateのデータを取得することができる
    //...オブジェクトスプレッド演算子 オブジェクト
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard() {
      this.$store.dispatch('updateList', {lists: this.lists})
    }
  }
};

</script>
