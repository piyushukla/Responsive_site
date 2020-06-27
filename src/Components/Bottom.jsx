import React from 'react'
import './Business.css'
import './Bottom.css'
function Bottom(){


    return(

       <div className="row">
            <div className="col1">
                <div style={{ width: "30%", height: "225px", float: "right", position: "relative", top: "0" }}>

                    <img src="https://cnet4.cbsistatic.com/img/NlyoQRNtMD1kFL4pKE1LzkM6uhI=/940x0/2018/03/16/5b1ba726-2c4d-4163-b14d-ed97ff23f959/20180316-windows-10-background-01.jpg"  height="179%" className="img" alt="windows" />
                </div>      
                <div style={{ float: "right", width: "8%", height: "100px", backgroundColor: "#000080" }}>
                    
                </div>

                <div className="artigo_nome" style={{wordBreak:"break-all",marginTop:"5%" }}>
                    <p style={{ fontWeight: "bold", fontSize: "1.5vw" }}>About Anthony Briggs</p>
                    <p style={{ color: "#00008B", fontSize: "1.5vw"}}>Business Coach</p>
                    <div style={{ fontSize: "1vw",paddingRight:"20%"}}>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Numquam suscipit quia autem
                    ipsa rerum excepturi voluptatem nam esse rem fugit,
                    expedita delectus optio ab nobis. Perferendis minus
                    odio architecto veritatis.</div>
                  
                    <div style={{ width: "100%", display: "flex", alignItems: "center", float: "left", marginTop: "10px" }}>

                        <button className="button1" style={{ color: "white", backgroundColor: "#000080",padding:"3px" }}>Learn More</button>   

                        {/* <a style={{ color: "white", backgroundColor: "#000080" }} href="something" className="button3">Learn More</a> */}
                    </div>
                </div>

            </div>

            
       </div>     
    )
}
export default Bottom;