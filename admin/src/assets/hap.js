
const stylists = {
    guntur: [
      {
        _id: 1,
        name: "Stylist 1",
        email: "stylist1@example.com",
        location: "Guntur",
        age: 30,
        gender: "Female",
        mobileNumber: "1234567890"
      },
      {
        _id: 1,
        name: "Stylist 2",
        email: "stylist2@example.com",
        location: "Guntur",
        age: 30,
        gender: "Female",
        mobileNumber: "12347890"
      },{
        _id: 1,
        name: "Stylist 3",
        email: "stylist3@example.com",
        location: "Guntur",
        age: 30,
        gender: "Female",
        mobileNumber: "99567890"
      },{
        _id: 1,
        name: "Stylist 4",
        email: "stylist4@example.com",
        location: "Guntur",
        age: 40,
        gender: "Female",
        mobileNumber: "1234567890"
      },{
        _id: 1,
        name: "Stylist 1",
        email: "stylist1@example.com",
        location: "Guntur",
        age: 30,
        gender: "Female",
        mobileNumber: "1234567890"
      },
  
      // Add more stylists for Guntur if needed
    ],
    vijayawada: [
      {
        _id: 2,
        name: "viju",
        email: "viju@example.com",
        location: "Vijayawada",
        age: 25,
        gender: "Male",
        mobileNumber: "9876543210"
      },
      {
        _id: 2,
        name: "viju1",
        email: "viju1@example.com",
        location: "Vijayawada",
        age: 25,
        gender: "Male",
        mobileNumber: "9876543210"
      },
      {
        _id: 2,
        name: "viju",
        email: "viju@example.com",
        location: "Vijayawada",
        age: 25,
        gender: "Male",
        mobileNumber: "9876543210"
      },
      // Add more stylists for Vijayawada if needed
    ]
  };
  
  // Route to fetch stylists based on location
  app.get("/bookstylists/:location", (req, res) => {
    const { location } = req.params;
    const stylistData = stylists[location] || [];
    res.json(stylistData);
  });
  