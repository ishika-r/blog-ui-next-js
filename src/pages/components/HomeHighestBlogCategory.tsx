import Link from "next/link";
import React from "react";

const HomeHighestBlogCategory = () => {
  {
    /* Dispaly category that have highest number of blogs */
  }

  return (
    <>
      <section className="section posts-entry">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Business</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <Link href="/category/id" className="read-more">
                View All
              </Link>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-9">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="blog-entry">
                    <Link href="/blog/blogid" className="img-link">
                      <img
                        src="/images/img_1_sq.jpg"
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, nobis ea quis inventore vel voluptas.
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
                <div className="col-md-6">
                  <div className="blog-entry">
                    <Link href="/blog/blogid" className="img-link">
                      <img
                        src="/images/img_2_sq.jpg"
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, nobis ea quis inventore vel voluptas.
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
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled blog-entry-sm">
                <li>
                  <span className="date">Apr. 14th, 2022</span>
                  <h3>
                    <Link href="/blog/blogid">
                      Don’t assume your user data in the cloud is safe
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <Link href="/blog/blogid" className="read-more">
                      Continue Reading
                    </Link>
                  </p>
                </li>
                <li>
                  <span className="date">Apr. 14th, 2022</span>
                  <h3>
                    <Link href="/blog/blogid">
                      Meta unveils fees on metaverse sales
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <Link href="/blog/blogid" className="read-more">
                      Continue Reading
                    </Link>
                  </p>
                </li>
                <li>
                  <span className="date">Apr. 14th, 2022</span>
                  <h3>
                    <Link href="/blog/blogid">
                      UK sees highest inflation in 30 years
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <Link href="/blog/blogid" className="read-more">
                      Continue Reading
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHighestBlogCategory;
