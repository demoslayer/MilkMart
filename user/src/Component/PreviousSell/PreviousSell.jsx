import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PreviousSell.css';

function PreviousSell() {

  const userId = localStorage.getItem('userId'); // Get userId from local storage

const [backhide,setbackhide]=useState('hide');
const[showhide,setshowhide]=useState('show');

  const [previousRequests, setPreviousRequests] = useState([]);
  const [msg,setmsg]=useState('');

  const fetchPreviousRequests = async () => {
    setshowhide('hide');
    setbackhide('show');
  try {
    const response = await axios.get(`http://localhost:4000/api/requests/user/${userId}`);
    if(response.data.length===0){
      console.log("No bookings");
    setPreviousRequests([]);
    setmsg("You Haven't Sold anything!!!");
    }
    else{
      setPreviousRequests(response.data);
    // console.log(response.data);
    }
  } catch (error) {
    console.error('Error fetching previous requests:', error);
  }
  }

  return (
      <div className='user-bookings'>
        <h2>Previous Requests</h2>
        <div className='show-back'> 
        {showhide==='show'?<button  onClick={fetchPreviousRequests}>Show</button>:<></>}
        </div>
        <div className='nobook'>
          <p>{msg}</p>
          </div>
    
            {previousRequests.map(request => (
              <div key={request._id} className='use'>
                <p><strong>Product Name: </strong>{request.productName}</p>
                <p><strong>Address: </strong>{request.address}</p>
                <p><strong>Phone No.:</strong> {request.phone}</p>
                <p><strong>Status:</strong> {request.status}</p>
              </div>
            ))}
            {backhide==='show'?<Link to='/request'><button className='back'>Back</button></Link>
           :<></>}
           
          </div>  )
}

export default PreviousSell;

