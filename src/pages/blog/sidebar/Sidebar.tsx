import React from "react";
import Search from "./Search";
import Link from "next/link";
import AboutBio from "./AboutBio";
import PopularBlogs from "./PopularBlogs";
import Categories from "./Categories";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <div className="col-md-12 col-lg-4 sidebar">
      {/* Search bar */}
      <Search />
      {/* END sidebar-box */}
      {/* User Bio */}
      <AboutBio />
      {/* END sidebar-box */}
      {/* # popular blogs */}
      <PopularBlogs />
      {/* END sidebar-box */}
      {/* Category with blog count */}
      <Categories />
      {/* END sidebar-box */}
      {/* Tags */}
      <Tags />
    </div>
  );
};

export default Sidebar;
