import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Test() {
  const closeAfter15 = () => toast("Will close after 15s", { autoClose: 15000 });

  const closeAfter7 = () => toast("Will close after 7s", { autoClose: 7000 });

  return (
    <div>
      <button onClick={closeAfter15}>Close after 15 seconds</button>
      <button onClick={closeAfter7}>Close after 7 seconds</button>
      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default Test