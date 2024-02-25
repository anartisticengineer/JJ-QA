import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/views/pages/**/*.{html,ejs}",
    "./src/views/partials/**/*.{html,ejs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
