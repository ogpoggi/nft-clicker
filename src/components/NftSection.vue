<template>
    <section class="nft-container">
        <div class="header">
            <div class="score">
                <div class="nft-count" ref="nftCount">
                    {{ nfts.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) }}
                </div>
                <div style="display: inline-block">
                    nfts
                </div>
            </div>
        </div>
        <div class="content">
            <div class="nft-wrapper">
                <img ref="nft" class="nft" @click="clickNft" src="/static/svg/Epic/AstroSafemoon.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
    import animate from '@/assets/js/animate'
    import { popUp } from '@/assets/js/ui'

    export default {
        computed: {
            nfts: function () {
                return this.$store.state.nfts
            }
        },
        methods: {
            clickNft (e) {
                this.showPopup(e)
                this.$store.commit('CLICK_NFT')
                animate(this.$refs.nftCount, 'scale-up', 100)
                animate(this.$refs.nft, 'scale-up', 100)
            },
            showPopup(e) {
                popUp('+1', '48px', 'fadeOutUp', e)
            }
        }
    }
</script>

<style scoped>
    .nft-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #C7EFCF;
        user-select: none;
    }

    .header {
        font-family: 'Oswald', sans-serif;
        background: rgba(0, 0, 0, .4);
        text-align: center;
        padding: 30px 10px;
        font-size: 32px;
        color: white;
        user-select: none;
    }

    .nft-count {
        transition: all .2s;
    }

    .content {
        flex: 1;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .nft-wrapper {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nft {
        width: 50%;
        height: 50%;
        cursor: pointer;
        transition: all .5s;
    }

    .plus1 {
        font-size: 18px;
        font-weight: bold;
        color: white;
        border: solid 1px black;
    }
</style>
