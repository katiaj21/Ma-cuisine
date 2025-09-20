import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className=" ">
            {/* Logo */}


            {/* Navigation Links */}
            <div className="flex items-center mx-3 bg-white py-5 justify-between">
                <div className=" ">
                    <img className=" logo-img" src="src/assets/logo-image.png" alt="Logo" />
                </div>
                {/* Desktop Menu */}
                <div className="hidden flex-row text-xl md:block text-center">
                    <div className="flex gap-4">
                        <Link to="/" >Home</Link>
                        <Link to="about_Me">About Me</Link>
                        <Link to="pages" >Pages</Link>
                        <Link to="contact">Contact</Link>
                    </div>

                </div>
                <div>
                    <div className="flex items-center justify-end">
                        <svg className="u-svg-content nav-cart hidden md:block" viewBox="0 0 24 24" x="0px" y="0px" id="svg-23c7">
                            <path d="M14.5,3l-2.1,5H6.1L5.9,7.6L4,3H14.5 M0,0v1h2.1L5,8l-2,4h11v-1H4.6l1-2H13l3-7H3.6L2.8,0H0z M12.5,13
                    c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S13.3,13,12.5,13L12.5,13z M4.5,13C3.7,13,3,13.7,3,14.5S3.7,16,4.5,16
                    S6,15.3,6,14.5S5.3,13,4.5,13L4.5,13z"></path>
                        </svg>
                        <button type="submit" className="hidden btn btn-rounded lg:inline-block">Book an appointment</button>

                    </div>

                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden cursor-pointer" onClick={() => document.getElementById('mobilemenu').classList.toggle('hidden')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

            </div>

            {/* Mobile Menu */}
            <div id="mobilemenu" className="flex flex-col bg-slate-50 p-8 justify-center items-start gap-2 hidden md:hidden">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="about_Me" className="hover:text-blue-500">About Me</Link>
                <Link to="pages" className="hover:text-blue-500">Pages</Link>
                <Link to="contact" className="hover:text-blue-500">Contact</Link>
                <div className="flex h-20 gap-2 items-center">
                    <svg className="u-svg-content" viewBox="0 0 16 16" x="0px" y="0px" id="svg-23c7">
                        <path d="M14.5,3l-2.1,5H6.1L5.9,7.6L4,3H14.5 M0,0v1h2.1L5,8l-2,4h11v-1H4.6l1-2H13l3-7H3.6L2.8,0H0z M12.5,13
                    c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S13.3,13,12.5,13L12.5,13z M4.5,13C3.7,13,3,13.7,3,14.5S3.7,16,4.5,16
                    S6,15.3,6,14.5S5.3,13,4.5,13L4.5,13z"></path>
                    </svg>
                    <button type="submit" className="btn btn-rounded bg-blue-500 text-white px-4 py-2 rounded-lg w-100 ">Book an appointment</button>
                </div>
            </div>

            {/* CTA Buttons */}



        </nav>
    );
}

export default Header;
