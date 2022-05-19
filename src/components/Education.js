import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div >
        <div className='card #616161 grey darken-2'>
          <div className='card-content'>
            <h6>
              <strong>Education</strong>
            </h6>
            <table className='striped'>

              <thead>
                <tr>

                  <th>Exam</th>
                  <th>Institute</th>
                  <th>Passing Year</th>
                  <th>GPA/CGPA</th>
                </tr>


              </thead>
              
              <tbody>

              <tr>
                  <td>Bechelor</td>
                  <td>American International University - Bangladesh</td>
                  <td>2022</td>
                  <td>3.75</td>
                </tr>
                
                <tr>
                  <td>HSC</td>
                  <td>Shailkupa Govt Degree College, Jhenidah</td>
                  <td>2017</td>
                  <td>4.25</td>
                </tr>
                <tr>
                  <td>SSC</td>
                  <td>Shailkupa Pilot High school, Jhenidah</td>
                  <td>2015</td>
                  <td>5.00</td>
                </tr>


               
              </tbody>

            </table>
          </div>
        </div>


      </div>
    )
  }
}
