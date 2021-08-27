<template>
  <div v-if="event">
    <h1 class="animate__animated animate__pulse">{{ event.title }}</h1>
    <p>@{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['event'],
}
</script>

<style lang="scss" scoped></style>
