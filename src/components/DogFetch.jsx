import { useEffect, useState } from "react"

const DogFetch = () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const [dog, setDog] = useState({});

  useEffect(() => {
    fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setDog(data)
    })
  }, [])

  

  return (
    <div>
      <img src={dog.message} alt="" width={400} />
    </div>
  )
}

export default DogFetch