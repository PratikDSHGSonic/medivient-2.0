// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

// const WaitlistModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: ''
//   });
  
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setIsAnimating(true);
//     }
//   }, [isOpen]);

//   const handleClose = () => {
//     setIsAnimating(false);
//     setTimeout(onClose, 300); // Match this with the transition duration
//   };




// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/waitlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         // Show success message
//         alert('Successfully joined the waitlist!');
//         onClose();
//       } else {
//         // Show error message
//         alert(data.message || 'Something went wrong');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to join waitlist. Please try again.');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   if (!isOpen && !isAnimating) return null;

//   return (
//     <div 
//       className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4
//         transition-opacity duration-300 ease-in-out
//         ${isAnimating && isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}
//         ${!isOpen && 'pointer-events-none'}`}
//       onClick={handleClose}
//     >
//       <div 
//         className={`bg-white rounded-lg p-6 sm:p-8 w-full max-w-md relative mx-4 sm:mx-auto
//           transition-all duration-300 ease-in-out
//           ${isAnimating && isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
//         `}
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Close button */}
//         <button 
//           onClick={handleClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
//         >
//           <X size={24} />
//         </button>

//         {/* Form header */}
//         <h2 className="text-xl sm:text-2xl font-semibold text-[#112d4e] mb-6">Join Waitlist</h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md 
//                 transition-all duration-200 ease-in-out
//                 focus:ring-2 focus:ring-[#ffc83f] focus:border-transparent outline-none
//                 hover:border-[#ffc83f]"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md 
//                 transition-all duration-200 ease-in-out
//                 focus:ring-2 focus:ring-[#ffc83f] focus:border-transparent outline-none
//                 hover:border-[#ffc83f]"
//               placeholder="Enter your email"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-6 py-2.5 mt-2 bg-[#ffc83f] text-[#112d4e] font-semibold rounded-md 
//               transition-all duration-200 ease-in-out
//               hover:opacity-90 hover:scale-[0.98] active:scale-95"
//           >
//             Join Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default WaitlistModal;







import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { showToast } from '../Snackbar/Toast';


const API_URL = process.env.NEXT_PUBLIC_API_URL ;

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        }
        if (value.length < 2) {
          return 'Name must be at least 2 characters';
        }
        return '';
      case 'email':
        if (!value) {
          return 'Email is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
      // Reset form and errors when closing
      setFormData({ name: '', email: '' });
      setErrors({ name: '', email: '' });
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email)
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showToast('Successfully joined the waitlist!', 'success');
        handleClose();
      } else {
        showToast(data.message || 'Something went wrong', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('Failed to join waitlist. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center p-4
        transition-opacity duration-300 ease-in-out
        ${isAnimating && isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}
        ${!isOpen && 'pointer-events-none'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white rounded-lg p-6 sm:p-8 w-full max-w-md relative mx-4 sm:mx-auto
          transition-all duration-300 ease-in-out
          ${isAnimating && isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-[#112d4e] mb-6">Join Waitlist</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md 
                transition-all duration-200 ease-in-out
                focus:ring-2 focus:ring-[#ffc83f] focus:border-transparent outline-none
                hover:border-[#ffc83f]
                ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 transition-all duration-200">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md 
                transition-all duration-200 ease-in-out
                focus:ring-2 focus:ring-[#ffc83f] focus:border-transparent outline-none
                hover:border-[#ffc83f]
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 transition-all duration-200">
                {errors.email}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-2.5 mt-2 bg-[#ffc83f] text-[#112d4e] font-semibold rounded-md 
              transition-all duration-200 ease-in-out
              hover:opacity-90 hover:scale-[0.98] active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
          >
            {isSubmitting ? 'Joining...' : 'Join Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal;