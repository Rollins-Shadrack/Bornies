import React,{Component} from 'react';
import './Styles.css'
import {Link} from 'react-router-dom';




export default class Body extends Component{
    render(){
        return(
            <div className=" " style={{background:'rgba(255,209,220,0.3)',paddingTop:"100px"}}>
            
            <div class=" container">
          
                <div class="mx-4 row "
            >
                <div class="col-md-6 "> 
                <h1>Experience<span class="" style={{color:'purple'}}>The Best</span> </h1>
                    <h3 class=" my-3  h2"> <strong>We are here!</strong>
                    </h3>
                    <p class="h4  my-3" style={{color:'purple'}}>Bornies</p>
                    <p class='h4  my-3' style={{color:'purple'}}><b>Womens Beauty Parlour</b></p>
                    <p class="lead"><b>-For face gloss and all unit upgrades</b></p>
                    <p class="lead">Bornies parlour is the new and leading women's beauty parlour
                        in kenya. We are dedicated artists and we make your body unit
                        beauty and we take care of your skin face...

                    </p>
                    <p class="pt-3 lead"> We believe you are excited meet and experience 
                    our services</p>
                    <button class="btn btn-outline-success btn-lg px-3" data-bs-toggle="modal"
                    data-bs-target="#enroll">
                       Get A Queue
                    </button>
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                   <Link to="/contact" class="btn btn-outline-warning">Talk To Us</Link>
                </div>
                <div class="col-md-6 g-5 myImg" >
                <img src="/Images/bank1.jpg" style={{width:"500px", height:"500px" ,borderRadius:"50%"
            }}  />
                </div>
                 
                </div>
                
   
                
            
            </div>
            <div class="row pt-5 container">
                
                <div class="col-sm g-3 myImg">
<img src="/Images/about1.jpg" style={{width:"500px", height:"425px",borderRadius:"10px"}} />
                </div>
                <div class="col-sm g-3" style={{background:"#99FFFF",borderRadius:"10px"}}>
                <h2 class="text-center " style={{color:'purple'}}>About us</h2>
                <p class="text-dark lead">Bornies is the brand new women's beauty parlour
                    with an aim of providing affordable beauty services
                    to its clients,provide all types of womens makeup and we also provide body massage based on customers needs and demand
                    </p>
                    <p class="text-dark lead pt-3">We offer upto 15% discount in any makeup or body massage if you visit Bornies for the first time</p>
                        
                   <div style={{paddingLeft:"15%"}}> <button class="btn btn-info   " >Visit</button></div>
                
                </div>
                <div class="g-3">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias!
                        vLorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur reprehenderit corrupti aliquam deserunt odit reiciendis. Alias!
                    </p>
                </div>
            </div>
            <div class="container ">
           <h2 class="text-center" style={{color:'purple'}}>Meet The Team</h2> 
           <p class="lead text-center text-secondary mb-5">
               Our Instructors all have 5+ years working as a Beauty Therapist and makeUp artists
           </p>
           <div class="row g-4">
               <div class="col-md-6 col-lg-3">
                   <div class="card bg-white">
                       <div class="card-body text-center">
                           <img src="https://randomuser.me/api/portraits/men/11.jpg" 
                           class="rounded-circle mb-3" alt=""/>
                           <h3 class="card-title mb-3">Rollins Shadrack</h3>
                           <p class="card-text">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis, autem!</p>
                                <a href=""><i class="bi bi-twitter text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-facebook text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-whatsapp text-success mx-1"></i></a>
                                <a href=""><i class="bi bi-instagram text-danger mx-1"></i></a>
                       </div>
                   </div>
               </div>

               <div class="col-md-6 col-lg-3">
                   <div class="card bg-white">
                       <div class="card-body text-center">
                           <img src="https://randomuser.me/api/portraits/men/11.jpg" 
                           class="rounded-circle mb-3" alt=""/>
                           <h3 class="card-title mb-3">Albanus Mutua</h3>
                           <p class="card-text">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis, autem!</p>
                                <a href=""><i class="bi bi-twitter text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-facebook text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-whatsapp text-success mx-1"></i></a>
                                <a href=""><i class="bi bi-instagram text-danger mx-1"></i></a>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3">
                   <div class="card bg-white">
                       <div class="card-body text-center">
                           <img src="https://randomuser.me/api/portraits/men/11.jpg" 
                           class="rounded-circle mb-3" alt=""/>
                           <h3 class="card-title mb-3">Albanus Mutua</h3>
                           <p class="card-text">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis, autem!</p>
                                <a href=""><i class="bi bi-twitter text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-facebook text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-whatsapp text-success mx-1"></i></a>
                                <a href=""><i class="bi bi-instagram text-danger mx-1"></i></a>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3">
                   <div class="card bg-white">
                       <div class="card-body text-center">
                           <img src="https://randomuser.me/api/portraits/men/11.jpg" 
                           class="rounded-circle mb-3" alt=""/>
                           <h3 class="card-title mb-3">Albanus Mutua</h3>
                           <p class="card-text">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis, autem!</p>
                                <a href=""><i class="bi bi-twitter text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-facebook text-primary mx-1"></i></a>
                                <a href=""><i class="bi bi-whatsapp text-success mx-1"></i></a>
                                <a href=""><i class="bi bi-instagram text-danger mx-1"></i></a>
                       </div>
                   </div>
               </div>
               </div>
               </div><br/>
               <div class="container pb-5">
                   <h1 class="text-center" style={{color:'purple'}}>Our Services</h1>
                  <p claa="lead text-center ">Our main aim is to provide the best services you can ever get here at Bornies</p>
                  <div class="row">
                      <div class="col-sm g-5">
                          <div class="row">
                              <div class="col-sm-5">
                                  <img src="/Images/bank2.jpg" style={{width:"200px", borderRadius:"50%"}}/>
                              </div>
                              <div class="col-sm-5">
                                <h2>Facial Care</h2>
                                <h5>Foundation,Highlight,Lipgloss</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm g-5">
                          <div class="row" style={{boxShadow:"rgba"}}>
                              <div class="col-sm-5">
                                  <img src="/Images/banka.jpg" style={{width:"200px", borderRadius:"50%"}}/>
                              </div>
                              <div class="col-sm-5">
                                <h2>Nail Care</h2>
                                <h5>Foundation,Highlight,Lipgloss</h5>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-sm g-5">
                          <div class="row">
                              <div class="col-sm-5">
                                  <img src="/Images/braid.jpg" style={{width:"200px", borderRadius:"50%"}}/>
                              </div>
                              <div class="col-sm-5">
                                <h2>Hair Style</h2>
                                <h5>Foundation,Highlight,Lipgloss</h5>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm g-5">
                          <div class="row" style={{border:"4px solid rgba(0,0,0,0.5))"}}>
                              <div class="col-sm-5">
                                  <img src="/Images/waxing.jpg" style={{width:"200px", borderRadius:"50%"}}/>
                              </div>
                              <div class="col-sm-5">
                                <h2>Waxing</h2>
                                <h5>Foundation,Highlight,Lipgloss</h5>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
              
       
                    
                </div>
            
            
            
        )
    }
}