import styles from "@/styles/components/Card.module.css"
import Button from './Button'

const Card = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.destino.image} alt="" />
        <div>
            <h3>{props.destino.title}</h3>
            <h4>{props.destino.description}</h4>
            <Button bgColor={props.destino.bgColor}/>
        </div>
    </div>
  )
}

export default Card

