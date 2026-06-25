import { useEffect, useState } from "react";
import { traerMatches } from "../helpers/fetchMatches";

const ModalMatches = ({ modalHide, countMatches, deleteMatches }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    traerMatches().then(({ matches }) => {
      setMatches(matches);
    });
  }, [countMatches]);

  return (
    <div className="overlay lilita-one-regular ">
      <div className="bg-white w-lg min-h-80 rounded-2xl p-5  card-shadow">
        <section className="flex justify-between mx-3 mb-2">
          <h3 className="text-2xl">Tus MatchCotas🐶</h3>
          <button onClick={() => modalHide(false)} className="cursor-pointer">
            {" "}
            <i className="bi bi-x-lg"></i>
          </button>
        </section>
        {matches.length > 0 ? (
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {matches.map((item) => (
              <article key={item._id} className="w-50 h-50 mb-4 relative">
                <img
                  className="h-full object-cover rounded-2xl"
                  src={item.mascota_id.imagen}
                  alt={item.mascota_id.nombre}
                />
                <div
                  className="absolute top-2 right-2 cursor-pointer text-red-700"
                  onClick={() => deleteMatches(item.mascota_id._id, item._id)}
                >
                  <i className="bi bi-x-circle-fill"></i>
                </div>
                <h4 className="font-bold ms-3">{item.mascota_id.nombre}</h4>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-50">
            <p className="font-bold text-xl">No tienes MatchCotas</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalMatches;
