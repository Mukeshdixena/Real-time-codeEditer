import React from 'react'

const Home = () => {
  return (
    <div className='homePageWrapper'>

      <div className='formWrapper'>
        <img src="/img/Code-sync-logo.jpeg" alt="code-sync-logo"></img>

        <h4 className='mainLabel'> Paste invitation ROOM ID</h4>

        <div className='inputeGroup'>
          <input type="text" className='inputBox' placeholder='ROOM ID' />

        </div>

        <div className='inputeGroup'>
          <input type="text" className='inputBox' placeholder='USERNAME' />

        </div>

        <button className='btn joinBtn'>Join</button>

        <span className='createInfo'>

          If you don't have an invite then create &nbsp;
          
          <a href='#' className='createNewBtn'>
            new room
          </a>
        </span>
      </div>

    </div>
  )
}

export default Home
