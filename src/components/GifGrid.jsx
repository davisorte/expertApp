
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs( category );
  return (
    <>
        <h3>{category}</h3>
        {/**&&:condicional if corto */}
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div  className='card-grid'>
          {/**...image: MAndar todas las propiedades */}
            {
              images.map((image)=>(
               <GifItem 
               key={image.id}
               {...image}
               />

              ))

            }
        </div>
    </>
  )
}
