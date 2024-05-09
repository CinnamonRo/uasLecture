const imageContext = require.context(
  "./FotoCard",
  false,
  /\.(png|jpe?g|svg)$/
);

const contents = [
  {
    title: "Suka Bumi",
    content:
      "Kota Sukabumi, juga dikenal dengan sebutan Gunahuyi dalam bahasa lokalnya, adalah destinasi menarik di provinsi Jawa Barat, Indonesia.",
    imageSrc: imageContext("./JembatanGantung.jpeg"),
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Bogor",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Depok",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Bekasi",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Karawang",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Purwakarta",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Cianjur",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Bandung Barat",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Cimahi",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Kota Bandung",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Bandung",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Subang",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Indramayu",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Sumedang",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Garut",
    content:
      "Kabupaten Garut, sebuah daerah di provinsi Jawa Barat, Indonesia, terkenal dengan pesonanya yang alami. Ibukota kabupaten ini terletak di kecamatan Tarogong Kidul. Garut memiliki pemandangan alam yang menakjubkan, dikelilingi oleh Kabupaten Sumedang di utara.",
    imageSrc: imageContext("./CandiCakuang.jpeg"),
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Tasikmalaya",
    content:
      "Kota Tasikmalaya, juga dikenal sebagai Tasik, adalah sebuah tujuan wisata yang terletak di Provinsi Jawa Barat, Indonesia. Terkenal dengan julukan Kota Sang Mutiara dari Priangan Timur, kota ini menawarkan pesona alam yang memikat.",
    imageSrc: imageContext("./KebunTehTaraju.jpeg"),
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Pangandaran",
    content:
      "Kabupaten Pangandaran, yang berada di Provinsi Jawa Barat, Indonesia, merupakan daerah wisata yang menarik. Kota utamanya terletak di Kecamatan Parigi, menjadi titik awal bagi para pengunjung yang ingin menikmati keindahan alam dan budaya sekitarnya.",
    imageSrc: imageContext("./PantaiPangandaran.jpg"),
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Banjar",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Ciamis",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Kuningan",
    content:
      "Kabupaten Kuningan, yang terkenal dengan julukan Kota Kuda, adalah tujuan wisata yang populer di Provinsi Jawa Barat, Indonesia dan menjadi sejarah Indonesia sebagai tempat berlangsungnya Perundingan Linggajati, Kuningan juga mempesona dengan keindahan alamnya, termasuk pegunungan dan sawah yang subur.",
    imageSrc: imageContext("./WadukDarma.jpeg"),
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Cirebon",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
  {
    title: "Majalengka",
    content: "",
    imageSrc: "",
    link: "",
    buttonText: "Read More",
  },
];
export default contents;
