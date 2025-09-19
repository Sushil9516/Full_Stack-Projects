import React from "react";

const Hero = () => {
  return (
    <section className="bg-sky-500 text-white py-22 text-center px-4">
      <h2 className="text-3xl md:text-[40px] font-semibold mb-6">
        169+ Free HTML Website Templates
      </h2>

      {/* Using Position */}
      {/* <div className="max-w-[720px] bg-white  mx-auto rounded relative w-full">
        <input
          type="text"
          placeholder="e.g. business template"
          className="w-full px-10 py-5 text-zinc-400 focus:outline-none rounded shadow-md"
        />
        <button className="absolute  right-2 top-2 h-12 bg-sky-500 px-5 py-4 text-white font-semibold hover:bg-blue-600 flex items-center justify-center rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </div> */}

      {/* Using flex */}
      <div className="max-w-[720px] bg-white mx-auto rounded w-full shadow-md flex overflow-hidden h-16">
        <input
          type="text"
          placeholder="e.g. business template"
          className="w-full px-5 py-4 text-zinc-400 focus:outline-none"
        />
        <button className="h-auto bg-sky-500 m-3 rounded px-5 py-4 text-white font-semibold hover:bg-blue-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </div>
    </section>
  );
};

export default Hero;
