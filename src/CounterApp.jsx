import PropTypes from 'prop-types'

// snipe para crear la estructura del componente rafc

export const CounterApp = ({value}) => {
  return (
    <>
        <h1>CounterApp</h1>
        <p>{value}</p>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

CounterApp.defaultProps = {
    value : 10
}

