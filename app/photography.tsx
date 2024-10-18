'use client'

import BlurFade from "@/components/ui/blur-fade";
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import Link from "next/link";
import { useEffect } from "react";
import './photography-gallery-style.css';
import { motion } from 'framer-motion'


const Photography = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            import('masonry-layout').then((MasonryModule) => {
                const Masonry = MasonryModule.default;
                // Ensure the DOM element exists
                const container = document.querySelector('.masonry-gallery-demo');
                if (container) {
                    // Initialize Masonry
                    const msnry = new Masonry(container, {
                        itemSelector: '.gallery-item',
                        columnWidth: '.grid-sizer',
                        percentPosition: true,
                        fitWidth: true,
                    });
                    // Assuming imagesLoaded is a globally available function or correctly imported
                    // Optional: Use imagesLoaded for proper layout after images load
                    import('imagesloaded').then((imagesLoadedModule) => {
                        const imagesLoaded = imagesLoadedModule.default;
                        imagesLoaded(container).on('progress', () => {
                            msnry.layout();
                        });
                    });

                }
            });
        }
    }, []);

    return (
        <div className="text-white">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-4 text-center p-4 pt-10 md:p-20 px-2"
            >
                <h2 className="text-3xl p-2 font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#9cff1e] to-[#7acc17]">
                    Photography  <br /> That Captures the Moment
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Delivering stunning, professional photos that tell your story and elevate your brand.
                </p>
            </motion.div>

            <div className="">

                <LightGallery
                    elementClassNames={'masonry-gallery-demo'}
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <div className="grid-sizer"></div>

                    <a
                        data-lg-size="3240-4908"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-6.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3240&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@thesaboo' >Sascha Bosshard </a></h4><p> Location - <a href='https://unsplash.com/s/photos/pizol%2C-mels%2C-schweiz'>Pizol, Mels, Schweiz</a></p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-6.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>

                    </a>
                    <a
                        data-lg-size="5760-3240"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-5.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5760&h=3240&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Jay Mantri</a></h4><p>  Misty shroud over a forest</p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-5.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="6000-4000"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-2.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=6000&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@flovayn' >Florian van Duyn</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-2.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="6000-4000"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-7.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=6000&h=4000&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@yusufevli' >Yusuf Evli </a></h4><p> Foggy Road</p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-7.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="5760-3840"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-3.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5760&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@juanster' >Juan Davila</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-3.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="4959-3240"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-4.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4959&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@davidmarcu' >David Marcu</a></h4><p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Ciucaș Peak, Romania</a> Alone in the unspoilt wilderness </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-4.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>

                    <a
                        data-lg-size="4000-6000"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-12.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4000&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@aaronburden' >Aaron Burden</a></h4><p>Location - <a href='https://unsplash.com/s/photos/grayling%2C-michigan%2C-united-states'>Grayling, Michigan, United States</a> Colorful trees near a lake. <a href='https://unsplash.com/photos/00QWN1J0g48'>Link</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-12.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="5760-3240"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-8.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5760&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@whoisbenjamin' >whoisbenjamin</a></h4>
                        <p>Location - <a href='https://unsplash.com/s/photos/ciuca%C8%99-peak%2C-romania'>Snowdonia National Park, Blaenau Ffestiniog, UK</a> 
                        A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://unsplash.com/photos/9V6EkAoTWJM'>Link</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-8.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="6000-4000"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-9.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=6000&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kalenemsley' >Kalen Emsley</a></h4><p>Location - <a href='https://unsplash.com/s/photos/yukon-territory%2C-canada'>Yukon Territory, Canada</a> No captions. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-9.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="6000-4000"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-1.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=6000&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@derekthomson' >Derek Thomson</a></h4><p>Location - <a href='https://unsplash.com/s/photos/mcway-falls%2C-united-states'>McWay Falls, United States</a> No caption <a href='https://unsplash.com/photos/TWoL-QCZubY'>Link</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-1.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>

                    </a>

                    <a
                        data-lg-size="5760-3240"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-11.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5760&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@patwhelen' >Pat Whelen</a></h4><p>Location - <a href='https://unsplash.com/s/photos/portsea-vic%2C-australia'>Portsea VIC, Australia</a> No caption <a href='https://unsplash.com/photos/EKLXDQ-dDRg'>Link</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-11.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                    <a
                        data-lg-size="5760-3240"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://cre8ive-works.imgix.net/img-10.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=5760&q=100"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@kace' >Kace Rodriguez</a></h4><p>Location - <a href='https://unsplash.com/s/photos/pfeiffer-beach%2C-united-states'>Pfeiffer Beach, United States</a> Pfeiffer Beach at Dusk. <a href='https://unsplash.com/photos/eHpYD4U5830'>Link</a> </p>"
                    >
                        <BlurFade>
                            <img
                                className="img-responsive"
                                src="https://cre8ive-works.imgix.net/img-10.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=100"
                            />
                        </BlurFade>
                    </a>
                </LightGallery>
            </div>
            <div>
                <Link
                    href={"/photo-shooting"}
                    className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-4  mx-auto  text-white "
                >
                    View Our Work
                </Link>
            </div>
        </div>);
}

export default Photography;