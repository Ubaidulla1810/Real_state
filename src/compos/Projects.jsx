import React, { useEffect, useState } from 'react'
import larrow from '../assets/left_arrow.svg'
// import rarrow from '../assets/right_arrow.svg'
import { assets, projectsData } from '../assets/assets'


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToshow, setCardsToshow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((preIndex) => (preIndex + 1) % projectsData.length)
    }
    const previousProject = () => {
        setCurrentIndex((preIndex) => preIndex === 0 ? projectsData.length - 1 : preIndex - 1)
    }

    useEffect(()=>{
        const updateCardsToShow=()=>{
            if(window.innerWidth >=1024){
                setCardsToshow(projectsData.length)
            }else{
                setCardsToshow(1)
            }
        }
            updateCardsToShow();
            window.addEventListener('resize',updateCardsToShow);
            return ()=>window.removeEventListener('resize',updateCardsToShow)
        
    },[])
    return (
        <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1'>Completed</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
            {/* < > buttons */}
            <div className='flex justify-end mb-8 items-center'>
                <button onClick={previousProject} className='p-3 bg-gray-300 rounded mr-2' aria-label='Previous Project'>
                    <img src={larrow} alt="previous" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-300 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="next" />
                </button>
            </div>
            {/* sidebar */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currentIndex * 100)/cardsToshow}%)`}}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt={project.title}></img>
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>{project.price} <span>{project.location}</span> </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects