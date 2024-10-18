"use client";
import React from 'react'
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { ThreeDCardExample } from "../snippets/3d-card-snippet";


const GraphicDesign = () => {
    return (

        <div className="flex flex-col min-h-screen w-full bg-black/[0.96]  bg-grid-white/[0.02]   ">
            <Navbar
                scrollToPhotography={() => { }}
                scrollToGraphicDesign={() => { }}
                scrollToShopifyStores={() => { }}
                scrollToBrands={() => { }}
                scrollToServices={() => { }}
            />

            <div className="text-white">
                <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                    <div className="text-4xl pb-2 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                        Graphic Design <br />
                    </div>
                    <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                        We create stunning visuals for your brand. From logos to social media posts, we&apos;ve got you covered.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 px-10 md:px-0 mx-2 items-center justify-center m-t-10">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <ThreeDCardExample imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link="/photo-shooting/products" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <ThreeDCardExample imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <ThreeDCardExample imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <ThreeDCardExample imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <ThreeDCardExample imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <ThreeDCardExample imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

                    </motion.div>
                </div>
            </div>
        </div>


    )
}

export default GraphicDesign
