// import React, { useState } from 'react';
// import { IoIosArrowDropdownCircle } from "react-icons/io";

// const WorkModeDropdown = () => {
//     const [selectedMode, setSelectedMode] = useState('');

//     const workModes = [
//         { value: 'wfh', label: 'Work from Home' },
//         { value: 'wfo', label: 'Work from Office' }
//     ];

//     return (
//         <div className="relative w-64 m-5">
//             <div className="relative">
//                 <select
//                     value={selectedMode}
//                     onChange={(e) => setSelectedMode(e.target.value)}
//                     className="
//             appearance-none 
//             w-full 
//             px-4 
//             py-3 
//             bg-gray-100 
//             border-2 
//             border-3
//             rounded-lg 
//             text-gray-700 
//             focus:outline-none 
//             focus:ring-2 
//             focus:ring-blue-500 
//             focus:border-transparent 
//             transition 
//             duration-300 
//             ease-in-out 
//             hover:bg-gray-200 
//             hover:border-gray-400 
//             cursor-pointer
//           "
//                 >
//                     <option value="" disabled className="bg-white">
//                         Select Work Mode
//                     </option>
//                     {workModes.map((mode) => (
//                         <option
//                             key={mode.value}
//                             value={mode.value}
//                             className="bg-white hover:bg-blue-500 hover:text-white"
//                         >
//                             {mode.label}
//                         </option>
//                     ))}
//                     <div className=''>
//                         <IoIosArrowDropdownCircle size={30} />
//                     </div>

//                 </select>

//             </div>
//         </div>
//     );
// };

// export default WorkModeDropdown;