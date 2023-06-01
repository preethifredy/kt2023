
import { Container, Navbar } from "react-bootstrap";
import Navigation from '@/app/components/Header/Navigation/page'
import Logo from "../Logo/page";

const page = () => {
  return (
    <>
    <header id="header" className={`w-100`}>
      <Navbar bg="transparent" expand="lg">
        <Container fluid className="px-5 mob-px-2">
         <Logo />
          <Navbar aria-controls="header-navbar-nav" className="border-0" />
          <Navbar id="header-navbar-nav" className="justify-content-end">
            <Navigation />
          </Navbar>
        </Container>
      </Navbar>
    </header>
    </>
  )
}

export default page
