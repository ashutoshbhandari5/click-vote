import Image from "next/image";

const index = () => {
  return (
    <div className=" top-73 flex flex-col justify-center items-center mt-8">
      <div className="relative w-full flex flex-col justify-center items-center">
        <Image
          src="/mainIcon.svg"
          alt="github icon"
          width={600}
          height={200}
          priority
        />
        <p
          style={{
            color: "linear-gradient(0deg, #FFF 10.01%, #AF47FF 81.27%)",
            backgroundClip: "text",
          }}
          className="absolute top-80 text-7xl text-center font-inter font-semibold  mt-4"
        >
          Like, Upvote And Review
        </p>
        <p className="absolute top-96 text-7xl text-center font-inter font-semibold  mt-10">
          Any Context
        </p>
        <p className="absolute top-[520px] text-lg">
          Seamlessly Integrate Like, Upvote, and Review Components into Your App
        </p>
      </div>
      <button className="bg-primaryBtn flex w-[230px] py-4 px-12 justify-center items-center space-x-2.5 rounded-md bg-gradient-to-r from-af46ff to-950aff backdrop-blur-md mt-10">
        Get Started
      </button>
    </div>
  );
};

export default index;
