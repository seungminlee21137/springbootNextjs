import { getSession, useSession } from "next-auth/react";
// import { getSession } from 'next-auth/client';

import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
// import React from 'react';
import DeviceSearchIndex from "components/device";
// import Layout from 'components/ui/layout';

// export default function DashboardIndex() {
//   const { data: session } = useSession();
//   const router = useRouter();

// const test = async () => {
//   const response = await fetch("http://localhost:8080/api/device/s23", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // body: JSON.stringify({
//     //   username: "lee21137",
//     //   email: "lee21137@mangot5.com",
//     //   password: "lee21137",
//     // }), //
//     // body: JSON.stringify({ refreshToken: token.refreshToken }),
//   });

//   console.log(response);
// };

// fetch("http://localhost:8080/api/device/s23", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // body: JSON.stringify({
//   //   username: "lee21137",
//   //   email: "lee21137@mangot5.com",
//   //   password: "lee21137",
//   // }), //
//   // body: JSON.stringify({ refreshToken: token.refreshToken }),
// });

// await test();

// return (
// <section className="overflow-hidden text-gray-700 border-t border-gray-200 body-font">
//   <div className="container flex flex-wrap px-5 py-24 mx-auto">
//     <div className="hidden mt-48 lg:w-1/4 lg:block">
//       <div className="mt-px overflow-hidden border-t border-b border-l border-gray-300 rounded-tl-lg rounded-bl-lg">
//         <p className="flex items-center justify-start h-12 px-4 -mt-px text-center text-gray-900 bg-gray-100">
//           Fingerstache disrupt
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900">
//           Franzen hashtag
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900 bg-gray-100">
//           Tilde art party
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900">
//           Banh mi cornhole
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900 bg-gray-100">
//           Waistcoat squid hexagon
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900">
//           Pinterest occupy authentic
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900 bg-gray-100">
//           Brooklyn helvetica
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900">
//           Long Feature Two
//         </p>
//         <p className="flex items-center justify-start h-12 px-4 text-center text-gray-900 bg-gray-100">
//           Feature One
//         </p>
//       </div>
//     </div>
//     <div className="flex flex-wrap w-full border-gray-300 rounded-lg lg:w-3/4 lg:border">
//       <div className="w-full mb-10 border-2 border-gray-300 rounded-lg lg:w-1/3 lg:mt-px lg:mb-0 lg:border-none lg:rounded-none">
//         <div className="flex flex-col items-center justify-center h-48 px-2 text-center">
//           <h3 className="tracking-widest">START</h3>
//           <h2 className="mt-2 mb-4 text-5xl font-medium leading-none text-gray-900">
//             Free
//           </h2>
//           <span className="text-sm text-gray-600">Next 3 months</span>
//         </div>
//         <p className="flex items-center justify-center h-12 px-2 -mt-px text-center text-gray-600 bg-gray-100 border-t border-gray-300">
//           Schlitz single-origin
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 px-6 leading-relaxed text-center text-gray-600">
//           Feature
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <div className="p-6 text-center border-t border-gray-300 rounded-bl-lg">
//           <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-auto"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//           <p className="mt-3 text-xs text-gray-500">
//             {`Literally you probably haven't heard of them jean shorts.`}
//           </p>
//         </div>
//       </div>
//       <div className="relative w-full mb-10 border-2 border-indigo-500 rounded-lg lg:w-1/3 lg:-mt-px lg:mb-0">
//         <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white bg-indigo-500 rounded-bl">
//           POPULAR
//         </span>
//         <div className="flex flex-col items-center justify-center h-48 px-2 text-center">
//           <h3 className="tracking-widest">PRO</h3>
//           <h2 className="flex items-center justify-center mt-2 mb-4 text-5xl font-medium leading-none text-gray-900">
//             $38
//             <span className="ml-1 text-base text-gray-600">/mo</span>
//           </h2>
//           <span className="text-sm text-gray-600">
//             Charging $456 per year
//           </span>
//         </div>
//         <p className="flex items-center justify-center h-12 px-2 -mt-px text-center text-gray-600 bg-gray-100 border-t border-gray-300">
//           Schlitz single-origin
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               // strokeLinecap={""}
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 leading-relaxed text-center text-gray-600">
//           Feature
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <div className="p-6 text-center border-t border-gray-300">
//           <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-auto"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//           <p className="mt-3 text-xs text-gray-500">
//             {`Literally you probably haven't heard of them jean shorts.`}
//           </p>
//         </div>
//       </div>
//       <div className="w-full border-2 border-gray-300 rounded-lg lg:w-1/3 lg:mt-px lg:border-none lg:rounded-none">
//         <div className="flex flex-col items-center justify-center h-48 px-2 text-center">
//           <h3 className="tracking-widest">BUSINESS</h3>
//           <h2 className="flex items-center justify-center mt-2 mb-4 text-5xl font-medium leading-none text-gray-900">
//             $54
//             <span className="ml-1 text-base text-gray-600">/mo</span>
//           </h2>
//           <span className="text-sm text-gray-600">
//             Charging $648 per year
//           </span>
//         </div>
//         <p className="flex items-center justify-center h-12 px-2 -mt-px text-center text-gray-600 bg-gray-100 border-t border-gray-300">
//           Schlitz single-origin
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 leading-relaxed text-center text-gray-600">
//           Feature
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 text-white bg-gray-500 rounded-full">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="3"
//               className="w-3 h-3"
//               viewBox="0 0 24 24"
//             >
//               <path d="M20 6L9 17l-5-5"></path>
//             </svg>
//           </span>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <p className="flex items-center justify-center h-12 text-center text-gray-600 bg-gray-100">
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2.2"
//             className="w-5 h-5 text-gray-500"
//             viewBox="0 0 24 24"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </p>
//         <div className="p-6 text-center border-t border-gray-300">
//           <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
//             Button
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-auto"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//           <p className="mt-3 text-xs text-gray-500">
//             {` Literally you probably haven't heard of them jean shorts.`}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <div>TEST</div>
// );
// }

const SearchIndexPage = (props: any) => {
  // return <p>123123</p>;
  //{
  return <DeviceSearchIndex {...props} />;
};
// export async function getServerSideProps(context: any) {
//   const { params } = context;

//   return { props: { target: params.target } };
// }
export default SearchIndexPage;
