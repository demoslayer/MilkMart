// // src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [productName, setProductName] = useState('');

//   const handleRequest = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/api/request', {
//         productName
//       });
//       console.log(response.data);
//       alert('Request sent!');
//       setProductName('');
//     } catch (error) {
//       console.error('Error sending request:', error);
//       alert('Failed to send request. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <button onClick={handleRequest}>Request to Sell</button>
//     </div>
//   );
// };

// export default App;



// src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [productName, setProductName] = useState('');
//   const [location, setLocation] = useState('');

//   const handleRequest = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/api/request', {
//         productName,
//         location // Include location data in the request
//       });
//       console.log(response.data);
//       alert('Request sent!');
//       setProductName('');
//       setLocation('');
//     } catch (error) {
//       console.error('Error sending request:', error);
//       alert('Failed to send request. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <button onClick={handleRequest}>Request to Sell</button>
//     </div>
//   );
// };

// export default App;

// AIzaSyA2ni4BDm2EKYco5yLLe-i1l9KeTCJEUJg

// src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [productName, setProductName] = useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleRequest = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post('http://localhost:4000/api/request', {
//         productName,
//         location: location ? `${location.coords.latitude},${location.coords.longitude}` : null
//       });
//       console.log(response.data);
//       alert('Request sent!');
//       setProductName('');
//       setLocation(null);
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
//         setLoading(false);
//       },
//       error => {
//         console.error('Error getting location:', error);
//         alert('Failed to get your location. Please try again.');
//         setLoading(false);
//       }
//     );
//   };

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <button onClick={getLocation} disabled={loading}>
//         {loading ? 'Fetching Location...' : 'Get Location'}
//       </button>
//       <button onClick={handleRequest} disabled={loading || !location}>
//         {loading ? 'Sending Request...' : 'Request to Sell'}
//       </button>
//     </div>
//   );
// };

// export default App;


// working one

// src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const API_KEY="AIzaSyA2ni4BDm2EKYco5yLLe-i1l9KeTCJEUJg";
//   const [productName, setProductName] = useState('');
//   const [address,setAdress]=useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [locationName, setLocationName] = useState('');

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
//       alert('Request sent!');
//       setProductName('');
//       setLocation(null);
//       setLocationName('');
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


//   // Need payment for the map to run 
//   // const fetchLocationName = async (latitude, longitude) => {
//   //   try {
//   //     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`);
//   //     if (response.data.status === 'OK') {
//   //       const addressComponents = response.data.results[0].address_components;
//   //       let formattedAddress = '';
//   //       for (let i = 0; i < addressComponents.length; i++) {
//   //         formattedAddress += addressComponents[i].long_name + ', ';
//   //       }
//   //       formattedAddress = formattedAddress.slice(0, -2); // Remove the last comma and space
//   //       setLocationName(formattedAddress);
//   //     } else {
//   //       console.error('Geocoding API Error:', response.data.error_message);
//   //       alert('Failed to fetch location name. Please try again.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching location name:', error);
//   //     alert('Failed to fetch location name. Please try again.');
//   //   }
//   // };
  

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
      
//       <button onClick={getLocation} disabled={loading}>
//         {loading ? 'Fetching Location...' : 'Get Location'}
//       </button>
//       {locationName && <p>Location: {locationName}</p>}
//       <button onClick={handleRequest} disabled={loading || !location}>
//         {loading ? 'Sending Request...' : 'Request to Sell'}
//       </button>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps Geocoding API key
//   const [productName, setProductName] = useState('');
//   const [address, setAddress] = useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [locationName, setLocationName] = useState('');
//   const [requestStatus, setRequestStatus] = useState('');

//   useEffect(() => {
//     const intervalId = setInterval(fetchRequestStatus, 5000); // Fetch request status every 5 seconds
//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, []);

//   const fetchRequestStatus = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/request/status');
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
//       alert('Request sent!');
//       setProductName('');
//       setAddress('');
//       setLocation(null);
//       setLocationName('');
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

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />
//       <button onClick={getLocation} disabled={loading}>
//         {loading ? 'Fetching Location...' : 'Get Location'}
//       </button>
//       {locationName && <p>Location: {locationName}</p>}
//       <button onClick={handleRequest} disabled={loading || !location}>
//         {loading ? 'Sending Request...' : 'Request to Sell'}
//       </button>
//       {requestStatus && <p>Status: {requestStatus}</p>}
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps Geocoding API key
//   const [productName, setProductName] = useState('');
//   const [address, setAddress] = useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [locationName, setLocationName] = useState('');
//   const [requestId, setRequestId] = useState(null); // Store the request ID
//   const [requestStatus, setRequestStatus] = useState('');

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
//       alert('Request sent!');
//       setRequestId(response.data.id); // Set the requestId returned from the server
//       setProductName('');
//       setAddress('');
//       setLocation(null);
//       setLocationName('');
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

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />
//       <button onClick={getLocation} disabled={loading}>
//         {loading ? 'Fetching Location...' : 'Get Location'}
//       </button>
//       {locationName && <p>Location: {locationName}</p>}
//       <button onClick={handleRequest} disabled={loading || !location}>
//         {loading ? 'Sending Request...' : 'Request to Sell'}
//       </button>
//       {requestStatus && <p>Status: {requestStatus}</p>}
//       <div>
//         <p>Product Name: {productName}</p>
//         <p>Address :{address}</p>
//         <p>Status: {requestStatus}</p>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps Geocoding API key
//   const [productName, setProductName] = useState('');
//   const [address, setAddress] = useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [locationName, setLocationName] = useState('');
//   const [requestId, setRequestId] = useState(null); // Store the request ID
//   const [requestStatus, setRequestStatus] = useState('');
//   const [userDetails, setUserDetails] = useState(null); // Store the user's entered details

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
//       setLocation(null);
//       setLocationName('');
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

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />
//       <button onClick={getLocation} disabled={loading}>
//         {loading ? 'Fetching Location...' : 'Get Location'}
//       </button>
//       {locationName && <p>Location: {locationName}</p>}
//       <button onClick={handleRequest} disabled={loading || !location}>
//         {loading ? 'Sending Request...' : 'Request to Sell'}
//       </button>
//       {requestId && (
//         <div>
//           <h2>User Details</h2>
//           <p>Product Name: {userDetails?.productName}</p>
//           <p>Address: {userDetails?.address}</p>
//           <p>Status: {requestStatus}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// working fine
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const API_KEY = "YOUR_API_KEY"; // Replace with your Google Maps Geocoding API key
//   const [productName, setProductName] = useState('');
//   const [address, setAddress] = useState('');
//   const [location, setLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [locationName, setLocationName] = useState('');
//   const [requestId, setRequestId] = useState(null); // Store the request ID
//   const [requestStatus, setRequestStatus] = useState('');
//   const [userDetails, setUserDetails] = useState({
//     productName: localStorage.getItem('productName') || '',
//     address: localStorage.getItem('address') || ''
//   }); // Store the user's entered details

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
//       localStorage.setItem('productName', productName); // Store product name in local storage
//       localStorage.setItem('address', address); // Store address in local storage
//       alert('Request sent!');
//       setProductName('');
//       setAddress('');
//       setLocation(null);
//       setLocationName('');
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

//   return (
//     <div>
//       <h1>User Panel</h1>
//       <input
//         type="text"
//         placeholder="Enter product name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />
//       <button onClick={getLocation} disabled={loading}>
//         {loading ? 'Fetching Location...' : 'Get Location'}
//       </button>
//       {locationName && <p>Location: {locationName}</p>}
//       <button onClick={handleRequest} disabled={loading || !location}>
//         {loading ? 'Sending Request...' : 'Request to Sell'}
//       </button>
//       {requestStatus && (
//         <div>
//           <h2>User Details</h2>
//           <p>Product Name: {userDetails?.productName}</p>
//           <p>Address: {userDetails?.address}</p>
//           <p>Status: {requestStatus}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
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
//     <div>
//       <h1>User Panel</h1>
//       {isNewRequest && (
//         <>
//           <input
//             type="text"
//             placeholder="Enter product name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <button onClick={getLocation} disabled={loading}>
//             {loading ? 'Fetching Location...' : 'Get Location'}
//           </button>
//           {locationName && <p>Location: {locationName}</p>}
//           <button onClick={handleRequest} disabled={loading || !location}>
//             {loading ? 'Sending Request...' : 'Request to Sell'}
//           </button>
//         </>
//       )}
//       {!isNewRequest && userDetails && (
//         <div>
//           <h2>Previous Request Details</h2>
//           <p>Product Name: {userDetails?.productName}</p>
//           <p>Address: {userDetails?.address}</p>
//           <p>Status: {requestStatus}</p>
//           <button onClick={handleNewRequest}>New Request</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



import React from 'react'
import Request from './Component/Request/Request';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import LoginSignup from './Component/LoginSignup/LoginSignup';
import Book from './Component/Book/Book';
import BeforeHome from './Component/BeforeHome/BeforeHome';
import PreviousSell from './Component/PreviousSell/PreviousSell';
function App() {
  return (
   <BrowserRouter>
   {/* <Navbar/> */}
   <Routes>
   <Route path='/' element={<BeforeHome/>}/>
   <Route path='/previous' element={<PreviousSell/>}/>
    <Route path='/request' element={<Request/>}/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<LoginSignup/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App;