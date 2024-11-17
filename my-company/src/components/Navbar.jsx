import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ background: '#f4f4f4', padding: '10px' }}>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
            <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;