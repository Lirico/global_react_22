import { useState, useEffect } from 'react'


const Reloj = () => {
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [isVisible, setIsVisible] = useState(false)

    // Conditional render

    const alternarVisibilidad = () => setIsVisible(!isVisible)

    useEffect(() => {
        let temporizador;

        if(isVisible)
        {
            temporizador = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000)
        }

        return () => clearInterval(temporizador);
        
    }, [isVisible])
    

  return (
    <>
        <div>
            <h2>Reloj con Hooks</h2>
            <div>
                { 
                    isVisible && <h3>{hora}</h3> 
                }
                <button onClick={alternarVisibilidad}>Iniciar/Detener</button>
            </div>
        </div>
    </>
  )
}

export default Reloj


