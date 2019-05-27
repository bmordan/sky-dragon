import React from 'react'
import Plug from './Plug'
import Port from './Port'

class Module extends React.Component {
    state = {
        ports: [
            [false, false, false]
        ]
    }
    connectPlug = (port, port_open) => {
        const [rack_index, port_index] = port.split("|")
        
        this.setState(state => {
            const { ports } = state
            ports[rack_index][port_index] = port_open
            return { ports }
        })

        console.log(port_open ? "opening" : "closing")
        console.log("port", port)
    }
    onConnection = port => this.connectPlug(port, true)
    onDisconnect = port => this.connectPlug(port, false)
    render () {
        return (
            <div className="pa3 flex flex-column items-center justify center">
                <section className="flex">
                    {this.state.ports.map((ports, rack) => {
                        return (
                            <div key={`ports-${rack}`} className="flex flex-column mh2">
                                {ports.map((port_open, index) => <Port 
                                key={`port-${index}`} 
                                onConnection={this.onConnection}
                                onDisconnect={this.onDisconnect}
                                port_index={`${rack}|${index}`} 
                                connected={port_open} />)}
                            </div>
                        )
                    })}
                </section>
                <section className="flex">
                    <div className="mt4">
                        <span className="dib ba b--gray br3 pa2 mh2">
                            <Plug />
                        </span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Module