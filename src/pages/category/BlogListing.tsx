import Link from "next/link";
import React from "react";
import Pagination from "../components/Pagination";

const BlogListing = () => {
  return (
    <div className="col-lg-8">
      <div className="blog-entry d-flex blog-entry-search-item">
        <Link href="/blog/id" className="img-link me-4">
          <img src="/images/img_1_sq.jpg" alt="Image" className="img-fluid" />
        </Link>
        <div>
          <span className="date">
            Apr. 14th, 2022 • <Link href="/category/categoryid">Business</Link>
          </span>
          <h2>
            <Link href="/blog/id">
              Thought you loved Python? Wait until you meet Rust
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis
            ea quis inventore vel voluptas.
          </p>
          <p>
            <Link href="/blog/id" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
          </p>
        </div>
      </div>
      <div className="blog-entry d-flex blog-entry-search-item">
        <Link href="/blog/id" className="img-link me-4">
          <img src="/images/img_2_sq.jpg" alt="Image" className="img-fluid" />
        </Link>
        <div>
          <span className="date">
            Apr. 14th, 2022 • <Link href="/category/categoryid">Business</Link>
          </span>
          <h2>
            <Link href="/blog/id">
              Thought you loved Python? Wait until you meet Rust
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis
            ea quis inventore vel voluptas.
          </p>
          <p>
            <Link href="/blog/id" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
          </p>
        </div>
      </div>
      <div className="blog-entry d-flex blog-entry-search-item">
        <Link href="/blog/id" className="img-link me-4">
          <img src="/images/img_3_sq.jpg" alt="Image" className="img-fluid" />
        </Link>
        <div>
          <span className="date">
            Apr. 14th, 2022 • <Link href="/category/categoryid">Business</Link>
          </span>
          <h2>
            <Link href="/blog/id">
              Thought you loved Python? Wait until you meet Rust
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis
            ea quis inventore vel voluptas.
          </p>
          <p>
            <Link href="/blog/id" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
          </p>
        </div>
      </div>
      <div className="blog-entry d-flex blog-entry-search-item">
        <Link href="/blog/id" className="img-link me-4">
          <img src="/images/img_4_sq.jpg" alt="Image" className="img-fluid" />
        </Link>
        <div>
          <span className="date">
            Apr. 14th, 2022 • <Link href="/category/categoryid">Business</Link>
          </span>
          <h2>
            <Link href="/blog/id">
              Thought you loved Python? Wait until you meet Rust
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis
            ea quis inventore vel voluptas.
          </p>
          <p>
            <Link href="/blog/id" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
          </p>
        </div>
      </div>
      <div className="blog-entry d-flex blog-entry-search-item">
        <Link href="/blog/id" className="img-link me-4">
          <img src="/images/img_5_sq.jpg" alt="Image" className="img-fluid" />
        </Link>
        <div>
          <span className="date">
            Apr. 14th, 2022 • <Link href="/category/categoryid">Business</Link>
          </span>
          <h2>
            <Link href="/blog/id">
              Thought you loved Python? Wait until you meet Rust
            </Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis
            ea quis inventore vel voluptas.
          </p>
          <p>
            <Link href="/blog/id" className="btn btn-sm btn-outline-primary">
              Read More
            </Link>
          </p>
        </div>
      </div>
      {/* Pagination */}
      <Pagination />    
    </div>
  );
};

export default BlogListing;
