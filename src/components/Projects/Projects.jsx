import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import foodheaven from '../../assets/foodheaven.png'
import cryptogeek from '../../assets/cryptogeek.png'
import cineford from '../../assets/cineford.png'
import portfolio from '../../assets/portfolio.png'

const Projects = () => {
  return (
    <div className="py-16 h-svh bg-gradient-to-br">
      <div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-2xl text-white font-bold md:text-4xl">My Projects</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

        <ProjectCard name={'Crypto Geek'} description={'A crypto web app for gathering basic information about the crypto market...'} img={cryptogeek} tech={['VITE','React JS', 'Redux', 'tailwind', 'Firebase']} link={'https://github.com/Atul-Saxena/Crypto-Geek.git'}/>

        <ProjectCard name={'CineFord'} description={'An online movie encyclopedia website design which shows a list of movies you might like...'} img={cineford} tech={['Next JS', 'Express JS', 'Javascript']} link={'https://github.com/Atul-Saxena/CineFord.git'}/>

        <ProjectCard name={'Food Heaven'} description={'A food haven web design for the guys who loves to eat and explore new cuisines...'} img={foodheaven} tech={['VITE','React JS', 'Context API', 'Firebase']} link={'https://github.com/Atul-Saxena/Foodie-Heaven.git'}/>

        <ProjectCard name={'My Portfolio'} description={'Know more about me and my projects...'} img={portfolio} tech={['VITE','React JS']} link={'https://github.com/Atul-Saxena/My-Portfolio.git'}/>

        </div>
      </div>
    </div>
  )
}

export default Projects