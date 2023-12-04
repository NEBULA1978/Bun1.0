import react from 'react'
import ReactDOM from 'react-dom/server'

const a:number = 2

const message = <h1>Hola React {a}</h1>

console.log(
    ReactDOM.renderToString(message)
)