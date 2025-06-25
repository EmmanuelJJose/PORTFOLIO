// // src/components/Navbar.jsx

// import { Link } from "react-scroll"; // For smooth scrolling
// import styles from '../styles/Navbar.module.css'

// function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <h1 className={styles.logo}>Emmanuel J Jose</h1>
//       <ul className={styles.navLinks}>
//         <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
//         <li><Link to="about" smooth={true} duration={500}>About</Link></li>
//         <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
//         <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
//         <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }
//  export default Navbar;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Navbar.module.css';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className='bg-black' >
            <Container fluid className={styles.tex}>
                <button
                    type="button"
                    className="text-sm tablet:text-base p-4 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-600 text-white hover:scale-105 active:scale-100 tablet:first:ml-0"
                >
                    <img className="h-8" src="https://react-portfolio-template.netlify.app/images/moon.svg" alt="Toggle dark mode" />
                </button>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className=" ms-auto my-2 my-lg-5 d-flex gap-4" navbarScroll>
                        <Nav.Link href="#action1" style={{
                            color: "white",
                            border: "1.5px solid transparent",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.75rem",
                            transition: "border-color 0.2s, color 0.2s, background 0.2s"
                        }}
                            onMouseEnter={e => {
                                e.target.style.borderColor = "rgba(56,189,248,0.7)";
                                e.target.style.color = "#38bdf8";
                                e.target.style.background = "rgba(56,189,248,0.08)";
                            }}
                            onMouseLeave={e => {
                                e.target.style.borderColor = "transparent";
                                e.target.style.color = "white";
                                e.target.style.background = "transparent";
                            }}>Home</Nav.Link>
                        <Nav.Link href="#action2" style={{
                            color: "white",
                            border: "1.5px solid transparent",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.75rem",
                            transition: "border-color 0.2s, color 0.2s, background 0.2s"
                        }}
                            onMouseEnter={e => {
                                e.target.style.borderColor = "rgba(56,189,248,0.7)";
                                e.target.style.color = "#38bdf8";
                                e.target.style.background = "rgba(56,189,248,0.08)";
                            }}
                            onMouseLeave={e => {
                                e.target.style.borderColor = "transparent";
                                e.target.style.color = "white";
                                e.target.style.background = "transparent";
                            }}>About</Nav.Link>
                        <Nav.Link href="#action2" style={{
                            color: "white",
                            border: "1.5px solid transparent",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.75rem",
                            transition: "border-color 0.2s, color 0.2s, background 0.2s"
                        }}
                            onMouseEnter={e => {
                                e.target.style.borderColor = "rgba(56,189,248,0.7)";
                                e.target.style.color = "#38bdf8";
                                e.target.style.background = "rgba(56,189,248,0.08)";
                            }}
                            onMouseLeave={e => {
                                e.target.style.borderColor = "transparent";
                                e.target.style.color = "white";
                                e.target.style.background = "transparent";
                            }}>Projects</Nav.Link>
                        <Nav.Link href="#action2" style={{
                            color: "white",
                            border: "1.5px solid transparent",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.75rem",
                            transition: "border-color 0.2s, color 0.2s, background 0.2s"
                        }}
                            onMouseEnter={e => {
                                e.target.style.borderColor = "rgba(56,189,248,0.7)";
                                e.target.style.color = "#38bdf8";
                                e.target.style.background = "rgba(56,189,248,0.08)";
                            }}
                            onMouseLeave={e => {
                                e.target.style.borderColor = "transparent";
                                e.target.style.color = "white";
                                e.target.style.background = "transparent";
                            }}>Skills</Nav.Link>
                        <Nav.Link href="#action2" style={{
                            color: "white",
                            border: "1.5px solid transparent",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.75rem",
                            transition: "border-color 0.2s, color 0.2s, background 0.2s"
                        }}
                            onMouseEnter={e => {
                                e.target.style.borderColor = "rgba(56,189,248,0.7)";
                                e.target.style.color = "#38bdf8";
                                e.target.style.background = "rgba(56,189,248,0.08)";
                            }}
                            onMouseLeave={e => {
                                e.target.style.borderColor = "transparent";
                                e.target.style.color = "white";
                                e.target.style.background = "transparent";
                            }}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;



