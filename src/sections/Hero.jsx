import { shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section 
    id='home'
    className='w-full min-h-screen gap-10 overflow-hidden'>
        <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center '>
            <div className='relative md:w-3/5 w-full flex flex-col justify-center items-start pt-28 '>
            <h2 className='text-coral-red text-md font-normal font-montserrat'>Our summer collections</h2>
            <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
              <span className="lg:big-white lg:whitespace-nowrap bg-white relative z-10 pr-3"> The New Arrival</span>
                <br  /> 
                <span className='text-coral-red font-montserrat inline-block mt-3'>Nike</span> Shoes
            </h1>
            <p className='max-w-md font-palanquin mt-[16px]'>Discover our stylish Nike arrivals, quality comforts, and innovation for your active life</p>
            <div className='bg-coral-red w-[200px] mt-[20px] text-center rounded-full '>
               <Button/>
            </div>
                 <div className="flex justify-between items-center mt-[20px] gap-[56px] ">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <h1 className="font-extrabold font-palanquin">{stat.value}</h1>
                            <h2 className="mt-[10px] font-montserrat leading-6">{stat.label}</h2>
                            </div>
                    ))}
                 </div>
            </div>

            <div className='mt-[56px] md:mt-0 relative min-h-screen flex justify-center items-center bg-primary bg-hero bg-cover bg-center'>
                <img 
                src={bigShoeImg}
                 alt="big shoe" 
                 width={500}
                height={402}
                className='object-contain relative z-10' />

          
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
                <ShoeCard 
                 index={index}
                 imgURL={image}
                 changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                 bigShoeImg={bigShoeImg}
                  
                />
            </div>
          ))}
        </div>
            </div>
        </div>
           
    </section>
  )
}

export default Hero



