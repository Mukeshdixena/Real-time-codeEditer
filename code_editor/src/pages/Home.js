import React from 'react'

const Home = () => {
  return (
    <div className='homePageWrapper'>

      <div className='formWrapper'>
        <img src="/img/codedit.png" alt="code-sync-logo"></img>

        <h4 className='mainLabel'> Paste invitation ROOM ID</h4>



        <div className='inputeGroup'>
          <input type="text" className='inputBox' placeholder='ROOM ID' />
          <input type="text" className='inputBox' placeholder='USERNAME' />


          <button className='btn joinBtn'>Join</button>
        </div>

        <span className='createInfo'>

          If you don't have an invite then create &nbsp;

          <a href='#' className='createNewBtn'>
            new room
          </a>
        </span>
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
