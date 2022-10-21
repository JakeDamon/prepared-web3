import React from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Header from "./header";

const styles = {
  container: `h-[60px] w-full flex items-center gap-5 px-16`,
};

export default function Main() {
  return (
    <div>
      <Header />
      <section className=" text-white bg-[url('../assets/Loaded_Visor_Panel_1__03485.jpg')] bg-cover bg-center bg-no-repeat">
        {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-white/25"></div> */}
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
              Future of Being Prepared is Here
              <span className="sm:block"> Become Prepared with Web3 </span>
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:text-xl sm:leading-relaxed">
              Get survival gear, shelter, and tutorials all in one place!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// <section
//   class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
// >
//   <div
//     class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
//   ></div>

//   <div
//     class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
//   >
//     <div class="max-w-xl text-center sm:text-left">
//       <h1 class="text-3xl font-extrabold sm:text-5xl">
//         Let us find your

//         <strong class="block font-extrabold text-rose-700">
//           Forever Home.
//         </strong>
//       </h1>

//       <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
//         tenetur fuga ducimus numquam ea!
//       </p>

//       <div class="mt-8 flex flex-wrap gap-4 text-center">
//         <a
//           href="#"
//           class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
//         >
//           Get Started
//         </a>

//         <a
//           href="#"
//           class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
//         >
//           Learn More
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
