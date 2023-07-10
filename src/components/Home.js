import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Search from "./Search";
import Main from "./Main";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Search />
      <Main />
    </div>
  );
};

export default Home;
