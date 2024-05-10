const imageContext = require.context("./FotoCarousel", false, /\.(png|jpe?g|svg)$/);

const contents=[
    //Bandung
    {
        one: imageContext("./1.jpeg"),
        two: imageContext("./2.jpg"),
        three: imageContext("./3.jpg"),
        four: imageContext("./4.jpg"),
        five: imageContext("./5.jpeg"),
        six: imageContext("./6.jpeg"),
        seven: imageContext("./7.jpg"),
    }
    
]

export default contents;