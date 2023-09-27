import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-white">
        {/* Left Group */}
        <div className="flex space-x-4 items-center">
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
          <div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(11.923460006713867px)",
              }}
              className="flex space-x-3 items-center rounded-full md:rounded-54 px-3 py-2 "
            >
              <div className="flex space-x-3 items-center">
                <Image
                  src="/heart.svg"
                  alt="click vote logo"
                  width={14}
                  height={14}
                  priority
                />
                <div>Like</div>
              </div>
              <div className="h-4 w-px bg-white bg-opacity-30"></div>
              <p>Pricing</p>
            </div>
          </div>
        </div>

        {/* Right Group */}
        <div className="flex space-x-4 items-center">
          <Link href="#" className="hover:text-blue-800">
            Blog
          </Link>
          <Link href="#" className="hover:text-blue-800">
            Pricing
          </Link>
          <Link href="#" className="hover:text-blue-800">
            Documentation
          </Link>
          <div
            style={{
              borderRadius: "7px",
              background: "rgba(255, 255, 255, 0.10)",
              backdropFilter: "blur(17px)",
            }}
            className="flex space-x-3 items-center rounded-full md:rounded-54 px-3 py-2 rounded-md"
          >
            <div className="flex space-x-3 items-center">
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
      </div>
    </div>
  );
};

export default Navbar;
