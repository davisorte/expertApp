import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  const [images,setImages] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const getImages = async() =>{
    const newImages = await getGifs(category);
    //Obtener las imagenes
    setImages(newImages);
    //cargar no
    setIsLoading(false)
  }
    //useEffect: dispara efectos secundarios: proceso en segundo plano cuando algo suceda
    //useEffect: evita que cada click el boton se vuelva a ejecuta otra vez la funcion
    useEffect(
      ()=>{getImages()},[]
    )
  //hook: personalizado
  return  {
    images,
    isLoading
  }
}

