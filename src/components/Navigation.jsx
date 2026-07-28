import Link from "next/link";

const Navigation = () => {
    return (
        <>
            <nav>
                <Link href="/" className="nav-link">Inicio</Link>
                <Link href="/servicios" className="nav-link">Servicios</Link>
                <Link href="/contacto" className="nav-link">Contacto</Link>
            </nav>
        </>
    );
}

export default Navigation;

