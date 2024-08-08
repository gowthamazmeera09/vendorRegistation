import React from 'react'

function Addproduct() {
  return (
    <div className='Addproduct'>
        <form className='Addfirm'>
          <h1>Add Product</h1>
          <input type='text' placeholder='Add product' />
          <br></br>
          <br></br>
          <input type='text' placeholder='price' />
          <br></br>
          <br></br>
          <span>
          <h6>Category:</h6>
          <input type='checkbox' />veg
          <input type='checkbox' />non-veg
          </span>
          <br></br>
          <br></br>
          <input type='file'  />
          <br></br>
          <br></br>
          <h6>best seller:</h6>
          <input type='text' placeholder='best seller' />
          <div className='btn-submit'>
          <button type='submit'>
            submit
          </button>
        </div>

        </form>
    </div>
  )
}

export default Addproduct;