import React from "react"
import ReactDOM from "react-dom"
import Module from "./components/Module"
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

const App = DragDropContext(HTML5Backend)(Module)
ReactDOM.render(<App />, document.getElementById('root'))