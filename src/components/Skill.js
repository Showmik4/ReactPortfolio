import React, { Component } from 'react'

export default class Skill extends Component {
  render() {
    return (
      <div>

        <div className='card #616161 grey darken-2'>
          <div className='card-content'>
            <h6>
              <strong>Professional Skils</strong>
            </h6>
            <div className='row mt-top'>

              <div className='col s6'>

                <p>Html,CSS,BOOTSTRAP</p>

                <div className='progress grey lighten-1'>

                  <div className="determinate blue" style={{ width: '90%' }}>

                  </div>
                </div>

                <p>PHP,LARAVEL</p>

                <div className='progress grey lighten-1'>

                  <div className="determinate blue" style={{ width: '85%' }}>

                  </div>
                </div>

                <p>C#,C,C++</p>

                <div className='progress grey lighten-1'>

                  <div className="determinate blue" style={{ width: '80%' }}>

                  </div>
                </div>

                <p>JAVASCRIPT,REACT JS</p>

                <div className='progress grey lighten-1'>

                  <div className="determinate blue" style={{ width: '75%' }}>

                  </div>
                </div>


               

               


              </div>

            </div>

          </div>

        </div>

      </div>
    )
  }
}
