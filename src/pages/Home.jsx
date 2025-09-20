import { easeOut, motion } from "framer-motion"

function Home() {
    return (
        <>
            <section className="bg-yellow-800 h-800 text-white flex flex-row">
                <div className="py-10">
                    <div className="blo px-60 py-5">
                        Honest <br />nutrition for <br />  healthy <br />weight loss

                    </div>
                    <div className="freepik  text-white  px-60 py-5" >
                        Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                    </div>
                    <div className=" ka my-10 py-5 px-60">
                        <a href="#" title="#" className="lire btn py-8 px-20 ">WORK WITH US </a>
                    </div>
                </div>
                <div className="animate-pulse">
                    <div className="animate-bo relative">
                        <motion.div className=""
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 5, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }} >

                            <img className="ko object-cover translate-y-20 mx-4 text-center " src="src/assets/happy-woman-standing-indoors-near-table-with-lot-citruses5.jpg" alt="du jus" />
                        </motion.div>
                    </div>
                    <div className="absolute   z-10 ">
                        <a href="#" title="#" className="lire btn pb-50 text-center py-20 px-20 ">WORK WITH US </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home