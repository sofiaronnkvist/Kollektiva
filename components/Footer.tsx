import Logo from "./Logo";

function Footer() {
    return(
        <footer className="flex flex-col justify-center pt-14">
            <Logo></Logo>
            <div>
                <ul className="flex flex-col md:flex-row gap-12 justify-center p-6 text-gray-500 text-xl">
                    <li>Om Kollektiva</li>
                    <li>Policys</li>
                    <li>Kontakt</li>
                    <li>Jobb</li>
                    <li>Hjälp</li>
                    <li>Säkerhet</li>
                </ul>
            </div>
            <hr />
            <p className="text-center text-gray-400 text-xl p-6">© 2022 Kollektiva. Alla rättigheter är reserverade.</p>
        </footer>
    );
}

export default Footer;