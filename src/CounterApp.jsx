import { useState } from 'react';
import PropTypes from 'prop-types';

// snipe para crear la estructura del componente rafc

export const CounterApp = ({value}) => {

  //seccion de hooks
  const [counter, setCounter] = useState(value);

  // funcion
  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleRestar = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value);
  }


  return (
    <>
        <h1>CounterApp</h1>
        <p>{counter}</p>

        <button onClick={ handleAdd }>
          +1
        </button>
        <button onClick={handleRestar}>
          -1
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

CounterApp.defaultProps = {
    value : 15
}

