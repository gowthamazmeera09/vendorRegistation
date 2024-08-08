import React from 'react'

function Addfirm() {
  return (
    <div className='Addfirm-table'>
        <form className='Addfirm'>
          <h1>Add firm</h1>
          <input type='text' placeholder='FirmName' />
          <br></br>
          <br></br>
          <input type='text' placeholder='Area' />
          <br></br>
          <br></br>
          <span>
          <h6>Category:</h6>
          <input type='checkbox' />veg
          <input type='checkbox' />non-veg
          </span>
          <br></br>
          <br></br>
          <span>
          <h6>Region:</h6>
          <input type='checkbox' />south-indian
          <input type='checkbox' />north-indian
          <input type='checkbox' />chiness
          <input type='checkbox' />bekari
          </span>
          <br></br>
          <br></br>
          <h6>offer:</h6>
          <input type='text' placeholder='Example:30% off today' />
          <div className='btn-submit'>
          <button type='submit'>
            submit
          </button>
        </div>

        </form>
    </div>
  )
}

export default Addfirm;