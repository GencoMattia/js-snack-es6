const guestNameList = ['Brad Pitt', 'Johnny Depp', 'Johnny Depp', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

// const guestsList = [
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Brad Pitt",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Johnny Depp",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Johnny Depp",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Cristiano Ronaldo",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Georgina Rodriguez",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Chiara Ferragni",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "George Clooney",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Amal Clooney",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Fedez",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Amadeus",
//     },
//     {
//         tableName: "Tavolo Vip",
//         guestName: "Fiorello",
//     }
// ];

const guestsList = guestNameList.map((guest, index) => ({tableName: "Tavolo Vip", guestName: guest, place: index + 1}));

console.log(guestsList);