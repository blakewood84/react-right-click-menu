/** @jsx jsx */ /** @jsxRuntime classic */ import { jsx } from "theme-ui";
import React, { useState } from 'react'
import './App.css';
import { Button } from 'react-bootstrap'

const options = [
  {
    name: 'Option 1'
  },
  {
    name: 'Option 2'
  },
  {
    name: 'Option 3'
  },
  {
    name: 'Option 4'
  }
]

const menuTheme = {
  height: '350px', 
  width: '250px', 
  border: '1px solid orange',
  '.menu-item': {
    cursor: 'pointer'
  },
  '.menu-item:hover': {
    backgroundColor: 'orange'
  }
}

const Menu = () => {

  const handleOnClick = (e) => {
    console.log(e)
  }

  return (
    <div sx={menuTheme}>
      {
        options.map(item => {
          return (
            <div
              onClick={() => handleOnClick(item)}
              className="menu-item"
            >{item.name}</div>
          )
        })
      }
    </div>
  )
}

function App() {

  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const handleContextMenu = (e) => {
    e.preventDefault()
    setXPos(e.clientX)
    setYPos(e.clientY)
    setShowMenu(true)
  }
  
  const handleOnClick = (e) => {
    setShowMenu(false)
  }

  return (
    <div className="App" onContextMenu={handleContextMenu} onClick={handleOnClick}>
      <div className="container">
        Right Click to Open Menu
      </div>
      { 
        showMenu && (
          <div style={{position:'absolute', zIndex: '100', top: yPos, left: xPos}}>
            <Menu />
          </div>
        )
      }
    </div>
  );
}

export default App;
