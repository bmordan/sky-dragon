import React from 'react'
import { DropTarget } from 'react-dnd'
import Types from '../types'
import Plug from './Plug'

const dropProps = {
    drop(props) {
        props.onConnection(props.port_index)
        return {}
    }
}

const collect = (connect) => {
    return { 
        connectDropTarget: connect.dropTarget()
    }
}

class Port extends React.Component {
    render () {
        const bg = this.props.connected ? "bg-washed-green" : "bg-transparent"

        return (
            <span className="dib ba b--gray br3 pa2 mv1">
                {this.props.connected
                ? <Plug onDisconnect={this.props.onDisconnect.bind(null, this.props.port_index)} />
                : this.props.connectDropTarget(<div className={`br-100 h2 w2 ba ${bg}`}></div>)
                }  
            </span>
        )
    }
}

export default DropTarget(Types.PORT, dropProps, collect)(Port)