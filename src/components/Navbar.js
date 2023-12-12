import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

// import msg from './asset/msg.png'
// import noti from './asset/notification.png'
// import profile from './asset/profile.png'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-300 ">
      <div className="flex p-8">
        <MenuIcon />
        <h1 className="mx-4">Statistic</h1>
      </div>

      <form className="w-[400px] relative p-2">
        <div className="relative">
          <input
            type="search"
            placeholder="Type Here"
            className="w-full p-4 rounded-full bg-slate-500"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-400 rounded-full">
            <AiOutlineSearch />
          </button>
        </div>
      </form>

      <div className="flex p-4  ">
        <div className="px-4 "><MdMessage size={25} color="blue" /></div>
        <div className="px-4 "><IoIosNotifications size={25} color="red" /></div>
        <div className="px-4 "><CgProfile size={25} /></div>
      </div>
    </div>
  );
};

export default Navbar;
