import React from "react";

function Food() {
  return (
    <div className="relative max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 py-[30px] px-[15px] md:px-0">
      <div className="flex flex-col lg:flex-row gap-20 h-auto w-full sm:mx-auto">
        <div className="w-full lg:w-1/2">
          <img
            src="https://media.istockphoto.com/id/618862242/photo/bottles-of-assorted-alcoholic-beverages.jpg?s=612x612&w=0&k=20&c=ve6TosoDP9Lyh_qySkXX6mVQXLP8XsihEgPloA5dVw0="
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="h-[144.5px] relative hidden lg:block">
            <span className="absolute bottom-[40%] left-1/2 w-0.5 h-full bg-red-600"></span>
          </div>

          <h1 className="text-3xl font-semibold">
            Good food, good times, all day and late into the night
          </h1>
          <p className="text-lg font-light text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            scelerisque arcu, arcu, diam.{" "}
          </p>

          <div className="h-[144.5px] relative hidden lg:block">
            <span className="absolute top-[40%] left-1/2 w-0.5 h-full bg-red-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
