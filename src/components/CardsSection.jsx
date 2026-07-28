import CardsList from "./CardsList";
import styles from "@/styles/components/CardsSection.module.css"




const CardsSection = () => {
    return (
        <section className={styles.cards_section}>
            <h2>Destinos de la Argentina</h2>
            <CardsList />
        </section>
    );
}


export default CardsSection;

