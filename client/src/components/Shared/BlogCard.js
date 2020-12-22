import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deleteBlog } from "../../actions/blogAction";

const BlogCard = ({
  title,
  description,
  author,
  img,
  date,
  deleteLink,
  deleteBlog,
}) => {
  const history = useHistory();
  const editHandeler = (id) => {
    history.push(`/edit/${id}`);
  };
  return (
    <div className="card card-body col-lg-3 col-md-6 mb-4 shadow shadow-sm">
      <Link to={`/blog/${deleteLink}`}>
        <img
          src={img}
          className="img-fluid z-depth-1 rounded shadow shadow-sm"
          alt="sample"
        />
      </Link>
      <div className="pr-0 pt-4 text-right">
        <a
          className="dropdown-toggle"
          href="#"
          id="optionDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-cog"></i>
        </a>
        <div className="dropdown-menu" aria-labelledby="optionDropdown">
          <button className="dropdown-item text-danger">
            <strong onClick={(e) => deleteBlog(deleteLink)}>
              <span className="fas fa-trash-alt pr-2"></span> Delete
            </strong>
          </button>
          <button className="dropdown-item text-primary">
            <strong onClick={(e) => editHandeler(deleteLink)}>
              <span className="fas fa-edit pr-2"></span> Edit
            </strong>
          </button>
        </div>
      </div>
      <h5 className="font-weight-bold dark-grey-text ">{title}</h5>

      <p className="font-small text-justify">{description}</p>
      <div className="d-flex w-100 justify-content-between mt-auto">
        <span className="">
          <span className="fas fa-calendar-alt pr-1"></span>
          {date.split("T")[0]}
        </span>
        <span className="font-weight-normal text-primary text-right">
          <span className="fas fa-feather-alt pr-1"></span>
          {author}
        </span>
      </div>
    </div>
  );
};

export default connect(null, { deleteBlog })(BlogCard);
