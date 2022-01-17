import React,{Component} from 'react';
 import Styles from './Styles.css';
import {Link} from 'react-router-dom'

export default class Navbar extends Component{
    render(){
        return(
            
                        <div className=" bg-warning text-center fixed-top">
                            <div style={{background:'pink'}} className="p-1">
                                <div className="">
                                    <a href='tel:+2547 03386 097' class="link"><span className="bi bi-telephone-inbound ">&nbsp; &nbsp;+2547 03386 097</span></a>
                                    &nbsp; &nbsp;<a href=''><span className='bi bi-facebook text-primary' ></span></a>
                                    &nbsp; &nbsp;<span className='bi bi-whatsapp text-success' ></span>
                                    &nbsp; &nbsp;<span className='bi bi-twitter text-info' ></span>
                                    &nbsp; &nbsp;<span className='bi bi-instagram text-danger' ></span>
                                    <a href='mailto:bornies2022@gmail.com' class="link">&nbsp; &nbsp;<span className='bi bi-envelope text-info' ></span></a>
                                </div>

                            </div>
                            <nav id='navbar' className=" navbar navbar-expand-lg navbar-light bg-dark" style={{color:'pink'}}>
            <div className="container-fluid" style={{color:'pink'}}>
                <a className="navbar-brand text-center" href="#" style={{color:'pink'}}><strong className="bi bi-house h3">Bornies</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " style={{color:'pink'}}></span>
                </button>
                <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{color:'pink'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Our Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item text-info" href="#">Action</a></li>
                        <li><a className="dropdown-item text-info" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item text-info" href="#" >Something else here</a></li>
                    </ul>
                    </li>
                
                    <li className="nav-item">
                    <Link to="/home" className="nav-link active" style={{color:'pink'}} aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link" style={{color:'pink'}} >About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="contact" className="nav-link" style={{color:'pink'}} >Contact</Link>
                    </li>
                   </ul>
   
                </div>
            </div>
            </nav>
            </div>
        )
    }
}