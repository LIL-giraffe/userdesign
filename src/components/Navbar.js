import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex p-4">
        <MenuIcon />
        <h1>Statistic</h1>
      </div>

      <form className="w-[400px] relative">
        <div className="relative">
            <input type="search" placeholder="Type Here" className="w-full p-4 rounded-full bg-slate-800" />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-400 rounded-full">
                <AiOutlineSearch/>
            </button>
        </div>
      </form>

      <div className="flex p-4">
        <img src="" alt="msg" />
        <img src="" alt="noti" />
        <img src="" alt="profile" />
      </div>

      

    </div>
  );
};

export default Navbar;
