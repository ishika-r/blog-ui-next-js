import Head from "next/head";
import React from "react";
import Title from "./Title";
import BlogListing from "./BlogListing";
import Layout from "../components/Layout";

const index = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Title />
        <BlogListing />
      </Layout>
    </>
  );
};

export default index;
