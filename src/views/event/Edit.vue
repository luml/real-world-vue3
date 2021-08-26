<template>
  <div v-if="event">
      <p>Edit {{ event.title }}</p>
  </div>
</template>

<script>
export default {
    props: ['event'],
}
</script>

<style lang="scss" scoped>
</style>