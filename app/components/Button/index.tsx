import React from "react";
import Image from "next/image";

interface Props {
  type: "like" | "upvote" | "review";
}

const index = ({ type }: Props) => {
  const classNames = {
    like: "flex w-[134px] h-[60px] py-5 px-5.5 justify-center items-center space-x-3 flex-shrink-0 rounded-md border-2 border-af46ff bg-likeBtn backdrop-blur-md",
    upvote:
      "flex w-[134px] h-[60px] py-5 px-5.5 justify-center items-center space-x-3 flex-shrink-0 rounded-md border border-opacity-50 border-white bg-otherBtn backdrop-blur-md",
    review:
      "flex w-[134px] h-[60px] py-5 px-5.5 justify-center items-center space-x-3 flex-shrink-0 rounded-md border border-opacity-50 border-white bg-otherBtn backdrop-blur-md",
  };

  const buttonName = {
    like: "Like",
    upvote: "Upvote",
    review: "Review",
  };
  return (
    <button className={`${classNames[type]} flex gap-2 items-center`}>
      <Image src={`/${type}.svg`} height={16} width={16} alt={type} />
      {buttonName[type]}
    </button>
  );
};

export default index;
