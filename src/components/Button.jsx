import styles from "@/styles/components/Button.module.css"

const Button = (props) => {
  return (
    <button style={{backgroundColor: props.bgColor}} className={styles.button}>Comprar</button>
  )
}

export default Button