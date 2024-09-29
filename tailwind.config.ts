import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addBase } = api;
      addBase({
        'input[type=number]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        'input[type=number]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0',
        },
        'input[type=number]': {
          '-moz-appearance': 'textfield',
        }
      });
    }
  ],
};
export default config;
