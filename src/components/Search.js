import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Search = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <div className=" flex  border w-[70%] mx-auto justify-between p-3 rounded-lg mt-10">
      <div className="flex gap-6 items-center">
        <h3 className="font-semibold text-sm p-1.5 border-r-2 ">
          Display total price
        </h3>
        <h3 className=" text-sm text-gray-600">
          Includes all fees, before taxes
        </h3>
      </div>
      <div>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        />
      </div>
    </div>
  );
};

export default Search;
