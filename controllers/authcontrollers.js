const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, age } = req.body;

  const existingUser = await User.findOne(this.email) 
  if (existingUser)
  {return res.status(409).json({ message: "Email already Exists" });} 


  const user = new User();
  user.name = name;
  user.email = email;
  user.password = password;
  user.age = age;


  await user.save()
  res.status(201).json(user);
}


exports.login = async () => {

  const { email, password } = req.body;
  const user = await user.findOne({ email });

  if (!user) return res.status(404).json({ message: "Invalid Cridentials" });

  const isMatch = user.matchPassword(password, user.password);
  if (!isMatch) return res.status(404).json({ message: "Invalid Cridentials" });

  const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);

  res.json({token});

}
