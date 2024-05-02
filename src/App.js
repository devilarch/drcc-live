import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
//import { useNavigate } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

const AccountForm = () => {
  // State for managing account number input
  const [accountNumber, setAccountNumber] = useState('');
  // State for managing pop-up message
  const [popupMessage, setPopupMessage] = useState('');
  //const history = useNavigate()
  // Function to handle account number input change
  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
    setPopupMessage('');
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // API endpoint URL
    const apiUrl = 'https://www.bsefcl.bihar.gov.in/api/loanRequestStatus'; // Replace 'example.com/api' with your actual API endpoint URL

    // Payload for the API request
    const payload = {
      key: 'LOAN_REQ_STATUS',
      whereClause: '',
      bindParameters: {
        source_registrationid: accountNumber, // Use the entered account number
        ss_companyid: '5000',
        ss_module_id: '1'
      }
    };
    const apiU = `https://www.bsefcl.bihar.gov.in//api///${accountNumber}`;

    try {
      // Make POST request to the API
     // const response = await axios.post(apiUrl, payload);
        const response = await axios.get(apiU)
      // Check if validation_status is 'Success' or 'Failure' in the response
      if (response.data.validation_status === 'Success') {
        // Move to next page or perform other action
        // Move to next page
        //const stage = response.data.recordList[0].STAGE;
        const stage = response.data.name;
        setPopupMessage(`Payment Status: ${stage}`);
      } else {
        // Show pop-up message if account number does not exist
        setPopupMessage('The account number you entered does not exist.');
      }
    } catch (error) {
      // Handle error if API request fails
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2' }}>
      <div style={{ width: '300px', height: '200px', backgroundColor: '#e6e6e6', borderRadius: '10px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Enter Account Number</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </label>
          <br />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
        {popupMessage && (
          <div style={{ position: 'absolute', top: '120px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '40px', border: '2px solid black', borderRadius: '5px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)' }}>
            {popupMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountForm;

