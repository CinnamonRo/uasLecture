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

    //Bandung Barat
    [{
        imgSrc: imageContext("./Lembang.jpg"),
        type:"Floating Market",
        rating:"4.9",
        review:" (2.5k)",
        lokasi:"📍 Jalan Grand Hotel, Kec. Lembang",
        place:"Lembang Floating Market",
        content:"Fasilitas: Pasar terapung, Ruang makan & area santai, Berbagai macam wahana permainan, Panggung hiburan Pusat oleh-oleh,  Area parkir, Toilet, Tempat bermain anak",
        price:"Rp30.500",
    },
    {
        imgSrc: imageContext("./Tangkuban.jpg"),
        type:"Pengunungan",
        rating:"4.8",
        review:" (2k)",
        lokasi:"📍 Kabupaten Bandung Barat",
        place:"Tangkuban Perahu",
        content:"Fasilitas: Area parkir, Pusat oleh-oleh, Warung makan, Toilet,  Permandian air panas, Pusat informasi, Area pendakian, Area piknik, Spot foto ",
        price:"Rp20.000-30.000",
    },
    {
        imgSrc: imageContext("./Farm.jpg"),
        type:"Taman",
        rating:"4.6",
        review:" (1.6k)",
        lokasi:"📍 Gudangkahuripan, Kec. Lembang",
        place:"Farmhouse Susu Lembang",
        content:"Fasilitas: Area parkir, Bangunan gaya eropa, Peternakan mini/petting zoo, Kios makanan & minuman, Restoran, Toko souvenir, Area main anak, Kelas susu, Toilet",
        price:"Rp25.000-35.000",
    },
    {
        imgSrc: imageContext("./Dago.jpg"),
        type:"Attraction",
        rating:"4.7",
        review:" (1.1k)",
        lokasi:"📍  Mekarwangi, Jl. Dago Giri, Kec. Lembang",
        place:"Dago Dreampark",
        content:"Fasilitas: 35 wahana & spot foto, Area taman,  Kolam renang, Area parkir, Toilet",
        price:"Rp40.000",
    }],

]

export default dataExplore;