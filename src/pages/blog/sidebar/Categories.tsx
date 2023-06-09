import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Categories</h3>
      <ul className="categories">
        <li>
          <Link href="/category/categoryid">
            Food <span>(12)</span>
          </Link>
        </li>
        <li>
          <Link href="/category/categoryid">
            Travel <span>(22)</span>
          </Link>
        </li>
        <li>
          <Link href="/category/categoryid">
            Lifestyle <span>(37)</span>
          </Link>
        </li>
        <li>
          <Link href="/category/categoryid">
            Business <span>(42)</span>
          </Link>
        </li>
        <li>
          <Link href="/category/categoryid">
            Adventure <span>(14)</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
