<template>
  <div class="flex flex-col mx-24 w-1/3">
    <input
      class="border p-2.5 mb-2"
      type="text"
      v-model="title"
      @input="handleChange"
      placeholder="Title"
    />
    <textarea
      class="border p-2.5"
      name="txt"
      v-model="text"
      cols="30"
      rows="10"
      placeholder="Content..."
      @input="handleChange"
    ></textarea>
    <div class="flex flex-wrap">
      <i
        class="
          w-6
          h-6
          border
          mx-1
          my-2
          cursor-pointer
          rounded-lg
          hover:border-gray-500
        "
        @click="handleClickColor(it)"
        v-for="(it, index) in colorList"
        :key="index"
        :style="{ background: `${it}` }"
      ></i>
    </div>
    <div class="flex flex-wrap">
      <i
        class="
          w-20
          h-20
          border
          m-1
          cursor-pointer
          bg-center bg-cover
          rounded-lg
          hover:border-gray-500
        "
        @click="handleClickBg(it)"
        v-for="(it, index) in bgList"
        :key="index"
        :style="{ backgroundImage: `url(${it})` }"
      ></i>
    </div>
    <button
      class="border my-4 p-2 rounded-lg hover:bg-blue-300 hover:text-gray-100"
      @click="handleDown"
    >
      Create & Download
    </button>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  data: () => ({
    title: '',
    text: '',
    colorList: ['#233', '#fff']
  }),
  computed: {
    bgList() {
      return Array(12)
        .fill(0)
        .map((it, i) => require(`../assets/bg${i + 1}.jpeg`))
    }
  },
  methods: {
    handleChange() {
      this.$emit('changing', { title: this.title, content: this.text })
    },
    handleClickBg(data) {
      this.$store.commit('changeBg', data)
    },
    handleClickColor(data) {
      this.$store.commit('changeColor', data)
    },
    handleDown() {
      domtoimage
        .toPng(document.getElementById('my-node'))
        .then(function (dataUrl) {
          saveAs(dataUrl, `pic-${Date.now()}.png`)
        })
    }
  }
}
</script>

<style>
</style>