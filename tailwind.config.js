/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        link: '#1d4ed8',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
      textColor: '#888',
      fontSize: {
        lg: '32px',
        md: '28px',
      },
      fontFamily: {
        base: [
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'YuGothic',
          'Yu Gothic',
          'Hiragino Kaku Gothic ProN',
          'ヒラギノ角ゴ ProN W3',
          'メイリオ',
          'Meiryo',
          'ＭＳ ゴシック',
          'sans-serif',
        ],
        gothic: [
          'Arial Narrow',
          'Arial',
          'Arial Black',
          'Arial Rounded MT Bold',
        ],
        code: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
