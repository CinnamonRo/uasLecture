const imageContext = require.context("./FotoExplore", false, /\.(png|jpe?g|svg)$/);

const dataExplore=[
    //Bandung
    [{
        imgSrc: imageContext("./KawahPutih.jpg"),
        type:"Pantai",
        rating:"4.8",
        review:" (1.5k)",
        lokasi:"📍 Desa Alam Endah, Kecamatan Rancabali",
        place:"Kawah Putih",
        content:"Fasilitas: Toilet, Angkutan Ontang Anting, Mushola, Warung makan, Shelter, Dermaga Ponton, Sky walk, Sunan ibu",
        price:"Rp27.500",
    },
    {
        imgSrc: imageContext("./Cileunca.jpg"),
        type:"Danau",
        rating:"4.7",
        review:" (1.2k)",
        lokasi:"📍 Jl. Situ Cileunca, Pulosari, Kec. Pangalengan",
        place:"Situ Cileunca Pangalengan",
        content:"Fasilitas: Arung Jeram / Rafting, Paintball, Flying Fox, Offroad Landrover, Archery, Lake Tour, Fun Games ",
        price:"Rp6.000",
    },
    {
        imgSrc: imageContext("./NIMO.png"),
        type:"Attraction",
        rating:"4.5",
        review:" (1k)",
        lokasi:"📍Banjarsari, kec. Pangalengan,",
        place:"NIMO Highland",
        content:"Fasilitas: Sky bridge, Restoran Santorini, Wahana ATV ,Food court ,Mushola, Shelter, Paralayang, Paramotor, Glamping, Camping ground",
        price:"Rp25.000-35.000",
    },
    {
        imgSrc: imageContext("./Lancabali.jpg"),
        type:"Danau",
        rating:"4.6",
        review:" (1.3k)",
        lokasi:"📍 Jalan Raya Ciwidey, Patengan, Kec. Rancabali",
        place:"Glamping Lakeside Rancabali",
        content:"Fasilitas: Penginapan, Pinisi Resto, Teras Bintang ,Taman Kelinci, Taman Pakis, Food Court, Floating Lake Bridge, Perahu keliling danau, Mushola",
        price:"Rp25.000",
    }],

]

export default dataExplore;