import { type } from "@testing-library/user-event/dist/type";

export const allProducts = [
  // {
  //   id: 0,
  //   type: "Frutas",
  //   title: "Abacate",
  //   description: "Peso aprox.: 480 g",
  //   price: 5.5,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/abacate.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 1,
  //   type: "Verduras",
  //   title: "Acelga",
  //   description: "Maço 1un",
  //   price: 10.6,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/acelga.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 2,
  //   type: "Legumes",
  //   title: "Alho",
  //   description: "Bandeja de 500g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/alho.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 3,
  //   type: "Frutas",
  //   title: "Banana",
  //   description: "Peso aprox.: 155 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/banana.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 4,
  //   type: "Legumes",
  //   title: "Beringela",
  //   description: "Peso aprox.: 160 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/beringela.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 5,
  //   type: "Legumes",
  //   title: "Beterraba",
  //   description: "Peso aprox.: 160 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/beterraba.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 6,
  //   type: "Legumes",
  //   title: "Brócolis",
  //   description: "Peso aprox.: 160 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/brocolis.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 7,
  //   type: "Legumes",
  //   title: "Cebola",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/cebola.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 8,
  //   type: "Frutas",
  //   title: "Cereja",
  //   description: "Peso aprox.: 150 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/cereja.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 9,
  //   type: "Legumes",
  //   title: "Couve-Flor",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/couveflor.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 10,
  //   type: "Legumes",
  //   title: "Edamame",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/edamame.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 11,
  //   type: "Verduras,
  //   title: "Espinafre",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/espinafre.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 12,
  //   type: "Legumes",
  //   title: "Gengibre",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/gengibre.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 13,
  //   type: "Frutas",
  //   title: "Limão Siciliano",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/limao%20siciliano.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 14,
  //   type: "Frutas",
  //   title: "Limao Tahiti",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/limao.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 15,
  //   type: "Frutas",
  //   title: "Manga",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/manga.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 16,
  //   type: "Frutas",
  //   title: "Melão Pele de Sapo",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/melao.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 17,
  //   type: "Frutas",
  //   title: "Morango",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/morango.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 18,
  //   type: "Ovos",
  //   title: "Ovo",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/ovo.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 19,
  //   type: "Frutas",
  //   title: "Pêssego",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/pessego.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 20,
  //   type: "Legumes",
  //   title: "Pimentões Sortidos",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/pimentoes.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 21,
  //   type: "Frutas",
  //   title: "Pitaia",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/pitaia.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 22,
  //   type: "Frutas",
  //   title: "Tangerina",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/tangerina.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 23,
  //   type: "Legumes",
  //   title: "Tomate",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/tomate.png?raw=true",
  //   quantityAvailable: 20,
  // },
  // {
  //   id: 24,
  //   type: "Legumes",
  //   title: "Vagem",
  //   description: "Peso aprox.: 250 g",
  //   price: 4,
  //   pictureUrl:
  //     "https://github.com/junmoritani/aju_moritani/blob/main/src/imgs/vagem.png?raw=true",
  //   quantityAvailable: 20,
  // },
];
