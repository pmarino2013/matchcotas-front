import { useEffect } from "react";

const CardMascotasApp = ({ mascotas, index, pasarMascota, addMatches }) => {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector("article")
        .classList.remove("card-flip", "card-flip-reverse");
    }, 1200);
  }, [index]);

  const pasarTarjetaFlip = (valor) => {
    if (valor === "ok") {
      document.querySelector("article").classList.add("card-flip-reverse");
      setTimeout(() => {
        addMatches();
      }, 1000);
    } else {
      document.querySelector("article").classList.add("card-flip");
      setTimeout(() => {
        pasarMascota();
      }, 1000);
    }
  };
  return (
    <>
      {index < mascotas.length ? (
        <article className="bg-white card-shadow h-96 w-70  rounded-lg flex flex-col justify-between">
          <header>
            <picture>
              <img
                className="rounded-t-lg h-50 w-full"
                src={mascotas[index].imagen}
                alt={mascotas[index].nombre}
              />
            </picture>
          </header>
          <section className="items-start h-full mt-3">
            <h3 className="text-2xl font-bold text-center">
              {mascotas[index].nombre}
            </h3>
            <p className="text-slate-400 text-center">
              {mascotas[index].personalidad}
            </p>
            <div className="mx-3">
              <p>
                <b>Edad:</b> {mascotas[index].edad}
              </p>
              <p>
                <b>Raza:</b> {mascotas[index].raza}
              </p>
            </div>
          </section>
          <footer className="flex justify-around my-3 border-t pt-1 border-slate-200">
            <div
              className="text-red-700 text-2xl cursor-pointer"
              onClick={() => pasarTarjetaFlip("ok")}
            >
              <i className="bi bi-heart"></i>
            </div>
            <div
              className="text-2xl cursor-pointer"
              onClick={() => pasarTarjetaFlip("no")}
            >
              <i className="bi bi-x-lg"></i>
            </div>
          </footer>
        </article>
      ) : (
        <div>
          <h3 className="text-2xl">Tenemos un problemita ⚠️</h3>
        </div>
      )}
    </>
  );
};

export default CardMascotasApp;
