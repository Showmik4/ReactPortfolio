import React, { Component } from 'react'
import Aboutme from './Aboutme'
import Education from './Education'
import Experience from './Experience'
import Interest from './Interest'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Profile from './Profile'
import Projects from './Projects'
import Skill from './Skill'

export default class Home extends Component {
    render() {
        return (
    
         
          
          <section>
          <Navbar />
                <div className='container #616161 grey darken-2'>
                    <div className='row'>

                        <div className='col s12 m4 13'> 
                         <Profile />
                        
                        
                        </div>
                        <div className='col s12 m8 19'>
                            
                             <Aboutme/>
                             <Education />
                             <Skill />
                            <Experience />
                            <Projects />
                          
                            <Interest />


                            
                            
                             </div>



                    </div>

                </div>

            </section>

        )
    }
}
