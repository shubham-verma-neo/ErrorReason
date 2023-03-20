import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";
import useMeta from '../MetamaskLogin/useMeta';
import React from 'react'

function Header() {
    const { state , logIn, logOut} = useMeta();
    const networkName = () => {
        switch (state.networkID) {
            case 1:
                return "Ethereum Mainnet";
            case 80001:
                return "Mumbai Testnet";
            case 5:
                return "Goerli Testnet";
            default:
                return "localhost";
        } 
    }
    const connect = () => {
    // state.accounts ? console.log("out") :  console.log("in");
    state.accounts ? logOut() : logIn();
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container style={{justifyContent: 'flex-end'}}>
                    <Navbar.Brand >Sample</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">home</Nav.Link>
                    </Nav>
                </Container>
                <Container style={{justifyContent: 'flex-end'}}>
                    {state.networkID && <div style={{
                        borderRadius: '8px',
                        textAlign: 'center',
                        padding:' 5px 8px',
                        border: '2px solid black',
                        margin: '0.5rem'
                    }}><strong>{networkName()}</strong></div>}
                    {state.accounts && <div style={{
                        borderRadius: '8px',
                        textAlign: 'center',
                        padding:' 5px 8px',
                        border: '2px solid black',
                        margin: '0.5rem' 
                    }}><strong>{state.accounts}</strong></div>}
                    <Button style={{ margin: "0.5rem" }} onClick={connect}>{state.accounts ? 'Disconnect' : 'Connect Wallet'}</Button>
                </Container>
            </Navbar>
        </> 
    );
}

export default Header;