import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-md-left bg-light pt-0 shadow shadow-sm">
      <div className="container pt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr
              className="bgBlue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Top Categories</strong>
            </h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto bgBlue"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!" className="">
                Travel
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Lifestyle
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Photography
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Fashion{" "}
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="bgBlue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!" className="">
                Login
              </a>
            </p>
            <p>
              <a href="#!" className="">
                About Us
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Latest Blogs
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Contact
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="bgBlue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fas fa-home mr-3"></i> Rajshahi, Bangladesh
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <hr className="w-75 bgLightBlue mx-auto d-md-block d-none" />

      <div className="container-fluid pt-2 pb-4 text-center">
        <div className="row">
          <div className="col-md-6 lead order2">
            © 2020 Copyright
            <a href="#" target="_blank" className="textBlue">
              {" "}
              Blog.com{" "}
            </a>
          </div>
          <div className="order1 socialLinksFooter col-12 col-md-6 text-center text-md-center">
            <a className="p-4 m-2 ml-0 textBlue" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="p-2 m-2 textBlue" href="#">
              <i className="fab fa-twitter"></i>
            </a>

            <a className="p-2 m-2 textBlue" href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>

            <a className="p-2 m-2 textBlue" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="p-2 m-2 textBlue" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <hr className="d-block d-md-none w-75 mx-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
