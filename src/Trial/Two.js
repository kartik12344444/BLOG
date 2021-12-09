import React from 'react'
import secondimg from './secondimg.png'

const Styles2= {
  marginTop : '10%',
  marginRight : '8%',
  marginLeft : '8%',
  width : '75%'

}

function Two() {
  return (
    <div >
      <img style={Styles2} src={secondimg} alt='extra4'></img>
    </div>
  )
}

export default Two