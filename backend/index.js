


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());


// mongodb+srv://byasyadav:<db_password>@cluster0.oj98r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect("mongodb+srv://byasyadav:Papathegreatman@cluster0.oj98r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/milkmt", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  logindata: Object,
  date: {
    type: Date,
    default: Date.now
  }
});

const productRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  productName: String,
  phone:Number,
  address: String,
  location: String,
  locationName: String,
  status: {
    type: String,
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Users = mongoose.model('Users', userSchema);
const ProductRequest = mongoose.model('ProductRequest', productRequestSchema);

app.post('/signup', async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({ success: false, errors: "User Already exist!" });
    }
    let login = {};
    for (let index = 0; index < 300; index++) {
      login[index] = 0;
    }
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      logindata: login
    });

    const data = {
      user: {
        id: user.id
      }
    }
    await user.save();

    const token = jwt.sign(data, 'secret_chat');
    res.json({ success: true, token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      const passCompare = req.body.password === user.password;
      if (passCompare) {
        const data = {
          user: {
            id: user.id
          }
        }
        const token = jwt.sign(data, 'secret_chat');
        res.json({ success: true, token, userId: user.id });
      } else {
        res.json({ success: false, error: "Wrong password" });
      }
    } else {
      res.json({ success: false, error: "Wrong email id" });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.post('/api/request', async (req, res) => {
  try {
    const { productName,phone, address, location, locationName, userId } = req.body;
    const newRequest = new ProductRequest({
      userId,
      productName,
      phone,
      address,
      location,
      locationName
    });
    await newRequest.save();
    res.status(201).json({ id: newRequest._id });
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(500).json({ error: 'Failed to create request' });
  }
});

app.get('/api/requests/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userRequests = await ProductRequest.find({ userId });
    res.json(userRequests);
  } catch (error) {
    console.error('Error fetching user requests:', error);
    res.status(500).json({ error: 'Failed to fetch user requests' });
  }
});
// app.get('/api/requests/user/:userId', async (req, res) => {
//   try {
//     const authToken=req.headers.authorization;
//     const tokenData=jwt.verify(authToken,'secret_chat');
//     const userId =tokenData.userId;
//     const userRequests = await ProductRequest.find({ userId });
//     res.json({userRequests,success:true});
//   } catch (error) {
//     console.error('Error fetching user requests:', error);
//     res.status(500).json({ error: 'Failed to fetch user requests' });
//   }
// });



app.get('/api/requests', async (req, res) => {
  try {
    const productRequests = await ProductRequest.find();
    res.json(productRequests);
  } catch (error) {
    console.error('Error fetching product requests:', error);
    res.status(500).json({ error: 'Failed to fetch product requests' });
  }
});

app.put('/api/requests/:id/approve', async (req, res) => {
  try {
    const requestId = req.params.id;
    const request = await ProductRequest.findByIdAndUpdate(requestId, { status: 'approved' });
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.sendStatus(200);
  } catch (error) {
    console.error('Error approving request:', error);
    res.status(500).json({ error: 'Failed to approve request' });
  }
});

app.put('/api/requests/:id/reject', async (req, res) => {
  try {
    const requestId = req.params.id;
    const request = await ProductRequest.findByIdAndUpdate(requestId, { status: 'rejected' });
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.sendStatus(200);
  } catch (error) {
    console.error('Error rejecting request:', error);
    res.status(500).json({ error: 'Failed to reject request' });
  }
});

app.get('/api/request/status/:id', async (req, res) => {
  try {
    const requestId = req.params.id;
    const request = await ProductRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json({ status: request.status });
  } catch (error) {
    console.error('Error fetching request status:', error);
    res.status(500).json({ error: 'Failed to fetch request status' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

