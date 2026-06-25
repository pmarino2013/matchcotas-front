const url = "http://localhost:3000/api/matches";

const traerMatches = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const agregarMatches = async (value) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(value),
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

const borrarMatch = async (id) => {
  try {
    const response = await fetch(url + "/" + id, {
      method: "DELETE",
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

export { traerMatches, agregarMatches, borrarMatch };
