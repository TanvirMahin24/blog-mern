import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import { connect } from "react-redux";
import {
  createBlog,
  updateBlog,
  getSingleBlog,
} from "../../actions/blogAction";
import Spinner from "../Shared/Spinner";

const CreateBlog = ({
  createBlog,
  updateBlog,
  getSingleBlog,
  blog,
  loading,
  edit,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (edit) {
      getSingleBlog(id);
      if (!loading) {
        setTitle(blog.title);
        setAuthor(blog.author);
        setDescription(blog.description);
      }
    }
  }, [blog._id]);
  const formData = new FormData();
  const history = useHistory();
  const submitHandeler = (e) => {
    e.preventDefault();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("image", selectedFile);
    if (!edit) {
      createBlog(formData);
    } else {
      updateBlog(blog._id, formData);
    }

    setTitle("");
    setAuthor("");
    setDescription("");
    setSelectedFile(null);
    history.push("/");
  };
  return (
    <>
      <Header />
      {edit && loading && <Spinner />}
      {!loading && (
        <div className="d-block bgLightBlue pb-5">
          <section className="container bg-white card card-body shadow shadow-sm">
            <p className="font-weight-lighter text-center bg-light py-2 mb-4 h3">
              <strong>{edit ? "Edit" : "Create"} Blog</strong>
            </p>
            <form
              className="container"
              onSubmit={submitHandeler}
              encType="multipart/form-data"
            >
              <fieldset className="fieldset">
                <div className="form-group">
                  <label className="col-md-12 control-label">Title</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <small className="text-secondary">
                      Title of the blog represents what your blog is all about.
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-12 control-label">Author</label>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                      className="form-control"
                    />
                    <small className="text-secondary">
                      Please provide the name of Author
                    </small>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-12 control-label">blog</label>
                  <div className="col-md-12 col-sm-9 col-xs-12">
                    <textarea
                      name="description"
                      cols="30"
                      rows="10"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                      required
                    ></textarea>
                    <small className="text-secondary">
                      Write the full blog.
                    </small>
                  </div>
                </div>
                <div className="form-group px-3">
                  <div className="col-md-6 offset-md-3 text-center pb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input outline-primary"
                        name="image"
                        id="customFile"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                      <label
                        className="custom-file-label bg-light"
                        htmlFor="customFile"
                      >
                        <i className="fas fa-image text-primary"></i>
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <hr />
              <div className="form-group">
                <div className="text-center">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value={edit ? "Edit Blog" : "Create Blog"}
                  />
                  <Link to="/" className="btn btn-outline-danger px-3 ml-2">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  blog: state.blog.selected_blog,
  loading: state.blog.loading,
});

export default connect(mapStateToProps, {
  createBlog,
  updateBlog,
  getSingleBlog,
})(CreateBlog);
