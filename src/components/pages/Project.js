import React from 'react';
import Wizard from '../../assets/projects/TradeWizard.JPG';
import Bird from '../../assets/projects/BirdBrain.JPG';
import Tech from '../../assets/projects/TechBlog.JPG';
import Note from '../../assets/projects/NoteTaker.JPG';
import '../../styles/Project.css';


// function Project() {
//     const tradeWizard = 
//         <a href='https://sullisters.github.io/card-broker/' target='_blank'>
//             <img className=' project' src={Wizard} />
//         </a>

//     const birdBrain = 
//         <a href='https://birdbrain2022.herokuapp.com/' target='_blank'>
//             <img className=' project' src={Bird} />
//         </a>

//     const techBlog = 
//         <a href='https://schreiber-tech-blog.herokuapp.com/' target='_blank'>
//             <img className=' project' src={Tech} />
//         </a>

//     const noteTaker = 
//         <a href='https://express-note-taker-schreiber.herokuapp.com/' target='_blank'>
//             <img className=' project' src={Note} />
//         </a>

//     const projects = [tradeWizard, birdBrain, techBlog, noteTaker]

//     return (
//         <div className='d-flex row'>
//             <div className='col d-flex justify-content-center'>{projects[0]}</div>
//             <div className='col d-flex justify-content-center'>{projects[1]}</div>
//             <div className='col d-flex justify-content-center'>{projects[2]}</div>
//             <div className='col d-flex justify-content-center'>{projects[3]}</div>
//         </div>
//     );
// }

// export default Project;


function Works() {
  const test = ''
    return (
      <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 w-full flex justify-center items-center flex-col'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
              Work
            </p>
            <p className='py-6 text-2xl'>Some past projects</p>
          </div>
  {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {/* Grid Item */}
            <div
              style={{ backgroundImage: `url(${test})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className=' text-lg font-bold text-white tracking-wider'>
                  Trade Wizard
                </span>
                <p className='text-center'>A CBT web application built with React and Mongodb</p>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Bird})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className=' text-lg font-bold text-white tracking-wider'>
                  CBT Application
                </span>
                <p className='text-center'>A CBT web application built with React and Mongodb</p>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Tech})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className=' text-lg font-bold text-white tracking-wider'>
                  CBT Application
                </span>
                <p className='text-center'>A CBT web application built with React and Mongodb</p>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Note})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className=' text-lg font-bold text-white tracking-wider'>
                  CBT Application
                </span>
                <p className='text-center'>A CBT web application built with React and Mongodb</p>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  export default Works;