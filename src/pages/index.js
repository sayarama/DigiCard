import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
import { useSpring, animated } from "@react-spring/web";



export default function Home() {
 
  const [items, setItems] = useState([]);

  const digiAll = useSpring({
    from: { x: 150},
    to: { x: 0}
  })

  const text = useSpring({
    from: { x: 100},
    to: {x: 0}
  })

  useEffect(() => {
    axios
      .get("https://www.digi-api.com/api/v1/digimon?pageSize=100")
      .then((res) => {
        setItems(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });




  return (
    <>
      {/* Awal Bagian Hero */}
      <div className="w-screen h-screen bg-img-sm md:bg-img-md bg-no-repeat bg-cover bg-center">
        <Navbar/>

        <div className="img-base py-4 flex flex-col items-center md:hidden">
          <img className="w-40" src="https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/logo.webp" />

          <img src="https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/digi.webp" alt="digi-logo" />
        </div>

        <div className="hidden md:block bg-img-md bg-center bg-no-repeat font-poppins">
         <div className="img-item flex">
         <animated.div
         style={{...text}}
         className="left p-12 w-2/4 h-screen flex items-left justify-center gap-8 flex-col">
          <p className="md:text-5xl lg:text-9xl font-extrabold">DIGIMON</p>
          <p>Digimon, short for "Digital Monsters", is a Japanese media franchise encompassing virtual pet toys, anime, manga, video games, films and a trading card game. The franchise focuses on the eponymous creatures, who inhabit a "Digital World", a parallel universe that originated from Earth's various communication networks.</p>
         </animated.div>

         <div className="right w-2/4 h-screen relative">
          <animated.img
          style={{
            ...digiAll
          }}
          className="absolute bottom-24" src="https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/digi-all.webp"/>
         </div>
         </div>
        </div>
      </div>

      {/* Akhir Bagian Hero */}

      {/* Ini Awal Bagian Pokemon Card */}

      <div className="Home w-screen h-screen bg-yellow-300 p-5">

        <div className="mt-12 w-3/4 m-auto mb-8 font-poppins md:flex-row flex-col flex justify-between items-center">
          <h1 className="text-xl font-bold">Digimon List Section</h1>
          <div className="search flex items-center bg-white p-3 rounded-lg">
            <FaSearch/>
            <input type="search" className="bg-transparent ml-2 z-10 focus:outline-none" placeholder="Search" />
          </div>
        </div>


        
        <div className=" bg-white shadow-2xl rounded-xl scrollbar-hide overflow-scroll  font-poppins font-semibold flex flex-wrap justify-center items-center m-auto w-3/4 h-3/4   ">
          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              xAntibody={item.xAntibody}
            />
          ))}
        </div>
      </div>
      {/* Akhir Bagian Pokemon Card */}

      <footer className="text-center bg-gray-800 text-white font-poppins p-3">DigiList by @ul.ramadhan. Work In Progress</footer>
    </>
  );
}

function Card({ id, name, xAntibody }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.digi-api.com/api/v1/digimon/${id}`)
      .then((res) => {
        setDetails(res.data.descriptions[1].description);
        console.log("resdesc", res.data.descriptions[1].description);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="digi-container w-72 h-92 p-5 m-5 text-center bg-white  rounded-t-md ">
      <div className="img mb-5 border-solid border-2 border-yellow-400 bg-white w-full h-3/4 rounded-t-md ">
        <img
          className="w-full h-60 rounded-t-md "
          src={`https://digimon-api.com/images/digimon/w/${name?.replace(
            /\s+/g,
            "_"
          )}.png`}
        />
      </div>
      <h1 className="mb-5">{name}</h1>
      <p>{xAntibody}</p>
      {/* <p>{details}</p> */}
      <button>
        <Link
          className="hover:bg-yellow-400 bg-yellow-300 px-5 py-2 rounded-lg"
          href="/details"
        >
          Details
        </Link>
      </button>
    </div>
    
  );
}
