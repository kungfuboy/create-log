<template>
  <section class="flex justify-center mt-8">
    <MyInput @changing="handleChange" />
    <MyCanvas :data="data" />
  </section>
</template>

<script>
export default {
  data: () => ({
    data: null
  }),
  methods: {
    handleChange(data) {
      this.data = data
    }
  }
}
</script>
