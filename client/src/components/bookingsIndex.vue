<template>
    <div>
        <ul>
            <li v-for="booking in bookings">{{booking.name}}
            {{booking.email}}
            {{booking.checked_in}}
            <button v-if="!booking.checked_in" v-on:click="updateBooking(booking)"> Check in guest</button>
            <button v-on:click="deleteBooking(booking._id)"> Delete Booking</button></li>
        </ul>
    </div>
</template>

<script>
    import BookingService from '@/services/BookingsService';
    import {eventBus} from "@/main";
    export default {
        name: "bookings-index",
        props: ['bookings'],
        methods: {
            deleteBooking(id) {
                BookingService.deleteBooking(id).then(() => eventBus.$emit('booking-deleted', id))
            },
            updateBooking(booking){
                booking.checked_in = true;
                BookingService.updateBooking(booking).then(newBooking => eventBus.$emit('booking-updated', newBooking))
            }
        }
    }
</script>

<style scoped>

</style>