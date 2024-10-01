import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "@/../public/images/heroimg.png"
import vector from "@/../public/images/Vector 1.png"
import aboutus from "@/../public/images/aboutimg.png"
import work from "@/../public/images/work.png"
import {Cards, WorkCards} from "@/components/cards";
import { CircleArrowLeft, CircleArrowRight, Globe, MonitorCheck, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="mb-96">

      {/* Hero Section Starts Here */}

      <div className=" relative">
        {/* <Image src={vector} className="absolute -right-12 -top-10" width={450} alt="vector" /> */}
        <section>
          <MaxWidthWrapper className="pb-24 pt-24 sm:grid sm:grid-cols-2 sm:pb-32 lg:gap-x-10 sm:gap-x-3 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-32 justify-center align-middle">


            <div className="flex flex-col justify-center max-lg:mb-20 ">
              <h1 className="font-extrabold text-4xl text-indigo-950">We Help you</h1>
              <h1 className="text-4xl mb-6 text-indigo-950">to grow your
              Business</h1>
              <p className="text-xs mb-6 text-indigo-950">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Button className="text-xs text-white bg-indigo-950 px-8 py-6 w-32">GET STARTED</Button>
            </div>

            <div className="w-full h-full flex justify-center align-middle">
              <Image src={heroImg} alt="hero image"></Image>
            </div>


          </MaxWidthWrapper>
        </section>


      </div>
      

      {/* Whats we do section starts here */}

      <section className="py-20 relative ">
        <div className="bg-sky-50 -z-10 w-full absolute h-full top-0 rounded-r-full"></div>
        <div className="text-center mb-20">
          <h2 className="text-indigo-950 text-4xl font-bold mb-4">What We Do</h2>
          <h3 className="text-indigo-950 text-4xl">For Your Business</h3>
        </div>

        <div className="flex gap-x-10 pl-28 max-lg:pl-14 max-sm:pl-6 max-lg:gap-x-5">
          <div className="flex gap-1 items-end">
          <CircleArrowLeft color="#4a4a4a" />
          <CircleArrowRight color="#4a4a4a" />
          </div>

          <div className="flex gap-x-10 max-lg:gap-x-5 overflow-hidden">
            <Cards icon={<Globe color="#4a4a4a" size={30} />} title="WEBSITE DESIGN" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
            />

            <Cards icon={<MonitorCheck color="#4a4a4a" />} title="WEB DEVELOPMENT" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                        />

            <Cards icon={<Smartphone color="#4a4a4a" />} title="MOBILE APP DEVELOPMENT" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                        />
             
          </div>
        </div>

        
        
      </section>



      {/* About Us Section Starts Here */}

      <div className=" relative">
        <section>
          <MaxWidthWrapper className="pb-24 pt-24 sm:grid sm:grid-cols-5 sm:pb-32 lg:gap-x-10 sm:gap-x-10 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-32 justify-center align-middle">

            <div className="w-full h-full flex justify-center col-span-3 max-lg:mb-20 align-middle">
              <Image src={aboutus} alt="hero image"></Image>
            </div>


            <div className="flex flex-col justify-center col-span-2 ">
              <h1 className="font-extrabold text-4xl text-indigo-950">About Us</h1>
              <h1 className="text-4xl mb-6 text-indigo-950">Fake or Real</h1>
              <p className="text-xs mb-6 text-indigo-950">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className="text-xs mb-6 text-indigo-950">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Button className="text-xs text-white bg-indigo-950 px-3 py-6 w-32">EXPLORE MORE</Button>
            </div>

            


          </MaxWidthWrapper>
        </section>


      </div>



      {/* OUR RECENT WORK SECTION STARTS HERE */}

      <div className=" relative py-10">
        <div className="absolute h-full w-full bg-rose-50 rounded-ss-full ml-10 -z-10 top-0"></div>
        <section >
          <div className="sm:grid sm:grid-cols-5 px-5
           justify-center max-lg:mb-16">
              <div className="col-span-3 max-sm:pb-5">
                <h3 className="font-bold text-indigo-950 text-4xl">Our Recent Work</h3>
                <h3 className="text-4xl text-indigo-950">By Our Experts</h3>
              </div>
              <div className="col-span-2 text-xs"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti ducimus, ad iure incidunt non pariatur, veniam adipisci quam sint minus cupiditate aliquid magni maxime.</p></div>
            </div>
            
        
            

          <div className="flex gap-x-10 pl-28 max-lg:pl-14 max-sm:pl-6  max-lg:gap-x-5">

            <div className="flex gap-1 items-end">
            <CircleArrowLeft color="#4a4a4a" />
            <CircleArrowRight color="#4a4a4a" />
            </div>

            <div className="flex gap-x-5 max-lg:gap-x-5 overflow-hidden">
              <WorkCards image={work} title="WEBSITE DESIGN" button="#" 
              />
              <WorkCards image={work} title="WEB DEVELOPMENT" button="#" 
              />
              
            </div>
          </div>


          
        </section>


      </div>
    
    </div>
   
    
    
    
    
  );
}
