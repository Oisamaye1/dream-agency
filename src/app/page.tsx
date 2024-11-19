import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "@/../public/images/heroimg.png"
import aboutus from "@/../public/images/aboutimg.png"
import work from "@/../public/images/work.png"
import {Cards, WorkCards} from "@/components/cards";
import { CircleArrowLeft, CircleArrowRight, Globe} from "lucide-react";
import TestimonialCards from "@/components/TestimonialCards";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>

      {/* NavBar section starts here */}

      <NavBar />

      {/* Hero Section Starts Here */}

      <div id="Hero" className=" relative">
        <section>
          <MaxWidthWrapper className="pb-24 pt-24 sm:grid sm:grid-cols-2 sm:pb-32 lg:gap-x-10 sm:gap-x-3 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-32 justify-center align-middle">


            <div className="flex flex-col justify-center max-lg:mb-20 ">
              <h1 className="font-extrabold text-4xl text-indigo-900">We Help you</h1>
              <h1 className="text-4xl mb-6 text-indigo-900">to grow your
              Business</h1>
              <p className="text-xs lg:text-base mb-6 text-indigo-900">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Button className="text-xs text-white bg-indigo-900 px-8 py-6 w-32">GET STARTED</Button>
            </div>

            <div className="w-full h-full flex justify-center align-middle">
              <Image src={heroImg} alt="hero image" className="w-full"></Image>
            </div>


          </MaxWidthWrapper>
        </section>


      </div>
      

      {/* Whats we do section starts here */}



      <section className="py-20 relative " id="What-we-do">
        <div className="bg-sky-50 -z-10 w-full absolute h-full top-0 rounded-r-full"></div>
        
        <MaxWidthWrapper>

          <div className="text-center mb-10">
            <h2 className="text-indigo-900 text-4xl max-sm:text-2xl font-extrabold">What We Do</h2>
            <h3 className="text-indigo-900 text-4xl max-sm:text-2xl">For Your Business</h3>
          </div>

          <div className="flex gap-x-10  max-lg:gap-x-5">
            <div className="flex gap-1 items-end">
            <CircleArrowLeft className="size-10 " color="#acacad" />
            <CircleArrowRight className="size-10" color="#acacad" />
            </div>

            <div className="flex gap-x-10 max-lg:gap-x-5 overflow-hidden">
              <Cards icon={<Globe color="#4a4a4a" size={30} />} title="WEBSITE DESIGN" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
              /> 
              </div>
            </div>

        </MaxWidthWrapper>
        

        
        
      </section>



      {/* About Us Section Starts Here */}

      <div className=" relative" id="About-us">
        <section>
          <MaxWidthWrapper className="pt-24 sm:grid sm:grid-cols-5 sm:pb-32 lg:gap-x-10 sm:gap-x-10 xl:gap-x-8 justify-center align-middle">

            <div className="w-full h-full flex justify-center col-span-3 max-lg:mb-20 align-middle">
              <Image src={aboutus} alt="hero image"></Image>
            </div>


            <div className="flex flex-col justify-center col-span-2 ">
              <h1 className="font-extrabold text-4xl max-sm:text-2xl text-indigo-900">About Us</h1>
              <h1 className="text-4xl max-sm:text-2xl mb-6 text-indigo-900">Fake or Real</h1>
              <p className="text-xs mb-6 text-indigo-900">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className="text-xs mb-6 text-indigo-900">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Button className="text-xs text-white bg-indigo-900 px-3 py-6 w-32">EXPLORE MORE</Button>
            </div>

            


          </MaxWidthWrapper>
        </section>


      </div>



      {/* OUR RECENT WORK SECTION STARTS HERE */}

      <div className=" relative mt-24 py-10" id="Recent-works">
        
        <section >

        <div className="absolute h-full w-11/12 right-0 bg-rose-50 rounded-ss-full  -z-10 top-0"></div>

        <MaxWidthWrapper>

          <div className="sm:grid sm:grid-cols-4 
            justify-center mb-10">
                <div className="col-span-2 max-sm:pb-5">
                  <h3 className="font-extrabold text-indigo-900 text-4xl max-sm:text-2xl">Our Recent Work</h3>
                  <h3 className="text-4xl max-sm:text-2xl text-indigo-900">By Our Experts</h3>
                </div>
                <div className="col-span-2 text-xs lg:text-xl text-indigo-900"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti ducimus, ad iure incidunt non pariatur, veniam adipisci quam sint minus cupiditate aliquid magni maxime.</p></div>
          </div>    

          <div className="flex gap-x-10 max-lg:gap-x-5">

            <div className="flex gap-1 items-end">
            <CircleArrowLeft color="#acacad" />
            <CircleArrowRight color="#acacad" />
            </div>

            <div className="flex gap-x-5 max-lg:gap-x-5 overflow-hidden">
              <WorkCards image={work} title="Gold Crown lab" button="#" 
              />
            
              
            </div>
          </div>

        </MaxWidthWrapper>
          
         


          
        </section>


      </div>

      {/* Testimonial Section Continues Here */}

      <div className="mt-24" id="Testimonial">
        <MaxWidthWrapper>
          <section>
            <div className="col-span-3 text-center max-sm:pb-5 mb-5">
              <h3 className="font-extrabold text-indigo-900 text-2xl lg:text-4xl">Our Testimonial</h3>
              <h3 className="text-2xl lg:text-4xl text-indigo-900">What Our Clients Are Saying</h3>
            </div>

            <div className="lg:flex gap-4">
              <TestimonialCards />
              <TestimonialCards />
            </div>

          </section>
        </MaxWidthWrapper>
      </div>

      {/* Footer Section Starts Here */}
      <section id="Contact-us">
        <Footer />
      </section>
      
    
    </div>
   
    
    
    
    
  );
}
