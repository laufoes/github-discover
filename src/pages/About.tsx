import { BsFlower1 } from 'react-icons/bs'
import { SiReactrouter, SiReact, SiTailwindcss } from 'react-icons/si'
import PageStructure from "../components/PageStructure"

function About() {

    const redirectReactRouter = () => {
        window.open('https://reactrouter.com/en/main', '_blank')
    }

    const redirectReactIcons = () => {
        window.open('https://react-icons.github.io/react-icons', '_blank')
    }

    const redirectTailwindCSS = () => {
        window.open('https://tailwindcss.com/', '_blank')
    }

    const redirectDaisyUI = () => {
        window.open('https://daisyui.com/', '_blank')
    }

  return (
    <PageStructure>
        <h1 className="text-5xl mb-6">
            Github
            <span className="font-bold">
                DISCOVER
            </span>
        </h1>
        <p className="mb-6 text-xl font-light">
            This is your to-go React app to search Github profiles and see it's main stats.
            <p className='py-6'>Github DISCOVER is part of my personal projects developed in order to deepen my knowledge in the React framework, alongside with new skills using its vast component libraries.</p>
            <p className="py-6">Libraries used in this project:</p>
            <div>
                <button className="btn gap-2 mr-4" onClick={redirectReactRouter}>
                    <SiReactrouter />
                    react-router-dom
                </button>
                <button className="btn gap-2 mr-4" onClick={redirectReactIcons}>
                    <SiReact />
                    react-icons
                </button>
                <button className="btn gap-2 mr-4" onClick={redirectTailwindCSS}>
                    <SiTailwindcss />
                    tailwind CSS
                </button>
                <button className="btn gap-2 mr-4" onClick={redirectDaisyUI}>
                    <BsFlower1 />
                    daisy UI
                </button>
            </div>
            <p className="text-lg text-gray-400 py-6 font-bold">
                Version <span className="text-white font-normal">1. 0.0</span>
            </p>
        </p>
    </PageStructure>
  )
}

export default About
