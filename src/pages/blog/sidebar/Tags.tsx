import Link from "next/link";
import React from "react";

const Tags = () => {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Tags</h3>
      <ul className="tags">
        <li>
          <Link href="/tags/tagid">Travel</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Adventure</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Food</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Lifestyle</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Business</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Freelancing</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Travel</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Adventure</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Food</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Lifestyle</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Business</Link>
        </li>
        <li>
          <Link href="/tags/tagid">Freelancing</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tags;
