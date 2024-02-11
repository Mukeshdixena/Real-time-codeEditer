import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import Client from '../components/Client.js';
import Editor from '../components/EditorArea.js';
import { initSocket } from '../socket.js';
import ACTIONS from '../Actions.js';
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom';

const EditorPage = () => {

  const socketRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();


      socketRef.current.on('connect_error', (err) => handleErrors(err));
      socketRef.current.on('connect_failed', (err) => handleErrors(err));

      function handleErrors(e) {
        console.log('socket error', e);

        toast.error('socket connection failed, try agian later.');
        reactNavigator('/');
      }

      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [clients, setClients] = useState([
    { socketId: 1, userName: 'Mukesh' },
    { socketId: 2, userName: 'Sha MD' },

  ]);
  if (!location.state) {

    return <Navigate to="/" />;
  }
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
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage
