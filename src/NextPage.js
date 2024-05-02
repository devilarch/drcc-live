import React from 'react';
import reportWebVitals from './reportWebVitals';
import { useLocation } from "react-router-dom";
const NextPage = () => {
     const location = useLocation();
    let stateData = location.state
 reportWebVitals(console.log(stateData["acn"]));
   // reportWebVitals(console.log(location.response));
  // Check if location object exists and has a state property
  if (!location.state) {
    // Handle case where state object is undefined
    return <div>No data available</div>;
  }

  // Destructure accountNumber and response from location.state
  const { accountNumber, response } = location.state;

  // Check if accountNumber or response is undefined
  if (!accountNumber || !response) {
    // Handle case where accountNumber or response is undefined
    return <div>No data available</div>;
  }
  // Extract desired data from response
  const { STAGE, REQUESTED_LOAN_AMOUNT, APPROVED_LOAN_AMOUNT, LOAN_APPROVED_DATE, STATUS_OF_DISBURSED_LOAN, STATUS_OF_LOAN_REQUEST } = response.recordList[0];

  return (
    <div>
      <h1>Account Number: {accountNumber}</h1>
      <table>
        <tbody>
          <tr>
            <td>Loan Status</td>
            <td>{STAGE}</td>
          </tr>
          <tr>
            <td>Requested Loan Amount</td>
            <td>{REQUESTED_LOAN_AMOUNT}</td>
          </tr>
          <tr>
            <td>Approved Loan Amount</td>
            <td>{APPROVED_LOAN_AMOUNT}</td>
          </tr>
          <tr>
            <td>Loan Approved Date</td>
            <td>{LOAN_APPROVED_DATE}</td>
          </tr>
          <tr>
            <td>Status of Disbursed Loan</td>
            <td>{STATUS_OF_DISBURSED_LOAN}</td>
          </tr>
          <tr>
            <td>Status of Loan Request</td>
            <td>{STATUS_OF_LOAN_REQUEST}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NextPage;

