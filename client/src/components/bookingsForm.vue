<template>
    <div>
        <form v-on:submit="addGuest">
            <label for="name"> Name: </label>
            <input type="text" id="name" placeholder="Guest name" v-model="name" required>
            <br>
            <label for="email"> Email: </label>
            <input type="email" id="email" placeholder="Guest email" v-model="email" required>
            <br>
            <label for="checked_in"> Checked in:</label>
            <input type="checkbox" id="checked_in" v-model="checked_in">
            <br>
            <input type="submit" value="Book Guest">
        </form>
    </div>
</template>

<script>
    import BookingService from '@/services/BookingsService';
    import {eventBus} from "@/main";
    export default {
        name: "bookingsForm",
        data(){
            return {
                name: "",
                email: "",
                checked_in: false,
            }
        },
        methods: {
            addGuest(event){
                event.preventDefault();
                const data = {
                    name: this.name,
                    email: this.email,
                    checked_in: this.checked_in
                };

                BookingService.newBooking(data).then(guest => eventBus.$emit('guest-added', guest))
            }
        }
    }
</script>

<style scoped>

</style>