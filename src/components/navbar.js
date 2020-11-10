import React from 'react'
import './style.scss'

export default function NavBar(){
    return ( 
        <div>
            <div style={{backgroundColor:'black'}}>
                <ul>
                    <li><a style={{ textDecoration:'none', color:'white'}} href="#">Home</a></li>
                    <li><a style={{ textDecoration:'none', color:'white'}} href="#">About</a></li>      
                    <li><a style={{ textDecoration:'none', color:'white'}} href="#">Products</a></li>      
                    <li><a style={{ textDecoration:'none', color:'red'}} href="#">Help</a></li>
                </ul>
            </div>
        </div>
    )
}
