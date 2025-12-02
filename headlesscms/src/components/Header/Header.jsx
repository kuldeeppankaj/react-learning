import React from 'react'
import MainHeader from './MainHeader'
import TopBar from './TopBar'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="header-top">
            <div className="container">
                <TopBar />
                <MainHeader />
            </div>
        </div>
    </header>
  )
}

export default Header