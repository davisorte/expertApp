import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  };
  const onSubmit = (event) => {
    //evita hacer el refrest
    event.preventDefault();
    //si me quitas los espacios adelante y atras no hay por lo menos mas de una letra ejecute
    if(inputValue.trim().length <= 1) return ;
    //setCategories(categories=>  [inputValue, ...categories]);
    //Borrar el valor ya agregado
    
    setInputValue('');
    //se peude ejecutar despues
    onNewCategory(inputValue.trim())
  };
  return (
    //onSubmit: evento de formulario
    //con una funcion flecha regresamos el valor de retorno
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
