import React from "react";
import { FaEye } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import bars from "./asset/bars.png";
import { IoCube } from "react-icons/io5";
import graph from "./asset/graph.png";
import xinfo from "./asset/x-info.png";
import engineer from "./asset/info (3).png";
import designer from "./asset/info (2).png";
import manager from "./asset/info (1).png";
import programmer from "./asset/info.png";
import pie from "./asset/pieChart.png";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const Statistics = () => {
  return (
    <div className="flex flex-wrap w-full justify-center justify-items-center  h-[600] m-4  gap-y-4  bg-slate-300 ">
      <div className="w-full h-1/2 flex flex-row gap-x-4 ">
        <div className="border-2 w-[560px] h-[260px] bg-slate-100 p-[4px]   rounded-lg">
          <div className="flex justify-between p-[6px] mb-4">
            <h1 className="font-bold">Profile Strength</h1>
            <SlOptionsVertical />
          </div>
          <div className="flex gap-12">
            <div>
              <img className="h-[160px] w-[260px]" src={bars} alt="bars" />
            </div>
            <div>
              <h1 className="pb-4">Legend</h1>
              <div className="flex gap-2">
                <IoCube color="green" />
                <h1 className="text-sm">30%</h1>
                <h1 className="text-xs text-slate-400">Application Sent</h1>
              </div>
              <div className="flex gap-2">
                <IoCube color="orange" />
                <h1 className="text-sm">46%</h1>
                <h1 className="text-xs text-slate-400">Application Answered</h1>
              </div>
              <div className="flex gap-2">
                <IoCube color="blue" />
                <h1 className="text-sm">14%</h1>
                <h1 className="text-xs text-slate-400">Hired</h1>
              </div>
              <div className="flex gap-2">
                <IoCube color="gray" />
                <h1 className="text-sm">10%</h1>
                <h1 className="text-xs text-slate-400">Pending</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-0 w-[560px] h-[260px]   rounded-lg grid gap-x-4 gap-y-4 grid-cols-3">
          <div className="border-1 bg-slate-100  rounded-lg  ">
            <div className="w-full h-full p-[6px]">
              <h1 className="text-sm text-slate-600 ">Profile Viewed</h1>
              <h1 className="font-bold  ">456K</h1>
              <div className="flex mt-6 gap-2 ">
                <FaEye size={18} color="blue" />
                <div className=" text-xs ">
                  <h1 className="text-lime-500">+24%</h1>
                  <h1 className="text-slate-400">than last month</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border-1 bg-slate-100 rounded-lg ">
            <div className="w-full h-full p-[6px]">
              <h1 className="text-sm text-slate-600 ">Unread Messages</h1>
              <h1 className="font-bold  ">28</h1>
              <div className="flex mt-6 gap-2 ">
                <MdMessage size={18} color="purple" />
                <h1 className="text-slate-400 text-xs">Go To Messages</h1>
              </div>
            </div>
          </div>
          <div className="border-1 bg-slate-100  rounded-lg ">
            <div className="w-full h-full p-[6px]">
              <h1 className="text-sm text-slate-600 ">Application Sent</h1>
              <h1 className="font-bold  ">651</h1>
              <div className="flex mt-6 gap-2 ">
                <FaSuitcase size={18} color="lime" />
              </div>
            </div>
          </div>
          <div className="border-1 bg-slate-100 rounded-lg ">
            <div className="w-full h-full p-[6px]">
              <h1 className="text-sm text-slate-600 ">App. Answered</h1>
              <h1 className="font-bold  ">24</h1>
              <div className="flex mt-6 gap-2 ">
                <FaReply size={18} color="orange" />
              </div>
            </div>
          </div>
          <div className="border-1 bg-slate-100 rounded-lg ">
            <div className="w-full h-full p-[6px]">
              <h1 className="text-sm text-slate-600 ">Interviewed</h1>
              <h1 className="font-bold  ">261</h1>
              <div className="flex mt-6 gap-2 ">
                <FaBriefcase size={18} color="blue" />
              </div>
            </div>
          </div>
          <div className="border-1 bg-slate-100 rounded-lg ">
            <div className="w-full h-full p-[6px]">
              <h1 className="text-sm text-slate-600 ">Hired</h1>
              <h1 className="font-bold  ">69</h1>
              <div className="flex mt-6 gap-2 ">
                <IoIosCall size={20} color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1/2 flex flex-row gap-x-4">
        <div className="border-2 w-[560px] h-[150px] bg-slate-100  rounded-lg">
          <div className="flex justify-between p-[6px] ">
            <h1 className="font-bold">Visitor Graph</h1>
            <div className="text-xs text-slate-400 ">
              <span className="mx-[12px]">Show Details</span>
              <FormControlLabel
                control={<Switch size="small" defaultChecked />}
              />
            </div>
            <select className="block  text-xs text-gray-500 rounded-full p-[4px]">
              <option selected>Weekly</option>
              <option value="US">Monthly</option>
              <option value="CA">Quaterly</option>
              <option value="FR">Yearly</option>
            </select>
          </div>
          <div className="flex gap-2 p-[6px]">
            <h1 className="text-xs">🟣View Profile</h1>
            <h1 className="text-xs">🔵Hire</h1>
          </div>
          <img className="w-[520px] h-[60px]  " src={graph} alt="graph" />
          <img className="w-[520px] h-[10px] " src={xinfo} alt="x_info" />
        </div>
        <div className="border-0 w-[560px] h-[260px]   rounded-lg flex flex-col gap-y-5">
          <div className="border-0 w-full h-[130px] bg-slate-100 rounded-lg  ">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 p-[6px]">
                <h1>Network</h1>
                <div className="flex gap-1">
                  <IoCube color="blue" />
                  <div>
                    <h1 className="text-xs text-slate-400">Following</h1>
                    <h1 className="font-bold text-sm">567 Companies</h1>
                  </div>
                </div>
                <div className="flex gap-1">
                  <IoCube color="orange" />
                  <div>
                    <h1 className="text-xs text-slate-400">Followers</h1>
                    <h1 className="font-bold text-sm">8,334 Person</h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 p-[6px]">
                <img
                  className="h-[100px] w-[250px] object-contain"
                  src={pie}
                  alt=""
                />
                <SlOptionsVertical />
              </div>
            </div>
          </div>
          <div className="border-0 w-full h-[130px] bg-slate-100 rounded-lg  ">
            <div className="flex justify-between p-[6px] mb-2">
              <h1 className="font-bold">Job Trends</h1>
              <SlOptionsVertical />
            </div>
            <div className="flex gap-1 ">
              <img
                className="w-[130px] h-[70px] object-contain"
                src={engineer}
                alt="engineer"
              />
              <img
                className="w-[130px] h-[70px] object-contain"
                src={designer}
                alt="designer"
              />
              <img
                className="w-[130px] h-[70px] object-contain"
                src={manager}
                alt="manager"
              />
              <img
                className="w-[130px] h-[70px] object-contain"
                src={programmer}
                alt="programmer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
