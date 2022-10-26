import React from "react";

function HowMuchHavest() {
  return (
    <>
      <h4 className="text-2xl">Buying plants</h4>
      <div>
        <h4 className="font-bold mb-6 text-2xl">
          How much we can harvest from one plant each grow:
        </h4>
        <div className="flex w-full">
          <div className="w-[30%] md:w-1/5 border-r border-neutral-800">
            <p className="pb-2 ml-2 break-all"> Pessimistic </p>
            <div className="text-right p-4 my-bg-2 text-white">
              <span>45g</span>
            </div>
          </div>
          <div className="w-[40%] md:w-2/4 border-neutral-800 border-r">
            <p className="pb-2 ml-2 font-bold break-all"> Realistic </p>
            <div className="main-bg p-4 text-right">
              <span className="font-bold">70g</span>
            </div>
          </div>
          <div className="w-[30%]">
            <p className="pb-2 ml-2 break-all"> Optimistic </p>
            <div className="my-bg-3 p-4 text-right">
              <span>75g</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowMuchHavest;
