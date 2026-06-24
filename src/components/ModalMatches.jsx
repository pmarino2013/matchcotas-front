import { useEffect, useState } from "react";
import { traerMatches } from "../helpers/fetchMatches";

const ModalMatches = ({ modalHide }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    traerMatches().then(({ matches }) => {
      setMatches(matches);
    });
  }, []);

  return (
    <div className="overlay">
      <div className="bg-slate-200 min-w-50 h-80 rounded-2xl p-5">
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
              <article key={item._id} className="w-50 h-50 ">
                <img
                  className="h-full object-cover rounded-2xl"
                  src={item.mascota_id.imagen}
                  alt={item.mascota_id.nombre}
                />
                <h4 className="font-bold ms-3">{item.mascota_id.nombre}</h4>
              </article>
            ))}
          </div>
        ) : (
          <div>
            <p className="font-bold text-xl">Cargando...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalMatches;
