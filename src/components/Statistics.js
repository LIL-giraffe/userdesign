import React from "react";

const Statistics = () => {
  return (
    <div className="flex flex-wrap w-full justify-center justify-items-center  h-[600] m-4  gap-y-4 ">
      <div className="w-full h-1/2 flex flex-row gap-x-4">
        <div className="border-2 w-[560px] h-[260px]   bg-slate-300 rounded-lg">

        </div>
        <div className="border-0 w-[560px] h-[260px]   rounded-lg grid gap-x-8 gap-y-4 grid-cols-3">
          <div className="border-1  rounded-lg bg-slate-300">1</div>
          <div className="border-1  rounded-lg bg-slate-300">2</div>
          <div className="border-1  rounded-lg bg-slate-300">3</div>
          <div className="border-1  rounded-lg bg-slate-300">4</div>
          <div className="border-1  rounded-lg bg-slate-300">5</div>
          <div className="border-1  rounded-lg bg-slate-300">6</div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row gap-x-4">
        <div className="border-2 w-[560px] h-[150px]  bg-slate-300 rounded-lg">

        </div>
        <div className="border-0 w-[560px] h-[260px]   rounded-lg flex flex-col gap-y-5">
          <div className="border-0 w-full h-[130px] rounded-lg bg-slate-300 "></div>
          <div className="border-0 w-full h-[130px] rounded-lg bg-slate-300 "></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
