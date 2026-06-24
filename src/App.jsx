import { useEffect, useState } from "react";
import { traerMascotas, actualizarMacota } from "./helpers/fetchMascotas";
import { traerMatches, agregarMatches } from "./helpers/fetchMatches";
import CardMascotasApp from "./components/CardMascotasApp";
import BoxMatchesApp from "./components/BoxMatchesApp";

const App = () => {
  const [mascotas, setMascotas] = useState([]);
  const [countMatches, setCountMatches] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    traerMascotas().then(({ mascotas }) => {
      setMascotas(mascotas);
    });
  }, [countMatches]);

  useEffect(() => {
    traerMatches().then(({ matches }) => {
      setCountMatches(matches.length);
    });
  }, []);

  const pasarMascota = () => {
    if (index + 1 < mascotas.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const addMatches = async () => {
    const datos = {
      mascota_id: mascotas[index]._id,
    };
    await agregarMatches(datos);
    setCountMatches(countMatches + 1);
    await actualizarMacota(mascotas[index]._id);
    pasarMascota();
  };

  return (
    <div>
      <div className="flex justify-between items-center mx-5">
        <h1 className="text-6xl">MatchCotas</h1>
        <BoxMatchesApp matches={countMatches} />
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
