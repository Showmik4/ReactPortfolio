import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='#616161 grey darken-2'>
                    <div className='container'>

                        <div className='nav-wrapper'>



                            <Link to="/" data-target='side-nav' className='sidenav-trigger'>
                                <i className='material-icons'>menu</i>


                            </Link>

                            <ul className='right hide-on-med-and-down'>

                                <li>
                                    <Link to="/" >
                                        <i className='fas fa-home'>Home</i>


                                    </Link>

                                </li>


                                <li>
                                    <Link to="/skills" >
                                        <i className='fas fa-copy'>Skills</i>


                                    </Link>

                                </li>

                                <li>
                                    <Link to="/experience" >
                                        <i className='fas fa-id-badge'>Experience</i>


                                    </Link>

                                </li>




                                <li>
                                    <Link to="/education" >
                                        <i className='fas fa-graduation-cap'>Education</i>


                                    </Link>

                                </li>



                                <li>
                                    <Link to="/portfolios" >
                                        <i className='fas fa-address-card'>Portfolio</i>


                                    </Link>

                                </li>




                            </ul>

                        </div>



                    </div>








                </nav>



                <ul className='sidenav' id='side-nav'>

                    <li>
                        <Link to="/home" >
                            <i className='fas fa-home'>Home</i>


                        </Link>

                    </li>


                    <li>
                        <Link to="/skills" >
                            <i className='fas fa-copy'>Skills</i>


                        </Link>

                    </li>

                    <li>
                        <Link to="/experience" >
                            <i className='fas fa-id-badge'>Experience</i>


                        </Link>

                    </li>




                    <li>
                        <Link to="/education" >
                            <i className='fas fa-graduation-cap'>Education</i>


                        </Link>

                    </li>



                    <li>
                        <Link to="/portfolios" >
                            <i className='fas fa-address-card'>Portfolio</i>


                        </Link>

                    </li>




                </ul>





            </>
        )
    }
}
