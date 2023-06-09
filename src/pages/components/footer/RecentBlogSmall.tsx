import Link from "next/link";
import React from "react";

const RecentBlogSmall = () => {
  return (
    <div className="col-lg-4">
      <div className="widget">
        <h3 className="mb-4">Recent Post Entry</h3>
        <div className="post-entry-footer">
          <ul>
            <li>
              <Link href="/blog/blogid">
                <img
                  src="/images/img_1_sq.jpg"
                  alt="Image placeholder"
                  className="me-4 rounded"
                />
                <div className="text">
                  <h4>
                    There’s a Cool New Way for Men to Wear Socks and Sandals
                  </h4>
                  <div className="post-meta">
                    <span className="mr-2">March 15, 2018 </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog/blogid">
                <img
                  src="/images/img_2_sq.jpg"
                  alt="Image placeholder"
                  className="me-4 rounded"
                />
                <div className="text">
                  <h4>
                    There’s a Cool New Way for Men to Wear Socks and Sandals
                  </h4>
                  <div className="post-meta">
                    <span className="mr-2">March 15, 2018 </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog/blogid">
                <img
                  src="/images/img_3_sq.jpg"
                  alt="Image placeholder"
                  className="me-4 rounded"
                />
                <div className="text">
                  <h4>
                    There’s a Cool New Way for Men to Wear Socks and Sandals
                  </h4>
                  <div className="post-meta">
                    <span className="mr-2">March 15, 2018 </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* /.widget */}
    </div>
  );
};

export default RecentBlogSmall;
