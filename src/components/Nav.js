import React from 'react'

export const Nav = () => {
    return (
        <div>
            
             <div className ="navBar" >
          
          <img className = 'itemNav'  src="../../navLogo.svg" alt="logo" />
          <p className ="p-nav">Platform</p>
           <input 
           className = 'inputNav'
           placeholder= "Search and Find"
           type="text" />
           <button className ='nav-btn'> +ADD</button>
           <img className = 'itemNav'  src="../../Notification-Iconly.png" alt="notifications" />
           <img className = 'itemNav'  src="../../Chat - Iconly---Bold.png" alt="cahat" />
           
           <p className = 'a-name'>Clarence Russel</p>
            
           <img className = 'itemNav' src="../../Picture.png" alt="profilepic" />
           <img className = 'itemNav'  src="../../Arrow---Down-2 - Iconly---Bold.png" alt="doewn" />
        </div>
      
        
        </div>
    )
}
