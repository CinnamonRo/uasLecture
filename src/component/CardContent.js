const imageContext = require.context("./FotoCard", false, /\.(png|jpe?g|svg)$/);

const contents = [
  {
    title: "Suka Bumi",
    content:
      "Kota Sukabumi, juga dikenal dengan sebutan Gunahuyi dalam bahasa lokalnya, adalah destinasi menarik di provinsi Jawa Barat, Indonesia. Kota ini memiliki daya tarik tersendiri bagi wisatawan yang mencari pengalaman yang autentik dan memikat di Jawa Barat.",
    imageSrc: imageContext("./JembatanGantung.jpeg"),
    link: "SukaBumi.html",
    buttonText: "Read More",
  },
];

export default contents;
