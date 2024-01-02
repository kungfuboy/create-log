<template>
  <section id="my-node" class="canvas flex flex-col border bg-bottom bg-cover font-mono"
    :style="{ backgroundImage: `url(${bg})`, color: `${color}` }">
    <span class="flex justify-center text-3xl mb-1.5">{{ title }}</span>
    <span :class="['cont my-1', fontSize]" v-for="(item, index) in content" :key="index">{{
      item
    }}</span>
  </section>
</template>
  
<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/store'

const store = useMainStore()
const props = defineProps({ data: Object })
const { bg, color, } = storeToRefs(store)

const splitText = (data) => data.split('\n')

const title = computed(() => props?.data?.title || '')
const content = computed(() => splitText(props?.data?.content || ''))

const fontSizeHash = (new Map()).set(2, 'text-2xl').set(3, 'text-3xl').set(4, 'text-4xl').set(5, 'text-5xl').set(6, 'text-6xl').set(7, 'text-7xl').set(8, 'text-8xl').set(9, 'text-9xl')

const fontSize = computed(() => fontSizeHash.get(props?.data?.contentSize || 2))

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