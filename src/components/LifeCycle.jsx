import  { useEffect, useState } from "react";

const LifeCycle = () => {
  console.log("Parte funcional");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  
  //Fase de montaje
  useEffect(() => {
    setTimeout(() => {
      console.log('Esto ocurre una sola vez')
      setLoading(false)
    }, 2000)
    
  }, [])

  //Fase de actualizacion
  useEffect(() => {
    console.log('Se ejecuta a la primera y cada vez que loading se actualice')
    if(!loading){
      setUser({
        name: 'Mariana',
        pet: 'Cat'
      })
    }
  }, [loading])

  //Fase de desmontaje
  useEffect(() => {
    return () => {
      console.log('Esto se ejecuta cuando se desmonta el componente')
    }
  }, [])

  return (
    <div>
      {console.log("Parte de render")}
      {loading ? 'Cargando' : <h2>Hola {user.name}</h2>}
    </div>
  );
};

export default LifeCycle;
