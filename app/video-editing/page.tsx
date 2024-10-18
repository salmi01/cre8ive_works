"use client";
import React from 'react'
import Navbar from "@/components/navbar";
import Video from 'next-video';
import video1 from '/videos/get-started.mp4';
import video2 from '/videos/get-started.mp4';
import { motion } from 'framer-motion'



const VideoEditingFull = () => {
    return (

        <div className="flex flex-col   w-full   bg-black/[0.96]  bg-grid-white/[0.02]   ">
            <Navbar
                scrollToWebsiteDesign={() => { }}
                scrollToGraphicDesign={() => { }}
                scrollToShopifyStores={() => { }}
                scrollToBrands={() => { }}
                scrollToServices={() => { }}
            />

            <div className="text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center space-y-4 text-center p-4 pt-10 md:p-20 px-2"
                >
                    <h2 className="text-3xl p-2 font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#9cff1e] to-[#7acc17]">
                        Video Editing
                    </h2>
                    <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Showcasing our best video editing projects that helped businesses tell their stories.
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
                    <div className="m-4 rounded-lg overflow-hidden">
                        <Video src={video1} className="w-full h-64 md:h-96 object-cover" />
                    </div>
                    <div className="m-4 rounded-lg overflow-hidden">
                        <Video src={video2} className="w-full h-64 md:h-96 object-cover" />
                    </div>
                    <div className="m-4 rounded-lg overflow-hidden">
                        <Video src={video2} className="w-full h-64 md:h-96 object-cover" />
                    </div>
                    <div className="m-4 rounded-lg overflow-hidden">
                        <Video src={video2} className="w-full h-64 md:h-96 object-cover" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default VideoEditingFull