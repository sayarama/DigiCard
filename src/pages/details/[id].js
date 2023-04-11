import { useEffect, React, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function details() {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://digimon-api.com/api/v1/digimon/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("details ==>", details);

  if (details.length === 0) {
    return null;
  }

  // const buah = [1, 2, 3]

  // console.log('first', buah[2])

  // {details?.descriptions?.map((d) => (

  // ))}

  // console.log('d.description', details?.descriptions)

  // if (details.descriptions === undefined || Array.length == 0) {

  // }

  return (
    <div className="w-screen h-screen bg-yellow-400 p-3">
      <div>
        <div key={details.id} className="detail bg-white w-3/4 h-screen overflow-scroll m-auto flex flex-col items-center">
          <div className="">
            {details?.images?.map((i) => (
              <img key={details.id} src={i.href} />
            ))}
          </div>

          <div className="">
            <h1 className="text-center">{details.name}</h1>

            <div  className="text-center mt-5">
              <p className="font-bold">Levels</p>
            {details?.levels?.map((l) => (
              <p key={l.id}>{l.level}</p>
            ))}
            </div>

            <div className="text-center mt-5">
              <p className="font-bold">Type</p>
            {details?.types?.map((t) => (
              <p className="text-center" key={t.id}>{t.type}</p>
            ))}
            </div>

            <p>{details.descriptions[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default details;
