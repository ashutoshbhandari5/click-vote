import React from "react";

const Offers = () => {
  return (
    <div className="mt-28 flex flex-col items-center justify-center z-10">
      <p className="z-10 text-[44px]">Embed Your Components Now</p>
      <div className="flex items-center gap-4 mt-5">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 7, 7, 0.38) 0%, rgba(255, 255, 255, 0.04) 0.01%, rgba(255, 255, 255, 0.08) 100%)",
            borderRadius: "12px",
          }}
          className="px-32 py-20 z-10 flex flex-col items-center justify-center"
        >
          <p className="text-[24px] font-semibold text-center mt-5">
            Self-Hosted
          </p>
          <p className="text-center">Run locally with docker-compose</p>
          <button
            style={{
              padding: "16px 22px",
              borderRadius: "7px",
              border: "1px solid #FFF",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.22) -35.25%, rgba(255, 255, 255, 0.00) 111.48%)",
              backdropFilter: "blur(17px)",
              width: "196px",
              marginTop: "30px",
            }}
          >
            Read Docs
          </button>
        </div>
        <div
          style={{
            background:
              "linear-gradient(148deg, #AF46FF -53.06%, #AF46FF -53.04%, #570DA7 64.06%)",
            border: "1px solid #FFF",
            borderRadius: "12px",
          }}
          className="px-32 py-20 z-10 flex flex-col items-center justify-center"
        >
          <p className="text-[24px] font-semibold text-center mt-5">Cloud</p>
          <p className="text-center">Use our free managed service</p>
          <button
            style={{
              padding: "16px 22px",
              borderRadius: "7px",
              border: "1px solid rgba(255, 255, 255, 0.71)",
              background:
                "linear-gradient(219deg, #AF46FF 31.03%, #950AFF 99.96%)",
              backdropFilter: "blur(17px)",
              width: "196px",
              marginTop: "30px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
