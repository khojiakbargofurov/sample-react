import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import firstImg from './assets/imgs/first-img.jpg'
import secondImg from './assets/imgs/second-img.jpg'
import thridImg from './assets/imgs/thrid-img.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="react">
        <a href="https://t.me/khojiakbar_uz" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>REACT</h1>
      </div>
      <div className="cards">
      <div className="card">
         <div className="img"><img src={firstImg} alt="first image" /> </div>
         <div className="card-info">
           <h3 className="title">Fazt Web</h3>
           <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, enim fugiat! Omnis, perspiciatis eum ea nesciunt voluptates quasi corporis porro earum praesentium nemo assumenda quae, sequi non mollitia, harum maxime nihil minima. Corrupti, ipsa nemo.</p>
           <p className="info">
            Go to Fazt Web
           </p>
         </div>
        </div>
        <div className="card">
        <div className="img"><img src={secondImg} class="img" alt="second image" /></div>
        <div className="card-info">
          <h3 className="title">Fazt Blog</h3>
          <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, enim fugiat! Omnis, perspiciatis eum ea nesciunt voluptates quasi corporis porro earum praesentium nemo assumenda quae, sequi non mollitia, harum maxime nihil minima. Corrupti, ipsa nemo.</p>
          <p className="info">
            Go to Fazt Blog
          </p>
        </div>
        </div>
        <div className="card">
        <div className="img"><img src={thridImg} class="img" alt="third image" /></div>
        <div className="card-info">
          <h3 className="title">Fazt Youtube</h3>
          <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, enim fugiat! Omnis, perspiciatis eum ea nesciunt voluptates quasi corporis porro earum praesentium nemo assumenda quae, sequi non mollitia, harum maxime nihil minima. Corrupti, ipsa nemo.</p>
          <p className="info">
            Go to Fazt Youtube
          </p>
        </div>
        </div>  
      </div>

    </>
  )
}

export default App
