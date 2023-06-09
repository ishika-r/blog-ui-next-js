import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";

const AboutBio = () => {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <img
          src="/images/person_2.jpg"
          alt="Image Placeholder"
          className="img-fluid mb-3"
        />
        <div className="bio-body">
          <h2>Hannah Anderson</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem facilis sunt repellendus excepturi beatae porro
            debitis voluptate nulla quo veniam fuga sit molestias minus.
          </p>
          <p>
            <Link href="#" className="btn btn-primary btn-sm rounded px-2 py-2">
              Read my bio
            </Link>
          </p>
          <p className="social" style={{ paddingLeft: "10px" }}>
            <Link href="#" className="m-3 fs-5">
              <FaFacebookF />
            </Link>
            <Link href="#" className="m-3 fs-5">
              <FaTwitter />
            </Link>
            <Link href="#" className="m-3 fs-5">
              <FaInstagram />
            </Link>
            <Link href="#" className="m-3 fs-5">
              <FaYoutubeSquare />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
