import React from 'react'
import '../css/booking.css'
function Book(){
    return(
        <div id='ff'style={{margin:"0px",padding:"0px"}}>
    <h3>Id:</h3>
    <input type='text'className='book' placeholder='ID'/>
    <h3>First Name:</h3>
    <input type='text' placeholder='Your First Name' className='book'/>
    <h3>Middle Name:</h3>
    <input type='text' placeholder='Your Middle Name' className='book'/>
    <h3>Last Name:</h3>
    <input type='text' placeholder='Your last Name' className='book'/>
    <h3>Dob:</h3>
    <input type='date' placeholder='Your Dob'className='book' />
    <h3>Gender:</h3>
    <input type='text' placeholder='Your Gender' className='book'/>
    <h3>Phone No.:</h3>
    <input type='text' placeholder='Your Phone No.'className='book' />
    <h3>Email Id:</h3>
    <input type='email' placeholder='Your Email Id' className='book'/>
    <h3>Proof of Identity:</h3>
    <input type='text' placeholder='Your adhaar No.' className='book'/>
        </div>
    )
}
export default Book