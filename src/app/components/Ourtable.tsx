import React from "react";

function Table() {
  return (
    <div className="relative max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 py-[30px] px-[15px] md:px-0">
    <div className="flex flex-col lg:flex-row gap-20 lg:h-auto w-full  h-[600px] sm:mx-auto">
      <div className="w-full lg:w-1/2">
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"
          alt="Image"
          className="lg:absolute lg:top-[20%] lg:left-1  w-full lg:w-1/2"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="h-[144.5px] relative hidden lg:block">
          <span className="absolute bottom-[40%] left-1/2 w-0.5 h-full bg-red-600"></span>
        </div>
  
        <h1 className="text-3xl font-bold">
          Good food, good times, all day and late into the night
        </h1>
        <p className="text-lg font-light text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          scelerisque arcu, arcu, diam.
        </p>
        <div className="lg:absolute top-[74%] right-[18%]">
          <button className="relative overflow-hidden group border border-red-500 hover:border-red-500 px-10 py-2" py-4>
            <span className="absolute top-0 right-0 w-full h-auto border-t-2 border-r-4 border-red-500 transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-100"></span>
            <span className="absolute bottom-0 left-0 w-full h-auto border-b-2 border-l-4 border-red-500 transform -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-100"></span>
            <span className="relative z-10">Button</span>
          </button>
        </div>
        <div className="h-[90px] relative hidden lg:block">
          <span className="absolute top-[70%] left-1/2 w-0.5 h-full bg-red-600"></span>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default Table;
