// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const showToast = (message, type = 'success') => {
//   toast[type](message, {
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//   });
// };

// const Toast = () => {
//   return <ToastContainer />;
// };

// export default Toast;





// components/Snackbar/Toast.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message, type = 'success') => {
  toast[type](message, {
    position: "top-right", // Changed to top-center for better mobile visibility
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: `${type === 'success' ? 'bg-green-50' : 'bg-red-50'} sm:w-auto w-full !mx-0 !rounded-none sm:!rounded-md border-l-4 ${type === 'success' ? 'border-green-500' : 'border-red-500'}`,
    bodyClassName: `text-sm sm:text-base ${type === 'success' ? 'text-green-800' : 'text-red-800'}`,
    progressClassName: `${type === 'success' ? '!bg-green-500' : '!bg-red-500'}`,
    style: {
      maxWidth: '100%',
      width: '100%'
    }
  });
};

const Toast = () => {
  return (
    <ToastContainer 
      position="top-center" // Changed to top-center
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className="!z-[9999] !w-full sm:!w-auto" // Added higher z-index
      toastClassName="sm:w-auto !w-full !mx-0 !rounded-none sm:!rounded-md"
      limit={3}
      style={{
        width: '100%',
        maxWidth: '100%'
      }}
    />
  );
};

export default Toast;