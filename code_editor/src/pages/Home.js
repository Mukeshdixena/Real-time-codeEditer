import React, { useState } from 'react'

import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {

  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const createNewRoom = (e) => {

    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('New Room Created!');
  }

  return (
    <div className='homePageWrapper'>

      <div className='formWrapper'>
        <img className='homePageLogo' src="/img/codedit.png" alt="code-sync-logo"></img>

        <h4 className='mainLabel'> Paste invitation ROOM ID</h4>



        <div className='inputGroup'>
          <input type="text" className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} />
          <input type="text" className='inputBox' placeholder='USERNAME' onChange={(e) => setUserName(e.target.value)} value={userName} />

          <button className='btn joinBtn'>Join</button>

          <span className='createInfo'>


            If you don't have an invite then create &nbsp;

            <a onClick={createNewRoom} href="" className='createNewBtn'>
              new room
            </a>

          </span>
        </div>
      </div>


      <footer>
        <h4>
          Build with &#9824; by <a href="https://github.com/shah6386">Shahzad</a> & &nbsp;
          <a href="https://github.com/Mukeshdixena">Mukesh</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home
