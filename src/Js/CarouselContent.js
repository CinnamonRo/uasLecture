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
    }
    
]

export default contents;