import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleBlog } from "../../actions/blogAction";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import Footer from "../Shared/Footer";

const SingleBlog = ({ loading, blog, getSingleBlog }) => {
  const { id } = useParams();

  useEffect(() => {
    getSingleBlog(id);
  }, [blog.id]);
  return (
    <div>
      <div className="d-block bgLightBlue py-4">
        <div className="container pb-3">
          <Link to="/" className="btn btn-lg btn-light btn-outline-dark">
            <span className="fas fa-home pr-1"></span> Home
          </Link>
          <Link
            to="/create"
            className="ml-3 btn btn-lg btn-light btn-outline-dark"
          >
            <span className="fas fa-feather-alt pr-1"></span> Write New Blog
          </Link>
        </div>

        {!blog.img && <Spinner />}
        {!loading && blog.img && (
          <section className="container bg-white card card-body shadow shadow-sm ">
            <div className="col-lg-12">
              <div
                className="mb-5"
                style={
                  blog.img === "uploads/blank.jpg"
                    ? { width: "100%", maxHeight: 250, overflow: "hidden" }
                    : { width: "100%", overflow: "hidden" }
                }
              >
                <img
                  src={`/${blog.img}`}
                  alt="blog banner"
                  className="img-fluid w-100"
                />
              </div>
              <h1 className="mb-4">{blog.title && blog.title}</h1>
              <div className="d-flex mb-5">
                <div className="vcard d-flex">
                  <span className="d-block pr-4">
                    <span className="h4 text-dark font-weight-lighter">
                      <span className="fas fa-feather-alt pr-1"></span>
                      {blog.author && blog.author}
                    </span>
                  </span>
                  <span className="date-read h4 text-dark font-weight-lighter">
                    <span className="fas fa-calendar-alt pr-1"></span>
                    {blog.date && blog.date.split("T")[0]}
                  </span>
                </div>
              </div>
              <p>{blog && blog.description}</p>
            </div>
          </section>
        )}
        <div className="container text-center pt-3">
          <Link
            to="/"
            className="mx-auto btn btn-lg btn-primary btn-outline-light"
          >
            <span className="fas fa-arrow-left"></span> Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  blog: state.blog.selected_blog,
  loading: state.blog.loading,
});
export default connect(mapStateToProps, { getSingleBlog })(SingleBlog);
