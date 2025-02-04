import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const Header = props => {

    return(
        <header className = 'header'>
        <div className = 'headerItems'>
        <p className='text text1'>NASA Photo Of The Day: {props.title}</p> 
        <p className='text'>Date: {props.date}</p>  
        <Dropdown setDate={props.setDate}/>
        </div>
        </header>
    
    )
}


export default Header;