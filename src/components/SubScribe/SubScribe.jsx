import React from "react";

const SubScribe = () => {
  return (
    <section className="w-full bg-primary py-6 sm:py-8">
      <div className="container mx-auto px-4">

        <div className="flex flex-col items-center text-center gap-3">
          
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Get Notified About New Products
          </h2>

          {/* Search-style Subscribe Bar */}
          <div className="mt-2 w-full max-w-md">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1 px-4 py-2
                  text-sm text-gray-800
                  focus:outline-none
                "
              />

              <button
                className="
                  px-6 py-2
                  bg-black text-white
                  text-sm font-medium
                  hover:bg-gray-900
                  transition
                "
              >
                Subscribe
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SubScribe;
