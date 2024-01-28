import React, { useState } from 'react'
import Client from '../components/Client.js'
import Editor from '../components/EditorArea.js'

const EditorPage = () => {

  const [clients, setClients] = useState([
    { socketId: 1, userName: 'Mukesh' },
    { socketId: 2, userName: 'Sha MD' },
    { socketId: 3, userName: 'Sha MD' },
  ]);
  return (
    <div className='mainWrap'>
      <div className='aside'>

        <div className='asideInner'>
          <div className='logo'>
            <img className='logoImage' src='/img/codedit.png' alt='codeEdit'></img>
          </div>

          <h3>Connected</h3>
          <div className='clientsList'>
            {
              clients.map((client) => (
                <Client
                  key={client.socketId}
                  userName={client.userName} />
              ))
            }
          </div>
        </div>

        <button className='btn copyBtn'>Copy ROOM ID</button>
        <button className='btn leaveBtn'>Leave</button>

      </div>
      <div className='aditorWrop'>
        <Editor/>
      </div>
    </div>
  )
}

export default EditorPage
