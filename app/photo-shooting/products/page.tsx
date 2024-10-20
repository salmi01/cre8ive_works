'use client'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';

import { useEffect } from 'react'
import BlurFade from '@/components/ui/blur-fade';
import Navbar from '@/components/navbar';
import '../style.css';



const PhotoShootingProducts = () => {

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

        <div className="flex flex-col min-h-screen w-full bg-black/[0.96]  bg-grid-white/[0.02]   ">
            <Navbar
                scrollToWebsiteDesign={() => { }}
                scrollToGraphicDesign={() => { }}
                scrollToShopifyStores={() => { }}
                scrollToBrands={() => { }}
                scrollToServices={() => { }}
            />


            <div>

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
                    {
                        /*
                        <a
                        data-lg-size="1600-2400"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@michaljaneck' >Michal Janek</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Coast  </p>"
                        >
                        <BlurFade>
                        <img
                        className="img-responsive"
                        src="https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=360&q=80"
                        />
                        </BlurFade>
                        </a>
                        <a
                        data-lg-size="1600-2400"
                        data-pinterest-text="Pin it3"
                        data-tweet-text="lightGallery slide  4"
                        className="gallery-item"
                        data-src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@papillon' >Iris Papillon</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Big Sur drive  </p>"
                        >
                        <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1600-1065"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@piyushh_dubeyy' >piyush dubey</a></h4><p>Published on August 2, 2020</p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1600-2134"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@fynn_it' >fynn</a></h4><p>Location - <a href='https://unsplash.com/s/photos/big-sur%2C-united-states'>Big Sur, United States</a> Wasserauen, Appenzell Innerrhoden, Schweiz  </p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1600-1060"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@danielleone' >Daniel Leone</a></h4><p>Location - <a href='https://unsplash.com/s/photos/poon-hill%2C-ghode-pani%2C-nepal'>Poon Hill, Ghode Pani, Nepal</a> Taken from the top of Poon Hill before sun rise </p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1600-1037"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@bboba' >Boba Jovanovic</a></h4><p>Location - <a href='https://unsplash.com/s/photos/bay-of-kotor'>Bay of Kotor</a> Boka kotorska bay </p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1600-899"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@svsdesigns' >Surendra Vikram Singh</a></h4><p>Location - <a href='https://unsplash.com/s/photos/lachung%2C-sikkim%2C-india'>Lachung, Sikkim, India</a> Cloud covered mountain </p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1600-1067"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@camadams' >Cam Adams</a></h4><p>Location - <a href='https://unsplash.com/s/photos/banff%2C-canada'>Banff, Canada</a> Lake along jagged mountains</p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            <a
                            data-lg-size="1536-2304"
                            data-pinterest-text="Pin it3"
                            data-tweet-text="lightGallery slide  4"
                            className="gallery-item"
                            data-src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80"
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@rea_le' >Andrea Ledda</a></h4><p>Location - <a href='https://unsplash.com/s/photos/lago-goillet%2C-italy'>Lago Goillet, Italy</a>  Goillet Lake at 2561 meters above Breuil-Cervinia</p>"
                            >
                            <BlurFade>
                            <img
                            className="img-responsive"
                            src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"
                            />
                            </BlurFade>
                            </a>
                            */}
                </LightGallery>

            </div>
        </div>
    )



}

export default PhotoShootingProducts;