import Link from "next/link";
import React from "react";

const RecentlyAddedBlogs = () => {
  return (
    <section className="section posts-entry posts-entry-sm bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-uppercase text-black">
            More Blog Posts
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="blog-entry">
              <Link href="/blog/blogid" className="img-link">
                <img
                  src="/images/img_1_horizontal.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <span className="date">Apr. 14th, 2022</span>
              <h2>
                <Link href="/blog/blogid">
                  Thought you loved Python? Wait until you meet Rust
                </Link>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <Link href="/blog/blogid" className="read-more">
                  Continue Reading
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="blog-entry">
              <Link href="/blog/blogid" className="img-link">
                <img
                  src="/images/img_2_horizontal.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <span className="date">Apr. 14th, 2022</span>
              <h2>
                <Link href="/blog/blogid">
                  Startup vs corporate: What job suits you best?
                </Link>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <Link href="/blog/blogid" className="read-more">
                  Continue Reading
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="blog-entry">
              <Link href="/blog/blogid" className="img-link">
                <img
                  src="/images/img_3_horizontal.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <span className="date">Apr. 14th, 2022</span>
              <h2>
                <Link href="/blog/blogid">
                  UK sees highest inflation in 30 years
                </Link>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <Link href="/blog/blogid" className="read-more">
                  Continue Reading
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="blog-entry">
              <Link href="/blog/blogid" className="img-link">
                <img
                  src="/images/img_4_horizontal.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <span className="date">Apr. 14th, 2022</span>
              <h2>
                <Link href="/blog/blogid">
                  Don’t assume your user data in the cloud is safe
                </Link>
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>
                <Link href="/blog/blogid" className="read-more">
                  Continue Reading
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBlogs;
