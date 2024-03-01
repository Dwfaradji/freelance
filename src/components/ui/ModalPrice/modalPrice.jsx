// 'use client';
// import React, { useEffect } from 'react';
// import './ModalPrice.scss';
// import { prices } from '@/data/data';
// import Link from 'next/link';
//
// const ModalPrice = ({ contentModal, setIsOpen }) => {
//   // const [contentModal, setContentModal] = useState("");
//
//   const [modal, setModal] = React.useState < any > [];
//
//   useEffect(() => {
//     prices.map((data) => {
//       if (data.id === parseInt(contentModal)) {
//         setModal(data);
//         return data;
//       }
//     });
//   }, [contentModal]);
//
//   return (
//     <div className="container-price relative z-50xx">
//       <h2>{modal.subtitle}</h2>
//       <ul>
//         {modal.details &&
//           modal.details.map((detail, i) => (
//             <li key={i.toString()}>
//               <i className="fa-solid fa-check"></i> {detail}
//             </li>
//           ))}
//       </ul>
//       <h3>À partir de: {modal.price}</h3>
//       <Link href={`/form-ui/${modal.id}/model/`}>
//         <span className="relative inline-flex">
//           <button
//             className="relative animate-pulse"
//             onClick={() => setIsOpen(true)}
//           >
//             Demander un devis
//           </button>
//           <span className="absolute right-0 top-0 -mr-1 -mt-1 flex size-3">
//             <span className="bg-sky-400 absolute inline-flex size-full animate-ping rounded-full opacity-75"></span>
//             <span className="bg-sky-500 relative inline-flex size-3 rounded-full"></span>
//           </span>
//         </span>
//       </Link>
//     </div>
//   );
// };
//
// export default ModalPrice;
