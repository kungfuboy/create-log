<template>
    <div class="flex flex-col mx-24 w-1/3">
        <input class="border px-4 py-3 mb-2" type="text" v-model="title" @input="handleChange" placeholder="Title" />
        <textarea :class="`border px-4 py-3 resize-none`" spellcheck="false" name="txt" v-model="text" cols="30" rows="10"
            placeholder="Content..." @input="handleChange"></textarea>
        <div class="flex justify-between">
            <div class="flex flex-wrap">
                <i class="
            w-10
            h-10
            border
            mx-1
            my-2
            cursor-pointer
            rounded-lg
            hover:border-gray-500
          " @click="handleClickColor(it)" v-for="(it, index) in colorList" :key="index"
                    :style="{ background: `${it}` }"></i>

            </div>
            <div class="flex flex-wrap items-center">
                <span class="mx-4">字号</span>
                <select class="border w-24" v-model="contentSize" @change="handleChange">
                    <option v-for="it in [2, 3, 4, 5, 6, 7, 8, 9]" :value="it">{{ it }}</option>
                </select>
            </div>
        </div>
        <div class="flex flex-wrap">
            <i class="
            w-20
            h-20
            border
            m-1
            cursor-pointer
            bg-center bg-cover
            rounded-lg
            hover:border-gray-500
          " @click="handleClickBg(it)" v-for="(it, index) in bgList" :key="index"
                :style="{ backgroundImage: `url(${it})` }"></i>
        </div>
        <input class="border p-4 my-2" type="text" v-model="imgUrl" @input="handleChangeUrl" placeholder="http://..." />
        <button class="
          border
          my-4
          p-6
          rounded-lg
          bg-blue-300
          text-gray-100
        " @click="handleDown">
            Create & Download
        </button>
    </div>
</template>
  
<script setup>
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import { useMainStore } from '~/store'


const bgList = ref(Array(12)
    .fill(0)
    .map((it, i) => `/images/bg${i + 1}.jpeg`))


const title = ref('')
const text = ref('')
const contentSize = ref(2)
const imgUrl = ref('')
const colorList = ref(['#233', '#fff'])
const store = useMainStore()

const emits = defineEmits(['changing'])


const handleChange = () => {
    emits('changing', { title: title.value, content: text.value, contentSize: contentSize.value })
}

const handleClickBg = data => {
    store.changeBg(data)
}

const handleClickColor = data => {
    store.changeColor(data)
}

const handleChangeUrl = () => {
    store.changeBg(imgUrl.value)
}
const handleDown = () => {
    domtoimage
        .toPng(document.getElementById('my-node'))
        .then((dataUrl) => {
            saveAs(dataUrl, `pic-${Date.now()}.png`)
        })
}
</script>
  