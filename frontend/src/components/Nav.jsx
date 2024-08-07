import { useState } from 'react';
import './Nav.css';

function Nav({sendDataToParent,standardId,prevToggle,handleToggle}){
    const showAccount = () => {
        alert("Show Account Function");
    };
    
    const showAbout = () => {
        alert("Show About Function");
    };
    const handleToggleChange=()=>{
        handleToggle(!prevToggle);
    }
    return(
        <div className="navbar">
        <div className="logo" onClick={() => sendDataToParent(0)}>Textbook GPT</div>
        <div className="nav-links">
            {
                standardId === 0 ? (
                    <></>
                ) :(
                    <button onClick={handleToggleChange}>History</button>
                )
            }
            <button onClick={showAccount}>Account</button>
            <button onClick={showAbout}>About</button>
        </div>
    </div>
    )
}
export default Nav;