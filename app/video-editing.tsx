import Video from 'next-video';
import video1 from '/videos/get-started.mp4';
import Link from 'next/link';
import ShineBorder from '@/components/ui/shine-border';
import { BorderBeam } from '@/components/ui/border-beam';
import Image from 'next/image';
import { motion } from 'framer-motion'


const VideoEditing: React.FC = () => {

    return (
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


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
                <div className='overflow-hidden rounded-2xl border border-gray-800  backdrop-blur' style={{ backgroundImage: 'linear-gradient(238deg, #161616, hsla(0, 0%, 9%, 0))' }}>

                    <div className="leading-0">
                        <Video src={video1} className="" />
                    </div>
                    <div className='p-5'>
                        <h3 className='mb-3 text-2xl font-bold  -tracking-wide [text-wrap:balance] supports-clamp:text-clamp-sub  '>Follow the video tutorial</h3>
                        <p className='text-gray-500'>Watch a quick walkthrough video showing how to set up and use next-video</p>
                    </div>
                </div>

                {/*<div className='relative rounded-2xl border border-gray-800 flex flex-col justify-around backdrop-blur [text-wrap:pretty] ' style={{ backgroundImage: 'linear-gradient(238deg, #161616, hsla(0, 0%, 9%, 0))' }}>
                    <p className="text-lg leading-relaxed text-center text-white">
                        At <span className="font-bold">Cre8ive Works</span>, we craft stunning videos for every need from promotional and social media content to special events like birthdays and weddings. With professional scripting, voiceovers, and precise editing, we make your ideas shine.
                    </p>
                </div>*/}
                <ShineBorder
                    className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    {
                        <Image
                            src="/images/video-editing.png"
                            alt="video editing"
                            width={1000}
                            height={700}
                            className="rounded-lg "
                        />
                    }

                </ShineBorder>


            </div>
            <Link
                href={"/video-editing"}
                className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-4  mx-auto  text-white "
            >
                View Our Work
            </Link>
        </div>
    );
};

export default VideoEditing;