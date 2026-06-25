import { useEffect, useState } from "react";
import { traerMascotas, actualizarMacota } from "./helpers/fetchMascotas";
import {
  traerMatches,
  agregarMatches,
  borrarMatch,
} from "./helpers/fetchMatches";
import CardMascotasApp from "./components/CardMascotasApp";
import BoxMatchesApp from "./components/BoxMatchesApp";
import ModalMatches from "./components/ModalMatches";

const App = () => {
  const [mascotas, setMascotas] = useState([]);
  const [countMatches, setCountMatches] = useState(0);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

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
    const nextIndex = index + 1 < mascotas.length ? index + 1 : 0;
    setIndex(nextIndex);
  };

  const addMatches = async () => {
    const datos = {
      mascota_id: mascotas[index]._id,
    };
    await agregarMatches(datos);
    setCountMatches(countMatches + 1);
    await actualizarMacota(mascotas[index]._id, { match: true });
    console.log(index);
    console.log("mascotas: " + mascotas.length);
    // Calcular el siguiente índice sin depender del estado
    const nextIndex = index + 1 < mascotas.length ? index + 1 : 0;
    setIndex(nextIndex);
  };

  const deleteMatches = async (idMascota, idMatch) => {
    await actualizarMacota(idMascota, { match: false });
    await borrarMatch(idMatch);
    setCountMatches(countMatches - 1);
  };

  return (
    <>
      <div className="lilita-one-regular">
        <div className="flex justify-between items-center mx-5 mb-7">
          <h1 className="text-6xl lilita-one-regular texto-title">
            MatchCotas
          </h1>
          <BoxMatchesApp matches={countMatches} funcShow={setShow} />
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
      {show && (
        <ModalMatches
          modalHide={setShow}
          countMatches={countMatches}
          deleteMatches={deleteMatches}
        />
      )}
    </>
  );
};

export default App;
