import React, { Component } from 'react'

export default class Aboutme extends Component {
    render() {
        return (
            <div>
                <div className='card #616161 grey darken-2'>
                    <div className='card-content'>
                        <h6 className='mt-button'>
                            <strong>About Me</strong>

                        </h6>
                        <p className='grey-text'>

                            A Fresh Software Developer with knowledge of both Frontend and Backend technology and aiming to be
                            a Full Stack Software Developer.

                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>Personal Info</h6>
                        <div className='row mt'>

                            <div className='col s12 m6 18 x16'>

                                <p><strong>Address:</strong>Nikunjo-2,Khilkhet,Dhaka</p>
                                <p><strong>Email:</strong>showmik.aiub@gmail.com</p>
                                <p><strong>Linkedin:</strong><a href='https://www.linkedin.com/in/showmik-roy-031b58220/'>Linkedin</a></p>

                            </div>

                            <div className='col s12 m6 16 x16'>

                                <p><strong>Github:</strong><a href='https://github.com/Showmik4'>Github</a></p>
                                <p><strong>Phone:</strong>01774772684</p>
                               

                            </div>


                        </div>
                    </div>
                </div>
                </div>
            
        )
    }
}
