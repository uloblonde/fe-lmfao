import Inimovie from "../Components/Inimovie";
import Movieser from "./Cardview/Movieser";
import Moviesdetail from "../Components/Moviesdetail";
import Datafilm from "./Cardview/Datafilm";


const tvs= [
  {
    id: 1,
    image: "card1",
    nama: "The Witcher",
    tahun: "2019",
  },
  {
    id: 2,
    image: "card2",
    nama: "The Gacor",
    tahun: "2019",
  },
  {
    id: 3,
    image: "card3",
    nama: "The Slot",
    tahun: "2019",
  },
  {
    id: 4,
    image: "card4",
    nama: "The Scatter",
    tahun: "2019",
  },
  {
    id: 5,
    image: "card5",
    nama: "The Peminum",
    tahun: "2019",
  },
  {
    id: 6,
    image: "card6",
    nama: "Tuak",
    tahun: "2019",
  },
];
const tvss = [
  {
    id: 1,
    image: "card7",
    nama: "The God Father",
    tahun: "2020",
  },
  {
    id: 2,
    image: "card8",
    nama: "Batman",
    tahun: "2020",
  },
  {
    id: 3,
    image: "card9",
    nama: "Avenger",
    tahun: "2020",
  },
  {
    id: 4,
    image: "card10",
    nama: "Joker",
    tahun: "2020",
  },
  {
    id: 5,
    image: "card11",
    nama: "Parasite",
    tahun: "2020",
  },
  {
    id: 6,
    image: "card12",
    nama: "Chernobyl",
    tahun: "2020",
  },
];
  
export default function Movies(){
    return(
      <>
      
       <Inimovie/>
       <Movieser/>
       </>
    );
}