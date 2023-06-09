import Head from "next/head";
import Link from "next/link";
import React from "react";
import CategoryTitle from "./CategoryTitle";
import Pagination from "../components/Pagination";
import BlogListing from "./BlogListing";
import Search from "../blog/sidebar/Search";
import PopularBlogs from "../blog/sidebar/PopularBlogs";
import Categories from "../blog/sidebar/Categories";
import Tags from "../blog/sidebar/Tags";
import Layout from "../components/Layout";

const Category = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <div className="section search-result-wrap">
          <div className="container">
            <CategoryTitle />
            <div className="row posts-entry">
              <BlogListing />
              <div className="col-lg-4 sidebar">
                <Search add="mb-4" />
                {/* END sidebar-box */}

                <PopularBlogs />
                {/* END sidebar-box */}

                <Categories />
                {/* END sidebar-box */}

                <Tags />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
