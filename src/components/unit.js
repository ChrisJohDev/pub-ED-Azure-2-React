import React from 'react';
import MachineList from './machineList';


const Unit = () => {
    return (
        MachineList.map(machine =>
            <div class="item-wrapper">
                <span><strong>{machine.name}</strong></span>
                <span><strong>Status: </strong>{machine.status}</span>
                <button class="column3" onclick="sendCommand" value={machine.guid}>Send Command</button>
                <span>{machine.guid}</span>
                <span><strong>Data: </strong>{machine.data}</span>
            </div>
        )

    );
}

export default Unit