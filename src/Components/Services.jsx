import React from 'react'
import './Services.css'
import './Header.css'

function Services(){


    return (

        <div className="container-fluid">


            <h1 style={{ textAlign: "center",marginTop:"5%" }}>My Coaching Services</h1> 

        <div style={{marginTop:"5%"}}>
 
            <div className="row" style={{display:"flex",width:"50%",margin:"0 auto"}}>

                <div className="col-lg-4 col-md-4 col-xl-3 column">


                        <div >
                            <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }}  />
                            <p  className="text" style={{ color: "#0000CD" }}>Visioning</p>
                       </div>              

                </div>
                <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ backgroundColor: "#F7F0EE", borderRadius: "1px solid #F0FFF0"}}>


                        
                            <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                            <p className="text" style={{ color: "#0000CD" }}>Planning</p>
                    


                </div>
                <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ backgroundColor: "#FCF9E9", borderRadius: "1px solid #F0FFF0"}}>


                           <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                          <p className="text" style={{ color: "#0000CD"}}>Network</p>
                        

                </div>
                <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ backgroundColor: "#F8F8FF", borderRadius: "1px solid #F0FFF0"}}>

                        
                            <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                           <p className="text" style={{ color: "#0000CD" }}>Research</p>
                       
                    </div>
            </div>    
                <div className="row" style={{ display: "flex", width: "50%", margin: "0 auto", boxShadow: "10px 15px 15px #A9A9A9" }}>

                    <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ borderRadius: "1px #0000CD", backgroundColor: "#F5F5F5"}}>


                        
                               <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                               <p className="text" style={{ color: "#0000CD" }}>Branding</p>
                 



                </div>
                    <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ borderRadius: "1px #DCDCDC", backgroundColor: "#FDFCE8" }}>


                       
                        <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                         <p className="text" style={{ color: "#0000CD" }}>Marketing</p>
                    


                </div>
                    <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ borderRadius: "1px #D3D3D3", backgroundColor: "#F3F3F1" }}>


                        
                        <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                       <p className="text" style={{ color: "#0000CD"}}>Hiring</p>
                    

                </div>
                    <div className="col-lg-4 col-md-4 col-xl-3 column" style={{ borderRadius: "1px #C0C0C0", backgroundColor: "#FDF5E6" }}>

                        
                        <img className="center" src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
                    <p className="text" style={{ color: "#0000CD" }}>Operation</p>
                
                </div>
                </div>
            </div>
                 <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>

                 <button className="button1" style={{ color: "white", backgroundColor: "#000080" }}>About Me</button>

              </div>  
            </div>
        



        //  <div className="container-fluid" style={{ display: "inline-block", textAlign: "center", marginTop: "5%" }}>


        //      <h1 style={{fontSize:"3vw"}}>My Coaching Services</h1>
     
        //      <div style={{ margin: "auto", width: "50%", boxShadow: "10px 15px 15px 	#A9A9A9" }}>

        //     <div className="container" style={{ marginTop: "5%", alignContent: "center", display: "flex"}}>

        //         <div  className="container" style={{ width: "170px", height: "100px", borderRadius: "1px solid #F0FFF0", marginRight:"0" }} >

        //             <div style={{ marginTop:"35%"}}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD",fontSize:"1.5vw" }}>Visioning</p>
        //             </div>
        //         </div> 
        //         <div className="container" style={{ marginRight:"0",marginLeft:"0",width: "170px", height: "100px", borderRadius: "1px solid #F0FFF0", backgroundColor: "#F7F0EE" }} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Planning</p>
        //             </div>
        //         </div> 
        //         <div className="container" style={{ marginRight: "0", marginLeft: "0",width: "170px", height: "100px", borderRadius: "1px solid #F0FFF0", backgroundColor: "#FCF9E9" }} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Network</p>
        //             </div>
        //         </div> 
        //         <div className="container" style={{  marginLeft: "0",width: "170px", height: "100px", borderRadius: "1px solid #F0FFF0", backgroundColor: "#F8F8FF" }} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Research</p>
        //             </div>
        //         </div> 
        // </div>
        //     <div className="container" style={{ alignContent: "center", display: "flex"  }}>

        //         <div className="container" style={{ width: "170px", height: "100px", borderRadius: "1px #0000CD", backgroundColor: "#F5F5F5", marginRight: "0"}} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Branding</p>
        //             </div>
        //         </div>
        //         <div className="container" style={{ marginRight: "0", marginLeft: "0", width: "170px", height: "100px", borderRadius: "1px #DCDCDC", backgroundColor: "#FDFCE8" }} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Marketing</p>
        //             </div>
        //         </div>
        //         <div className="container" style={{ marginRight: "0", marginLeft: "0", width: "170px", height: "100px", borderRadius: "1px #D3D3D3", backgroundColor: "#F3F3F1"}} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Hiring</p>
        //             </div>
        //         </div>
        //         <div className="container" style={{ marginLeft: "0", width: "170px", height: "100px", borderRadius: "1px #C0C0C0", backgroundColor: "#FDF5E6" }} >

        //             <div style={{ marginTop: "35%" }}>
        //                 <img src="/assets/brain.png" alt="brain" style={{ width: "25px", height: "25px" }} />
        //                 <p style={{ color: "#0000CD", fontSize: "1.5vw" }}>Operation</p>
        //             </div>
        //         </div>
        //     </div>
        //     </div>
        //     <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "35px" }}>

        //         <button className="button1" style={{ color: "white", backgroundColor: "#000080" }}>About Me</button>
        //          <a style={{ color: "white", backgroundColor: "#000080" }} href="something" className="button3">About Me</a> 
        //      </div>  
        // </div>
    )

}
export default Services;