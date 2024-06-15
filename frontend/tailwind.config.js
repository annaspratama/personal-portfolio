/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        "custom-500": "500px",
        "custom-550": "550px",
        "custom-616": "616px",
      },
      width: {
        "custom-500": "550px",
        "custom-850": "850px",
        "custom-974": "974px",
      },
    },
  },
  plugins: [],
}