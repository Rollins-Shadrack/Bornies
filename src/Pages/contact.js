import React from 'react';

export default function Contact(){
    return( 
    <div class="py-5" >
        <div>
        <h1 class=" text-center pt-5" style={{color:'purple'}}>Contact Us</h1>
        </div>
   
   
    
        <div class="px-3 text-center container bg-secondary text-light" style={{width:"50%"}}>

           <label>Name:</label><br/>
           <input type="text" placeholder='Enter name'/><br/>
           <label>Email:</label><br/>
           <input type="email" placeholder='Enter email'/><br/>
           <label>Message:</label><br/>
           <textarea cols={30} rows={7} placeholder='Enter message'/>
           <div className='py-3 '><button className='btn btn-outline-danger'>Submit</button> </div> 

        </div>
       
        


</div>
    )
}