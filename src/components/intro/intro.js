import React from 'react'
import "./intro,css";
import bg from "../asset/bg.jpg"

function intro() {
  return (
    <section id="intro">
     <div className='introcontent'>
      <span className='wellocome'> wellocome To</span>
      <span className='introname'> BillGrace Renewable <br/> Energy technologies LTD</span>

      <p className='intropara'>we provide seamless and steady <br/> power supply based on Renewable Energy to <br/> government organisation, Housing, Estate, commercial organisation <br/> and individual Homes. we achieves this through professional integrity and Ethics <br/> in desing, installations, operation and maintenance, <br/> for exceptional and uniteruptedcarbon-free power supply</p>
      
     </div>

     <img  src='{bg}' alt='profile' className='bg'/>
    </section>
     
  )
}

export default intro