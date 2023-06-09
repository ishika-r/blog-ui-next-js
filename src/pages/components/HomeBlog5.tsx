import Link from "next/link";
import React from "react";

const HomeBlog5 = () => {
  return (
    <>
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <div className="col-md-4">
              <Link href="blog/id" className="h-entry mb-30 v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_2_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>AI can now kill those annoying cookie pop-ups</h2>
                </div>
              </Link>
              <Link href="blog/id" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_5_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Don’t assume your user data in the cloud is safe</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="blog/id" className="h-entry img-5 h-100 gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_1_vertical.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Why is my internet so slow?</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="blog/id" className="h-entry mb-30 v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_3_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Startup vs corporate: What job suits you best?</h2>
                </div>
              </Link>
              <Link href="blog/id" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: 'url("/images/img_4_horizontal.jpg")',
                  }}
                />
                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Thought you loved Python? Wait until you meet Rust</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlog5;
