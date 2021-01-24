import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')


const store = new Vuex.Store({
    state: {
        lists: savedLists ? JSON.parse(savedLists) : [{
            title: 'Backlog',
            cards: [{
                body: 'English'
            },
                {
                    body: 'Mathematics'
                },
            ]
        },
            {
                title: 'Todo',
                cards: [{
                    body: 'Science'
                }]
            },
            {
                title: 'Doing',
                cards: []
            }
        ],
    },
    // stateに渡す
    mutations: {
        addlist(state, payload) {
            state.lists.push({
                title: payload.title,
                cards: []
            })
        },
        removelist(state, payload) {
            state.lists.splice(payload.listIndex, 1)
        },
        addCardToList(state, payload) {
            state.lists[payload.listIndex].cards.push({body: payload.body})
        },
        removeCardFromList(state, payload) {
            state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
        }
    },
//mutationsで作成したメソッドをcommitで実行
    actions: {
        addlist(context, payload) {
            context.commit('addlist', payload)
        }
        ,
        removelist(context, payload) {
            context.commit('removelist', payload)
        }
        ,
        addCardToList(context, payload) {
            context.commit('addCardToList', payload)
        },
        removeCardFromList(context, payload) {
            context.commit('removeCardFromList', payload)
        }
    }
    ,
    getters: {
        totalCardCount(state) {
            let count = 0
            state.lists.map(content => count += content.cards.length)
            return count
        },
    },
})

// ★ここから追記
store.subscribe((mutation, state) => {
    localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
// ★ここまで追記
