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
    
    //Banjar
    {
        one: imageContext("./14.jpg"),
        contentOne: "Alun-alun kota Banjar",

        two: imageContext("./15.jpg"),
        contentTwo: "Situ Mustika",

        three: imageContext("./16.jpg"),
        contentThree: "Lembah Pajamben",

        four: imageContext("./17.jpg"),
        contentFour: "Cagar Budaya Pulomajeti",
    },
    
    //Bekasi
    {
        one: imageContext("./21.jpeg"),
        contentOne: "Summarecon Bekasi",

        two: imageContext("./22.jpg"),
        contentTwo: "Transtudio Cibubur",

        three: imageContext("./23.jpg"),
        contentThree: "Trans Snow World Bekasi",

        four: imageContext("./24.jpg"),
        contentFour: "Pancasila sakti",

        five: imageContext("./25.jpeg"),
        contentFive: "Curug Parigi",

        six: imageContext("./26.jpg"),
        contentSix: "Transera Waterpark",

        seven: imageContext("./27.jpg"),
        contentSeven: "Curug Parigi",
    },

    //Bogor
    {
        one: imageContext("./28.jpg"),
        contentOne: "Alun-alun Kota Bogor",

        two: imageContext("./29.jpeg"),
        contentTwo: "Kebun Raya Bogor",

        three: imageContext("./30.jpg"),
        contentThree: "Waterpark Bogor",

        four: imageContext("./31.jpg"),
        contentFour: "Istana Bogor",

        five: imageContext("./32.jpg"),
        contentFive: "Museum Zoologi",

        six: imageContext("./33.jpg"),
        contentSix: "Museum Balai Kirti",

        seven: imageContext("./34.jpg"),
        contentSeven: "Kuntum Farmfiel",
    },

    //Ciamis
    {
        one: imageContext("./35.jpg"),
        contentOne: "Alun-alun Ciamis",

        two: imageContext("./36.jpg"),
        contentTwo: "Taman Raflesia",

        three: imageContext("./37.jpg"),
        contentThree: "Masjid Agung Ciamis",

        four: imageContext("./38.jpg"),
        contentFour: "Museum Galuh Pakuan",

        five: imageContext("./39.jpg"),
        contentFive: "Taman Lokasana",

        six: imageContext("./40.jpg"),
        contentSix: "Taman R.A.A Kusumadiningrat",

        seven: imageContext("./41.jpg"),
        contentSeven: "Keraton Selagangga",
    },

    //Cianjur
    {
        one: imageContext("./42.jpeg"),
        contentOne: "Alun-Alun Cianjur",

        two: imageContext("./43.jpeg"),
        contentTwo: "Little Venice Kota Bunga",

        three: imageContext("./44.jpg"),
        contentThree: "Masjid Agung Cianjur",

        four: imageContext("./45.jpeg"),
        contentFour: "Sevilage",

        five: imageContext("./46.jpg"),
        contentFive: "Tugu Lampu Gentur",

        six: imageContext("./47.jpeg"),
        contentSix: "Taman Bunga Nusantara",

        seven: imageContext("./48.jpg"),
        contentSeven: "Alun-Alun Cianjur",
    },

    //Cimahi
    {
        one: imageContext("./49.jpg"),
        contentOne: "Nu Art Studio",

        two: imageContext("./50.jpg"),
        contentTwo: "Taman Alun-Alun",

        three: imageContext("./51.jpg"),
        contentThree: "Societeit voor Officieren Tjimahi",

        four: imageContext("./52.jpg"),
        contentFour: "Taman Kartini",

        five: imageContext("./53.jpg"),
        contentFive: "Venus Cimahi",

        six: imageContext("./54.jpeg"),
        contentSix: "Masjid Agung Demak",

        seven: imageContext("./55.jpg"),
        contentSeven: "Taman Aruman",
    },

    //Cirebon
    {
        one: imageContext("./56.jpeg"),
        contentOne: "Makam Sunan Gunung Jati",

        two: imageContext("./57.jpg"),
        contentTwo: "Batu Lawang Cirebon",

        three: imageContext("./58.jpg"),
        contentThree: "Bukit Gronggong",

        four: imageContext("./59.jpeg"),
        contentFour: "Talaga Langit",

        five: imageContext("./60.jpg"),
        contentFive: "Banyu Panas Gempol-Palimanan",

        six: imageContext("./61.jpg"),
        contentSix: "Kampung Sabin",

        seven: imageContext("./62.jpg"),
        contentSeven: "Setu Patok",
    },

    //Depok
    {
        one: imageContext("./63.jpeg"),
        contentOne: "Taman Margasatwa Ragunan",

        two: imageContext("./64.jpg"),
        contentTwo: "Situ Babakan",

        three: imageContext("./65.jpg"),
        contentThree: "Museum Layang-layang",

        four: imageContext("./66.jpg"),
        contentFour: "Masjid Kubah Emas Dian Al-Mahri",

        five: imageContext("./67.jpg"),
        contentFive: "Taman Rekreasi Wiladatika",

        six: imageContext("./68.jpg"),
        contentSix: "Perkampungan Budaya Betawi",

        seven: imageContext("./69.jpg"),
        contentSeven: "Taman Mekarsar",
    },

    //Garut
    {
        one: imageContext("./70.jpeg"),
        contentOne: "Gunugn Papandayan",

        two: imageContext("./71.jpg"),
        contentTwo: "Gunung Cikuray",

        three: imageContext("./72.jpg"),
        contentThree: "Gunung Guntur",

        four: imageContext("./73.jpg"),
        contentFour: "Sayang Heulang",

        five: imageContext("./74.jpg"),
        contentFive: "Darajat Pass",

        six: imageContext("./75.jpg"),
        contentSix: "Puncak Guha",

        seven: imageContext("./76.jpeg"),
        contentSeven: "Gunung Papandayan",
    },

    //Indramyu
    {
        one: imageContext("./77.jpeg"),
        contentOne: "Pantai Balongan Indah",

        two: imageContext("./78.jpg"),
        contentTwo: "Pantai Tirtamaya",

        three: imageContext("./79.jpg"),
        contentThree: "Hutan Mangrove Karangsong",

        four: imageContext("./80.jpg"),
        contentFour: "Pantai Rembat",

        five: imageContext("./81.jpg"),
        contentFive: "Firdaus Waterpark",

        six: imageContext("./82.jpg"),
        contentSix: "Alun-alun Indramayu",

        seven: imageContext("./83.jpg"),
        contentSeven: "Taman Cimanuk",
    },

    //Karawng
    {
        one: imageContext("./84.jpeg"),
        contentOne: "Larang Karangpawitan",

        two: imageContext("./85.jpg"),
        contentTwo: "Pantai Tanjung Pakis",

        three: imageContext("./86.jpeg"),
        contentThree: "San Diego Hills",

        four: imageContext("./87.jpg"),
        contentFour: "Curug Bandung Lojit",

        five: imageContext("./88.jpg"),
        contentFive: "Taruma Leisure Waterpark",

        six: imageContext("./89.jpg"),
        contentSix: "Kampung Turis",

        seven: imageContext("./90.jpg"),
        contentSeven: "Hutan Perum Perhutani",
    },

    //Kuningan
    {
        one: imageContext("./91.jpg"),
        contentOne: "Curug Putri Palutungan",

        two: imageContext("./92.jpg"),
        contentTwo: "Obyek Wisata Cibulan",

        three: imageContext("./93.jpg"),
        contentThree: "Waduk Darma",

        four: imageContext("./94.jpg"),
        contentFour: "Telaga Remis Pesawahan",

        five: imageContext("./95.png"),
        contentFive: "Telaga Nilam",

        six: imageContext("./96.jpg"),
        contentSix: "Sangkan Aqua Park",

        seven: imageContext("./97.jpg"),
        contentSeven: "Sukageuri View",
    },

    //Majalengka
    {
        one: imageContext("./98.jpeg"),
        contentOne: "Gunung Cereme",

        two: imageContext("./99.jpg"),
        contentTwo: "Terasering Panyaweuyan",

        three: imageContext("./100.jpg"),
        contentThree: "Lembah Panyaweuyan",

        four: imageContext("./101.jpg"),
        contentFour: "Gunung Ciremai Apuy Palutungan",

        five: imageContext("./102.jpg"),
        contentFive: "Pos Gunung Ciremai",

        six: imageContext("./103.jpg"),
        contentSix: "Curug Cipeutay",

        seven: imageContext("./104.jpg"),
        contentSeven: "Jembar Waterpark",
    },

    //Pangandaran
    {
        one: imageContext("./105.jpeg"),
        contentOne: "Cukang Taneuh",

        two: imageContext("./106.jpg"),
        contentTwo: "Wisata Pangandaran",

        three: imageContext("./107.jpg"),
        contentThree: "Pantai Madasari",

        four: imageContext("./108.jpg"),
        contentFour: "Cukang Taneuh",

        five: imageContext("./109.jpg"),
        contentFive: "Pantai Karapyak",

        six: imageContext("./110.jpg"),
        contentSix: "Pantai Timur Pangandaran",

        seven: imageContext("./111.jpg"),
        contentSeven: "Pantai Karang Nini",
    },

    //Purwakarta
    {
        one: imageContext("./112.jpeg"),
        contentOne: "Gapura Cilodong",

        two: imageContext("./113.jpg"),
        contentTwo: "air Mancur Sri Baduga",

        three: imageContext("./114.jpg"),
        contentThree: "Situ Buleud",

        four: imageContext("./115.jpg"),
        contentFour: "Taman Maya Datar",

        five: imageContext("./116.jpg"),
        contentFive: "Diorama Nusantara",

        six: imageContext("./117.png"),
        contentSix: "Alun-alun Purwakarta",

        seven: imageContext("./118.jpeg"),
        contentSeven: "Jembatan Salakan",
    },

    //Subang
    {
        one: imageContext("./119.jpeg"),
        contentOne: "D'Castello",

        two: imageContext("./120.jpg"),
        contentTwo: "Air Panas Ciater",

        three: imageContext("./121.jpg"),
        contentThree: "Wisata Alam Capolaga",

        four: imageContext("./122.jpg"),
        contentFour: "Curug Cibareubeuy",

        five: imageContext("./123.jpg"),
        contentFive: "the Ranch Ciater Subang",

        six: imageContext("./124.jpg"),
        contentSix: "Mata Air Cimincul",

        seven: imageContext("./125.jpeg"),
        contentSeven: "Kebun Teh Ciater",
    },

    //SukaBumi
    {
        one: imageContext("./126.jpeg"),
        contentOne: "Curug Ngumpet",

        two: imageContext("./127.jpg"),
        contentTwo: "Santa Sea Waterpark",

        three: imageContext("./128.jpg"),
        contentThree: "Museum Prabu Siliwang",

        four: imageContext("./129.jpg"),
        contentFour: "Alun-Alun Sukabumi",

        five: imageContext("./130.jpg"),
        contentFive: "Masjid Agung",

        six: imageContext("./131.jpeg"),
        contentSix: "Curug Sawer",

        seven: imageContext("./132.jpeg"),
        contentSeven: "Curug Cimarinjung",
    },

    //Sumedang
    {
        one: imageContext("./133.jpg"),
        contentOne: "Tahura Gunung Kunci",

        two: imageContext("./134.jpg"),
        contentTwo: "Alun-alun Sumedang",

        three: imageContext("./135.jpeg"),
        contentThree: "View",

        four: imageContext("./136.jpg"),
        contentFour: "Taman ENDOG Sumedan",

        five: imageContext("./137.jpg"),
        contentFive: "Gunung Manglayang",

        six: imageContext("./138.jpeg"),
        contentSix: "Alun-alun Indramayu",

        seven: imageContext("./139.jpg"),
        contentSeven: "Museum Prabu Geusan Ulun",
    },

    //Tasikmalaya
    {
        one: imageContext("./140.jpeg"),
        contentOne: "Dragon Village",

        two: imageContext("./141.jpg"),
        contentTwo: "Taman Wisata Karang Resik",

        three: imageContext("./142.jpg"),
        contentThree: "TeeJay Waterpark",

        four: imageContext("./143.jpeg"),
        contentFour: "Masjid Agung Tasikmalaya",

        five: imageContext("./144.jpg"),
        contentFive: "Cireong Park",

        six: imageContext("./145.jpeg"),
        contentSix: "Village View",

        seven: imageContext("./146.jpg"),
        contentSeven: "Sukahaji Water Boom",
    },
]

export default contents;