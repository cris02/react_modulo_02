const persona = {
  nombre : 'Cristian aguilar',
  edad : 25,
  soltero : true
}

const getSaludo = () => 'hola como estas';

export const FirtApp = () => {
  return (
    // regla en React siempre agrupar en un elemento padre cuando se requiere retornar mas de dos elementos
    <>
      <h1>Informacion personal</h1>
      <p>{JSON.stringify(persona) }</p>
      <p>{getSaludo()}</p>
    </>
    
  )
}
