import React from 'react'
import { DragSource } from 'react-dnd'
import Types from '../types'

const dragProps = {
    beginDrag(props) {
        return {}
    },
    endDrag(props) {
        if (props.onDisconnect) {
            props.onDisconnect()
        }
    }
}

const collect = (connect) => {
    return {
        connectDragSource: connect.dragSource()
    }
}

class Plug extends React.Component {
    render () {
        return this.props.connectDragSource(<div className={`flex items-center justify-center br-100 h2 w2 ba bg-washed-green`}></div>)
    }
}

export default DragSource(Types.PORT, dragProps, collect)(Plug)