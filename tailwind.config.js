module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans'], // Menggunakan 'Open Sans' sebagai font utama
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['motion-safe', 'motion-reduce', 'hover', 'focus', 'group-hover', 'animate-once'],
    },
  },
}
