import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Welcome = () => {
  return (
    <main
      style={{
        backgroundImage: "url(/topglassbg.svg)",
      }}
      className="min-h-screen bg-top bg-no-repeat bg-cover z-10"
    >
      <div className="container mx-auto py-8">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default Welcome;
