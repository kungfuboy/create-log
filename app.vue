<template>
  <section class="flex justify-center mt-8">
    <MyInput @changing="handleChange" />
    <MyCanvas :data="data" />
  </section>
</template>
<script setup>

const data = ref({})

const handleChange = (object) => {
  data.value = object
}

</script>