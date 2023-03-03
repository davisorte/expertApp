import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        //react no trata de mutar el estado
        //Hacer una copia con todos los elementos del arreglo anterior
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        {/**Enviar */}
        <AddCategory 
        //setCategories={setCategories}
        //mandar el evento a la funcion para que asigne los datos
        onNewCategory = {event => onAddCategory(event)}
        />
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        <ol>
            {/*key : llave categoria unica */}
            {
                categories.map(category=> (
                    <GifGrid key = {category} category ={ category } />
                ))
            }
        </ol>
    </>
  )
}
