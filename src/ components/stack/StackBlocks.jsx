import React from 'react'
import './StackBlock.scss'
export default function StackBlocks({img}) {
	

  return (
	<div className={`StackBlock`}>
		<img className='StackBlock_img' src={img}/>
	</div>
  )
}
