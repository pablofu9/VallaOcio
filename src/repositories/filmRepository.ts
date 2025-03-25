import { getFilms } from '../api/filmApi';
import { Film } from '../models/film';
// Repository -> Manage Api interactions keeping separate the logic from the api calls
export class FilmRepository {
  async fetchFilms(): Promise<Film[]> { // 👈 Aseguramos que devuelve un    // REAL API CALL
    // const films = await getFilms();
    // return films;

    // FAKE API CALL
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Film.sampleFilms);
      }, 1000); // Simulamos un retraso
    });
  }
}