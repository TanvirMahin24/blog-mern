import React, { useEffect } from "react";
import Footer from "../Shared/Footer";
import Spinner from "../Shared/Spinner";
import Header from "../Shared/Header";
import { connect } from "react-redux";
import { getBlogs } from "../../actions/blogAction";
import BlogCard from "../Shared/BlogCard";

const Home = ({ getBlogs, blog: { blogs, loading } }) => {
  useEffect(() => {
    getBlogs();
  }, []);

  const blogList = blogs.map((blog) => (
    <BlogCard
      key={blog._id}
      deleteLink={blog._id}
      title={blog.title}
      description={blog.description}
      author={blog.author}
      img={`/${blog.img}`}
      date={blog.date}
    />
  ));
  return (
    <>
      <Header home />
      <div className="container">
        {/*success && (
          <div className="row mt-3 pt-4">
            <div className="col-md-6 offset-3">
              <div className="alert alert-success">{success}</div>
            </div>
          </div>
        )*/}
        <div className="row mt-3 pt-5 pb-3">
          <div className="col-lg-3 col-md-6">
            <h4 className="font-weight-bold mb-4">
              <strong className="red-text-2 font-weight-bold">
                <i
                  className="fas fa-square textBlue mr-2"
                  aria-hidden="true"
                ></i>{" "}
              </strong>
              Our Latest Blogs
            </h4>
            <hr className="w-75" />
            <p className="text-secondary text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              animi soluta ratione quisquam, dicta ab cupiditate iure eaque?
              Repellendus voluptatum, magni impedit eaque animi maxime.Soluta
              ratione quisquam, dicta ab cupiditate iure eaque? Repellendus
              voluptatum, magni impedit.
            </p>
          </div>
          {loading && <Spinner />}
          {blogs && !loading ? blogList : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getBlogs })(Home);
