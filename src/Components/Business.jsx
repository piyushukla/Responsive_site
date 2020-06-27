import React from 'react'
import './Business.css'
import './Header.css'

function Business(){


    return (

        <div className="row" style={{marginTop:"5%"}}>
            <div className="column1">

                <div style={{ width: "10%", height: "40%", zIndex: "-1", backgroundColor: "#DCDCDC", position: "absolute" }}>

                </div>

                <div style={{ position: "relative", top: "40px", height: "40vh" }}>

                    <img src="https://cnet4.cbsistatic.com/img/NlyoQRNtMD1kFL4pKE1LzkM6uhI=/940x0/2018/03/16/5b1ba726-2c4d-4163-b14d-ed97ff23f959/20180316-windows-10-background-01.jpg"  className="image" alt="windows" />


                </div>   
                
            </div>
            <div className="container-fluid column2">
        
                <h3 style={{marginTop:"11%"}}>How Do I Know If I Need a <br/> Business Coach?</h3>

                <div className="artigo_nome">

                    <p style={{ color: "#1E90FF", paddingLeft: "3%", paddingRight: "1%" }}>What is Business Coaching</p>
                    <p style={{ fontSize: "14px", paddingLeft: "2px", paddingRight: "2px" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores libero ad consequatur harum fugiat tempore unde,
                    totam, molestias necessitatibus quam error nulla, omnis laborum
                        pariatur repellendus ipsum. Dignissimos, repellat aliquid.</p>
                </div>
                <div className="artigo_nome" style={{marginTop:"2%"}} >

                    <p style={{ fontSize: "14px", paddingLeft: "2px", paddingTop: "2%" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                       Maiores libero ad c ipsum dolor sit amet</p>
                </div>
                <div className="artigo_nome" style={{ marginTop: "2%" }} >

                    <p style={{ fontSize: "13px", paddingLeft: "2px", paddingTop: "2%" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores </p>
                </div>
                <div className="artigo_nome" style={{ marginTop: "2%" }} >

                    <p style={{ fontSize: "13px", paddingLeft: "2px", paddingTop: "2%" }}>Lorem,consectetur adipisicing elit.
                    Maiores libero ad c ipsum dolor sit amet</p>
                </div>
                <div className="artigo_nome" style={{ marginTop: "2%" }} >

                    <p style={{ fontSize: "13px", paddingLeft: "2px", paddingTop: "2%" }}>Lorem, adipisicing elit.
                    Maiores libero ad c ipsum dolor sit amet</p>
                </div>

                <div style={{ width: "100%", display: "flex", alignItems: "center", marginTop: "20px" }}>

                    <button  style={{ color: "white" ,backgroundColor: "#000080",borderRadius:"25px",marginLeft:"20%" }}>Get In Touch</button>   
                    {/* <a style={{ color: "white", backgroundColor: "#000080" }} href="something" className="button3">Get In Touch</a> */}
                </div>
            </div>
        </div>

    )

}
export default Business;