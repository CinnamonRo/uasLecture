const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        400: "400",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
});
