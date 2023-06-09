import Layout from "@/pages/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Section: Sign in Design Block */}
      <Layout>
        <div className="card mt-5 mb-5 auth-card">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src="/images/img_4_vertical.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="signin">
                  <h3 className="card-title" style={{ color: "#4d4c7d" }}>
                    Sign In
                  </h3>
                  <hr />
                  <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" />
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      name="password"
                      className="form-control"
                    />
                    <p>
                      <Link
                        href="/auth/dashboard"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Sign In
                      </Link>
                    </p>
                  </form>
                  <h5 className="mt-5">
                    Don't have an account ?
                    <Link href="/auth/signup" className="read-more">
                      {" "}
                      Click here to signup
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* Section: Design Block */}
    </>
  );
};

export default index;
