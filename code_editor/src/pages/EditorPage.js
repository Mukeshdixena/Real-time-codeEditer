import React, { useState } from 'react'
import Client from '../components/Client.js'

const EditorPage = () => {

  const [clients, setClients] = useState([
    { socketId: 1, userName: 'M u k e s h' },
    { socketId: 2, userName: 'Shahzad MD' },
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
      </div>
      <div className='aditorWrop'>
        editor goes hear
      </div>
    </div>
  )
}

export default EditorPage
