import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../../assets/img/landingpageMainImage.png";

const Header = ({ home }) => {
  return (
    <div className="container-fluid homepageHeaderSection bgLightBlue shadow shadow-sm">
      <div className="row">
        <div className="col-12">
          <div className="socialLinksHeader text-center pt-3">
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
            <hr className="w-50 mx-auto" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 my-auto px-md-5 p-3 pb-md-5">
          <h1 className="textBlue appTitle pl-md-5 px-3">
            Welcome to blog.com
          </h1>
          <h3 className="pl-md-5 px-3">A place to write your own blog</h3>
          <p className="lead pl-md-5 p-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum excepturi quae explicabo eligendi itaque, sit non voluptate
            aliquam aut.
          </p>
          <div className="ml-md-5 mx-auto">
            {home && (
              <Link className="btn btn-primary btn-lg px-4" to="/create">
                Create Blog Now{" "}
                <span className=" ml-2 fas fa-feather-alt"></span>
              </Link>
            )}
            {!home && (
              <Link className="btn btn-primary btn-lg px-4" to="/">
                Go to Home <span className=" ml-2 fas fa-home"></span>
              </Link>
            )}
          </div>
        </div>
        <div className="col-md-7 h-100">
          <img src={landingImg} alt="landing" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Header;
