<template>
  <div id="app">
      <bookings-form />
      <bookings-index :bookings="bookings" />
  </div>
</template>

<script>
  import bookingsForm from '@/components/bookingsForm';
  import bookingsIndex from '@/components/bookingsIndex';
  import BookingService from '@/services/BookingsService';
  import {eventBus} from "@/main";

  export default {
  name: 'app',
    data(){
        return {
            bookings: []
        }
    },
    mounted(){
        BookingService.getBookings().then(bookings => this.bookings = bookings);
        eventBus.$on('guest-added', (guest) => {this.bookings.push(guest)});
        eventBus.$on('booking-deleted', (id) => {
            const booking_id = this.bookings.findIndex(booking => booking._id === id);
            this.bookings.splice(booking_id, 1)
        })

    },
  components: {
      'bookings-form': bookingsForm,
      'bookings-index': bookingsIndex
  }
}
</script>

<style>
</style>
