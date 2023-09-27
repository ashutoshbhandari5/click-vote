import Features from "./screens/Features";
import Offers from "./screens/Offers";
import ShowCase from "./screens/ShowCase";
import Welcome from "./screens/Welcome";
import Footer from "./screens/Footer";

export default function Home() {
  return (
    <>
      <Welcome />
      <ShowCase />
      <Features />
      <Offers />
      <Footer />
    </>
  );
}
