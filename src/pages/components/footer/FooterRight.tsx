import Link from "next/link";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
const FooterRight = () => {
  return (
    <div className="col-lg-4">
      <div className="widget">
        <h3 className="mb-4">About</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      {/* /.widget */}
      <div className="widget">
        <h3>Social</h3>
        <ul className="list-unstyled social">
          <li className="">
            <Link href="#">
              <span className="social-icons">
                <FaInstagram />
              </span>
            </Link>
          </li>
          <li className="m-1">
            <Link href="#">
              <span className="social-icons">
                <FaTwitter />
              </span>
            </Link>
          </li>
          <li className="">
            <Link href="#">
              <span className="social-icons">
                <FaFacebookF />
              </span>
            </Link>
          </li>
          <li className="m-1">
            <Link href="#">
              <span className="social-icons">
                <FaLinkedinIn />
              </span>
            </Link>
          </li>
          <li className="">
            <Link href="#">
              <span className="social-icons">
                <FaPinterest />
              </span>
            </Link>
          </li>
          <li className="m-1">
            <Link href="#">
              <span className="social-icons">
                <FaDribbble />
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* /.widget */}
    </div>
  );
};

export default FooterRight;
