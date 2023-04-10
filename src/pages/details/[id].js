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

  console.log('details ==>', details)

  return (
    <div className="w-screen h-screen bg-blue-300">
      <div>
        <div key={details.id} className="detail">
          <h1>{details.name}</h1>
          {details?.images?.map((i) => (
            <img key={details.id} src={i.href} />
          ))}

          {details?.skills
            ?.filter((s) => s.skills == 1)
            .map((s) => (
              <p>{s.id}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default details;
