const imageContext = require.context("./FotoCarousel", false, /\.(png|jpe?g|svg)$/);

const contents=[
    //Bandung
    {
        one: imageContext("./1.jpeg"),
        contentOne: "Gedung State",

        two: imageContext("./2.jpg"),
        contentTwo: "Gunung Tangkuban Parahu",

        three: imageContext("./3.jpg"),
        contentThree: "Jalan Braga",

        four: imageContext("./4.jpg"),
        contentFour: "Gedung State",

        five: imageContext("./5.jpeg"),
        contentFive: "Views",

        six: imageContext("./6.jpeg"),
        contentSix: "PadangBai",

        seven: imageContext("./7.jpg"),
        contentSeven: "Kawah Putih",
    },

    //Bandung Barat
    {
        one: imageContext("./2.jpg"),
        contentOne: "Gunung Tangkuban",

        two: imageContext("./8.jpg"),
        contentTwo: "Floating Market Lembang",

        three: imageContext("./9.jpg"),
        contentThree: "Orchid Forest Cikole",

        four: imageContext("./10.jpg"),
        contentFour: "Farm House Susu Lembang",

        five: imageContext("./11.jpg"),
        contentFive: "Grafika Cikole",

        six: imageContext("./12.jpg"),
        contentSix: "Dago Dreampark",

        seven: imageContext("./13.jpg"),
        contentSeven: "Curug Maribaya",
    },
    
]

export default contents;