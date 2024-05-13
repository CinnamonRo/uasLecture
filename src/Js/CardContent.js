const imageContext = require.context(
  "../../public/images/FotoCard",
  false,
  /\.(png|jpe?g|svg)$/
);

const contents = [
  {
    title: "Sukabumi",
    content:
      "Kota Sukabumi, juga dikenal dengan sebutan Gunahuyi dalam bahasa lokalnya, adalah destinasi menarik di provinsi Jawa Barat, Indonesia.",
    imageSrc: imageContext("./JembatanGantung.jpeg"),
  },
  {
    title: "Bogor",
    content:
      "Kota Bogor, atau Buitenzorg dalam bahasa Belanda, adalah destinasi yang terkenal dengan julukan 'Kota Hujan'. Ini disebabkan oleh tingginya curah hujan di daerah ini.",
    imageSrc: imageContext("./Bogor.jpeg"),
  },
  {
    title: "Depok",
    content:
      "Kota Depok merupakan salah satu bagian dari kawasan metropolitan Jabodetabekpunjur. Depok menawarkan potensi sebagai tujuan wisata yang menarik.",
    imageSrc: imageContext("./Depok.jpeg"),
  },
  {
    title: "Bekasi",
    content:
      "Asal-usul nama Bekasi berasal dari kata Bagasasi, sesuai dengan Candrabaga yang tercatat dalam Prasasti Tugu pada zaman Kerajaan Tarumanegara.",
    imageSrc: imageContext("./Bekasi.jpg"),
  },
  {
    title: "Karawang",
    content:
      "Kabupaten Karawang menjadi pusat perhatian dengan proyek-proyek besar seperti Summarecon, Agung Podomoro dan Metland. Sejarah Monumen Gempol Ngadeupa juga menjadi daya tarik wisata.",
    imageSrc: imageContext("./Karawang.jpg"),
  },
  {
    title: "Purwakarta",
    content:
      "Purwakarta, yang menggabungkan makna 'purwa' (permulaan) dan 'karta' (ramai), adalah tujuan wisata yang menawarkan ketenangan karena suasana damainya yang jauh dari keramaian perkotaan.",
    imageSrc: imageContext("./Purwakarta.jpg"),
  },
  {
    title: "Cianjur",
    content:
      "Kabupaten Cianjur, yang merupakan destinasi wisata terluas kedua di Pulau Jawa setelah Kabupaten Sukabumi, sebagian besar ditandai oleh wilayah pegunungan.",
    imageSrc: imageContext("./Cianjur.jpg"),
  },
  {
    title: "Bandung Barat",
    content:
      "Kabupaten Bandung Barat, dikenal dalam bahasa Sunda sebagai Bandung Kulon. Kabupaten ini merupakan hasil pemekaran dari Kabupaten Bandung.",
    imageSrc: imageContext("./BandungBarat.jpeg"),
  },
  {
    title: "Cimahi",
    content:
      "Cimahi berasal dari bahasa Sunda, 'cai mahi', yang mengandung arti 'air yang mencukupi.' Sebelumnya, wilayah ini merupakan bagian dari Kabupaten Bandung sebelum ditetapkan sebagai kota administratif",
    imageSrc: imageContext("./Bekasi.jpg"),
  },
  {
    title: "Kota Bandung",
    content:
      "Kota Bandung merupakan bagian dari Cekungan Bandung yang mendapat julukan sebagai 'kota kembang' karena keindahannya, ditandai dengan keberadaan banyak pohon dan bunga yang tumbuh subur di wilayah tersebut.",
    imageSrc: imageContext("./Kota Bandung.jpeg"),
  },
  {
    title: "Bandung",
    content:
      "Bandung, sebagai kota terbesar keempat di Indonesia, memiliki karakteristik geografis yang menarik, dengan pegunungan melingkupinya sehingga bentuk wilayahnya menyerupai mangkuk raksasa.",
    imageSrc: imageContext("./Bandung.jpeg"),
  },
  {
    title: "Subang",
    content:
      "Kabupaten Subang merupakan Wilayah dengan beragam daya tarik wisatanya. Terutama Ibukotanya yang terletak di Kecamatan Subang Kota.",
    imageSrc: imageContext("./Subang.jpg"),
  },
  {
    title: "Indramayu",
    content:
      "Kabupaten Indramayu menawarkan wisata seni dan budaya yang merupakan perpaduan unik dari budaya Jawa, Tionghoa, dan Sunda di bagian utaranya. ",
    imageSrc: imageContext("./Indramayu.jpeg"),
  },
  {
    title: "Sumedang",
    content:
      "Sumedang merupakan bagian dari wilayah metropolitan Bandung Raya dan pada masa lampau, berfungsi sebagai pusat administrasi Kerajaan Sumedang Larang.",
    imageSrc: imageContext("./Sumedang.jpg"),
  },
  {
    title: "Garut",
    content:
      "Kabupaten Garut, terkenal dengan pesonanya yang alami. Ibukota kabupaten ini terletak di kecamatan Tarogong Kidul.",
    imageSrc: imageContext("./CandiCakuang.jpeg"),
  },
  {
    title: "Tasikmalaya",
    content:
      "Kota Tasikmalaya, juga dikenal sebagai Tasik, adalah sebuah tujuan wisata yang terkenal dengan julukan Kota Sang Mutiara dari Priangan Timur, kota ini menawarkan pesona alam yang memikat.",
    imageSrc: imageContext("./KebunTehTaraju.jpeg"),
  },
  {
    title: "Pangandaran",
    content:
      "Kabupaten Pangandara merupakan daerah wisata yang menarik. Kota utamanya terletak di Kecamatan Parigi, menjadi titik awal bagi para pengunjung yang ingin menikmati keindahan alam dan budaya sekitarnya.",
    imageSrc: imageContext("./PantaiPangandaran.jpg"),
  },
  {
    title: "Banjar",
    content:
      "Kota Banjar merupakan daerah otonom baru setelah mengalami pemekaran dari Kabupaten Ciamis. Banjar adalah salah satu kabupaten terbaru di Jawa barat",
    imageSrc: imageContext("./Banjar.jpg"),
  },
  {
    title: "Ciamis",
    content:
      "Kabupaten Ciamis, juga dikenal sebagai Galuh, memiliki sebagian besar wilayah yang terdiri dari pegunungan dan dataran tinggi yang mempesona.",
    imageSrc: imageContext("./Ciamis.jpeg"),
  },
  {
    title: "Kuningan",
    content:
      "Kabupaten Kuningan, yang terkenal dengan julukan Kota Kuda, adalah tujuan wisata yang populer di Provinsi Jawa Barat, Indonesia dan menjadi sejarah Indonesia sebagai tempat berlangsungnya Perundingan Linggajati.",
    imageSrc: imageContext("./WadukDarma.jpeg"),
  },
  {
    title: "Cirebon",
    content:
      "Cirebon dikenal sebagai Kota Udang dan Kota Wali. Selain itu, disebut juga sebagai Caruban Nagari, yang menandakan keberadaan gunung Ceremai, serta Grage, yang dalam bahasa Cirebon berarti kerajaan yang luas.",
    imageSrc: imageContext("./Cirebon.jpeg"),
  },
  {
    title: "Majalengka",
    content:
      "Kabupaten Majalengka menawarkan berbagai macam destinasi wisata menarik, baik wisata alam maupun buatan. Terutamanya pemandangan alam seperti Kebun dan Pengunugan",
    imageSrc: imageContext("./Majalengka.jpeg"),
  },
];
export default contents;
