const imageContext = require.context(
  "../../public/images/FotoExplore",
  false,
  /\.(png|jpe?g|svg)$/
);

const dataExplore = [
  //Bandung
  [
    {
      imgSrc: imageContext("./KawahPutih.jpg"),
      type: "Pantai",
      rating: "4.8",
      review: " (1.5k)",
      lokasi: "📍 Desa Alam Endah, Kecamatan Rancabali",
      place: "Kawah Putih",
      content:
        "Fasilitas: Toilet, Angkutan Ontang Anting, Mushola, Warung makan, Shelter, Dermaga Ponton, Sky walk, Sunan ibu",
      price: "Rp27.500",
    },
    {
      imgSrc: imageContext("./Cileunca.jpg"),
      type: "Danau",
      rating: "4.7",
      review: " (1.2k)",
      lokasi: "📍 Jl. Situ Cileunca, Pulosari, Kec. Pangalengan",
      place: "Situ Cileunca Pangalengan",
      content:
        "Fasilitas: Arung Jeram / Rafting, Paintball, Flying Fox, Offroad Landrover, Archery, Lake Tour, Fun Games ",
      price: "Rp6.000",
    },
    {
      imgSrc: imageContext("./NIMO.png"),
      type: "Attraction",
      rating: "4.5",
      review: " (1k)",
      lokasi: "📍Banjarsari, kec. Pangalengan,",
      place: "NIMO Highland",
      content:
        "Fasilitas: Sky bridge, Restoran Santorini, Wahana ATV ,Food court ,Mushola, Shelter, Paralayang, Paramotor, Glamping, Camping ground",
      price: "Rp25.000-35.000",
    },
    {
      imgSrc: imageContext("./Lancabali.jpg"),
      type: "Danau",
      rating: "4.6",
      review: " (1.3k)",
      lokasi: "📍 Jalan Raya Ciwidey, Patengan, Kec. Rancabali",
      place: "Glamping Lakeside Rancabali",
      content:
        "Fasilitas: Penginapan, Pinisi Resto, Teras Bintang ,Taman Kelinci, Taman Pakis, Food Court, Floating Lake Bridge, Perahu keliling danau, Mushola",
      price: "Rp25.000",
    },
  ],

  //Bandung Barat
  [
    {
      imgSrc: imageContext("./Lembang.jpg"),
      type: "Floating Market",
      rating: "4.9",
      review: " (2.5k)",
      lokasi: "📍 Jalan Grand Hotel, Kec. Lembang",
      place: "Lembang Floating Market",
      content:
        "Fasilitas: Pasar terapung, Ruang makan & area santai, Berbagai macam wahana permainan, Panggung hiburan Pusat oleh-oleh,  Area parkir, Toilet, Tempat bermain anak",
      price: "Rp30.500",
    },
    {
      imgSrc: imageContext("./Tangkuban.jpg"),
      type: "Pengunungan",
      rating: "4.8",
      review: " (2k)",
      lokasi: "📍 Kabupaten Bandung Barat",
      place: "Tangkuban Perahu",
      content:
        "Fasilitas: Area parkir, Pusat oleh-oleh, Warung makan, Toilet,  Permandian air panas, Pusat informasi, Area pendakian, Area piknik, Spot foto ",
      price: "Rp20.000-30.000",
    },
    {
      imgSrc: imageContext("./Farm.jpg"),
      type: "Taman",
      rating: "4.6",
      review: " (1.6k)",
      lokasi: "📍 Gudangkahuripan, Kec. Lembang",
      place: "Farmhouse Susu Lembang",
      content:
        "Fasilitas: Area parkir, Bangunan gaya eropa, Peternakan mini/petting zoo, Kios makanan & minuman, Restoran, Toko souvenir, Area main anak, Kelas susu, Toilet",
      price: "Rp25.000-35.000",
    },
    {
      imgSrc: imageContext("./Dago.jpg"),
      type: "Attraction",
      rating: "4.7",
      review: " (1.1k)",
      lokasi: "📍  Mekarwangi, Jl. Dago Giri, Kec. Lembang",
      place: "Dago Dreampark",
      content:
        "Fasilitas: 35 wahana & spot foto, Area taman,  Kolam renang, Area parkir, Toilet",
      price: "Rp40.000",
    },
  ],

  //Banjar
  [
    {
      imgSrc: imageContext("./SituMustika.png"),
      type: "Alam",
      rating: "4.7",
      review: " (1.3k)",
      lokasi: "📍 Karang panimbal, Kecamatan Purwaharja",
      place: "Situ Mustika",
      content:
        "Situ Mustika merupakan salah satu destinasi wisata di Banjar, dimana di Situ Mustika terdapat keindahan alam berupa sebuah situ danau terdapat pepohonan di tepi danau juga terdapat pulau kecil di tengah danau yang dihubungkan oleh jembatan kayu jembatan.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./LembahPajamben.jpg"),
      type: "Alam",
      rating: "4.7",
      review: " (1k)",
      lokasi: "📍 Jln. Langkaplancar - Lakbok, Binangun, Pataruman",
      place: "Lembah Pajamben",
      content:
        "Lembah Pajamben ini merupakan salah satu destinasi wisata alam yang menunjukkan pemandangan kota dari atas bukit. Tidak hanya menawarkan keindahan alam, Lembah Pajamben juga menyediakan wahana permainan untuk anak-anak serta kuliner.",
      price: "Rp15.000",
    },
    {
      imgSrc: imageContext("./Alun.jpg"),
      type: "Taman Kota",
      rating: "4.5",
      review: " (700)",
      lokasi: "📍 JGJR+5JC, Banjar, Kec. Purwaharja",
      place: "Alun-alun Kota Banjar",
      content:
        "Alun-alun ini merupakan pusat kegiatan masyarakat dan juga merupakan salah satu objek wisata yang populer di Kota Banjar. Ada banyak toko di sekitar alun-alun yang menjual berbagai makanan dan minuman yang lezat, jadi alun-alun ini bagus untuk istirahat setelah perjalanan jauh.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./CagarBudaya.jpeg"),
      type: "Alam",
      rating: " 4.6",
      review: " (673)",
      lokasi: "📍Jl. Pulo Majeti, Kec. Purwaharja",
      place: "Cagar Budaya Pulau Majeti",
      content:
        "Ini adalah tempat berdirinya Kerajaan Onom, yang masih memiliki hubungan dengan Kerajaan Galuh, yang pernah menguasai Tanah Pasundan. Kerajaan ini sangat misterius, dan akhirnya runtuh tanpa ada yang tahu mengapa.",
      price: "Rp10.000",
    },
  ],

  //Bekasi
  [
    {
      imgSrc: imageContext("./TamanKemang.jpg"),
      type: "Taman",
      rating: "4.8",
      review: " (3.2k)",
      lokasi: "📍 Jl. Niaga Raya Blok, Bojong Rawalumbu",
      place: "Taman Kemang Pratama",
      content:
        "Area taman dan ruang terbuka hijau untuk bersantai, berolahraga, atau sekadar menikmati udara segar. Selain itu, terdapat tempat pemancing dan pemandangan rusa.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./GoWet.png"),
      type: "Wisata",
      rating: "4.7",
      review: " (2.1k)",
      lokasi: "📍 Jl. Southern Boulevard Kav. 1, Lambang Jaya",
      place: "Go! Wet",
      content:
        "menyajikan pengalaman wisata air yang dilengkapi pula dengan berbagai wahana seru seperti, perosotan air ataupun 5D theater.",
      price: "Rp120.000-70.000",
    },
    {
      imgSrc: imageContext("./SituGede.jpg"),
      type: "Alam",
      rating: "4.7",
      review: " (2k)",
      lokasi: "📍Jalan Kampung Bojong Menteng, Kec Rawalumbu",
      place: "Situ Gede Bekasi",
      content:
        "Situ Gede Bekasi merupakan destinasi wisata alam dengan pemandangan indah danau, hutan bahkan rawa yang terletak di tengah kota Bekasi.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./Rainbow.jpg"),
      type: "Wisata",
      rating: "4.8",
      review: " (1.7k)",
      lokasi: "📍 Jalan Harapan Indah Boulevard, Tarumajaya",
      place: "Rainbow Garden",
      content:
        "Rainbow Garden telah menjadi salah satu tujuan wisata yang sangat diminati karena berbagai spot foto yang sangat Instagramable. Dengan lampu sorot berwarna-warni yang tersedia, tempat ini menjadi lebih mempesona untuk berfoto.",
      price: "Rp15.000",
    },
  ],

  //Bogor
  [
    {
      imgSrc: imageContext("./TamanSafari.png"),
      type: "Taman",
      rating: "4.9",
      review: " (2.4k)",
      lokasi: "📍 Jalan Kapten Harun Kabir, Kec. Cisarua",
      place: "Taman Safari bogor",
      content:
        "Fasilitas: Bus Sadari, Danau buatan Sepeda airf KanoKolam renang, Kereta api mini, Taman burung, Baby zoo.",
      price: "Rp235.000-275.000",
    },
    {
      imgSrc: imageContext("./Jungle.jpg"),
      type: " Attraction",
      rating: "4.8",
      review: " (2.2k)",
      lokasi: "📍 Sentul Nirwana, Kec. Babakan Madang",
      place: "Jungle Land",
      content:
        "Fasilitas: 30+ wahana & atraksi, Restoran, Toko souvenir, Area parkir",
      price: "Rp155.000",
    },
    {
      imgSrc: imageContext("./GunungMas.jpg"),
      type: "Gunung",
      rating: "4.7",
      review: " (1.9k)",
      lokasi: "📍 Agrowisata Gunung Mas, Kec. Cisarua",
      place: "Agrowisata Gunung Mas",
      content:
        "Fasilitas: Tea bridge, Glamping, Fun off-road, Area piknik, Area kemah",
      price: "Rp15.000",
    },
    {
      imgSrc: imageContext("./Cimory.jpg"),
      type: "Wisata",
      rating: "4.6",
      review: " (1.3k)",
      lokasi: "📍 Jl. Raya Puncak, Kec. Cisarua",
      place: "Dairyland Riverside",
      content:
        "Fasilitas: Area parkir, Restoran, Ruang ibadah, Toilet, Playground anak, Jogging track, 3D Museum, Monster Aquarium, Cimory forest, Kios Cimory",
      price: "Rp25.000",
    },
  ],

  //Ciamis
  [
    {
      imgSrc: imageContext("./Ciung.jpg"),
      type: "Alam",
      rating: "4.8",
      review: " (1.2k)",
      lokasi: "📍 Jl. Ciamis, Kec. Cijeungjing",
      place: "Wisata Alam Ciung Wanara",
      content:
        "Fasilitas: Area parkir, Area pemandian/kolam,  Area piknik, Jalur pendakian, Toilet, Area camping, Tempat penginapan, Warung atau kios",
      price: "Rp7.500",
    },
    {
      imgSrc: imageContext("./AlunCiamis.jpg"),
      type: "Taman kota",
      rating: "4.8",
      review: " (1.1k)",
      lokasi: "📍 Ciamis, Kabupaten Ciamis",
      place: "Alun-Alun Ciamis Wetan",
      content:
        "Fasilitas: Area parkir, Taman, Tempat bermain anak, Area kuliner, Toilet ",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./Kuliner.jpg"),
      type: "Wisata Kuliner",
      rating: "4.7",
      review: " (900)",
      lokasi: "📍 Situmandala, Rancah",
      place: "Warung Kuliner Puncak Bangku",
      content:
        "Fasilitas: Area parkir, Toilet, Gazebo Warung-warung, kuliner Spot, selfie",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./SituLengkong.jpg"),
      type: "Alam",
      rating: "4.7",
      review: " (1.1k)",
      lokasi: "📍 Panjalu, Kabupaten Ciamis",
      place: "Situ Lengkong Panjalu",
      content:
        "Fasilitas: Area parkir, Toilet, Mushola, Gazebo, Perahu & kayak, Kios makanan & cenderamata",
      price: "Rp8.000",
    },
  ],

  //Cianjur
  [
    {
      imgSrc: imageContext("./Nusantara.jpeg"),
      type: "Taman",
      rating: " 4.8",
      review: " (2.1k)",
      lokasi: "📍 Jl. Mariwati, Kawungluwuk, Kec. Sukaresmi",
      place: "Taman Bunga Nusantara",
      content:
        "Fasilitas: 23 hektar taman bunga, Taman bermain anak, Villa, Restoran",
      price: "Rp50.000",
    },
    {
      imgSrc: imageContext("./KotaBunga.jpg"),
      type: "Taman",
      rating: "4.8",
      review: " (2k)",
      lokasi: "📍 Batulawang, Cipanas,",
      place: "Little Venice Kota Bunga",
      content:
        "Fasilitas: Perahu, Waterpark, Resto & kafe, Area bermain anak, Toko oleh-oleh, Area parkir, Taman",
      price: "Rp30.000",
    },
    {
      imgSrc: imageContext("./Gede.jpg"),
      type: "Taman",
      rating: "4.6",
      review: " (1.6k)",
      lokasi: "📍 Pamoyanan c, Pamoyanan, Kec. Cianjur",
      place: "Mount Gede Pangrango",
      content: "Fasilitas: Taman, Area bermain anak, Area parkir, Toilet",
      price: "Rp. 29.000",
    },
    {
      imgSrc: imageContext("./JayantiBeach.jpeg"),
      type: "Pantai",
      rating: "4.6",
      review: " (1.8k)",
      lokasi: "📍 Jl. Pantai Jayanti, Cidamar, Kec. Cidaun",
      place: "Jayanti Beach",
      content:
        "Fasilitas: Area parkir, Toilet, Saung, Penginapan, Warung makan",
      price: "Rp5000",
    },
  ],

  //Cimahi
  [
    {
      imgSrc: imageContext("./GunungBohong.jpg"),
      type: "Gunung",
      rating: "4.7",
      review: " (2.8k)",
      lokasi: "📍 Cimahi, Jawa Barat",
      place: "Gunung Bohong",
      content: "Fasilitas: Tempat parkir, Warung, Toilet",
      price: " gratis",
    },
    {
      imgSrc: imageContext("./WisataCimahii.jpg"),
      type: "Alam",
      rating: "4.8",
      review: " (2.5k)",
      lokasi: "📍Jl. Gatot Subroto, Kec. Cimahi Tengah",
      place: "Alam Wisata Cimahi",
      content:
        "Fasilitas: Outbond, ATV riding, Jembatan gantung, Flying fox, Berkuda atau delman, Menangkap ikan di kolam lumpur, Taman bermain anak-anak",
      price: "gratis",
    },
    {
      imgSrc: imageContext("./KolamRenangi.jpg"),
      type: "Wisata",
      rating: "4.6",
      review: " (1.5k)",
      lokasi: " 📍Jl. Ciawitali, Citeureup, Kec. Cimahi Utara",
      place: "Kolam Renang Ciawitali",
      content:
        "Fasilitas: Kolam anak, Kolam balita, Kolam arus, Kolam air hangat, Kolam terapi ikan, Playground, Foodcourt",
      price: "Rp35.000-25.000",
    },
    {
      imgSrc: imageContext("./Teras.jpg"),
      type: "Wisata",
      rating: "4.8",
      review: " (1.3k)",
      lokasi: "📍 Pancanaka Hill, Jalan Sanghyang, Cihami sel",
      place: "Teras Ciseupan",
      content: "Fasilitas: Tenda camping, Api unggun, Cafe & resto",
      price: "Rp5.000",
    },
  ],

  //Cirebon
  [
    {
      imgSrc: imageContext("./BanyuPanas.jpeg"),
      type: "Pemandian",
      rating: "4.8",
      review: " (3.2k)",
      lokasi: "📍Jalan Raya, Palimanan Bar., Kec. Palimanan",
      place: "Banyu Panas Gempol",
      content:
        "Banyak pengunjung datang ke tempat ini untuk melakukan terapi kesehatan dan mengobati berbagai penyakit. Karena banyak sumber mata air panas yang keluar langsung dari perut bumi membentuk air dan belerang di Banyu Panas Gempol.",
      price: "Rp20.000-15.000",
    },
    {
      imgSrc: imageContext("./SituSedong.jpeg"),
      type: "Alam",
      rating: "4.7",
      review: " (2.1k)",
      lokasi: "📍 Desa Sedong Lor, Kecamatan Sedong",
      place: "Situ Sedong",
      content:
        "Danau ini dikelilingi oleh dataran luas yang menawarkan pemandangan alam yang memesona. Salah satu daya tarik utama Situ Sedong adalah penampakan Gunung Ciremai yang megah di salah satu sudut cakrawala.",
      price: "Rp3.000",
    },
    {
      imgSrc: imageContext("./PantaiKejawanan.png"),
      type: "Pantai",
      rating: "4.6",
      review: " (1.6k)",
      lokasi: "📍 Pelabuhan Perikanan Nusantara, Pegambiran",
      place: "Pantai Kejawanan",
      content:
        "Pantai ini memiliki air laut yang jernih dan pasir putih yang lembut. Pengunjung dapat menikmati keindahan pantai sambil berjemur di tepi pantai, bermain air, atau makan makanan laut segar di restoran pinggir pantai.",
      price: "Rp5.500",
    },
    {
      imgSrc: imageContext("./BatuLawang.jpg"),
      type: "Pengunungan",
      rating: "4.7",
      review: " (1.5k)",
      lokasi: "📍Cupang, Kecamatan Gempol",
      place: "Batu Lawang",
      content:
        "Batu Lawang memiliki pemandangan alam yang memesona dengan tebing-tebing tinggi yang memagari sungai Cisanggarung. Pengunjung dapat menikmati keindahan alam dan menikmati hawa dingin.",
      price: "Rp10.000",
    },
  ],

  //Depok
  [
    {
      imgSrc: imageContext("./AlunDepok.jpg"),
      type: "Taman Kota",
      rating: " 4.6",
      review: " (1.3k)",
      lokasi: "📍 Boulevard Grand Depok City, Cilodong",
      place: "Alun-alun Kota Depok",
      content:
        "Alun Alun Depok merupakan tempat rekreasi gratis dan area umum di Kota Depok yang bisa dinikmati oleh semua kalangan, mulai dari anak-anak, remaja, hingga dewasa.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./SituCilodong.jpg"),
      type: "Danau",
      rating: " 4.7",
      review: " (2.1k)",
      lokasi: "📍Jl. Abdul Ghani, Kalibaru, Cilodong",
      place: "Situ Cilodong",
      content:
        "Situ Cilodong adalah destinasi wisata danau yang ideal untuk refreshing, menawarkan panorama alam yang memukau yang menarik banyak pengunjung",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./TamanLembah.jpeg"),
      type: "Taman",
      rating: "4.8",
      review: " (1k)",
      lokasi: "📍 Jl. Bangau Raya, Depok Jaya, Pancoran Mas",
      place: "Taman Lembah Mawar",
      content:
        "Taman Lembah mawar, yang terletak di Kota Depok yang  dikelilingi oleh berbagai pepohonan dan tanaman bunga yang berwarna-warni. taman ini dilengkapi dengan fasilitas seperti area bermain anak-anak, jalur jogging, ruang bermain anak, danau buatan, tempat ibadah, serta area parkir yang memadai.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./AmazingFarm.jpg"),
      type: "Wisata",
      rating: "4.7",
      review: " (839)",
      lokasi: "📍Jl. Penarikan, Pasir Putih, Kec. Sawangan",
      place: "D'Kandang Amazing Farm",
      content:
        "D'Kandang Amazing Farm adalah wisata peternakan di Depok, Jawa Barat, Indonesia. Pengalaman berpeternakan yang interaktif dan edukatif disediakan untuk pengunjung, terutama anak-anak.",
      price: "Rp25.000-50.000",
    },
  ],

  //Garut
  [
    {
      imgSrc: imageContext("./KampungSampireun.jpg"),
      type: "Staycation",
      rating: "4.9",
      review: " (3.2k)",
      lokasi: "📍Jl. Raya Kamojang, Sukakarya, Samarang",
      place: "Kampung Sampireun Resort & Spa",
      content:
        "Terletak 1000 meter di atas permukaan laut, akomodasi ini menawarkan kerajinan, makanan lokal asli dan berbagai jenis bungalow mewah. Resor ini hanya berjarak dua jam berkendara dari Bandung dan menawarkan pemandangan indah dari pegunungan",
      price: "Rp700.000",
    },
    {
      imgSrc: imageContext("./Ranca.jpeg"),
      type: "Pantai",
      rating: " 4.7",
      review: " (2.7k)",
      lokasi: "📍 Desa Purbayani, Kecamatan Caringin",
      place: "Pantai Rancabuaya",
      content:
        "Pantai ini memiliki pasir yang bersih dengan suasana pemandangan yang indah. Pantai ini populer dengan spot fotonya, jadi cocok untuk pengunjung yang ingin menikmati waktu liburannya untuk bersantai dan berburu foto untuk diupload di sosial media.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./GunungPapandayan.jpeg"),
      type: "Gunung",
      rating: "4.7",
      review: " (2.1k)",
      lokasi: "📍 Sirnajaya, Cisurupan, Garu",
      place: "Papandayan Resort and Leisure Park",
      content:
        "resort memiliki pemandangan alam menakjubkan dan banyak fasilitas rekreasi, seperti kolam renang, lapangan tenis, dan area bermain anak-anak. Orang-orang dapat menikmati keindahan alam dengan berbagai kegiatan, seperti bersepeda, hiking, atau sekadar bersantai di udara segar pegunungan.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./Leuwi.jpeg"),
      type: "Wisata",
      rating: " 4.8",
      review: " (1.7k)",
      lokasi: "📍 Kampung Rupit, Bojong, Bungbulang",
      place: "Leuwi Jurig",
      content:
        "Tempat rekreasi Leuwi Jurig di Garut terkenal dengan air terjunnya yang memukau. Menikmati keindahan alam sambil berjalan-jalan di jalur hiking, berenang di kolam alami di bawah air terjun, atau melakukan kegiatan camping dan piknik adalah beberapa pilihan yang tersedia bagi pengunjung.",
      price: "Gratis",
    },
  ],

  // //Indramayu
  [
    {
      imgSrc: imageContext("./AlunIndra.jpg"),
      type: "Taman Kota",
      rating: "4.5",
      review: " (5k)",
      lokasi: "📍 Jl. Mayjen Sutoyo, Margadadi, Indramayu,",
      place: "Alun-Alun Indramayu",
      content:
        "Fasilitas: Monumen Bambu Runcing, pedagang kaki lima, area bermain anak-anak",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./Firdaus.jpg"),
      type: "Wisata",
      rating: "4.2",
      review: " (3.2k)",
      lokasi: "📍 Jatimulya, Terisi, Kabupaten Indramayu",
      place: "Tiga Bintang Firdaus Waterpark",
      content:
        "Fasilitas: 9 kolam renang, Spot selfie, Taman satwa mini, Restoran, Flying fox, Kolam terapi ikan",
      price: "Rp25.000",
    },
    {
      imgSrc: imageContext("./PantaiBalongan.jpg"),
      type: "Pantai",
      rating: "4.2",
      review: " (1.2k)",
      lokasi: "📍 Kecamatan Balongan,  Indramayu, Jawa Barat",
      place: "Pantai Balongan Indah",
      content: "Fasilitas: Area parkir, Toilet, Mushola",
      price: "Rp10.000-12.500",
    },
    {
      imgSrc: imageContext("./KaliCimanuk.jpg"),
      type: "Sungai",
      rating: "4.2",
      review: "(2.8k)",
      lokasi:
        "📍Jl. Veteran No.10, Lemahabang, Kec. Indramayu, Kabupaten Indramayu, Jawa Barat",
      place: "Kali Cimanuk",
      content:
        "Fasilitas: Bebek gowes,Becak air, Area parkir, Toilet, Area kuliner",
      price: "Gratis",
    },
  ],

  //Karawang
  [
    {
      imgSrc: imageContext("./Taruma.png"),
      type: "Wisata",
      rating: "4.3",
      review: " (1.8k)",
      lokasi: "📍 Perum Grand Taruma, Sukamakmur",
      place: "Taruma Leisure Waterpark",
      content:
        "Fasilitas: Area parkir, Kolam renang, Wahana air, Kafe & resto, Loker, Mushola, Tenda, Cabana, Gazebo, Penyewaan peralatan renang",
      price: "Rp50.000-74.000",
    },
    {
      imgSrc: imageContext("./KampungTuris.jpg"),
      type: "Wisata",
      rating: "4.2",
      review: " (3.5k)",
      lokasi: "📍 Parakan Badak, Mekarbuana, Tegalwaru",
      place: "Kampung Turis Karawang",
      content:
        "Fasilitas: Waterpark, Plataran Sanggabuana, Taman kelinci, Taman Teletubies, Perahu bebek, Terapi ikan, Area parkir, Toilet",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./PantaiSamudra.jpeg"),
      type: "Pantai",
      rating: "4.2",
      review: " (1.2k)",
      lokasi: "📍 Sungaibuntu, Kec. Pedes",
      place: "Pantai Samudera Baru",
      content:
        "Fasilitas: Warung makan, Gazebo, Kamar mandi, Mushola, Area parkir",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./CurugSigentis.jpg"),
      type: "Curug",
      rating: "4.4",
      review: " (2.8k)",
      lokasi: "📍 Mekarbuana, Tegalwaru",
      place: "Curug Cigentis",
      content:
        "Fasilitas: Area parkir, Toilet, Masjid, Kios makanan & minuman, Saung, Penginapan",
      price: "Rp20.000-25.000",
    },
  ],

  // //Kuningan
  [
    {
      imgSrc: imageContext("./Waduk.jpg"),
      type: "Waduk",
      rating: "4.2",
      review: "(1.2k)",
      lokasi: "📍 Jalan Lkr Waduk Darma, Jagara, Darma",
      place: "Waduk Darma",
      content:
        "Waduk ini dibangun untuk menyuplai air irigasi bagi pertanian di sekitarnya dan juga sebagai sumber energi listrik. Tempat ini jadi tempat wisata karena pemandangannya yang indah dan udaranya yang sejuk.",
      price: "Rp15.000",
    },
    {
      imgSrc: imageContext("./Tegala.jpg"),
      type: "Danau",
      rating: "4.5",
      review: " (7.4k)",
      lokasi:
        "📍 Desa Kaduela, Kecamatan Pasawahan, Kabupaten Kuningan, Jawa Barat",
      place: "Telaga Biru Cicerem",
      content:
        "Telaga ini terkenal karena airnya yang berwarna biru kehijauan yang memukau. Di sekitar telaga, pengunjung dapat menikmati pemandangan alam yang indah dan melakukan banyak hal, seperti berenang dan berperahu.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./CurugLandung.jpg"),
      type: "Curug",
      rating: "4.5",
      review: " (1.4k)",
      lokasi: "📍 Jl Pejambon-Sagara Hiang, Cisantana, Cigugur",
      place: "Curug Landung",
      content:
        "Kawasan wisata ini menggabungkan pesona air terjun tertinggi di Kuningan dengan berbagai tempat menarik untuk foto. Pengunjung dapat menikmati pemandangan alam yang memukau sambil mengabadikan foto mereka di berbagai lokasi menarik.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./MuseumSitus.jpg"),
      type: "Museum",
      rating: "4.4",
      review: " (578)",
      lokasi: "📍 Jl Museum Taman Purbakala, Cipari, Cigugur",
      place: "Museum Situs Purbakala Cipari",
      content:
        "Museum ini memiliki koleksi benda-benda purbakala dan artefak yang ditemukan di lokasi arkeologi Cipari dari zaman prasejarah hingga akhir prasejarah.",
      price: "Rp5000",
    },
  ],

  //Majalengka
  [
    {
      imgSrc: imageContext("./SituCipanten.jpeg"),
      type: "Wisata/Danau",
      rating: "4.5",
      review: "(3.8k)",
      lokasi:
        "📍Jl. Gn. Kuning - Sindang, Gn. Kuning, Kec. Sindang, Kabupaten Majalengka, Jawa Barat",
      place: "Situ Cipanten",
      content:
        "Fasilitas: Perahu, Bebek goes, Spot foto, Wahana, Area parkir, Gazebo, Area bermain anak, Outbond",
      price: "Rp5000",
    },
    {
      imgSrc: imageContext("./TeraseringPanyaweuyan.jpg"),
      type: "Wisata alam",
      rating: "4.7",
      review: "(4k)",
      lokasi: "📍Sukasari Kidul, Argapura, Majalengka Regency, West Java",
      place: "Terasering Panyaweuyan",
      content:
        "Fasilitas: Area parkir, Toilet, Warung, Spot foto, Gardu pandang",
      price: "Rp12.000",
    },
    {
      imgSrc: imageContext("./Alun-AlunMajalengka.jpg"),
      type: "Taman kota",
      rating: "4.5",
      review: "(8.9k)",
      lokasi: "📍Majalengka Kulon, Majalengka, Majalengka Regency, West Java",
      place: "Alun-Alun Majalengka",
      content:
        "Fasilitas: Toilet, Area kuliner, Masjid, Bangunan bergaya kolonial",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./CikadongdongRiverTubing.jpg"),
      type: "Wisata alam",
      rating: "4.5",
      review: "(1.5k)",
      lokasi:
        "📍Jl. Desa Payung, Teja, Kec. Rajagaluh, Kabupaten Majalengka, Jawa Barat",
      place: "Cikadongdong River Tubing",
      content:
        "Fasilitas: Pelampung, Rompi air, Peralatan pengaman, Toilet, Mushola, Area parkir, Area kuliner",
      price: "Rp30.000-100.000",
    },
  ],

  //Pangandaran
  [
    {
      imgSrc: imageContext("./PantaiPangan.jpg"),
      type: "Pantai",
      rating: "4.6",
      review: " (9.8k)",
      lokasi: "📍 Desa Pangandaran dan Pananjung, Pangandaran.",
      place: "Pantai Pangandaran",
      content:
        "Pantai Pangandaran memiliki air laut biru jernih dan hamparan pasir putih yang luas yang memungkinkan pengunjung melihat biota laut dan batu karang dari permukaan. Selain itu, ada kawasan cagar alam seluas 530 hektar di pantai yang memiliki goa alami yang berusia ratusan hingga ribuan tahun.",
      price: "Rp10.000-20.000",
    },
    {
      imgSrc: imageContext("./Green.jpeg"),
      type: "Sungai",
      rating: "4.6",
      review: " (7.6k)",
      lokasi: "📍 Desa Kertayasa, Cijulang, Pangandaran.",
      place: "Green Canyon",
      content:
        "Tujuan wisata alam yang menakjubkan dengan pemandangan sungai yang memikat dan tebing batu kapur yang tinggi. Dikelilingi oleh hutan hijau yang lebat, Green Canyon menawarkan pengalaman berperahu yang menarik melalui aliran sungai yang jernih, yang memungkinkan pengunjung untuk menikmati keindahan alam yang luar biasa.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./PantaiBatu.jpg"),
      type: "Pantai",
      rating: "4.6",
      review: " (1.2k)",
      lokasi: "📍 Desa Batu Karas, Cijulang.",
      place: "Pantai Batu Karas",
      content:
        "Pantai Batu Karas terkenal dengan ombaknya yang bagus untuk berselancar, baik untuk pemula maupun profesional. Selain itu, ada banyak warung di pinggir pantai dengan makanan lezat dan harga terjangkau, serta suasana pantai yang tenang dan nyaman.",
      price: "Rp15.000-60.000 ",
    },
    {
      imgSrc: imageContext("./PantaiHiu.jpg"),
      type: "Pantai",
      rating: "4.5",
      review: " (1.5k)",
      lokasi: "📍Desa Ciliang, Parigi, Kabupaten Pangandaran.",
      place: "Pantai Batu Hiu",
      content:
        "Bukit Pantai Pangandaran Batu Hiu merupakan tempat yang ideal untuk piknik bersama keluarga atau teman, dengan pemandangan Samudra Hindia yang megah. Pengunjung dapat menikmati suasana alam yang indah di tengah pohon pandan wong dan rerumputan hijau, serta mencoba peruntungan memancing ikan di area sekitar bukit.",
      price: "Rp9000-50.000",
    },
  ],

  // //Purwakarta
  [
    {
      imgSrc: imageContext("./CikaoPark.jpg"),
      type: "Park",
      rating: "4.8",
      review: " (3.7k)",
      lokasi: "📍 Jl Raya Sukatani, Cisalada, Sukatani",
      place: "Cikao Park",
      content:
        "Tempat wisata yang memiliki konsep kearifan lokal menyuguhkan berbagai wahana sebagai tempat wisata edukasi yang cocok bagi keluarga",
      price: "Rp20.000",
    },
    {
      imgSrc: imageContext("./SriBaduga.jpeg"),
      type: "Taman",
      rating: "4.7",
      review: " (2.2k)",
      lokasi: "📍 Jl. K.K Singawinata, Nagri Kidul",
      place: "Taman Air Mancur Sri Baduga",
      content:
        "Taman Air Mancur terbesar di Asia Tenggara dengan pertunjukannya yang menarik di malam hari. Terdapat Pertunjukkan Air Mancur Sri Baduga (setiap Sabtu malam pukul 19:30 - 22:30 WIB)",
      price: "Rp15.000",
    },
    {
      imgSrc: imageContext("./WaterWorld.jpg"),
      type: "Wisata",
      rating: "4.8",
      review: " (2.1k)",
      lokasi: "📍 Jatimekar, Jatiluhur",
      place: "Jatiluhur Water World",
      content:
        "Jatiluhur Water World berlokasi di depan danau Jatiluhur yang menjadi ikon wisata di Purwakarta. Pengunjung dapat menikmati pemandangan langsung ke arah Waduk Jatiluhur sambil berenang. Nuansa alam didukung dengan keadaan sekitar. Wisata permainan air dan alam cocok bagi keluarga maupun anak-anak.",
      price: "Rp30.000-40.000",
    },
    {
      imgSrc: imageContext("./TamanBatu.jpg"),
      type: "Taman",
      rating: "4.6",
      review: " (1.5k)",
      lokasi: "📍 Jl. Taman Batu, Cipeundeuy, Kec. Bojong",
      place: "Taman Batu Purwakarta",
      content:
        "Taman Batu Purwakarta merupakan merupakan pemandian air dingin yang berasal dari mata air pegunungan. Karena berasal dari mata air, maka air di Taman Batu Purwakarta terlihat sangat jernih. Kebersihan alami air tidak mengganggu mata karena tidak menggunakan kaporit.",
      price: "Rp20.000-25.000",
    },
  ],

  // //Subang
  [
    {
      imgSrc: imageContext("./CurugKoleangkak.jpg"),
      type: "Alam",
      rating: "4.8",
      review: " (2.3k)",
      lokasi: "📍Kampung Nengeng, Desa Nagrak, Ciater",
      place: "Curug Koleangkak",
      content:
        "Tempat wisata yang juga dikenal sebagai Curug Biru ini memiliki keindahan alam yang sangat indah untuk dinikmati karena pemandangan air terjunnya dan warna airnya yang biru. Disini pengunjung dapat menikmati berbagai fasilitas-fasilitas mulai dari gazebo, area camping, taman bermain, hingga masjid.",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./PantaiPatimban.jpg"),
      type: "Pantai",
      rating: "4.7",
      review: " (1.7k)",
      lokasi: "📍 Desa Patimban, Pusakanagara",
      place: "Pantai Patimban",
      content:
        "Obyek Wisata Pantai Kelapa Patimban yang terletak di pusaka negara Patimban Subang ini memiliki pesona keindahan yang luar biasa. Tempat ini patut dikunjungi untuk pengunjung yang ingin bermain di laut, pantai Kalapa Patimban aman untuk bermain bola voli pantai, naik sky boat, berperahu, memancing, dan berbagai kegiatan lainnya bersama keluarga.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./CurugCinangerang.jpeg"),
      type: "Alam",
      rating: "4.5",
      review: " (1.1k)",
      lokasi: "📍 Desa Bunihayu, Jalancagak",
      place: "Curug Cinangerang",
      content:
        "Curug Cinangrang memiliki debit air yang cukup deras dan memiliki ketinggian sekitar 20 meter. Air terjun jernih ini mengalir dari tebing yang menjulang tinggi. Anda dapat menggunakan kolam ini untuk berenang atau sekadar berendam untuk membuat Anda merasa lebih baik. Dikarenakan untuk sampai ke air terjun, pengunjung harus melewati jalan setapak yang dikelilingi oleh pepohonan.",
      price: "Rp5.000",
    },
    {
      imgSrc: imageContext("./KebunTeh.jpeg"),
      type: "Kebun",
      rating: "4.9",
      review: " (2.5k)",
      lokasi: "📍 Jalan Raya Cicadas, Desa Ciater",
      place: "Kebun Teh Ciater",
      content:
        "Kebun teh ini menawarkan pemandangan yang asri dan sejuk, sehingga cocok untuk piknik dan bersantai bagi para pengunjung yang ingin healing dan mencari ketenangan sejenak.",
      price: " Gratis",
    },
  ],

  //Suka Bumi
  [
    {
      imgSrc: imageContext("./CurugSawer.jpg"),
      type: "Air terjun",
      rating: "4.9",
      review: " (2.9k)",
      lokasi: "📍 Gede Pangrango, Kec. Kadudampit",
      place: "Curug Sawer",
      content:
        "Air terjun ini dikenal karena keindahan alamnya yang luar biasa, dengan air terjun tinggi yang mengalir ke dalam kolam alami di bawahnya. Pengunjung tidak hanya dapat menikmati pemandangan yang menakjubkan, tetapi mereka juga dapat menikmati udara segar pegunungan dan suara air mengalir yang menenangkan.",
      price: "Rp16.000-18.500",
    },
    {
      imgSrc: imageContext("./DanauBacan.jpg"),
      type: "Danau",
      rating: "4.8",
      review: " (2.4k)",
      lokasi: "📍 Desa Bojong, Kecamatan Cikembar",
      place: "Danau Batu Bacan",
      content:
        "Danau di Sukabumi ini sangat disukai karena keindahan alamnya yang memukau. Danau Batu Bacan sangat cocok untuk berbagai aktivitas, seperti berkemah, berenang, memancing, dan trekking, karena dikelilingi oleh hutan tropis yang hijau.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./GuaBuni.jpg"),
      type: "Bukit",
      rating: "4.8",
      review: " (1.4k)",
      lokasi: "📍 Desa Kebun Manggu, Gunung Guruh",
      place: "Bukit Karang Para",
      content:
        "Bukit ini terkenal karena pemandangannya yang menakjubkan, terutama saat matahari terbenam. Dari puncak Bukit Karang Para, pengunjung dapat melihat pemandangan alam yang memukau, termasuk hamparan perbukitan hijau dan lembah yang indah.",
      price: "Rp5.000",
    },
    {
      imgSrc: imageContext("./BukitKarang.jpg"),
      type: "Alam",
      rating: " 4.5",
      review: " (789)",
      lokasi: "📍Cipinang, Kerta Angsana, Nyalindung",
      place: "Gua Buniayu",
      content:
        "Karena keindahan stalaktit dan stalakmit yang ada di dalamnya, gua ini menjadi tujuan wisata yang populer. Mereka juga memiliki kesempatan untuk melakukan petualangan seru dengan menjelajahi lorong-lorong gua yang misterius.",
      price: "Rp5.000-20.000",
    },
  ],

  //Sumedang
  [
    {
      imgSrc: imageContext("./KampungKaruhun.jpg"),
      type: "Wisata",
      rating: "4.8",
      review: " (2.2k)",
      lokasi: "📍 Jl. Pagarbetis, Sumedang Sel",
      place: "Kampung Karuhun ",
      content:
        "Fasilitas: Area Pemandian Air Terjun, Area Camping Ground, Taman Rekreasi Alam, Area Permainan Anak, Area Outbound dan Kegiatan Team Building",
      price: "Rp25.000-30.000",
    },
    {
      imgSrc: imageContext("./CurugSindu.jpg"),
      type: "Alam",
      rating: "4.7",
      review: " (1.7k)",
      lokasi: "📍 Citengah, Sumedang Selatan",
      place: "Curug Sindulang",
      content:
        "Fasilitas: Toilet, Gazebo, Warung makan dan minuman, Tempat duduk, Mushola, Area parkir",
      price: "Rp10.000",
    },
    {
      imgSrc: imageContext("./GunungTamp.jpeg"),
      type: "Gunung",
      rating: "4.6",
      review: " (1.3k)",
      lokasi: "📍 Sumedang, Jawa Barat",
      place: "Gunung Tampomas",
      content:
        "Fasilitas: area parkir yang luas, toilet dan kamar mandi, gazebo, hingga musala, Area parkir, Toilet, Gazebo, Mushola",
      price: " Rp5.000",
    },
    {
      imgSrc: imageContext("./WisataKampoeng.jpg"),
      type: "Wisata",
      rating: " 4.5",
      review: " (1k)",
      lokasi: "📍 Cijambu, Tanjungsari",
      place: "Wisata Kampoeng Ciherang",
      content:
        "Fasilitas: Kolam renang, Perahu bebek, Arum jeram, Sepeda gantung, Flying fox, Outbond anak",
      price: "Rp40.000-20.000",
    },
  ],

  //Tasikmalaya
  [
    {
      imgSrc: imageContext("./Tonjong.jpg"),
      type: "Alam",
      rating: "4.9",
      review: " (1.6k)",
      lokasi: "📍 Desa Nagrog, Kecamatan Cipatujah",
      place: "Tonjong Canyon",
      content:
        "Tonjong Canyon terkenal dengan keindahan alamnya yang menakjubkan. Anda bisa melihat tebing batu yang curam dan aliran sungai yang mengalir di antara celah batu. Pengunjung dapat menikmati keindahan alam melalui berbagai aktivitas, seperti trekking atau hiking, atau sekadar bersantai dan menikmati pemandangan yang indah.",
      price: "Rp5.000-10.000",
    },
    {
      imgSrc: imageContext("./KawahKaraha.jpg"),
      type: "Alam",
      rating: "4.8",
      review: " (2k)",
      lokasi: "📍 Desa Kadipaten, Kecamatan Kadipaten",
      place: "Kawah Karaha Bodas",
      content:
        "Kawah ini terkenal dengan fenomena alam yang unik: lumpur panas mengalir di sepanjang dasar kawah. Di sekitar kawah, pengunjung dapat menikmati udara segar dan pemandangan pegunungan hijau.",
      price: "Rp5.000-8.000",
    },
    {
      imgSrc: imageContext("./Paraga.jpeg"),
      type: "Alam",
      rating: " 4.6",
      review: " (1.7k)",
      lokasi: "📍 Kampung Mulyasari, Mandalahayu, Salopa ",
      place: "Batu Paraga Salopa",
      content:
        "Batu Paraga Salopa menawarkan pemandangan batu besar yang tersebar di sepanjang sungai yang mengalir di tengah hutan. Pengunjung dapat menikmati keindahan alam sambil berjalan-jalan di sungai atau hanya bersantai di udara segar pegunungan.",
      price: "Gratis",
    },
    {
      imgSrc: imageContext("./CurugDendeng.jpeg"),
      type: "Air terjun",
      rating: "4.7",
      review: " (1.2k)",
      lokasi: "📍 Kampung Cirerese, Tawang, Pancatengah",
      place: "Curug Dengdeng",
      content:
        "Air terjun yang menakjubkan dengan aliran air yang jernih dan tinggi terletak di dalam hutan. Pengunjung dapat menikmati keindahan alam sambil mendengarkan gemericik air terjun dan menghirup udara segar dari pegunungan.",
      price: "Rp15.000-5.000 ",
    },
  ],
];

export default dataExplore;
