import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    
    const [show, handleShow] = useState(false)
    useEffect(() => {
        
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })

        return () => {
            window.removeEventListener('scroll')
        }

    }, [])

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <a href='/'><img src="https://www.brandvia.com/wp-content/uploads/2019/04/Netflix-Logo.png" alt="Netflix logo" className="nav-logo"/></a>
            <a target='_blank' rel="noreferrer" href='https://alexmenlah.ga/'><img src="https://occ-0-2939-778.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABXWzj4Y7Didig-VXztOIB23ZyYuiRaAAgVg-Mg5ksOc5BbGMgArv0o2Ox_ZcBO9X50uu0FJyq2O3H3AXh-tCH_CmgVhq.png?r=2ca" alt="Profile icon" className="nav-avatar"/></a>
            
        </div>
    )
}

export default Nav
