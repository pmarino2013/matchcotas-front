const url = "http://localhost:3000/api/mascotas";

const traerMascotas = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const actualizarMacota = async (value) => {
  try {
    const response = await fetch(url + "/" + value, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { traerMascotas, actualizarMacota };
