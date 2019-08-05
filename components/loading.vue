<template lang="html">
    <div class="page-loader" v-if="loading">
        <p>Загрузка...</p>
    </div>
</template>

<script>
export default {
    data() {
      return {
          loading: false
      }
    },
    methods: {
        start () {
            this.loading = true
        },
        finish () {
            this.loading = false
        }
    }
}
</script>

<style scoped>
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding-top: 200px;
        font-size: 30px;
        font-family: sans-serif;
        z-index: 10;
    }
</style>