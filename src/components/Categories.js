import {
  ArrowForwardIos,
  FilterList,
  SingleBedOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const nav = useNavigate();
  const [text, setText] = useState(null);
  useEffect(() => {
    if (text) {
      nav("/", { state: { text } });
    } else {
      nav("/", { state: null });
    }
  }, [text, nav]);

  const handleClick = (info) => {
    setText(info);
  };
  const options = [
    {
      id: 1,
      text: "rooms",
      icons: <SingleBedOutlined />,
    },
    {
      id: 2,
      text: "Amazing pools",
      icons: <SingleBedOutlined />,
    },
    {
      id: 3,
      text: "Trending",
      icons: <SingleBedOutlined />,
    },
    {
      id: 4,
      text: "Mansions",
      icons: <SingleBedOutlined />,
    },
    {
      id: 5,
      text: "Islands",
      icons: <SingleBedOutlined />,
    },
    {
      id: 6,
      text: "Amazing views",
      icons: <SingleBedOutlined />,
    },
    {
      id: 7,
      text: "Iconic cities",
      icons: <SingleBedOutlined />,
    },
    {
      id: 8,
      text: "OMG!",
      icons: <SingleBedOutlined />,
    },
    {
      id: 9,
      text: "Design",
      icons: <SingleBedOutlined />,
    },
    {
      id: 10,
      text: "Bed & Breakfasts",
      icons: <SingleBedOutlined />,
    },
    {
      id: 11,
      text: "Domes",
      icons: <SingleBedOutlined />,
    },
    {
      id: 12,
      text: "Boats",
      icons: <SingleBedOutlined />,
    },
    {
      id: 13,
      text: "Chefs Kitchens",
      icons: <SingleBedOutlined />,
    },
    {
      id: 14,
      text: "Desert",
      icons: <SingleBedOutlined />,
    },
    {
      id: 15,
      text: "Earth homes",
      icons: <SingleBedOutlined />,
    },
  ];
  return (
    <div className="px-10 p-3 sticky top-14 z-20 shadow-xl bg-white ">
      <div className="flex items-center ">
        <ul className="flex flex-row  gap-11 px-5 ">
          {options.map((items) => (
            <div
              className="flex-col items-center justify-center cursor-pointer "
              onClick={() => handleClick(items.text)}
            >
              <div className="text-xs items-center justify-center text-center">
                <li>{items.icons}</li>
              </div>
              <div className="text-xs items-center justify-center  font-medium">
                <li
                  className={`${
                    items.text === text ? "pb-2 border-b-2 border-b-black" : ""
                  }`}
                >
                  {items.text}
                </li>
              </div>
            </div>
          ))}
        </ul>
        <div className="items-center justify-center ml-3 p-2">
          <ArrowForwardIos fontSize="13" className="border  rounded-full  " />
        </div>
        <div className=" flex items-center justify-center border p-2 rounded-lg border-gray-300 gap-2">
          <FilterList />
          <h3 className="text-sm">Filters</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
