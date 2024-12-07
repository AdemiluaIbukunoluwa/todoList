const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./models/userdata.model");
const Category = require("./models/category.model");
const { decrypt } = require("./utils/utility");

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

app.post("/createuser", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ name: name });
    // check if username exists
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    res.status(200).json(user._id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      // // If the passwords match, the login is successful
      if (decrypt(password) === decrypt(user.password)) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
      // if the user data is not found
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// pass the user id stored in local storage to the backend
app.delete("/deleteuser", async (req, res) => {
  try {
    const { id } = req.body;
    await User.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/createcategory", async (req, res) => {
  try {
    const {category } = req.body
    const catg = new Category(category)
    await catg.save();
    res.status(200).json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message)
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // get the categories associated with the user id
    const categories = await Category.find({userId: id});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getcategory/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById({ _id: id });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/deletecategory/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/addTask/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const categories = await Category.findByIdAndUpdate(
      id, 
      // add task to the list of tasks
      { $push: { tasks: req.body.task } },
      { new: true, runValidators: true }
    );
    res.status(200).json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


app.get("/getuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



MONGODB_URI = "mongodb+srv://ademiluatise:00YOjr9FfYFDeKM4@data.a7eqv.mongodb.net/?retryWrites=true&w=majority&appName=data"
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
