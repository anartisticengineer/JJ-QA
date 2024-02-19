import type { Config } from "tailwindcss";

export default {
  content: [
    "./views/pages/**/*.{html,ejs}",
    "./views/partials/**/*.{html,ejs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
