import React, { useRef, useEffect, useState} from 'react'
//styled components
import {Styledcontainer} from './components/Style';

function App() {
  <main className='App'>
    <Register />
  </main>

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
<div>
{(typeof backendData.users === 'undefined') ?(
  <p>Hello World</p>
): (
backendData.users.map((user, i) => (
<p key={i}>{user}</p>

))
)}
</div>
  );
}

export default App;
