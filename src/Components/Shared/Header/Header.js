import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Media/logo.png'
import Loading from '../Loading/Loading';
import './Header.css'

const Header = () => {
    let [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading />;
    }
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><img style={{ height: '40px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='link' as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link className='link' as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link className='link' as={Link} to='/about'>About</Nav.Link>
                        {user ? (
                            <Nav.Link as={Link} to="/manageInventories" className="link">
                                Manage Items
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                        {user ? (
                            <Nav.Link as={Link} to="/addNewItem" className="link">
                                Add Item
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                        {user ? (
                            <Nav.Link as={Link} to="/myItems" className="link">
                                My items
                            </Nav.Link>
                        ) : (
                            ""
                        )}

                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='btn btn-link text-light text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link className='text-light link' as={Link} to="signIn">
                                    Sign In
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;