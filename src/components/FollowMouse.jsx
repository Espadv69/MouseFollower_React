import { useState, useEffect } from "react"

export const FollowMouse = () => {
    // Estado para habilitar/deshabilitar el seguimiento del puntero
    const [enabled, setEnabled] = useState(false)
    // Estado para almacenar la posición del puntero
    const [position, setPosition] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      console.log('efecto ', { enabled })
  
      // Función manejadora para actualizar la posición del puntero
      const handleMove = (event) => {
        const { clientX, clientY } = event
        console.log('handleMove ', { clientX, clientY })
        
        setPosition({ x: clientX, y: clientY })
      }
  
      // Si el seguimiento está habilitado, agregar el event listener
      if (enabled) {
        window.addEventListener('pointermove', handleMove)
      }
  
      // Limpieza: remover el event listener cuando el seguimiento se deshabilite
      return () => {
        window.removeEventListener('pointermove', handleMove)
      }
    }, [enabled]) // El efecto depende del estado 'enabled'
  
    return (
      <>
      <main>
        {/* Div para mostrar un indicador del puntero */}
        <div style={{
          position: 'absolute',
          backgroundColor: '#00f6ff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }} />
  
        {/* Botón para activar/desactivar el seguimiento del puntero */}
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} puntero
        </button>
      </main>
      </>
    )
  }
  