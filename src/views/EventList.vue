<template>
  <h1>Events For {{ user.userInfo.name }}</h1>
  <div class="events">
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  created() {
    this.fetchEvents().catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
  },
  computed: {
    ...mapState(['event', 'user']),
  },
  methods: {
    ...mapActions('event', ['fetchEvents']),
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
