export class Film {
  id: string;
  name: String;
  description: string;
  director: string;
  duration: number;

  constructor(
    id: string,
    name: string,
    description: string,
    director: string,
    duration: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.director = director;
    this.duration = duration;
  }

  static sampleFilms = [
    new Film(
      "1",
      "El padrino",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      "Francis Ford Coppola",
      175
    ),
    new Film(
      "2",
      "La lista de Schindler",
      "Durante la Segunda Guerra Mundial, un hombre de negocios salva a miles de judíos del Holocausto.",
      "Steven Spielberg",
      195
    ),
    new Film(
      "3",
      "Forrest Gump",
      "La increíble vida de un hombre con una inteligencia limitada que, sin querer, se convierte en parte de eventos históricos importantes.",
      "Robert Zemeckis",
      142
    ),
    new Film(
      "4",
      "Pulp Fiction",
      "Una serie de historias entrelazadas sobre la vida criminal en Los Ángeles.",
      "Quentin Tarantino",
      154
    ),
    new Film(
      "5",
      "Inception",
      "Un ladrón especializado en robar secretos mediante el uso de sueños es contratado para implantar una idea en la mente de un objetivo.",
      "Christopher Nolan",
      148
    ),
    new Film(
      "6",
      "Interstellar",
      "Un grupo de astronautas viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad.",
      "Christopher Nolan",
      169
    ),
    new Film(
      "7",
      "El caballero oscuro",
      "Batman debe enfrentarse a un villano que quiere destruir Gotham City mientras se enfrenta a sus propios dilemas morales.",
      "Christopher Nolan",
      152
    ),
    new Film(
      "8",
      "Titanic",
      "Un joven y una joven de diferentes clases sociales se enamoran a bordo del infame Titanic.",
      "James Cameron",
      195
    ),
    new Film(
      "9",
      "La guerra de las galaxias: Episodio IV - Una nueva esperanza",
      "Un joven granjero se une a un grupo rebelde para derrotar al Imperio Galáctico.",
      "George Lucas",
      121
    ),
    new Film(
      "10",
      "Matrix",
      "Un hacker descubre que la realidad en la que vive es una simulación creada por máquinas.",
      "The Wachowskis",
      136
    ),
  ];
}
