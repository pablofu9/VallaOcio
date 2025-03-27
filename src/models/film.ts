export class Film {
  id: string;
  name: string;
  description: string;
  director: string;
  duration: number;
  date: Date; // ← Fecha de cartelera

  constructor(
    id: string,
    name: string,
    description: string,
    director: string,
    duration: number,
    date: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.director = director;
    this.duration = duration;
    this.date = date;
  }

  // 🔁 Función auxiliar para sumar días a una fecha
  static addDays(baseDate: Date, days: number): Date {
    const result = new Date(baseDate);
    result.setDate(result.getDate() + days);
    return result;
  }

  static sampleFilms = (() => {
    const today = new Date();
    return [
      new Film(
        "1",
        "El padrino",
        "Sed ut perspiciatis...",
        "Francis Ford Coppola",
        175,
        Film.addDays(today, 0)
      ),
      new Film(
        "2",
        "La lista de Schindler",
        "Durante la Segunda Guerra Mundial...",
        "Steven Spielberg",
        195,
        Film.addDays(today, 1)
      ),
      new Film(
        "3",
        "Forrest Gump",
        "La increíble vida de un hombre...",
        "Robert Zemeckis",
        142,
        Film.addDays(today, 2)
      ),
      new Film(
        "4",
        "Pulp Fiction",
        "Una serie de historias entrelazadas...",
        "Quentin Tarantino",
        154,
        Film.addDays(today, 3)
      ),
      new Film(
        "5",
        "Inception",
        "Un ladrón especializado en robar secretos...",
        "Christopher Nolan",
        148,
        Film.addDays(today, 4)
      ),
      new Film(
        "6",
        "Interstellar",
        "Un grupo de astronautas viaja...",
        "Christopher Nolan",
        169,
        Film.addDays(today, 5)
      ),
      new Film(
        "7",
        "El caballero oscuro",
        "Batman debe enfrentarse a un villano...",
        "Christopher Nolan",
        152,
        Film.addDays(today, 6)
      ),
      new Film(
        "8",
        "Titanic",
        "Un joven y una joven de diferentes clases sociales...",
        "James Cameron",
        195,
        Film.addDays(today, 7)
      ),
      new Film(
        "9",
        "Star Wars: Una nueva esperanza",
        "Un joven granjero se une a un grupo rebelde...",
        "George Lucas",
        121,
        Film.addDays(today, 8)
      ),
      new Film(
        "10",
        "Matrix",
        "Un hacker descubre que la realidad...",
        "The Wachowskis",
        136,
        Film.addDays(today, 9)
      ),
    ];
  })();
}