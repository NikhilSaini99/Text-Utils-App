
import React, { useState } from 'react'


export default function Loginlogout() {

  const [loggedIn, setLoggedIn] = useState(false)

  const change = () => {
    // {loggedIn?setLoggedIn('Hi Nikhil'):setLoggedIn('Guest')}

    if (loggedIn === true) {
      setLoggedIn('Hi Nikhil');

    }
    else {
      return (setLoggedIn('Guest'))

    }
  }

  return (
    <>
      <div className="container my-5">
      <div className="mb-3">
          <h1 className='mx-5'>{loggedIn}</h1>
        <button className="btn btn-primary my-3" onClick={change}>Login</button>
      </div>
      
                <h1>My text area Data</h1>
                
                </div>
            </>
  )

}
