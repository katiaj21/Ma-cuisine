import { easeOut, motion } from "framer-motion"

function Main() {
    return (
        <div className="">
            <section className="haut ">
                <div className="haut-body ">
                    <div className="blog ">
                        Blog
                    </div>
                    <motion.div className="freepik animate-bounce"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 2, ease: "easeOut"}}>
                            Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                    </motion.div>
                    {/* <div className="freepik animate-bounce">
                        Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                    </div> */}
                </div>
            </section>
            <section className="px-4 py-10 grid">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                    <div className="page-card">
                        <div>
                            <a href="#"><img src="src/assets/young-happy-woman-eating-salad-t.jpg" className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg" alt="Healthy Food" /></a>
                        </div>
                        <div>
                            <h2 className="font-bold">The highest concentration of healthy nutrients</h2>
                        </div>
                        <div className="text-gray-600">
                            i hac ex litora dapibus dictum. Penatibus massa mollis rutrum ut pellentesque.
                        </div>
                        <div>
                            <a href="#" className="lire btn text-white font-semibold hover:underline">Read more</a>
                        </div>
                    </div>

                    <div className="page-card">
                        <div>
                            <a href="#"><img src="src/assets/ecstatic-young-lady-having-fun-breakfast-with-green-apples-oranges-indoor-photo-positive-caucasian-girl-eating-fruits-cake_197531-9712.jpg" className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg" alt="Fruits" /></a>
                        </div>
                        <div>
                            <h2 className="font-bold">Lorem ipsum dolor sit amet</h2>
                        </div>
                        <div className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde sint nesciunt.
                        </div>
                        <div>
                            <a href="#" className="lire btn text-white font-semibold hover:underline">Read more</a>
                        </div>
                    </div>


                    <div className="page-card">
                        <div>
                            <a href="#"><img src="src/assets/diet-concept-with-sporty-woman-k.jpg" className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg" alt="Healthy Diet" /></a>
                        </div>
                        <div>
                            <h2 className="font-bold">Accusamus, veniam!</h2>
                        </div>
                        <div className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum dolore unde suscipit.
                        </div>
                        <div>
                            <a href="#" className="lire btn text-white font-semibold hover:underline">Read more</a>
                        </div>
                    </div>


                    <div className="page-card">
                        <div>
                            <a href="#"><img src="src/assets/flexitarian-diet-food-composition_23-2148955511.jpg" className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg" alt="Flexitarian Diet" /></a>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Officia, error.</h2>
                        </div>
                        <div className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim animi reprehenderit.
                        </div>
                        <div>
                            <a href="#" className="lire btn text-white  font-semibold hover:underline">Read more</a>
                        </div>
                    </div>

                    <div className="page-card">
                        <div>
                            <a href="#"><img src="src/assets/young-sporty-woman-with-pepper-k.jpg" className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg" alt="Flexitarian Diet" /></a>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Officia, error.</h2>
                        </div>
                        <div className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim animi reprehenderit.
                        </div>
                        <a href="#" className="lire btn text-white font-semibold hover:underline">Read more</a>
                    </div>

                    <div className="page-card">
                        <div>
                            <a href="#"><img src="" className="w-[450px] h-[300px] object-cover rounded-lg shadow-lg" alt="Flexitarian Diet" /></a>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Officia, error.</h2>
                        </div>
                        <div className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim animi reprehenderit.
                        </div>
                        <div>
                            <a href="#" className="lire btn text-white font-semibold hover:underline">Read more</a>
                        </div>
                    </div>
                </div>
            </section>


            {/*<section className="lert">
                <div classname="flex ">

                    <div className="flex flex-wrap justify-center gap-6 mt-10 mb-5 mx-auto max-w-6xl">
                        <div className="w-full md:w-[48%] lg:w-[45%]    ">
                            <div className=" ">
                                <a href="#"><img src="src/assets/young-happy-woman-eating-salad-t.jpg" className="w-full  h-auto object-cover rounded-lg" alt="Fr" /></a>
                            </div>
                            <div className="font-bold" >
                                The highest concentration of healthy nutrients
                            </div>
                            <div className="">
                                Sample small text. Conubia nisi hac ex litora dapibus dictum. Penatibus massa mollis rutrum ut pellentesque mollis hendrerit proin. Sit tincidunt diam egestas class donec bibendum montes. Libero augue facilisis gravida non donec nostra. Taciti mattis mass...
                            </div>
                            <div>
                                <a href="#" title="#" className="lire btn">Read more</a>
                            </div>

                        </div>

                        <div className="w-full md:w-[48%] lg:w-[45%] ">
                            <div className="object-cover ">
                                <a href="#"><img src="src/assets/ecstatic-young-lady-having-fun-breakfast-with-green-apples-oranges-indoor-photo-positive-caucasian-girl-eating-fruits-cake_197531-9712.jpg" className="w-full" alt="" /></a>
                            </div>
                            <div className="font-bold">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, fugit!

                            </div>
                            <div>
                                Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde sint nesciunt, quibusdam, quo assumenda alias accusamus nam nihil aspernatur eveniet ut iste voluptas expedita amet eaque beatae harum corporis.
                            </div>
                            <div>
                                <a href="#" title="#" className="lire btn">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center flex-wrap mt-10 mb-5 mx-40   md:h-full max-w-6xl mx-auto">
                        <div className="">
                            <div>
                                <a href="#"><img src="src/assets/diet-concept-with-sporty-woman-k.jpg" alt="Fr" className="w-full" /></a>
                            </div>
                            <div className="font-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, veniam!
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum dolore unde. Suscipit,

                            </div>
                            <div>
                                <a href="#" title="#" className="lire btn">Read more</a>
                            </div>
                        </div>
                        <div className="  ">
                            <div>
                                <a href="#"><img className="w-full" src="src/assets/flexitarian-diet-food-composition_23-2148955511.jpg" alt="Fr" /></a>
                            </div>
                            <div className="font-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, error.
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, enim animi reprehenderit architecto doloremque
                                iure corrupti
                                veritatis! Eum quae velit tenetur corrupti, praesentium consectetur ullam eius maxime, nemo minus assumenda?
                            </div>
                            <div>
                                <a href="#" title="#" className="lire btn">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/12  ">
                        <div>
                            <a href="#"><img className="w-full" src="src/assets/young-sporty-woman-with-pepper-k.jpg" alt="" Fr /></a>
                        </div>
                        <div className="font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quidem?
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus nob
                        </div>
                        <div>
                            <a href="#" title="#" className="lire btn">Read more</a>
                        </div>
                    </div>
                    <div className="w-5/12  "  >
                        <div >
                            <a href="#"><img className="w-full" src="src/assets/flat-lay-plate-with-keto-diet-fo.jpg" alt="" /></a>
                        </div>
                        <div className="font-bold">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ab ut nihil praesentium, beatae amet ad nam quod excepturi hic repellat laboriosam esse corrupti a, repudiandae pariatur voluptatum quibusdam fuga?
                        </div>
                        <div>
                            <a href="#" title="#" className="lire btn">Read more</a>
                        </div>
                    </div>
                </div>


            </section>
           <div>

                <div className="w-full md:w-[48%] lg:w-[48%] bg-gray-100 p-4 text-center">
                    <img src="src/assets/image4.jpg" className="w-full h-auto object-cover rounded-lg" alt="Bloc 4" />
                    <h2 className="text-lg font-bold mt-3">Titre du Bloc 4</h2>
                    <p className="text-gray-700">Texte accompagnant l’image.</p>
                    <a href="#" className="block bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg w-max mx-auto">Read more</a>
                </div>
            </div>
            { //<img className="fleche" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABMdJREFUeF7tnbuOFUcQhv9GIiBCpLyCJUuIgBgkAgK0qQ0BQiIgQIiEFImUhACJxJIjy+ka5OfAgbm9AOL6DgWznLW88vGeuXR31ai+Tbe7q+r/v6m5nDOni/hLrUBJXT3FCwCSQwAAAJBcgeTl0wEAILkCycunAwBAcgWSl08HAIDkCiQvnw4AAMkVSF4+HQAAkiuQvHw6AAAkVyB5+XQAAEiuQPLy6QAAkFyB5OXTAQAguQLJy6cDAEByBZKXTwcAgOQKJC+fDgAAyRVIXj4doBMAZnZB0g1J5yWdkvRC0n4p5VmnFLaGAYDG6pvZSUmPJN2VdGJLuH1Jt0spnxqnAgAeApvZQ0kPdsR+K+liKeVD7xzpAA0VN7MfJP0laegCu/5cIACAXbYs+L+Z3d+0/7GrdIcAAMZaM2Ocmf0m6frEqW8kXep1OgCAie5MGW5mv0i6NWXOZuwAwXBN8HHG3ElTAGCSXNMGm9kdSU+mzfpndBcIAGCmO2OmmdlZSa8lnR4zfsuY5hAAwExnxk4zs5uSfh07vjcEALDAmbFTzeyxpHtjx/eEAAAWuDJlalQIAGCKiwvHVoBguJ4YbhGr3R0AwEJTp06PBgEATHWwwvhKEAzPCRZ/gAQAFQyds0QUCABgjnuV5kSAAAAqmTl3GW8IAGCucxXnVYDg1ebuYPI1AQBUNHLJUl4QAMAS1yrP9YAAACqbuHS53hAAwFLHGszvCQEANDCwxpKVIBgeFn0+Lh8AqOFWozUqQPByc3fwvxAAQCPzai3bGgIAqOVUw3VaQgAADY2ruXQrCACgpkuN12oBwREAzOyKpMuSzkk607gelp+nwI/Sov0ej1wYHgBgZoPZTyX9NC8nZq1Mgb83dwdfDgF4Lunqyoog3WUKPC+l7BUz+1nS78vWYvZKFbg2APDHtzdY91ZaAGkvU+DPAYB3koY3WPjLp8B7AMhn+r8rPgCAU0BeCA5OAVwE5gXgGreBec3/fhvIg6CUBBx9EHQoAY+CVwFD/UfBqyibJIdH9ktfM//PF0T4NHAlYLUwfygdAFYAQCvzASC5+QAQHICWR/5h6ZwCgkJQwfzhfUG+Fh7U32PTqmT+8FMyO18WpQMEI6Sn+VwDJDcfAAIB0PvI5yIQ8w8U4BrAGYQKR/7w24GzfzEMABwB8DafDpDcfABwAiDCkc9F4LrNr/Z7wVwDdASh0pFfzXxOAesyv8nuIXSADhBUOPKbmE8H6GM+W8Z00DlkCDaNCmlLv6TYNq6f1iEjsXFkSFv6JcXWsf20DhmJzaND2tIvKbaP76d12Ehm9lDSgx0Jdt82ns8COiFjZiclPZJ0V9KJLWH3Jd0e8wXOFinzJLCFqlvWNLMLkm5IOi/plKQXkvZLKc86pbA1DAB4qh8gNgAEMMEzBQDwVD9AbAAIYIJnCgDgqX6A2AAQwATPFADAU/0AsQEggAmeKQCAp/oBYgNAABM8UwAAT/UDxAaAACZ4pgAAnuoHiA0AAUzwTAEAPNUPEBsAApjgmQIAeKofIDYABDDBMwUA8FQ/QGwACGCCZwoA4Kl+gNgAEMAEzxQAwFP9ALEBIIAJnikAgKf6AWIDQAATPFMAAE/1A8QGgAAmeKYAAJ7qB4j9Fac+mmLzYkrPAAAAAElFTkSuQmCC" alt="fr" >}
*/
      
      
      }


        </div>
    )
}
export default Main