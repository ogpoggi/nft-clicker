<template>
    <div class="game">
        <NftSection />
        <StoreSection />
    </div>
</template>

<script>
    import NftSection from '@/components/NftSection'
    import StoreSection from '@/components/StoreSection'

    export default {
        components: {
            NftSection,
            StoreSection
        }
    }
</script>

<style scoped>
    .game {
        height: 100%;
        background: white;
        display: flex;
    }
</style>
