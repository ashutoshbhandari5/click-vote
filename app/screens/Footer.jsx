import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerColumns = {
    first: [
      "Blog",
      "Contributors",
      "Pricing",
      "Careers",
      "2022 Events",
      "OSS Friends",
    ],
    second: [
      "Documentation",
      "Roadmap",
      "Handbook",
      "Contact Us",
      "Press Kit",
      "Polishing Season",
      "Notification Directory",
    ],
    third: ["Terms of Use", "Privacy Policy", "DPA", "Status Page"],
  };

  return (
    <main className="relative flex flex-col justify-center items-center ">
      <Image
        className="absolute"
        src={"/footerGlass.svg"}
        height={1440}
        width={1691}
        alt="glass"
      />
      <Image
        src={"/starCase.svg"}
        height={282.091}
        width={279.167}
        alt="glass"
        className="z-10 mt-32"
      />
      <p className="z-10 text-[44px]">Subscribe to our blog updates</p>
      <p className="z-10 text-lg mt-5" style={{ color: "#A7A7A7" }}>
        Clickvote’s latest articles, right in your inbox. Keep in touch with our
        news and updates.
      </p>
      <div className="flex items-center gap-4 mt-16">
        <input
          style={{
            borderRadius: "7px",
            border: "1px solid #AF46FF",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(17px)",
            color: "rgba(255, 255, 255, 0.3)",
            fontSize: "16px",
            padding: "16px 22px",
            width: "330px",
          }}
          placeholder="Your Email"
        />
        <button
          style={{
            padding: "16px 22px",
            borderRadius: "7px",
            width: "200px",
            color: "black",
          }}
          className="bg-white z-10"
        >
          Subscribe
        </button>
      </div>
      <div style={{ width: "1000px" }} className=" z-10 mt-20">
        <div className="flex space-x-3 items-center justify-between ">
          <div className="flex space-x-3 items-center">
            <Image
              src="/logo.svg"
              alt="click vote logo"
              width={34}
              height={34}
              priority
            />
            <Link href="#" className="text-lg text-logo">
              CLICK VOTE
            </Link>
          </div>
          <div
            style={{
              borderRadius: "7px",
              background: "rgba(255, 255, 255, 0.10)",
              backdropFilter: "blur(17px)",
            }}
            className="flex space-x-3 items-center rounded-full md:rounded-54 px-3 py-2 rounded-md"
          >
            <div className="flex space-x-3 items-center flex ">
              <Image
                src="/github.svg"
                alt="github icon"
                width={14}
                height={14}
                priority
              />
              <div>Start us</div>
            </div>
            <div className="h-4 w-px bg-white bg-opacity-30"></div>
            <p>21.9K</p>
          </div>
        </div>
        <div className="flex space-x-3 items-start justify-between mt-10">
          <div className="grid grid-cols-3 gap-8">
            {Object.values(footerColumns).map((column, idx) => (
              <ul key={idx} className="space-y-2">
                {column.map((linkName) => (
                  <li key={linkName}>
                    <a href="#" className="hover:underline">
                      {linkName}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex space-x-3 items-center gap-2">
            <Image
              src={"socialGithub.svg"}
              height={24}
              width={24}
              alt="github"
            />
            <Image src={"linkedin.svg"} height={24} width={24} alt="linkedin" />
            <Image src={"youtube.svg"} height={24} width={24} alt="youtube" />
            <Image src={"discord.svg"} height={24} width={24} alt="discord" />
            <Image src={"twitter.svg"} height={24} width={24} alt="twitter" />
          </div>
        </div>
        <div className="flex space-x-3 items-center justify-between mt-10">
          <p>Ⓒ 2023 Clickvote</p>
          <p>
            Designed by <span className="font-semibold">SuperFine</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
