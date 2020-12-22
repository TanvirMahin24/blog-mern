const express = require("express");
const router = express.Router();
const fs = require("fs");
const { check, validationResult } = require("express-validator");

//Model
const Blog = require("../model/Blog.model");

//Post Router
router.post(
  "/",
  [
    check("title", "Title is required!").not().isEmpty(),
    check("description", "Description is Required!").not().isEmpty(),
    check("author", "Name of Author is required!").not().isEmpty(),
  ],

  async (req, res) => {
    //Validation Error handaling
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }

    try {
      const image = req.file;
      let imgURL = "";
      if (!image) {
        imgURL = "uploads/blank.jpg";
      } else imgURL = image.destination + "/" + image.filename;
      const newBlog = new Blog({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        img: imgURL,
      });
      //Save blog
      const blog = await newBlog.save();

      //response
      res.json(blog);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//GET
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//DELETE blog
router.delete("/:id", async (req, res) => {
  try {
    //fetch the blog
    const blogToDel = await Blog.findById(req.params.id);

    //If there is no blog to delete
    if (!blogToDel) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    //Delete img
    if (blogToDel.img !== "uploads/blank.jpg") {
      fs.unlink(`${blogToDel.img}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }

    //Remove the blog
    await blogToDel.remove();

    //response
    res.json({ msg: "blog removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//GET individual blog
router.get("/:blogId", async (req, res) => {
  try {
    //Get the single blog
    const singleBlog = await Blog.findById(req.params.blogId);
    if (!singleBlog) {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.json(singleBlog);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Blog not found" });
    }
    res.status(500).send("Server Error");
  }
});

//Edit Router
router.put(
  "/:id",
  [
    check("title", "Title is required!").not().isEmpty(),
    check("description", "Description is Required!").not().isEmpty(),
    check("author", "Name of Author is required!").not().isEmpty(),
  ],

  async (req, res) => {
    //Validation Error handaling
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }

    try {
      //Fetch the blog
      const blog = await Blog.findOne({
        _id: req.params.id,
      });
      const image = req.file;
      let imgURL = "";
      let delImg = blog.img;
      if (!image) {
        imgURL = blog.img;
        delImg = "";
      } else imgURL = image.destination + "/" + image.filename;
      const upBlog = {
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        img: imgURL,
      };
      //Save blog
      const finalBlog = await Blog.findByIdAndUpdate(req.params.id, upBlog, {
        new: true,
      });
      if (delImg != "uploads/blank.jpg" && delImg !== "") {
        fs.unlink(`${delImg}`, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
      //response
      res.json(finalBlog);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
