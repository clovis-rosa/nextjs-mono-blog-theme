// .babelrc
module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
        fileName: false,
        minify: true,
        transpileTemplateLiterals: false,
        pure: true,
      },
    ],
    [
      "prismjs",
      {
        languages: ["javascript", "css", "html", "jsx", "markup"],
        plugins: ["line-numbers", "show-language", "copy-to-clipboard"],
        theme: "vsc-dark-plus",
        css: true,
      },
    ],
  ],
}
