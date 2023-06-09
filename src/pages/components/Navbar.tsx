import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiArrowDropDownLine, RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  <Link href="/" className="logo m-0 float-start">
                    Blogy<span className="text-primary"> .</span>
                  </Link>
                </div>
                <div className="col-8 text-center">
                  <form
                    action="#"
                    className="search-form d-inline-block d-lg-none"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="bi-search">
                      <RiSearch2Line />
                    </span>
                  </form>
                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li className="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="has-children">
                      <Link
                        href=""
                        style={{ pointerEvents: "none", cursor: "default" }}
                      >
                        Categories
                      </Link>
                      <RiArrowDropDownLine />
                      {/* <Link href="category.html">Categories</Link> */}
                      <ul className="dropdown">
                        <li>
                          <Link href="/category/1">Business</Link>
                        </li>
                        <li>
                          <Link href="/category/2">News</Link>
                        </li>
                        <li>
                          <Link href="/category/3">Fashion</Link>
                        </li>
                        <li>
                          <Link href="/category/4">Politics</Link>
                        </li>
                        <li>
                          <Link href="/category/5">Health</Link>
                        </li>
                        <li>
                          <Link href="/category/6">World</Link>
                        </li>

                        <li className="has-children">
                          <Link href="/category/7">IT</Link>
                          <span className="arrow-icon">
                            <RiArrowDropDownLine />
                          </span>
                          <ul className="dropdown">
                            <li>
                              <Link href="/category/7/1">Sub category1</Link>
                            </li>
                            <li>
                              <Link href="/category/7/2">Sub category2</Link>
                            </li>
                            <li>
                              <Link href="/category/7/3">Sub category3</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/auth/signin">Write Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-2 text-end">
                  <Link
                    href="#"
                    className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                  >
                    <span />
                  </Link>
                  <form
                    action="#"
                    className="search-form d-none d-lg-inline-block"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="bi-search">
                      <RiSearch2Line />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
