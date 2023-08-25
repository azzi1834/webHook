import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function BasicExample() {
    const handleToggle = async () => {
        localStorage.removeItem('token');
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >WEBHOOK Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown className='justify-content-end' title={
                            <img className='thumbnail-image' alt='Profile'
                                src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1692939966~exp=1692940566~hmac=9ba5c7ac0ed2b565e7093a76c277f10ee08ceb4871ae311584123810d4e0a2e6'
                                style={{ width: "30px", height: "30px" }}
                            />
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href='./Login' onClick={handleToggle} >Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default BasicExample;