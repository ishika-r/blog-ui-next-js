import Link from "next/link";
import React from "react";

const CommentList = () => {
  return (
    <ul className="comment-list">
      <li className="comment">
        <div className="vcard">
          <img src="/images/person_1.jpg" alt="Image placeholder" />
        </div>
        <div className="comment-body">
          <h3>Jean Doe</h3>
          <div className="meta">January 9, 2018 at 2:21pm</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
          <p>
            <Link href="#" className="reply rounded">
              Reply
            </Link>
          </p>
        </div>
      </li>
      <li className="comment">
        <div className="vcard">
          <img src="/images/person_2.jpg" alt="Image placeholder" />
        </div>
        <div className="comment-body">
          <h3>Jean Doe</h3>
          <div className="meta">January 9, 2018 at 2:21pm</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
          <p>
            <Link href="#" className="reply rounded">
              Reply
            </Link>
          </p>
        </div>
        <ul className="children">
          <li className="comment">
            <div className="vcard">
              <img src="/images/person_3.jpg" alt="Image placeholder" />
            </div>
            <div className="comment-body">
              <h3>Jean Doe</h3>
              <div className="meta">January 9, 2018 at 2:21pm</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
              <p>
                <Link href="#" className="reply rounded">
                  Reply
                </Link>
              </p>
            </div>
            <ul className="children">
              <li className="comment">
                <div className="vcard">
                  <img src="/images/person_4.jpg" alt="Image placeholder" />
                </div>
                <div className="comment-body">
                  <h3>Jean Doe</h3>
                  <div className="meta">January 9, 2018 at 2:21pm</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                    autem, eum officia, fugiat saepe enim sapiente iste iure!
                    Quam voluptas earum impedit necessitatibus, nihil?
                  </p>
                  <p>
                    <Link href="#" className="reply rounded">
                      Reply
                    </Link>
                  </p>
                </div>
                <ul className="children">
                  <li className="comment">
                    <div className="vcard">
                      <img src="/images/person_5.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link href="#" className="reply rounded">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="comment">
        <div className="vcard">
          <img src="/images/person_1.jpg" alt="Image placeholder" />
        </div>
        <div className="comment-body">
          <h3>Jean Doe</h3>
          <div className="meta">January 9, 2018 at 2:21pm</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
          <p>
            <Link href="#" className="reply rounded">
              Reply
            </Link>
          </p>
        </div>
      </li>
    </ul>
  );
};

export default CommentList;
