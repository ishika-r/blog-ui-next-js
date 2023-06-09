import Link from "next/link";
import React from "react";

const FooterMiddle = () => {
  return (
    <div className="col-lg-4 ps-lg-5">
      <div className="widget">
        <h3 className="mb-4">Company</h3>
        <ul className="list-unstyled float-start links">
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Vision</Link>
          </li>
          <li>
            <Link href="#">Mission</Link>
          </li>
          <li>
            <Link href="#">Terms</Link>
          </li>
          <li>
            <Link href="#">Privacy</Link>
          </li>
        </ul>
        <ul className="list-unstyled float-start links">
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="#">Business</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
          <li>
            <Link href="#">Creative</Link>
          </li>
        </ul>
      </div>{" "}
      {/* /.widget */}
    </div>
  );
};

export default FooterMiddle;
