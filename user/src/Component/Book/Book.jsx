import React, { useState } from "react";
import axios from "axios";

function Book() {
  const [location, setLocation] = useState("");
  const [stylists, setStylists] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch stylist data based on location
  const fetchStylists = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/bookstylists/${location}`);
      setStylists(response.data);
    } catch (error) {
      console.error("Error fetching stylist data:", error);
      setError("Error fetching stylist data. Please try again later.");
    }
  };

 // Handle location change
const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    // Clear stylist data when location changes
    setStylists([]);
    // Fetch stylist data for the new location if it's not empty
    if (newLocation) {
      fetchStylists();
    }
  };
  

  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Back button */}
          <button className="btn btn-primary" onClick={() => window.history.back()}>Back</button>
          {/* Title */}
          <span className="navbar-brand mx-auto">Book a Stylist</span>
        </div>
      </nav>

      {/* Dropdown button */}
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <select className="form-select" value={location} onChange={handleLocationChange} onClick={fetchStylists}>
            <option value="">Select Location</option>
            <option value="guntur">Guntur</option>
            <option value="vijayawada">Vijayawada</option>
          </select>
        </div>
      </div>


      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {stylists.map(stylist => (
              <tr key={stylist._id}>
                <td>{stylist.name}</td>
                <td>{stylist.email}</td>
                <td>{stylist.location}</td>
                <td>{stylist.age}</td>
                <td>{stylist.gender}</td>
                <td>{stylist.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Book;
