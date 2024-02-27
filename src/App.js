import { useState, useLayoutEffect, createContext } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FetchUsers from "./FetchUsers";
import './App.css'

const UserContext = createContext();

function App() {
    const [selectedUser, setSelectedUser] = useState();
    const [activePath, setActivePath] = useState('');
    useLayoutEffect(() => {
        if (window.location.href.endsWith("/#/users")) {
            setActivePath('users');
        }
        if (window.location.href.endsWith("/#/")) {
            setActivePath('');
        }
    }, [activePath]);
    return (
        <HashRouter>
            <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <Nav className="me-auto navbar-dark fixed-top bg-dark">
                            <Nav.Link as={Link} to="/" className={(activePath === '') && "active"} onClick={() => {
                                setActivePath('');
                            }}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/users" className={(activePath === 'users') && "active"} onClick={() => {
                                setActivePath('users');
                                setSelectedUser();
                            }}>Users</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<FetchUsers />} />
                </Routes>
            </UserContext.Provider>
        </HashRouter>
    );
}

function HomePage() {
    return (
        <div>
            <br />
            <h2 className="text-center">Welcome</h2>
        </div>
    )
}

export { UserContext };
export default App;