"use client";
import React from 'react'
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { ThreeDCardExample } from "../snippets/3d-card-snippet";


const PhotoShooting = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 px-10 md:px-0 mx-2 items-center justify-center m-t-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThreeDCardExample title='Ministry' description='description' imageSrc='https://cre8ive-works.imgix.net/ministry-7.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop' link="/photo-shooting/ministry" />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThreeDCardExample title='Meetings' description='description' imageSrc='https://cre8ive-works.imgix.net/meeting-12.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop' link='/photo-shooting/meetings' />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThreeDCardExample title='Events' description='description' imageSrc='https://cre8ive-works.imgix.net/events-main.jpg?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop' link='/photo-shooting/events' />

          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThreeDCardExample title='Ministry' description='description' imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThreeDCardExample title='Ministry' description='description' imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ThreeDCardExample title='Ministry' description='description' imageSrc='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='/photo-shooting' />

          </motion.div>
        </div>
      </div>
    </div>


  )
}

export default PhotoShooting
