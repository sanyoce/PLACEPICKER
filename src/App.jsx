import { useRef, useState } from 'react'
import { Header } from './Header'
import { CardBlock } from './Card_Block'
import { imagesBase } from "./images_base"
import "./index.css"
import { Modal } from './Modal'

function App() {
  const [ choosenCountries, setChoosenCountries ] = useState(() =>{
    const data = localStorage.getItem("places")
    return data ? JSON.parse(data) : []
  })
  const [ isModalState, setIsModalState ] = useState(false)
  const  placeRef = useRef(null)

  function openModal(place){
    placeRef.current = place
    setIsModalState(true)
  }

  function handleAdd(country){
    setChoosenCountries( prev =>{
      if(prev.find(p => p.id === country.id))return prev;
      const update = [...prev, country]
      localStorage.setItem("places" , JSON.stringify(update))
      return update
    })
  }

  function handleDelete(place){
    setChoosenCountries(prev =>{
      const updated = prev.filter(p => p.id !== place.id)
      localStorage.setItem("places", JSON.stringify(updated))
      return updated 
    })

    setIsModalState(false)
  }

  return (
    <div>
      <Modal
        isModalState={isModalState}
        onClose={() =>
          setIsModalState(false)
        }
        handleDelete={() => handleDelete(placeRef.current)}
      />
      <Header/>

      <div className='cardBlockWrapper'>
      <CardBlock 
          imagesBase={choosenCountries} 
          blockName="I'd like to visit ..." 
          blockNameClass="defaultBase"
          onClick={openModal}
      />
      <CardBlock 
          imagesBase={imagesBase} 
          blockName="Available Places" 
          blockNameClass="defaultBase"
          onClick={handleAdd}
      />
      </div>

    </div>
  )
}

export default App
