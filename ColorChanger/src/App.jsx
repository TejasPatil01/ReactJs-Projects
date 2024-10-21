import React ,{ useState } from 'react'
import ColorChanger from './ColorChanger.jsx'
import './assets/index.css';
function App() {
 return(<>
   <div className="container">
   <div className="color-plate">
 <ColorChanger  color = 'Red'/>
 <ColorChanger color = 'Green'/>
 <ColorChanger color = 'Blue'/>
 <ColorChanger color = 'Olive'/>
 <ColorChanger color = 'Gray'/>
 <ColorChanger color = 'Yellow'/>
 <ColorChanger color = 'Pink'/>
 <ColorChanger color = 'Purple'/>
 <ColorChanger color = 'Black'/>
 </div>
</div>
    </>
  )
}

export default App
