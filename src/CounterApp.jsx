import PropTypes from 'prop-types'

// snipe para crear la estructura del componente rafc

export const CounterApp = ({value}) => {

  // funcion
  const handleAdd = (event) => {
    console.log(event);
    console.log('haciendo clic +1');
  }
  return (
    <>
        <h1>CounterApp</h1>
        <p>{value}</p>

        <button onClick={ handleAdd }>
          +1
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

CounterApp.defaultProps = {
    value : 10
}

