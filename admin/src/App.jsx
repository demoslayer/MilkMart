
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [productRequests, setProductRequests] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/requests');
//       setProductRequests(response.data);
//     } catch (error) {
//       console.error('Error fetching requests:', error);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`http://localhost:4000/api/requests/${id}/approve`);
//       alert('Request approved!');
//       fetchData();
//     } catch (error) {
//       console.error('Error approving request:', error);
//       alert('Failed to approve request. Please try again.');
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.put(`http://localhost:4000/api/requests/${id}/reject`);
//       alert('Request rejected!');
//       fetchData();
//     } catch (error) {
//       console.error('Error rejecting request:', error);
//       alert('Failed to reject request. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <h2>Product Requests</h2>
//       <ul>
//         {productRequests.map((request) => (
//           <li key={request.id}>
//             {request.productName} - {request.status}
//             {request.location && ( // Display location if available
//               <>
//                 <br />
//                 Location: {request.location}
//               </>
//             )}
//             {request.status === 'pending' && (
//               <>
//                 <button onClick={() => handleApprove(request.id)}>Approve</button>
//                 <button onClick={() => handleReject(request.id)}>Reject</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
// base





//pure wrkinh


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [productRequests, setProductRequests] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/requests');
//       setProductRequests(response.data);
//     } catch (error) {
//       console.error('Error fetching requests:', error);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`http://localhost:4000/api/requests/${id}/approve`);
//       alert('Request approved!');
//       fetchData();
//     } catch (error) {
//       console.error('Error approving request:', error);
//       alert('Failed to approve request. Please try again.');
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       await axios.put(`http://localhost:4000/api/requests/${id}/reject`);
//       alert('Request rejected!');
//       fetchData();
//     } catch (error) {
//       console.error('Error rejecting request:', error);
//       alert('Failed to reject request. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <h2>Product Requests</h2>
//       <ul>
//         {productRequests.map((request) => (
//           <li key={request._id}>
//             {request.productName} - {request.status}
//             <br />
//             Phone: {request.phone}
//             {request.location && (
//               <>
//                 <br />
//                 Location: {request.location}
//               </>
//             )}
//             {request.status === 'pending' && (
//               <>
//                 <button onClick={() => handleApprove(request._id)}>Approve</button>
//                 <button onClick={() => handleReject(request._id)}>Reject</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [productRequests, setProductRequests] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 15000);

    // Fetch data initially when the component mounts
    fetchData();

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/requests');
      setProductRequests(response.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/requests/${id}/approve`);
      alert('Request approved!');
      fetchData();
    } catch (error) {
      console.error('Error approving request:', error);
      alert('Failed to approve request. Please try again.');
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/requests/${id}/reject`);
      alert('Request rejected!');
      fetchData();
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert('Failed to reject request. Please try again.');
    }
  };

  const handlePreviousApprovals = () => {
    setShowAll(!showAll);
  };

  const filteredRequests = showAll ? productRequests : productRequests.filter(request => request.status === 'pending');

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Product Requests</h2>
      <button onClick={handlePreviousApprovals}>{showAll ? 'Hide Previous Approvals' : 'Show Previous Approvals'}</button>
      <div className='used'>
        {filteredRequests.map((request) => (
          <div className='use' key={request._id}>
            {request.productName} - {request.status}
            <br />
            Phone: {request.phone}
            {request.location && (
              <>
                <br />
                Location: {request.location}
              </>
            )}
            {request.status === 'pending' && (
              <>
                <button onClick={() => handleApprove(request._id)}>Approve</button>
                <button onClick={() => handleReject(request._id)}>Reject</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
