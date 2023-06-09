import React from "react";
import FooterRight from "./FooterRight";
import Link from "next/link";
import FooterMiddle from "./FooterMiddle";
import RecentBlogSmall from "./RecentBlogSmall";
import FooterBottom from "./FooterBottom";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <FooterRight />
            {/* /.col-lg-4 */}
            <FooterMiddle />
            {/* /.col-lg-4 */}
            {/* Recently added 3 blogs */}
            <RecentBlogSmall />
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
          <FooterBottom />
        </div>
        {/* /.container */}
      </footer>
    </>
  );
};

export default Footer;
