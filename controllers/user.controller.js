

let bc = require("bcrypt");
let jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    //verify existing user with email
    const exsitingUser = await User.findOne({ email });
    if (exsitingUser) {
      res.status(401).json({ msg: "User is allready exist " });
      return ; 
    }
    //ADD NEW USER
    const newUser = new User({
      fname,
      lname,
      email,
      password,
    });
    // cryptage password
    var salt = await bc.genSalt(10);
    var hash = await bc.hashSync(password, salt);
    newUser.password = hash;
    await newUser.save();
    //json web token
    const payload = {
      id: newUser._id,
      // name: newUser.fullName,
      // email: newUser.email,
      // adresse: newUser.adresse,
      // telephone: newUser.telephone,
      // blocking:newUser.blocking,
    };
    const token = jwt.sign(payload, secret);
    //// data qui affiche dans action.js se trouve dans res.send
    res.status(200).send({
      token,
      user: {
        id: newUser._id,
        fname : newUser.fname,
        lname : newUser.lname
        // fullName: newUser.fullName,
        // email: newUser.email,
        // password: newUser.password,
        // adresse: newUser.adresse,
        // userRole: newUser.userRole,
        // telephone: newUser.telephone,
        // // blocking:newUser.blocking
      },
    });
    // res.send(newUser)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Attempt to find the user in the database
    const user = await User.findOne({ email });

    // If user does not exist, respond with an appropriate error message and status code
    if (!user) {
      return res.status(401).json({ message: 'User not found. Please check your credentials.' });
    }

    // If user exists, verify the password
    const isMatch = await bc.compare(password, user.password);
    if (!isMatch) {
      // Password does not match, respond with an appropriate error message and status code
      return res.status(401).json({ message: 'Invalid password. Please try again.' });
    }

    // Generate JWT token
    const payload = {
      id: user._id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      blocking: user.blocking
    };
    const token = jwt.sign(payload, secret);

    // Respond with token and user details
    res.status(200).json({
      token,
      user: {
        id: user._id,
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        userRole: user.userRole,
        blocking: user.blocking
      }
    });
  } catch (error) {
    // Handle errors
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// exports.logIn = async (req, res) => {
//   const { email, password } = req.body;
 
//   try {
//     //verification email
//     const user = await User.findOne({ email });
//     // if (!user) {
//     //   res.status(404).json({ msg: "invalide Email" });
//     //   return ;
//     // }
//     if(!user) { res.status(401).json('email does not exist in the DB'); return;}

//     // verification password
//     const isMatch = await bc.compare(password, user.password);
//     if (!isMatch) return res.status(404).json({ msg: "invalide password" });
     
 

//     const payload = {
//       id: user._id,
//       name: user.fullName,
//       email: user.email,
//       adresse: user.adresse,
//       blocking:user.blocking
//     };
//     const token = jwt.sign(payload, secret);
//     res.status(200).send({
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         password: user.password,
//         adresse: user.adresse,
//         userRole: user.userRole,
//         telephone: user.telephone,
//         blocking:user.blocking
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

exports.auth = (req, res) => {
  res.send(req.user);
};


/////get all user
exports.getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    allUsers
      ? res.status(201).json(allUsers)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//edit user to bloking
exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(204).send(updateUser);
  } catch (error) {
    res.status(504).json({ msg: error.message });
  }
};