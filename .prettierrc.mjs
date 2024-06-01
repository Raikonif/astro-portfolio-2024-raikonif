export default {
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "plugins": ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  "endOfLine": "crlf"
}
