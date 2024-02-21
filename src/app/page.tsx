import Image from "next/image";
import Mainbanner from "./components/Mainbanner";
import Nav from "./components/Nav";
import Imge from "./components/Imge"
import Food from "./components/Food";
import Whatson from "./components/Whatsoncart"
import Restaurant from "./components/Restaurant"
import Ourtable from "./components/Ourtable"
import Footer from "./components/Footer"

export default function Home() {
  return (
   <>
   {/* <Nav/> */}
   {/* <Imge/> */}
   {/* <Mainbanner/> */}
  
   <Mainbanner />
   <Food/>
   <Restaurant/>
   <Whatson/> 
   <Ourtable/>
   <Footer/>
 
   </>
  );
}
