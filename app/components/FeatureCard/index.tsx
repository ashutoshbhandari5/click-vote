import React from "react";
import Image from "next/image";

interface Props {
  source: string;
  title: string;
  content: string;
}

const index = ({ source, title, content }: Props) => {
  return (
    <>
      <div className="relative" style={{ width: "350px", height: "390px" }}>
        {/* Background Image */}
        <Image
          className="absolute top-0 left-0"
          width={350}
          height={390}
          src={"/featureCover.svg"}
          alt="background"
        />

        <Image
          className="absolute top-0 left-0"
          width={350}
          height={177}
          src={source}
          alt={source}
        />

        {/* Texts below the top image but on top of the background image */}
        <div className="absolute top-56 left-4 px-10">
          <div style={{ color: "#A7A7A7" }}>
            <p className="font-bold text-lg">{title}</p>
            <p className="mt-2 text-sm">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
