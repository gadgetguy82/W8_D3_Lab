use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Bob Smith",
        email: "bobby@gmail.co.uk",
        checked_in: "true"
    },
    {
        name: "Richard Neil",
        email: "richboy@msn.co.uk",
        checked_in: "false"
    },
    {
        name: "George Watson",
        email: "appples@random.co.uk",
        checked_in: "false"
    },
]);