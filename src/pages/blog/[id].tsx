import Head from "next/head";
import React from "react";
import CoverTitle from "./CoverTitle";
import MainContent from "./MainContent";
import Sidebar from "./sidebar/Sidebar";
import RecentlyAddedBlogs from "../components/RecentlyAddedBlogs";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <CoverTitle />
        <section className="section">
          <div className="container">
            <div className="row blog-entries element-animate">
              <MainContent />
              {/* END main-content */}
              <Sidebar />
              {/* END sidebar */}
            </div>
          </div>
        </section>
        {/* Start posts-entry */}
        {/* This is located in components folder which is also used in home page */}
        <RecentlyAddedBlogs />
        {/* End posts-entry */}
      </Layout>
    </>
  );
};

export default Blog;
