import React from 'react'
import './Header.css'


function Header(){


    return (
        <div className="container-fluid cnt" style={{ backgroundColor:"#E8E8E8"}}>
            
            <div className="container" style={{paddingTop:"7%",marginTop:"0px"}} >
                <div style={{marginLeft:"7%"}}>
                    <h2>Professional</h2>
                    <h2>Coaching</h2>
                    <h6>For Business Owners & Entrapreneurs</h6>
                    <button className="button1">Make An Appointment</button>
                    <button className="button1" style={{ color: "white", backgroundColor:"#4eb5f1"}}>About Me</button>
                </div>
        
            </div>
         
       </div>
    )

}
export default Header;