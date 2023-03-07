import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
padding:'20px',
    height: '55vh',
    width: '80%',
    margin: '0 auto',
    objectFit: 'cover',
    backgroundPosition: 'center center',
    border:'20px',
    borderRadius: '30px',
  };
  
function Slider() {
  return (
    <div>
      <Carousel autoplay>
      <div>
          
      <img style={contentStyle} src="https://blog.airbaltic.com/wp-content/uploads/2020/01/header-souvenirs.jpg"></img> 
      </div>
      <div>
      <img style={contentStyle} src="https://www.shutterstock.com/image-vector/vector-sale-faceted-3d-banner-260nw-572608936.jpg"></img> 
      </div>
      
      <div>
      <img style={contentStyle} src="https://cdn.thewirecutter.com/wp-content/uploads/2017/10/school-supplies-back-to-school-2x1-fullres-2.jpg?auto=webp&quality=60&crop=2:1&width=1024"></img> 
      </div>
    </Carousel>
    </div>
  )
}


export default Slider








