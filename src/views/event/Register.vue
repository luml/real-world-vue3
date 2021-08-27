<template>
  <div v-if="event">
    <p>Register for {{ event.title }}</p>
    <button @click="register">Register Me</button>
  </div>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    register() {
      // After a API call
      this.GStore.flashMessage =
        'You are successfully registered for' + this.event.title
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 2000)
      this.$router.push({
        name: 'EventDetails',
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
