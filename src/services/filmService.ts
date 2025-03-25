// src/services/filmService.ts
import { GetFilmsUseCase } from '../usecases/getFilmsUseCase';
import { FilmRepository } from '../repositories/filmRepository';

const filmRepository = new FilmRepository();
const getFilmsUseCase = new GetFilmsUseCase(filmRepository);

// Service -> Manage the business logic and the api calls from the useCases
export const filmService = {
  getFilms: async () => {
    return await getFilmsUseCase.execute();
  }
};