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

const jobsummary = " kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh Lekenfkln kejejg;eg; ejejgegj;gj ejegj jejgewg jegewgwg ;ege;gwggegjgirh  eeheghewgh"

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
