import React from 'react'
import {FaUser} from 'react-icons/fa'
import PageHeaderContent from '../../components/pageHeaderContent'
import {Animate} from 'react-simple-animate' 
import './styles.scss'
import {DiNodejs, DiDocker, DiMongodb} from 'react-icons/di'
import {FaDatabase, FaReact,} from 'react-icons/fa'

const personalDetails = [
  {
    label:"Name",
    value:"Ritik Gaur"
  },
  {
    label:"Email",
    value:"hritikgaur44@gmail.com"
  },
  {
    label:"Phone no",
    value:"9149047993"
  }
]

const jobsummary = "I'm a software developer with more than 1.5 years of professional experience.\
 I have worked in devops and full stack development using the MERN stack. I have worked with various tools and technologies, such as Docker, Kubernetes to ensure efficient and reliable software delivery. \n As a full stack developer, I have built web applications using MongoDB, Express.js, React, and Node.js.\
 I have also integrated third-party APIs and services, such as Google Maps, Stripe, and Firebase, to enhance the functionality and user experience of the applications.\
 I am a team player and enjoys working with colleagues and sharing knowledge. I believe in continuous learning and improvement, and I am always looking for new challenges and opportunities to grow. I enjoy exploring new areas and technologies.\
 My positive attitude and optimism help me stay motivated and focused, even when facing obstacles or setbacks. I believe that a can-do mindset and a proactive approach are essential for success in any field."

const About = () => {
  return (
    <div>
      <section id="about" className='about'>
     <PageHeaderContent
      headerText = "About Me"
      />
      <div className='about__content'>
      <div className='about__content__personalWrapper'>
      <Animate
       play
       duration={1.5}
       delay={1}
       start={{
        transform: 'translateX(-900px)'
       }}

       end={{
        transform: 'translatex(0px)'
       }}
       >
      <h3>Front End Developer</h3>
       <p>{jobsummary}</p>
       </Animate>
        
       <Animate
       play
       duration={1.5}
       delay={1}
       start={{
        transform: 'translateX(600px)'
       }}

       end={{
        transform: 'translatex(0px)'
       }}
       >
       <h3 className='personalInfo'>Personal Information</h3>
       <ul>
         {
          personalDetails.map((item,i)=>(
            <li keys={i}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))
         }
       </ul>
       </Animate>
       </div>

       <div className='about__content__servicesWrapper'>
       <Animate
       play
       duration={1.5}
       delay={1}
       start={{
        transform: 'translateX(500px)'
       }}

       end={{
        transform: 'translatex(0px)'
       }}
       >
       <div className='about__content__servicesWrapper__innerContent'>
       <div><FaReact size={70} color="red"/></div>
        <div><FaDatabase size={70} color="red"/></div>
        <div><DiDocker size={70} color="red"/></div>
        <div><DiMongodb size={70} color="red"/></div>
        <div><DiNodejs size={70} color="red"/></div>
       </div>
       </Animate>
       </div>
      </div>
      </section>
    </div>
  )
}

export default About
