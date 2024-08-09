import React, { useState } from 'react'
import { API_URL } from '../data/apipath';


function Addfirm() {
  const [firmName,setFirmName] = useState("");
  const [area,setArea] = useState("");
  const [Category,setCategory] = useState([]);
  const [region,setRegion] = useState([]);
  const [offer,setOffer] = useState("");
  const [file,setFile] = useState(null);


  const handleCategoryChange = (event)=>{
    const value = event.target.value;
    if(Category.includes(value)){
      setCategory(Category.filter((item)=>item !== value))
    }
    else{
      setCategory([...Category,value])
    }
  }

  const handleImageUpload = (event)=>{
    const selectedImage = event.target.files[0];
    setFile(selectedImage)
  }



  const handleRegionChange = (event)=>{
    const value = event.target.value;
    if(region.includes(value)){
      setRegion(region.filter((item)=>item !== value))
    }
    else{
      setRegion([...region,value])
    }
  }

  const handleFirmSubmit = async (e)=>{
    e.preventDefault();
    try{
      const loginToken = localStorage.getItem('logintoken');
      if(!loginToken){
        console.error("user not found");
        alert("user not found");
      }
      const formData = new FormData();

      formData.append('firmName',firmName);
      formData.append('area',area);
      formData.append('offer',offer);
      formData.append('image',file);

      Category.forEach((value)=>{
        formData.append('category',value);
      })

      region.forEach((value)=>{
        formData.append('region',value)
      })

      const response = await fetch(`${API_URL}/firm/add-firm`,{
        method:'POST',
        headers:{
          'token':`${loginToken}`
        },
        body:formData
      });
      const data = await response.json();
      if(response.ok){
        console.log(data);
        alert("firm added successfully");
        setFirmName("");
        setArea("");
        setOffer("");
        setCategory([]);
        setRegion([]);
        setFile(null)
      }





    }catch(error){
      console.error(error)
      alert("failed to add firm")
    }
  }



  return (
    <div className='Addfirm-table'>
        <form className='Addfirm' onSubmit={handleFirmSubmit}>
          <h1>Add firm</h1>
         <input type='text' placeholder='firmName' name='firmName' value={firmName} onChange={(e)=>{setFirmName(e.target.value)}}  />
          <br></br>
          <br></br>
          <input type='text' name='area' placeholder='Area'value={area} onChange={(e)=>{setArea(e.target.value)}}   />
          <br></br>
          <br></br>
          <span>
          <h6>Category:</h6>
          <input type='checkbox' checked={Category.includes('veg')} value="veg" onChange={handleCategoryChange} />veg
          <input type='checkbox' checked={Category.includes('non-veg')} value="non-veg" onChange={handleCategoryChange}  />non-veg
          </span>
          <br></br>
          <br></br>
          <span>
          <h6>Region:</h6>
          <input type='checkbox' checked={region.includes('south-india')} value="south-india" onChange={handleRegionChange}  />south-indian
          <input type='checkbox' checked={region.includes('north-india')} value="north-india" onChange={handleRegionChange}  />north-indian
          <input type='checkbox' checked={region.includes('chiness')} value="chiness" onChange={handleRegionChange}  />chiness
          <input type='checkbox' checked={region.includes('bekari')} value="bekari" onChange={handleRegionChange}   />bekari
          </span>
          <br></br>
          <br></br>
          <h6>offer:</h6>
          <input type='text' placeholder='ex:30% off' name='offer' value={offer} onChange={(e)=>{setOffer(e.target.value)}} />
          <br></br>
          <br></br>
          <h5>image</h5>
          <input type='file' onChange={handleImageUpload} />
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