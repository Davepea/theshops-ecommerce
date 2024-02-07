"use client"
import Image from "next/image";
import { gsap } from "gsap";
    

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import VideoPlayer from '@/components/videoPlayer';

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,Draggable,MotionPathPlugin,TextPlugin);

export default function Home() {
  return (
    <>
      <section className=" p-8">
        <div className=" grid grid-cols-4 grid-rows-4 h-screen overflow-hidden gap-4">
          <div className=" col-span-1 row-span-1">
            <h1 className=" text-9xl">NEW</h1>
          </div>
          <div className=" col-span-3 row-span-2 flex justify-end">
            <div className=" flex justify-end flex-wrap gap-4">
            <div>
              <span className=" flex items-center  bg-white text-black py-4 px-6 rounded-full">VIEW MORE</span>

            </div>
            <span className=" inline text-9xl text-left bottom-2 border-white  ">SPORT </span>
            <span className=" inline text-9xl text-left bottom-2 border-white">COLLECTION</span>
            
            </div>
          </div>
          <div className=" col-span-1 row-span-3 flex justify-end items-end overflow-hidden">
            <div>
            <Image
                src="https://images.pexels.com/photos/3002547/pexels-photo-3002547.jpeg?auto=compress&cs=tinysrgb&w=1000"
                width={1000}
                height={1000}
                alt='hero image'
              />
            </div>
          </div>
          <div className=" col-span-1 row-span-2 overflow-hidden">
            <div>
            {/* <Image
                src="https://img.freepik.com/free-photo/portrait-young-man-wearing-cap-posing_23-2148884290.jpg?w=1000&t=st=1707309212~exp=1707309812~hmac=3150e6cb43303757931d80d00e4e01e38679b4c5109702a276a6e4b6934c6f5e"
                width={1000}
                height={1000}
                alt='hero image'
              /> */}
            <Image
                src="https://img.freepik.com/free-photo/medium-shot-woman-wearing-chain-necklace_23-2149439828.jpg?size=900&ext=jpg&uid=R105854835&ga=GA1.1.827538889.1707135327&semt=ais"
                width={1000}
                height={1000}
                alt='hero image'
              />
            </div>
          </div>
          <div className=" col-span-2 flex flex-col justify-between row-span-2">
            <p className=" text-[#ADAFAF]">Your retro &apos;90s fashion destination! Embrace the nostalgia with our curated collection of unique clothing and accessories. Relive the iconic era with a modern twist. Shop now and make a statement!</p>
            <div>
            <div className=" border border-1 border-gray-600 w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>

            </div>

            </div>
          </div>
        </div>
      </section>
      <section className=" p-8 ">
        <div className=" w-full">
        <VideoPlayer className=" w-full"/>
        </div>

      </section>
      <section className=" p-8">
        <h1 className=" text-9xl">SALES</h1>
        <div></div>
      </section>
    </>
  );
}
