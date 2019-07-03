const baseURL = 'http://localhost:3000/api/bookings/';

export default {
    getBookings() {
        return fetch(baseURL).then(result => result.json())
    },

    newBooking(body) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
    },

    deleteBooking(id){
        return fetch(baseURL + id, {method: 'DELETE'})
    }
}