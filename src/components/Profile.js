import React, { Component } from 'react'
import ImgProfile from '../images/roy.jpg';
import { HashLink as Link } from 'react-router-hash-link';
export default class Profile extends Component {
  render() {
    return (
      <div className='card #616161 grey darken-2'>
      <div className='card-image'>
      <img className='activator' src={ImgProfile} alt='showmik' />

       <Link className='btn-floating halfway-fav waves-effect wave-light red'>
      
      <i className='material-icons activator right'>more_vert</i>
      </Link>

      </div>
      <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>Showmik Roy</span>
          <p>Software Engineer</p>

      </div>
      <div className='card-reveal'>
      <span className='card-title grey-text text-darken-4'>
          Follow Me
      <i className='material-icons right'>close</i>


      </span>
      <p className='flex-container'>

      <i className='fab fa-facebook grey-text text-darken-4 social-style'></i>
      <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
    
      <i className='fab fa-github grey-text text-darken-4 social-style'></i>
      <i className='fab fa-linkedin grey-text text-darken-4 social-style'></i>

      </p>

      </div>
      </div>
    )
  }
}
