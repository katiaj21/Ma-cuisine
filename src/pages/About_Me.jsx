import { easeOut, motion } from "framer-motion"


function About_Me() {
    return (
        <div>
            <section className="bg-green-900 h-[800px]">

                <div className="flex justify-between-4  ">
                    <motion.div className=""
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 5, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }} >

                        <img className="ko object-cover translate-y-20 mx-60 " src="src/assets/concentrated-woman-standing-indo.jpg" alt="du jus" />
                    </motion.div>
                    <div className="">
                        <div className="blog text-white font-bold text-left ml-8 translate-y-60 mx-60">
                            Over 10 <br />years of <br /> Experience

                        </div><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <div className="freepik  text-white ml-8" >
                            Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                        </div>
                        <div className=" ka my-10 ml-8">
                            <a href="#" title="#" className="lire btn">WORK WITH US </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white text-center h-50 text-black animate-bounce">
                <div>
                    <div className="font-bold flex-wrap  ">
                        You might eat well and exercise, but <br /> without a holistic approach to health <br />, you're limiting your potential.
                    </div>
                    <div className="my-10">
                        ― ​Saundra Miers

                    </div>
                    <div className="mb-20">
                        Online Nutritionist and Health Coach
                    </div>
                </div>
            </section>
            <section className="bg-yellow-600 h-500 rounded-tl-lg">
                <div className="animate-bounce">
                    <div>
                        <div className="text-center font-bold text-white py-10 fri">
                            Solution In Easy Steps Successful life

                        </div>
                    </div>
                    <div className="flex flex-row ">
                        <div className="">
                            <div className="h-24 w-16 mx-50">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAEyFJREFUeF7tnQm0f9UUx/c2lSFDiCKhJEQDoQyJkqkyLNMyFE2iQqmEqChUlIrMFBYyU+ZCZpLKkKGSqRIyz8N2Pu9/7vP7vXfPdH/3/v7v997Za/3Wv9U79wz77nvOPt/9PfuoVFnRGtAVPfo6eKkGsMKNoBpANYAVroEVPvw6A1QDWOEaWOHDrzNANYAVroEVPvw6A1QDWLkaMLNrM3pV/ddK1cKKmAHMbE0R2UFEHiYitxORdf3vZv7F/0ZErvC/n4jIx0XkM6r69+VuGMvWAMzsmiLyOBF5jIg8RESuX/gy/yIinxSRD4jI6ar6n8LnZ6L4sjQAM9tZRF4hInfq6S1cJCLPV9WP9lTfkqlmWRmAmd1dRI4XkfsNpOEvishzVfVbA9U/9WqXjQGY2VNF5I0issbAWvyHiOylqqcN3M5Uqp95AzCza/jp/qCpaOz/jRzrl4X/TrndXpubaQPwjh5O2i69aiW/so/gZM6ygzjrBnCiiOyX/77mSv7cbQe/ISJX+h//75b+d08RWb+wvpNUdf/CZ5ZM8Zk1ADPby+3l35Cpyd+LyOtE5IMpB847ko8WkWeKyI0z699bVfE/Zk5m0gDMDC//LBGZQ/Ii8k8Rea2IvMx9pVeXvB0zW1tEXiQizxKR6ySeBUl8kKqyS5gpmTkD8Ov+hQ6cuXNC078UkUeq6rmTvBEzu4eIfFhEbpWo5/tuhrnbrPkDs2gAe7iX8abEy2CN30VVWecnFjPDR8Dhw0eIyZ6q+uaJG5xiBTNlAGZ2PRH5sdvvrxfR0aW8KFX9bZ96NLObeufx9pF6LxeRO6jqX/tse8i6Zs0A2OsfE1HInxx+f29VZTruXcyMZedrIrJWpPKDVRWMYCZk1gwACHbLiGYPVNVXD6l5MzvAGcCrIm2cp6pA0jMhM2MAZnYbEflpRKs/E5GNVRWodjAxM6DmH4kI/QnJBqpKf5a8zJIBALa8JqLRfVT19dPQuJk9Q0ROibT1bFUFpFryMksG8Fn22gGNgsffUlV/PQ2Nm9nNPYpIHKJNzlLV7afRl0nbmCUDAMK9dWDA56jqtpMqo+R5M/uCiNw/8MwvVLUUUi5pvreyM2EAZkY/WdtDyN9LVfXFvWkloyIXhTxSRA4LFAUZXENVLaOq1VpkEAMws2v5vTr79WbPzh6Z3xWlJEw/5V61FNb/pg8ZfsA6pUuSJ6nCV2zT2+Wq+u++raU3AzCzm4jIw4FfRWRHEblBoLOAJJ/yyNrHcjB6M7ubiFwQGfyjVBW4dmpiZozzQ5EGN1NVIOuo+JjDTj6kjd4Au9rkz15vjPNMVf1dqu6cv09sAGbGi36eiBwYeemhvmAMULiOUdU/hgqZ2b08ABMq8lBVhcA5NTEziKafiDQIIPX1yJhuKCIHQzGLvPTQ4xgDWMRxqsp/d5aJDMDMHu+3Zrfo3INVD0LLPkBV39FWj5ltICKXRdrYTVVPnbAPRY+b2a4i8vbIQ7dV1VbcwsyeIiIAVg0tvajtkcK/EhG2nO/tWkEnA/A0rKOgRHVtOPAcSgFKHaNge/AlxtE/VFVhAU9NzIyxvzzS4JoLQSkfyQTKBk3sUxj7C50jXExPKzYA7+C9z6/1fQ6iqYtDGYRxx07rmBnBHWL0bfIuVX3yEJ0J1Wlm73SBqScF/n61qhI8mhfv4LF+czhlCKHux5Y6il0MAIIFbJkh5U2qCuNnVIE4gTiDbQLjB697Kke8/MtkVxJiDF2oqpst6D+MoT2HVBqsJ7fzgMCSLUUGYGZUfnJ27ZMV3N99RSc1VZgZywMOU0h2UFXQwsHFzED5PhNp6Hjn1M5P8272grc4LWh4X1XlI82SbAMws9uKyA8z6FE0fIk7i/dlEYGN0zByYNbwu4+IbJjRO+hcm6gqZ/XE08DOiTz3cVVlGzq4mNmZian8/g09zMw4i/iDKevtjqoac5rndVRiAHjoqXWWl3aEiLwyRI3yjhBx/cMzDnG8R1Wf6A0A3J0DnOtE3vADVBWIdjAxMyDnz0caYGlYt3HIzOzdzgCekOgQKCf6ODaht0Pct/CSDGN6p6qy00hKlgGY2V2dY3a+iISCHzT0XZyiHPDDv9C7iAiO1OaRXgKlwu6Zm0XMDCoYlLCQnCci2wwVEva7ka8kOAlvVtW5td7zCaGnxfSMXp+sqt9Lvq1VdeIHvUtENo2UZzewuap+J1VnrgGk1l9AnLuWxsDNDMgTwwFFDMkpqjrndJrZJu4gBoMCag7JaW7ZYI/eu7jpHKyBI2ghAapFD0z59Bcq+j6R8qB5mzqHF4g8Wzw3Aj0AJoVkzA8JFco1ANb0GBduDxf9ekv2CEYKmhlbKWaCkMDuXb8JrDiCJjH/vRNtHaaqL+vSn9AzZgZF/KWJOt/giKhwBXj56JYIZoxNzJfP11wsZra7i47GCKiXOmAt6WslDcBP/zFMm0QKDy4ewbgRcOwaPDwkLAPf9IqFoXtxxnl/tl14xBNtDf2Wj53P2La0paPkE9ioYSI7R3ErTyINjYk4CMfYO4uZfdonvgjVAU09ugzkGABTXgxmfYaq5p7Qae1oBqw6dvIm82ukLQ5qwBTKWl8Xds7M8FNg/uQcNx+bdTJOLk0MX5sZM2GMBbVr6hRzjgEc6rzOoyNmeo/UcauUiXtF4wuE5Ei3BOD9zomHoj+WiarhEHGU+2hVhVKeFDO7g4i8wK/3Mce3qQv0cqdRKNYtAeyGYhwFfIXYmHP6Cfk0dvDlBaoag6vTyaIdHx4wZt9Ab9j2raWq/NtZ/NYQRzIUCp33rEeMAAeIaBuOYa6gcEK4scOhj0p42AvbwuG718JoZmLHQhT0hpOeIjIzjqxBhQ8dXTvZnY+IHp7NmQGIeIW86ivd9A+BYWJxywCAD2BTm7zXedaL9tL+S8UIYruIifsWqQAvnpe/aGZxO5b3iAjR0ja5zEUvAYgmFrcMgI3gF7XJqQ4Q2i3WSI4BEGkCgAgJZEzCkp3FzMDUObwZ6s9rVPU5bQ345YPloBeFFgwCg2Xab/Uv3JhOIFQbqA98Y203JmIYncXMCMPHjr8ByEUjtjkGkKJjP1xVWQM7i5k90J/2DdVxiKoGTwSZGXF1EkWESJqd+xZ4EEiaxBDwGFrFzCB7vDLSMKeJz56kY2ZGZBFYOiRJenqOAaSoT4erKg5PZzEzZphYPP+JqsqUGhS/XQOwAjTKcdy69BeHEnAH8kp0e2lmLFnAwCEh61jMQJL9MzMcYyDkkCSpcjkGwPoKvh1C3/gK7uLQuhhpM/biiPEzjYbWMZS+Xu4y45cEPN8YrpBUbksBlhmIJ1lbSj89g/CFjJGpG70V5S1o+uVQRmIi9CXEKgKVJEQe5Q4mDYAGXSSOZAxM0yH5sKriPRdLRrDkK6pKBLFIzOy+nrZNv2PQcaxelMg0De38S0UdWKU3IqLbRJ6bD3Z1qJvdDLNzSM52EcnQQZr5Z3INgG3gfGw+0GIxHJwBA9PUQap6XKmCRr4UZrBHjLCVUxlDQfRgLcOwOSP1BcX6ZWaQZVMnhYvh4AwYmG7tp6pJ7kauAaA04NfQNN3oAVSKFxZlqpoZ9bH+sV7H+sBRL+DVIGO4xDA8gMTU2eQKbrawTZ5g/r2qC7eurR+OxAJWgd44ShYSdgT4FTi6GF+44CoGNgY1F2+ICMsLeovWx/NZBkDBjIMQTX/YHsGG+cLCr8efHSCeDqU5Flxq6ipit5QYw7TKFrCoSGwBtT6mN5zcnO1u9kHZEgNgHSXeDjcgVxjUKCMo56U3dYPabZFDcvRh5Y3IzoHlDwgM4VDxRQP8XJwTxvUk2m8XoouT6I3gz5Y5eiuaAfwswAsEeZuUz54yIDxjIoCEoReJD7Xi5QMOkbcnta6n2uv6d6ZYYGVAH6J7rWcBzYywLOVCrOau7S98jh0ZyCQGlCXZM0BTm5kBtkC+TKVoy+pASyE87x3bQBKf95/oJEvMHbs2MNBz8CWZoiGkLDrD4MEunMuuO5JUt8EltlfVGG9yUR3FBuBnAs6wcRrlRqleFf6dwAa0MvbcY2JmpIMlxh/jBBY2N0hx8BCSSZNVbOEYmLUggMRyDHXp1B+IO6gqBlYknQzAGwFfIESOjYtaDBdm2tq5DWjxp3AISXfub099zK2GpYBQ7CJ00wNV6K3EH4q1S7oa9MYMVCwTKdTMsGRg3C4HHJvOMl3CmSdejyXPiydhQntKsZGLBz6lB6C6gY+M5S0yM2ZO+AbEWbjOpos0B2sJ+DBzdpKJDKBp0XvhL/RXtOQ6iDh6HDE7SlXhzo2JmV3XB4i27jSypfPQV30a2b+1jJEsIujtsQUOIo7e6V5vRWTSNpX0YgAjhsA9PTiJcN3YkjVZuCnSZOfGs2cKZL8bTHiQIKLEXi/klF7Ozrc0AqqYyhvc1rcoMcNvFcFH0Bs7hja9sfVEb6TD6e3+ol4NoK+PzmHo3PCFQ5PTP07AfM4lp4A0yo9zeRMxlELj8AwcePkQPvltFyGxjK1mfmcTO07Wl/qK6slRcFGFkxb2aCFgRio5M18BHAHC0YO88NRYvEEQjiX2z+wXE+jt8ACHmp1S3W39eycDMDM8WCJRkBKbnDZMW6UODesi0DE7gOZH5o3UDSCkgoVVO0cVX93iKeBQ51IZzNkakskE/TU/oF38nRLBcWZJncu55ELfZFAlIpsNADWNZRuA9/jxWuG5lcDBJQPLKUuIFTbNoBlBczoyNsevyiBK2Lw4dF3aVqQ8Myf4zIm5O4OkAXgHBf457JNYVKvHcQSrYutD8iXw+CUnLmkEcQjyGITYzdPqM1FUWFqcVIpmFosagM+ODdeuhHo95CDHcgYM2VDXuqecCyDVTSjrcBeD2dODBmBmkCiALWMHEFMd6PPvnPLZdqknX/SBKo6o55wm6lM/obrgUgCvn9FWoNUAvBUT4RqKXNll4DPDDSjgAHTRQ5dn4FU+ZzTjStAJNDMCFtChltLLp79bqyqXNSx5ychruDrGgBGQfGss0DY2A/hABdBlSbSKPTiOD8SPUuoW2x+2Q6BfIIehUCmODEepFsGpq0OTqTY9jI0uYuMB2QMVZetWesUMsQTS7ZCIqgSZJGbAhzTPbJ43AM+rh4WTE90Dx+f8PetyL8ibmbGnZ1BtsijrVuolrO6/m1ksq9m5qgqSOJGMIJP4G+QvyCGcED0kKcXcuYZRA0idAGo6izNBvBsAojdx8X5oU6F0MR9R1RgFurd+9FWRmbGMhgCt8x1fYIu+2qIeMwOQgy+B856S+RNDcwbgw5NMR2PJDRfUAtOXbdjbUrV3+btLvkyunLHceiP1LDcDuMAlt47lRuqiwrlnzOxpPrweStZNMZJubkj4vTEA8Oz58/eB1p8ayuXbubcjD1YD6EOLq+rwuYhT19sfoaqHNwYAYBDj2HHn7mP66+LimqoB9Ktdl9oHAI87kEPyQ3fechP1mbcuihSE44bTMOh9PNUAejcAYHuc+hiH8k4YQCrrNQ5f6qrWiXtfDWBiFS6qwMzIVxi71fxQDOD94MWR5knX2olwWDKkagAl2sor6w7esqzP5SwMyAcwADJfhnh3AAc37uusXKzb1QDyXmpJKX8WkiwkIWDvqxhALDfP1K5jqwZQ8mrzyyaut7sMA4BdApmhTU5we8VYivb8niRKVgPoTZVjFTmMhzuZWvMrcRUfBhC7225urzhM18ZrrQYwjJbd641iPNUAhtE7YEwMCh4MCVw4nGoAA73gVLXVAFIaWvD3ugQUKiyzeJ0BMhXVd7E6AxRqtM4AhQrLLF5ngExF9V2szgCFGq0zQKHCMovXGSBTUX0XqzNAoUbrDFCosMzidQbIVFTfxeoMUKjROgMUKiyzeJ0BMhXVd7E6AxRqtM4AhQrLLF5ngExF9V2szgCFGq0zQKHCMovXGSBTUX0XqzNAoUbrDFCosMzidQbIVFTfxeoMUKjROgMUKiyzeM4MQMKl0DXjpD4P3Rqa2YW8YtUA8vRUWsrMuPibFPttcgmcQNKKPS5QgDx0HAzpnIw4t8PVAHI1lV/Op/bjYMh6gadOxwBSN1x+kLuDUxdB5XervWQ1gEk1OP68rbpgiq8/dkD0EAyAu+W4ASQmP+UKNZ/SJEYjn2QUB0UslUOOb5mk8tXw7O6Re4KYWVPXyXXtMie+WdJJFLFBopLtMQDy9KDgvi4w6Nrx+tx0NUBuok2b/ACkeCfj9lLLDDZdlayc1sgYth33C43mCOLCo6kcA1s5el6yIz3eXcbJxVtjSaLI9E2mrk2XbLdrx/rQAMv9Vs3NZgvzBHL/Hjn498m8rKGPDtU6pqMBnPdTuNtg9ErZUKpYdgZvdb/bTKdvtZWBNfAzEXm6qpLOfkxiyaJJKoAhcClE81vqd/YNrMeZqZ68Tlwi0fzOCoF5yfsCRofsb8OuO4WlbQf/LbltvcgAlva4a++6aKAaQBetLaNnqgEso5fZZSjVALpobRk9Uw1gGb3MLkOpBtBFa8vomWoAy+hldhlKNYAuWltGz1QDWEYvs8tQqgF00doyeuZ/7rihqfi0oCAAAAAASUVORK5CYII" alt="fr" />
                            </div>
                            <div className="prix text-bold mx-50 text-white">
                                3.5k
                            </div>
                            <div className="mx-50 text-white">
                                Happy customers
                            </div>
                        </div>
                        <div>
                            <div className="h-24 w-16 mx-2">
                                <img src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="text-white prix">
                                32k
                            </div>
                            <div className="text-white  ">
                                working hours
                            </div>
                        </div>
                        <div>
                            <div  >
                                <img className="h-20 w-20 mx-60" src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="text-blue-500 mx-60 prix">
                                12
                            </div>
                            <div className="text-white mx-60">
                                Professional courses
                            </div>
                        </div>
                        <div>
                            <div >
                                <img className="h-20 w-20 mr-50" src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className="text-white prix mr-50">
                                100%
                            </div>
                            <div className="text-white">
                                result
                            </div>
                        </div>

                    </div>


                </div>
                <div className="text-white font-bold text-center py-24 fri animate-bounce">
                    The core of my work

                </div>
                <div className="px-50 flex flex-row animate-bounce">
                    <div className="text-white px-10 ">


                        <h1 className="enum py-4">
                            1.The Pillars of Well-being
                        </h1>


                        <p className="px-10  max-h-0.3">
                            Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <h2 className="enum py-4">
                            2.Your Body's Natural Healing
                        </h2>
                        <p className="px-10  max-h-0.3">
                            Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <h2 className="enum py-4">
                            3. ​Biochemical balance
                        </h2>
                        <p className="px-10  max-h-0.3">
                            .                    Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <h2 className="enum py-4">
                            4. ​​The Power of Mindset
                        </h2>
                        <p className="px-10  max-h-0.3">
                            Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <div className="freepik  text-white ml-8" >
                            Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                        </div>




                    </div>
                    <div className="pl-40">
                        <motion.div className=""
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 5, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }} >

                            <img className="ko object-cover translate-y-20 mx-4 animate-bounce " src="src/assets/concentrated-woman-standing-indo.jpg" alt="du jus" />
                        </motion.div>
                    </div>
                </div>





            </section >
            <section className="bg-white h-250 ">
                <div className="flex flex-row px-25 justify-between  animate-ping py-25">
                    <div className="px-20">
                        <img src="src/assets/book-new2-min.png" className="livre" alt="fr" />
                    </div>
                    <div className="ml-6 mr-7 text-left py-25 mx-25 bg-white animate-bounce">
                        <div>
                            My book
                        </div>
                        <div className="cotelivre">
                            <h2>How to cook healthy</h2>
                        </div>
                        <div className="px-2 py-10">
                            Sample text. Click to select the Text Element. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in <br />reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur.
                        </div>
                        <div className="freepik    ml-" >
                            Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                        </div>
                        <div className="py-5">
                            <a href="#" className="mt-3 lire btn text-white font-semibold hover:underline">BUY NOW</a>
                        </div>
                    </div>
                </div>

            </section>
            <section className="ail ">
                <div className=" text-center cadreimg   ">
                    <div className="sante">
                        Easy steps from us for Healthier life
                    </div>
                    <div>
                        Enter your e-mail and get the free course from us!
                    </div>
                    <div>
                        Images from <a href="https://www.freepik.com/" title="#">Freepik</a>
                    </div>
                    <div>
                        <form action="post" method="taitement.php">
                            <label htmlFor="email">email</label> <input type="mail" name="email" id="email" />
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-black text-white h-300 flex flex-row ">
                <div className="px-4 py-10">
                    <div className="sante">
                        Frequently Asked Questions
                    </div>
                    <span className="natu px-10">
                        What is a Naturopath?
                    </span>
                    <div className="natu px-10">
                        What is a Holistic Nutritionist?
                    </div>
                    <div className="natu px-10" >
                        How can a Naturopath help me?
                    </div>
                    <div className=" natu px-10">
                        How do online Nutrition consultations work?
                    </div>
                    <div className="natu px-10">
                        What is a "healthy diet"?
                    </div>
                </div>
                <div>
                    <div className="bg-white text-center h-200 animate-sp  rounded-bl rounded-tr koo object-cover translate-y-20">
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
                            <div className="pt-20">
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
                </div>
            </section>
        </div >
    )
}
export default About_Me