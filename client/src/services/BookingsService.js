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

    deleteBooking(id) {
        return fetch(baseURL + id, {method: 'DELETE'})
    },

    updateBooking(booking) {
        const data = {
            name: booking.name,
            email: booking.email,
            checked_in: booking.checked_in
        };

        return fetch(baseURL + booking._id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
    }
}