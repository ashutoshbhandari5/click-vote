import React from "react";
import FeatureCard from "../components/FeatureCard";
import Image from "next/image";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-32 z-10">
      <p className="text-center text-[44px] z-10">Features</p>
      <div className="flex items-center gap-7 mt-10">
        <FeatureCard
          source={"/monitor.svg"}
          title={"Monitor and test what your members like"}
          content={
            "Look at the time-series of your likes. Understand where to put your efforts."
          }
        />
        <FeatureCard
          source={"/handle.svg"}
          title={"Handle unlimited amount of likes"}
          content={
            "Clickvote can handle and scale your system to match your traffic."
          }
        />
        <FeatureCard
          source={"/integrate.svg"}
          title={"Integrate our system to yours"}
          content={
            "Once we receive your likes, we send the Information to your System as you want it: API calls or listening to Kafka topics."
          }
        />
      </div>
      <div className=" mt-24 flex flex-col items-center justify-center z-10">
        <p className="text-center text-5xl">Build by the community</p>
        <p className="text-center max-w-[802px] mt-5 text-lg">
          Open-source is in the heart of Novu. We keep all the source code and
          work publicly available. Join our community driven project with over
          3,000+ developers from around the world who contribute code and help
          building the modern notification infrastructure.
        </p>
        <Image
          src={"/community.svg"}
          height={656}
          width={999}
          alt="community"
        />
      </div>
      <Image
        className="absolute left-0 top-[740px] "
        src={"/leftglassbg.svg"}
        height={500}
        width={1100}
        alt="glass"
      />
    </div>
  );
};

export default Features;
