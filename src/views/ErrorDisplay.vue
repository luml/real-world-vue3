<template>
  <h4>Opps! There was an error :(</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
</style>