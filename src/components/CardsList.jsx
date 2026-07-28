import Card from "./Card";
import styles from "@/styles/components/CardList.module.css"


const destinos = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCS8T2EW5FzgScWdX8etBMNoQ1IYwMe_TjQ&s',
    title: 'Villa La Angostura',
    description: 'Un hermoso lugar con pinos y agua cristalina.',
    bgColor: 'green',
    precio: 250,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbsutGQE0Gs6N4MoB5oP4z1WFVHk26Qjw5A&s',
    title: 'Mendoza Capital',
    description: 'Un maravilloso lugar para hacer rafting y comer tremendo asado con vino.',
    bgColor: 'yellow',
    precio: 180,
  },
  {
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/b7/c1.jpg',
    title: 'El Calafate',
    description: 'Un lugar increible para ver caer trozos de hielo gigantes.',
    bgColor: 'aqua',
    precio: 320,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBK91rCU3q_MblHlzw2JUDEftOLpj9kuzIw&s',
    title: 'Laferrere',
    description: 'Un lugar del que no volves.',
    bgColor: 'black',
    precio: 999,
  },
]

const CardsList = () => {
  return (
    <div className={styles.cards}>
        {destinos.map((destino, index) => (
            <Card key={index} destino={destino} />
        ))}
    </div>

  )
}


export default CardsList;
