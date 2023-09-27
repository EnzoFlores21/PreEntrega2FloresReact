import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';





const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link to='/'>Suplementos Pmy</Link>
                <Nav className="me-auto">
                    <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/category/proteina'>Proteina</NavLink>
                    <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to="/category/creatina">Creatina</NavLink>
                    <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to="/category/accesorios">Accesorios</NavLink>
                </Nav>
                <Link to='/Cart'>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar