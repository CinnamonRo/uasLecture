const imageContext = require.context("./FotoCarousel", false, /\.(png|jpe?g|svg)$/);

const carouselContents=[
    {
        id: "Bandung",
        text1: "kawang Putih",
        imgSrc1:  imageContext("./KawahPutih.jpg"),
        text2: "Cileunca",
        imgSrc2: imageContext("./Cileunca.jpg"),
    }
]

export default carouselContents;