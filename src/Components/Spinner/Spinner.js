import React from 'react';
import './Spinner.css'
import PuffLoader from "react-spinners/PuffLoader";

const Spinner = () => {
  return (
    <div className="spinner">
      <PuffLoader color={'#F8E71C'} size={100}/>
    </div>
  );
};

export default Spinner;