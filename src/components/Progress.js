import React from 'react'

export const Progress = () => {
    return (
        <div className = "flex-wrap">
        <div className = "container-progress">
            <div className = "box">
            <h2 className = "text mt-30">Progress overview</h2>
                <div className= "percent">
                    <svg>
                        <circle cx= '70' cy = '70' r ='70'></circle>
                        <circle cx= '70' cy = '70' r ='70'></circle>
                    </svg>
                    <div className ="number">
                        <h2 className ="h-percent">40<span className= "sp-percent">%</span></h2>
                   
                    </div>
                    </div>
                    <div className = "div-spec">
                        <div className="flex-column-wrap mt-15 pdl-10">
                            <div className = "flex-wrap ">
                            <div className = "circle-num-y">

                            </div>
                             <p className ="p-circle-spec"> Completed</p>
                            </div>
                           
                            <p className = "p-hours-spec"> <span className ="sp-number">20</span> hours</p>
                           
                        </div>
                        <div className ="line-div"></div>
                        <div className="flex-column-wrap mt-15">
                        <div className = "flex-wrap">
                            <div className = "circle-num-o">

                            </div>
                             <p className ="p-circle-spec"> Left to go</p>
                            </div>
                            <p className = "p-hours-spec"> <span className ="sp-number">30</span> hours</p>
                           
                        </div>
                       
                       
                    </div>
               
               
            </div>
        </div>
        <div >
            <div className ="p-title-ctn">

          
        <p className ="p-right-progress">Progress</p>
        <div className = 'line-progress' ></div>
        </div>
        <div className ="flex-wrap-690">
            <div className ="progress-item mb-25 mr-25">
                <p className ="p-item">Total Webinars</p>
                <span className= "n-item">9</span>
            </div>

            <div className ="progress-item mb-25 mr-25">
                <p className ="p-item">Pending Assignments</p>
                <span className= "n-item">0</span>
            </div>
            <div className ="progress-item mb-25">
                <p className ="p-item">Total
Units</p>
                <span className= "n-item">5</span>
            </div>
            <div className ="progress-item mr-25">
                <p className ="p-item">Total
Readings</p>
                <span className= "n-item">14</span>
            </div>
            <div className ="progress-item total-item">
                <p className ="pt-item">Total Videos</p>
                <span className= "nt-item">5</span>
            </div>
            <div className = "confirmd-bar">
                <div className = "y-circle"></div>
                <div className = "b-circle"></div>
                <div className = "bd-circle"></div>
                <p className = "p-confirm-bar"><span  className ="s-confirm-bar" >Confirm your account details </span>
                Please confirm your email and phone number.</p>
               

            </div>
            </div>
        </div>
        
        </div>
    )
}
