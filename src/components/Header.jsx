import React from 'react';
import { BiMoon } from 'react-icons/bi'

export default function Header(){
    
    function toggleTheme(){

        alert("Novidades em breve.");
    }

    return(
        <header>
            <div className="logo">
                <label id="tacuquex">tacuquex</label>
                <label id="est">est. 2021</label>
            </div>
            <div className="buttons">
                <BiMoon onClick={() => {toggleTheme()}} size={24}/>
            </div>
        </header>
    );
}