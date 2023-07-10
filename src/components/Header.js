import {
  AccountCircle,
  DensityMedium,
  Language,
  Search,
} from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#FFFFFF] border border-b-1  p-3 flex justify-between items-center px-10 sticky top-0 z-10  ">
      <div className="w-20 items-center justify-center">
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="flex gap-4  bg-white shadow-md p-2 items-center justify-center rounded-full text-sm">
        <h3 className="font-semibold p-1 border-r-2">Anywhere</h3>
        <h3 className="font-semibold  p-1 border-r-2">Any week</h3>
        <div className="flex items-center gap-3">
          <h3 className="text-gray-600">Add guests</h3>
          <div className="items-center bg-red-400 rounded-full justify-center p-1 text-white">
            <Search />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center ">
        <h3 className="text-sm font-semibold">Airbnb your home</h3>
        <div>
          <Language fontSize="10" />
        </div>
        <div className="shadow-md p-2 rounded-full px-3 flex justify-between items-center gap-3">
          <DensityMedium
            fontSize="10"
            className=" justify-content flex-start"
          />
          <AccountCircle className=" justify-content flex-end" />
        </div>
      </div>
    </div>
  );
};

export default Header;
