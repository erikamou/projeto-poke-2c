import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="rounded shadow-sm mb-4">
            <Container>
                <Navbar.Brand href="/home">Lula inácio da silva</Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-navbar-nav" />
                <Navbar.Collapse id="menu-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/pokeflex">Pokeflex</Nav.Link>
                        <Nav.Link href="/pokegrid">PokeGrid</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
