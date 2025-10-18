import { Mail, Linkedin, Github, Dribbble } from 'lucide-react';
import Image from 'next/image';
import ProjectShowcase from "./components/ProjectShowcase";
import MovingLogos from './components/MovingImages';
export default function Home() {
  return (
    <main>
      <section className="bg-sky-100 ">
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
          <div>
            <Image src="/AiME.png" alt="" height={1500} width={1700} className="overflow-hidden"/> 
          </div>
          <div className=' text-center flex flex-col justify-center items-center '>
            <h1 className='text-pink-500 text-8xl'>port <br /> <span>folio</span></h1>
            <h3 className='text-2xl text-black'>zeamanuel fetene <span>|</span> ui/ux designer</h3>
          </div>
        </div>
      </section>

      <section className='bg-sky-100 text-black p-20 '>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
          <div>
            <h1 className='text-9xl text-pink-500 text-center'>Hello <span>!</span></h1>
            <hr className='h-2 w-170' />
            <p>
              I'm Rezan Mohammed, a passionate UI/UX designer dedicated to crafting exceptional digital experiences. With a keen eye for detail and a user-centric approach, I specialize in creating intuitive and visually appealing designs that resonate with users. 
              <br />  My portfolio showcases a diverse range of projects, highlighting my ability to blend creativity with functionality. Explore my work to see how I bring ideas to life through innovative design solutions.
            </p>
            <div >
             <h3 className='flex flex-cols-2'> <Mail  className='text-pink-500 pr-2 fill-pink-200/50' size={35}/>Rezanmoh002@gmail.com</h3>
              <h3 className='flex flex-cols-2'> <Linkedin className='text-pink-500 pr-2 fill-pink-200' size={35}/> linkedin.com/in/zeamanuel</h3>
              <h3 className='flex flex-cols-2'> <Github className='text-pink-500 pr-2 fill-pink-200' size={35}/>https://github.com/Rezan01</h3> 
            </div>

          </div>
          {/* second section image */}
           <div>
              <Image
          src="/sece.png"
          alt="Secondary illustration"
          height={212}
          width={308}
          className="overflow-hidden"/>

  </div>
        </div>
      </section>
      
      <section className="bg-sky-50 py-20">
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    
    {/* Left: Image */}
    <div className="flex justify-center items-center p-10 perspective-1000">
  <div className="relative w-[500px] h-[500px] animate-flip3DBounce">
    {/* Front side */}
    <div className="absolute inset-0 backface-hidden">
      <Image
        src="/algorithms.png"
        alt="Front side"
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* Back side */}
    <div className="absolute inset-0 backface-hidden rotateY-180">
      <Image
        src="/rezan.png"
        alt="Back side"
        fill
        className="object-cover rounded-lg"
      />
    </div>
    
  </div>
</div>



    {/* Vertical Divider */}
    <div className="w-[1px] h-100 bg-gray-400 mx-4"></div>

    {/* Right: Experience / Education / Skills */}
    <div className="text-black pb-5">
      <div>
      <h2 className="font-semibold mb-2 text-6xl text-pink-500">Experience</h2>
      <ul className="grid md:grid-cols-2 gap-6 text-sm ">
        <li>2018 - UI/UX Designer at XYZ Company</li>
        <li>2020 - Senior Designer at ABC Agency</li>
        <li>2022 - Lead Designer at DEF Corp</li>
        <li>2023 - Principal Designer at GHI Inc</li>
      </ul>
      </div>

      
        <hr className='w-130 bg-gray-400 m-4 '/>
      
      
      {/* Education */}
      <div>
      <h2 className="font-semibold mb-2 mt-4 text-6xl text-pink-500">Education</h2>
      <ul className=" gap-2 text-sm">
        <li>B.A. in Graphic Design, University of Art (2014-2018)</li>
        <li>M.S. in Human-Computer Interaction, Tech University (2018-2020)</li>
      </ul>

      </div>
      <hr className='w-130 bg-gray-400 m-4 '/>

      {/* Skills */}
      <div>
      <h2 className="font-semibold mb-2 mt-4 text-6xl text-pink-500">Skills</h2>
      <ul className="grid md:grid-cols-2 gap-2 text-sm">
        <li>Wireframing & Prototyping</li>
        <li>User Research & Testing</li>
        <li>Visual Design</li>
        <li>Interaction Design</li>
        <li>Figma & Sketch</li>
        <li>Adobe Creative Suite</li>
      </ul>
      </div>
    </div>

  </div>

      </section>

      {/* the frame motion */}

      <section  className="p-3 bg-sky-50 flex m-0 ">
    
        <MovingLogos /> 
        
      </section>

      {/* the projects description */}

      <section className=" flex flex-col items-center justify-center bg-sky-100 p-6">
        <h1 className="text-6xl text-pink-500 font-bold mb-8">My Projects</h1>
      <ProjectShowcase />

      </section>

    </main>
  );
}
