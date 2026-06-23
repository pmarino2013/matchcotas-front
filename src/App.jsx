import { useEffect, useState } from "react";
import { traerMascotas } from "./helpers/fetchMascotas";
import { traerMatches, agregarMatches } from "./helpers/fetchMatches";
import CardMascotasApp from "./components/CardMascotasApp";
import BoxMatchesApp from "./components/BoxMatchesApp";

const App = () => {
  const [mascotas, setMascotas] = useState([]);
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    traerMascotas().then(({ mascotas }) => {
      setMascotas(mascotas);
    });
  }, []);
  useEffect(() => {
    traerMatches().then(({ matches }) => {
      setMatches(matches);
    });
  }, [matches]);

  const pasarMascota = () => {
    if (index + 1 < mascotas.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const addMatches = () => {
    const datos = {
      mascota_id: mascotas[index]._id,
    };
    agregarMatches(datos).then((respuesta) => {
      console.log(respuesta);
      pasarMascota();
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-5">
        <h1 className="text-6xl">MatchCotas</h1>
        <BoxMatchesApp matches={matches} />
      </div>
      <div className="flex justify-center mt-5">
        {mascotas.length > 0 ? (
          <CardMascotasApp
            mascotas={mascotas}
            index={index}
            pasarMascota={pasarMascota}
            addMatches={addMatches}
          />
        ) : (
          <div className="h-80 flex justify-center items-center">
            <h3 className="text-4xl">🐶No hay mascotas</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
