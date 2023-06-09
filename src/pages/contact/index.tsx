import Head from "next/head";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker, HiOutlineClock } from "react-icons/hi";
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
        <div className="hero overlay inner-page bg-primary py-5">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center pt-5">
              <div className="col-lg-6">
                <h1 className="heading text-white mb-3" data-aos="fade-up">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="contact-info">
                  <div className="address mt-2">
                    <span className="icon-room">
                      <HiLocationMarker className="contact-icons" />
                    </span>
                    <h4 className="mb-2">Location:</h4>
                    <p>
                      43 Raymouth Rd. Baltemoer,
                      <br /> London 3910
                    </p>
                  </div>
                  <div className="open-hours mt-4">
                    <span className="icon-clock-o">
                      <HiOutlineClock className="contact-icons" />
                    </span>
                    <h4 className="mb-2">Open Hours:</h4>
                    <p>
                      Sunday-Friday:
                      <br />
                      11:00 AM - 2300 PM
                    </p>
                  </div>
                  <div className="email mt-4">
                    <span className="icon-envelope">
                      <FaEnvelope className="contact-icons" />
                    </span>
                    <h4 className="mb-2">Email:</h4>
                    <p>info@Untree.co</p>
                  </div>
                  <div className="phone mt-4">
                    <span className="icon-phone">
                      <FaPhoneAlt className="contact-icons" />
                    </span>
                    <h4 className="mb-2">Call:</h4>
                    <p>+1 1234 55488 55</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                <form action="#">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.untree_co-section */}
      </Layout>
    </>
  );
};

export default index;
