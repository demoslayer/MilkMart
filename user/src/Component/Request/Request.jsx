
// import React, { useState, useEffect } from 'react';
// import './Request.css'
// import axios from 'axios';

// const Request = () => {
//   const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps Geocoding API key
//   const [productName, setProductName] = useState('');
//   const [address, setAddress] = useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [locationName, setLocationName] = useState('');
//   const [requestId, setRequestId] = useState(null); // Store the request ID
//   const [requestStatus, setRequestStatus] = useState('');
//   const [userDetails, setUserDetails] = useState(null); // Store the user's entered details
//   const [isNewRequest, setIsNewRequest] = useState(true); // Flag to indicate whether it's a new request

//   const [state,setState]=useState(true);


//   useEffect(() => {
//     if (requestId) {
//       const intervalId = setInterval(fetchRequestStatus, 5000); // Fetch request status every 5 seconds
//       return () => clearInterval(intervalId); // Cleanup interval on component unmount
//     }
//   }, [requestId]); // Run effect when requestId changes

//   const fetchRequestStatus = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/api/request/status/${requestId}`);
//       setRequestStatus(response.data.status);
//     } catch (error) {
//       console.error('Error fetching request status:', error);
//     }
//   };

//   const handleRequest = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:4000/api/request', {
//         productName,
//         address,
//         location: location ? `${location.coords.latitude},${location.coords.longitude}` : null,
//         locationName
//       });
//       console.log(response.data);
//       setRequestId(response.data.id); // Set the requestId returned from the server
//       setUserDetails({ productName, address }); // Store the user's entered details
//       alert('Request sent!');
//       setProductName('');
//       setAddress('');
//       setState(false);
//       setLocation(null);
//       setLocationName('');
//       setIsNewRequest(false); // Set isNewRequest to false after the first request is made
//     } catch (error) {
//       console.error('Error sending request:', error);
//       alert('Failed to send request. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

 
//   const getLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     setLoading(true);
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         setLocation(position);
//         fetchLocationName(position.coords.latitude, position.coords.longitude);
//         setLoading(false);
//       },
//       error => {
//         console.error('Error getting location:', error);
//         alert('Failed to get your location. Please try again.');
//         setLoading(false);
//       }
//     );
//   };

//   const fetchLocationName = async (latitude, longitude) => {
//     try {
//       const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`);
//       if (response.data.results && response.data.results.length > 0) {
//         setLocationName(response.data.results[0].formatted_address);
//       }
//     } catch (error) {
//       console.error('Error fetching location name:', error);
//     }
//   };

//   const handleNewRequest = () => {
//     setUserDetails(null); // Clear previous user details
//     setIsNewRequest(true); // Set isNewRequest to true to show input fields for a new request
//   };

//   return (
//     <div className='request'>
//         <div className="request-container">
//       <h1>User Panel</h1>

//       {!isNewRequest && userDetails && !state && (
//         <div className='request-details'>
//           <h2>Previous Request Details</h2>
//           <p>Product Name: {userDetails?.productName}</p>
//           <p>Address: {userDetails?.address}</p>
//           <p>Status: {requestStatus}</p>
//           <button onClick={handleNewRequest}>New Request</button>
//         </div>
//       )} 


//       {isNewRequest && (
//         <>
//         <div className="request-fields">
//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             required="true"
//           />
//           <input
//             type="text"
//             placeholder="Enter address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           </div>
//           <button onClick={getLocation} disabled={loading}>
//             {loading ? 'Fetching Location...' : 'Get Location'}
//           </button>
//           {locationName && <p>Location: {locationName}</p>}
//           <button onClick={handleRequest} disabled={loading || !location}>
//             {loading ? 'Sending Request...' : 'Request to Sell'}
//           </button>
//         </>
//       )}
//       </div>
        
//     </div>
//   );
// };

// export default Request;






import React, { useState, useEffect } from 'react';
import './Request.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Request = () => {
  const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps Geocoding API key
  const [productName, setProductName] = useState('');
  const [address, setAddress] = useState('');
  const [phone,setphone]=useState('');
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationName, setLocationName] = useState('');
  const [requestId, setRequestId] = useState(null); // Store the request ID
  const [requestStatus, setRequestStatus] = useState('');
  const [userDetails, setUserDetails] = useState(null); // Store the user's entered details
  const [isNewRequest, setIsNewRequest] = useState(true); // Flag to indicate whether it's a new request
  // const [previousRequests, setPreviousRequests] = useState([]);
  const [state, setState] = useState(true);

  const userId = localStorage.getItem('userId'); // Get userId from local storage

  useEffect(() => {
    if (requestId) {
      const intervalId = setInterval(fetchRequestStatus, 5000); // Fetch request status every 5 seconds
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [requestId]); // Run effect when requestId changes

  const fetchRequestStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/request/status/${requestId}`);
      setRequestStatus(response.data.status);
    } catch (error) {
      console.error('Error fetching request status:', error);
    }
  };

  const handleRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/api/request', {
        productName,
        phone,
        address,
        location: location ? `${location.coords.latitude},${location.coords.longitude}` : null,
        locationName,
        userId // Pass userId when making a request
      });
      console.log(response.data);
      setRequestId(response.data.id); // Set the requestId returned from the server
      setUserDetails({ productName, address }); // Store the user's entered details
      alert('Request sent!');
      setProductName('');
      setAddress('');
      setState(false);
      setLocation(null);
      setLocationName('');
      setIsNewRequest(false); // Set isNewRequest to false after the first request is made
    } catch (error) {
      console.error('Error sending request:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation(position);
        fetchLocationName(position.coords.latitude, position.coords.longitude);
        setLoading(false);
      },
      error => {
        console.error('Error getting location:', error);
        alert('Failed to get your location. Please try again.');
        setLoading(false);
      }
    );
  };

  const fetchLocationName = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`);
      if (response.data.results && response.data.results.length > 0) {
        setLocationName(response.data.results[0].formatted_address);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  const [previousRequests, setPreviousRequests] = useState([]);
  const [msg,setmsg]=useState('');
// working

  const fetchPreviousRequests = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/requests/user/${userId}`);
      if(response.data.length===0){
        console.log("No bookings");
      setPreviousRequests([]);
      setmsg("no request");
      }
      else{
        setPreviousRequests(response.data);
      // console.log(response.data);
      }
    } catch (error) {
      console.error('Error fetching previous requests:', error);
    }
  }


  const handleNewRequest = () => {
    setUserDetails(null); // Clear previous user details
    setIsNewRequest(true); // Set isNewRequest to true to show input fields for a new request
  };

  return (
    <div className='request'>
      <div className="request-container">
        <h1>User Panel</h1>

        {!isNewRequest && userDetails && !state && (
          <div className='request-details'>
            <h2>Previous Request Details</h2>
            <p>Product Name: {userDetails?.productName}</p>
            <p>Address: {userDetails?.address}</p>
            <p>Status: {requestStatus}</p>
            <button onClick={handleNewRequest}>New Request</button>
          </div>
        )}

        {isNewRequest && (
          <>
            <div className="request-fields">
              <input
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Enter Phone No."
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button onClick={getLocation} disabled={loading}>
              {loading ? 'Fetching Location...' : 'Get Location'}
            </button>
            {locationName && <p>Location: {locationName}</p>}
            <button onClick={handleRequest} disabled={loading || !location}>
              {loading ? 'Sending Request...' : 'Request to Sell'}
            </button>
          </>
        )}
       <Link to='/previous'><button>Show Previous Requests</button> </Link> 

  
      </div>
    </div>
  );
};

export default Request;


