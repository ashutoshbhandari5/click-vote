import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(45.84% 197.21% at 154.19% 47.08%, #AF46FF 36.46%, #070707 100%)",
        primaryBtn: "linear-gradient(219deg, #AF46FF 31.03%, #950AFF 99.96%)",
        otherBtn:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.22) -35.25%, rgba(255, 255, 255, 0.00) 111.48%)",
        likeBtn:
          "linear-gradient(180deg, #AF46FF -260.61%, rgba(175, 70, 255, 0.00) 117.42%)",
        featureCard:
          "linear-gradient(180deg, rgba(7, 7, 7, 0.38) 0%, rgba(255, 255, 255, 0.09) 0.01%, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.00) 133.03%)",
      },
      borderColor: {
        af46ff: "#AF46FF",
      },
      colors: {
        logo: "rgba(255, 255, 255, 0.70)",
      },
      backdropFilter: {
        "blur-custom": "blur(11.923460006713867px)",
      },
    },
  },
  plugins: [],
};
export default config;
