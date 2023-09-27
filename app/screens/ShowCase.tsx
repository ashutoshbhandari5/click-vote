import Image from "next/image";
import React from "react";
import Button from "../components/Button";

const ShowCase = () => {
  return (
    <main className="relative">
      <Image
        className="absolute top-[-240px] "
        src={"/leftglassbg.svg"}
        height={500}
        width={1100}
        alt="glass"
      />
      <div className="flex flex-col items-center justify-center z-10">
        <Image
          src={"/heartShowCase.svg"}
          height={282}
          width={279}
          alt="glass"
          className="z-10"
        />
        <p className="text-[44px] text-center z-10">
          Easily Embed Your Components Anywhere
        </p>
        <div className="z-10 flex items-center justify-center gap-3 mt-10">
          <Button type={"like"} />
          <Button type={"upvote"} />
          <Button type={"review"} />
        </div>
        <Image
          src={"/codeShowCase.svg"}
          height={597}
          width={1000}
          alt="glass"
          className="z-10 mt-10"
        />
        <Image
          className="absolute top-[520px] right-0"
          src={"/rightglassbg.svg"}
          height={500}
          width={1100}
          alt="glass"
        />
      </div>
    </main>
  );
};

export default ShowCase;
