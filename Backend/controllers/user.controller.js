import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../auth/generateToken.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    const savedUser = await user.save();
    res.status(201).send(savedUser);
    console.log("work");
  } catch (error) {
    console.log(error);
    res.status(500).send("error creating user");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send("user not found");
    }
    const match = await bcrypt.compare(password, user.password);
    console.log(match);
    if (!match) {
      res.status(500).send("email or password is incorrect");
    } else {
      const token = jwt.sign({ userId: user._id }, "abc", { expiresIn: "1h" });
      res.cookie("jwt", token, { httpOnly: true, secure: true, maxAge: 3600 });
      console.log(token);
      res.status(200).json({ token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("error loogin");
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
  } catch (error) {
    console.log(error);
  }
};
