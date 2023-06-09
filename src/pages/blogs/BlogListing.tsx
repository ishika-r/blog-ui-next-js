import React from "react";
import Pagination from "../components/Pagination";
import Search from "../blog/sidebar/Search";
import PopularBlogs from "../blog/sidebar/PopularBlogs";
import Categories from "../blog/sidebar/Categories";
import Tags from "../blog/sidebar/Tags";
import Link from "next/link";

const BlogListing = () => {
  return (
    <div className="section search-result-wrap">
      <div className="container">
        <div className="row posts-entry">
          <div className="col-lg-8">
            <div className="blog-entry d-flex blog-entry-search-item">
              <Link href="/blog/blogid" className="img-link me-4">
                <img
                  src="/images/img_1_sq.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <div>
                <span className="date">
                  Apr. 14th, 2022 • <Link href="#">Business</Link>
                </span>
                <h2>
                  <Link href="/blog/blogid">
                    Thought you loved Python? Wait until you meet Rust
                  </Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <Link
                    href="/blog/blogid"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
            <div className="blog-entry d-flex blog-entry-search-item">
              <Link href="/blog/blogid" className="img-link me-4">
                <img
                  src="/images/img_2_sq.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <div>
                <span className="date">
                  Apr. 14th, 2022 • <Link href="#">Business</Link>
                </span>
                <h2>
                  <Link href="/blog/blogid">
                    Thought you loved Python? Wait until you meet Rust
                  </Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <Link
                    href="/blog/blogid"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
            <div className="blog-entry d-flex blog-entry-search-item">
              <Link href="/blog/blogid" className="img-link me-4">
                <img
                  src="/images/img_3_sq.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <div>
                <span className="date">
                  Apr. 14th, 2022 • <Link href="#">Business</Link>
                </span>
                <h2>
                  <Link href="/blog/blogid">
                    Thought you loved Python? Wait until you meet Rust
                  </Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <Link
                    href="/blog/blogid"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
            <div className="blog-entry d-flex blog-entry-search-item">
              <Link href="/blog/blogid" className="img-link me-4">
                <img
                  src="/images/img_4_sq.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <div>
                <span className="date">
                  Apr. 14th, 2022 • <Link href="#">Business</Link>
                </span>
                <h2>
                  <Link href="/blog/blogid">
                    Thought you loved Python? Wait until you meet Rust
                  </Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <Link
                    href="/blog/blogid"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
            <div className="blog-entry d-flex blog-entry-search-item">
              <Link href="/blog/blogid" className="img-link me-4">
                <img
                  src="/images/img_5_sq.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </Link>
              <div>
                <span className="date">
                  Apr. 14th, 2022 • <Link href="#">Business</Link>
                </span>
                <h2>
                  <Link href="/blog/blogid">
                    Thought you loved Python? Wait until you meet Rust
                  </Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  nobis ea quis inventore vel voluptas.
                </p>
                <p>
                  <Link
                    href="/blog/blogid"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Read More
                  </Link>
                </p>
              </div>
            </div>
            <Pagination />
          </div>
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
  );
};

export default BlogListing;
