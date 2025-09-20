function Footer() {
    return (
        <section>
            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Grille Responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:text-left">

                        {/* Section 1 - Logo & Texte */}
                        <div>
                            <img className=" logo-koi " src="src/assets/1743410043660.png" alt="fr" />
                            <p className="text-gray-400 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, fugit!
                            </p>
                        </div>

                        {/* Section 2 - Liens de Navigation */}
                        <div>
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="mt-3 space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        {/* Section 3 - Contact & Réseaux Sociaux */}
                        <div>

                            <div className="footer-contact">
                                <form method="post" action="taitement.php" >
                                    <p>
                                        <label for="email" className="text-white">Email</label><br />
                                        <input className="mail" type="email" name="email" id="email" placeholder="Enter a valid email address" />
                                        <button type="submit" className="btn btn-rounded" >Submit</button>
                                    </p>
                                </form>
                            </div>
                            {/* Icônes Réseaux Sociaux */}
                            <div className="flex justify-center md:justify-start space-x-4 mt-4">
                                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>

                    </div>


                </div>
            </footer>
            <footer>
                <section className="bg-yellow-900 py-5 text-center">
                    The site was create with the <a href="#" title="#" className="text-yellow-100">Nicepage</a>
                </section>
            </footer>

            {/*<div className="flex flex-row justify-between bg-stone-800 py-20 px-20">
                <div className="">
                    <p className=" py-2">
                         <img className=" logo-koi " src="src/assets/1743410043660.png" alt="fr" />
                       
                    </p>
                    <div className="flex gap-4 text-yellow-100">
                        <a href="#">
                             <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-6a76"><path fill="currentColor" d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2
c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path></svg>
                        </a>
                        
                        <a href="#">
                            <svg className="u-svg-content" viewBox="0 0 112.2 112.2" x="0px" y="0px" id="svg-4a43"><path fill="currentColor" d="M67.1,49.1L98.6,16h-12L62,42L43.2,16H11l32.8,45.2L11,96h11.6l26.3-27.7L69.1,96H101L67.1,49.1z M55,61.9l-5.1-7L27.5,24.4
	h11.4l17.3,23.8l5.1,7.1l23.4,32.2H73.8L55,61.9z"></path></svg>
                        </a>
                        
                         <a href="#">
                             <svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-3a38"><path fill="currentColor" d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z
	 M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path><path fill="currentColor" d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7
	V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7
	c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path></svg>
                         </a>
                    </div>
                        

                    
                </div>
                <div>
                    <p className="text-white mb-4 " >
                        Quick Links
                        
                    </p>
                    <p className="text-yellow-100">
                         <a href="#"title="#">About Me</a>
                        
                    </p>
                    <p className="text-yellow-100">
                        <a href="#"title="#">Consultation</a>
                        
                    </p>
                    <p className="text-yellow-100">
                        <a href="#"title="#">My Blog</a>
                                     
                    </p>
                    <p className="text-yellow-100">
                            <a href="#"title="#">Boocks</a>
                        
                    </p>
                </div>
                <div className="ml-5">
                    <p className="text-white mb-4">
                         Ours Services
                        
                    </p>
                    <p className="text-yellow-100">
                         <a href="#"title="#">Support & Motivation</a>
                        
                    </p>
                    <p className="text-yellow-100">
                        <a href="#"title="#">Weight Loss Program</a>
                    </p>
                    <p className="text-yellow-100">
                        <a href="#"title="#">Personnalized Nutritions</a>
                    </p>
                    <p className="text-yellow-100">
                        <a href="#"title="#">Health Dailing Life</a>
                    </p>
                    <p className="text-yellow-100">
                        <a href="#"title="#">Balance Body & Mind</a>
                    </p>
                </div>
                <div className="">
                    <p className="text-white mb-4">
                        Newsletters
                    </p>
                    <div className="footer-contact">
                        <form method="post" action="taitement.php" >
                            <p>
                                 <label for="email"className="text-white">Email</label><br />
                                 <input className="mail" type="email" name="email" id="email" placeholder="Enter a valid email address" />
                                 <button type="submit" className="btn btn-rounded" >Submit</button>
                            </p>
                        </form>
                    </div>
                </div>

            </div>
            <section className="bg-yellow-900 py-5 text-center">
                    The site was create with the <a href="#"title="#"className="text-yellow-100">Nicepage</a>
            </section>*/}
        </section >


    )
}
export default Footer