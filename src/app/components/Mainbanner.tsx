import React from "react";
import Nav from "../components/Nav";

const Mainbanner = () => {
  return (
    
    <div style={{ position: "relative" ,height:"100vh" }}>
      <div className="absolute z-20 top-8 right-[20%] ">
        <Nav />
      </div>

      <div
        className="bg z-10 rounded-b-3xl "
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
      ></div>

      <video
        width="100%"
        height="100%"
        autoPlay
        // loop
        // muted
        playsInline
        src="/../assets/bg_video.mp4"
        className="absolute top-0 !h-screen object-cover rounded-b-3xl z-10"
      />
      {/* <div className="absolute top-[50%] right-[50%] z-10 ">
        <h1 className="text-white text-center text-4xl font-bold">Hello</h1>


      </div> */}
    
    </div>
  
  );
};

export default Mainbanner;
