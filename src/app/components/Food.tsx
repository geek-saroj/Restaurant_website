import React from "react";

function Food() {
  return (
    <div className="relative max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 py-[30px] px-[15px] md:px-0">
    <div className="flex flex-col lg:flex-row gap-20 h-screen w-full sm:mx-auto">
      <div className="w-full lg:w-1/2"> 
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/618862242/photo/bottles-of-assorted-alcoholic-beverages.jpg?s=612x612&w=0&k=20&c=ve6TosoDP9Lyh_qySkXX6mVQXLP8XsihEgPloA5dVw0="
          alt="Image"
          className="absolute w-100% h-100% "
        />
        </div>
      </div>
      <div className="w-full lg:w-1/2"> 
        <div className="h-[144.5px] relative hidden lg:block">
          <span className="absolute top-0 left-1/2 w-0.5  h-full bg-red-600"></span>
        </div>
  
        <h1 className="text-xl font-bold">
        Good food, good times, all day and late into the night

        </h1>
        <p className="text-lg font-light text-black mt-4 justify-center items-center">
        Relaxed, stylish restaurants serving up a modern British menu with a global influence, alongside Daily Specials and our famous all-day brunch menu.
        </p>
        {/* <p className="text-lg font-light text-black mt-4 justify-center items-center">
        Balans No.60 in Soho is open until 6AM - serving dinner with a slice of mischief. Its little sister Balans No.34 is just down the road, so for early morning until late-night Soho, we've got you covered. Enjoy everything from the best brunch in Soho to exciting special dishes, pre and post-theatre dining and always lots of amazing cocktails.
        </p>
        <p className="text-lg font-light text-black mt-4 justify-center items-center">
        Balans Kensington and Stratford carry on the magic to the east and west of London.        </p> */}

     
        <div className="h-[144.5px] relative hidden lg:block">
          <span className="absolute top-0 left-1/2 w-0.5 h-full bg-red-600"></span>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Food;
