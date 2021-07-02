import React from 'react';
import MachineList from './machineList';

const listUnits = () => {
    return (
        MachineList.map(machine =>
            <div><tr>
                <td><strong>{machine.name}</strong></td>
                <td><strong>Status: </strong></td><td>{machine.status}</td>
                <td><button onclick="sendCommand" value={machine.guid}>Send Command</button></td>
            </tr>
                <tr>
                    <td>{machine.guid}</td>
                    <td><strong>Data: </strong></td><td>{machine.data}</td>
                </tr>
            </div>
        )
    );
}

export default listUnits