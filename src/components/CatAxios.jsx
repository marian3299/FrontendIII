import axios from "axios";
import { useEffect, useState } from "react";

const CatAxios = () => {
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState();
  const url = "https://api.thecatapi.com/v1/images/search";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setCat(res.data[0]);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }).catch(err => console.log(err));
  }, []);

  return (
    <div>
      {loading ? 'Cargando gatito...' : <img src={cat.url} alt="" width={400} />}
    </div>
  );
};

export default CatAxios;
