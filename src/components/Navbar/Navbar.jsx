import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {AiFillStar} from"react-icons/ai";
import {useSelector}from "react-redux";


export default function Navbar() {
    const favourite = useSelector((state) => state.favorites);
    // console.log(favourite);
    return (
        <>
            <nav className="navbar navbar-expand-lg page">
                <div className="container-fluid">
                    <NavLink className="text-white navbar-brand" to="/" activeStyle={{
                        fontWeight: "bold",
                    }}>Movies</NavLink >
                    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className=" nav-link active" style={{color:"white"}} aria-current="page" to="/movies" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="  nav-link " style={{color:"white"}} to="/favorites"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}>Favotites  <AiFillStar className=" star1"/><span>{favourite.favorites.length}</span> </NavLink>  
                                   
                           
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                            <ul className="navbar-nav me-auto mb-2 ms-3 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white active" aria-current="page" to="/">LOGIN</NavLink>
                                </li></ul>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
