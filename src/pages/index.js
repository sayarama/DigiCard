import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  const [items, setItems] = useState([]);

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
      <div className="w-screen h-screen bg-yellow-300">
        <Navbar/>
      </div>

      {/* Akhir Bagian Hero */}

      {/* Ini Awal Bagian Pokemon Card */}

      <div className="Home w-screen h-screen bg-yellow-300 flex">
        <div className=" bg-white shadow-2xl rounded-xl scrollbar-hide overflow-scroll font-poppins font-semibold flex flex-wrap justify-center items-center m-auto w-3/4 h-3/4   ">
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

      <footer className="text-center bg-gray-800 text-white font-poppins">Digimon Website by @ul.ramadhan. Work In Progress</footer>
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
