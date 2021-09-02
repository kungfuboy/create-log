<template>
  <section
    id="my-node"
    class="canvas flex flex-col text-xl border bg-bottom bg-cover font-mono"
    :style="{ backgroundImage: `url(${renderBg})`, color: `${renderColor}` }"
  >
    <span class="flex justify-center text-2xl mb-1.5">{{ title }}</span>
    <span class="cont my-1" v-for="(item, index) in content" :key="index">{{
      item
    }}</span>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    title() {
      return this.data && this.data.title ? this.data.title : ''
    },
    content() {
      return this.data ? this.splitText(this.data.content) : ''
    },
    renderBg() {
      return this.$store.state.bg
    },
    renderColor() {
      return this.$store.state.color
    }
  },
  methods: {
    splitText(data) {
      return data.split('\n')
    }
  }
}
</script>

<style scoped>
.canvas {
  padding: 4% 3% 5% 3%;
  width: 690px;
}
.cont {
  text-indent: 2em;
  min-height: 1em;
}
</style>