// src/usecases/getFilmsUseCase.ts
import { FilmRepository } from '../repositories/filmRepository';

// UseCase -> Manage the business logic (validations or stuff like that)
export class GetFilmsUseCase {
  private filmRepository: FilmRepository;

  constructor(filmRepository: FilmRepository) {
    this.filmRepository = filmRepository;
  }

  async execute() {
    const films = await this.filmRepository.fetchFilms();
    return films;
  }
}