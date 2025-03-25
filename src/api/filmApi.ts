import axios from "axios";

// File that manges api calls to the film server
const api = axios.create({
  baseURL: "https://api.example.com", // URL base de tu API (esto se puede mover a `config`)
  timeout: 5000, // Timeout para las peticiones
});

export const getFilms = async () => {
  try {
    const response = await api.get("/films");
    return response.data; // Retorna los datos de la API
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    throw error; // Lanza el error para manejarlo en otros lugares
  }
};
