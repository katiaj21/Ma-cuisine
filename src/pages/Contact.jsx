import { easeOut, motion } from "framer-motion"
function Contact() {
    return (
        <div>
            <section className="bg-black h-800 text-white">
                <div className="">
                    <div className="text-center">
                        <span className="blog text-center text-white">
                            Contact us
                        </span>
                        <div className="freepik animate-beounce">
                            Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <motion.div className="animate-pulse"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 5, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }} >

                                <img className="ko object-cover translate-y-20 mx-60 " src="src/assets/concentrated-woman-standing-indo.jpg" alt="du jus" />
                            </motion.div>
                        </div>
                        <div className="py-20">
                            <div className="prix py-20">
                                Your results are our top priority!
                            </div>
                            <div>
                                Sample text. Click to select the Text Element.
                            </div>
                            <div className="freepik  py-30">
                                Images from <a href="https://www.freepik.com/" title="#">Freepik</a> <br /> <br /> <br />
                                <a href="#" className="mt-3 lire btn text-white font-semibold hover:underline">WOOK WITH US</a>
                            </div>

                        </div>

                    </div>
                    <section>
                        <div className="bg-white text-center h-250 w-250 ml-86 animate-spin mr-50 rounded-bl rounded-tr koo object-cover translate-y-20 mx-60 ">
                            <div className="helpp text-center text-black">
                                <span>How can you help me?</span>
                            </div>
                            <div className="justify text-black p-10">
                                Please take a few moments to let me know about yourself and your health goals before we start working together:
                            </div>
                            <div className="text-black " >
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="border-b [2px] border-gray-400 focus:outline-none focus:border-black  w-9/12 p-2"
                                />
                                <div className="py-4">
                                    <input
                                        type="text"
                                        placeholder="Enter a valide  email address"
                                        className="border-b [2px] text-bold border-gray-400 focus:outline-none focus:border-stone-950  w-9/12 p-2"
                                    />
                                </div>
                                <div className="pt-20">ù
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="border-b [2px] text-bold border-gray-400 focus:outline-none focus:border-stone-950  w-9/12 p-2"
                                    />
                                </div>
                                <div className="pt-16">
                                    <button type="submit" className="btn btn-rounded text-white  rounded-lg-2 py-6">STEND MESSAGE</button>

                                </div>
                            </div>
                            

                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
export default Contact