import Vue from 'vue'
import Vuex from 'vuex'

import producers from '@/assets/js/producers'

Vue.use(Vuex)

const state = {
    producers: producers,
    nfts: 0
}

const mutations = {
    BUY_PRODUCER (state, { producerId }) {
        state.producers = state.producers.map(producer => {
            if (producer.id === producerId) {
                producer.purchased++
                state.nfts -= producer.price
                producer.price = 1.22 * producer.price
            }

            return producer
        })
    },
    CLICK_NFT (state) {
        state.nfts++
    },
    ADD_NFTS (state, { nfts }) {
        state.nfts += nfts
    }
}

const actions = {}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
