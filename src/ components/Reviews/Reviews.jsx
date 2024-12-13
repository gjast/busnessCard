import React from 'react'
import './Reviews.scss'
import Review from './Review'
export default function Reviews() {
	const reviews = [
		{img: "./img/review1.png",
			stars: 5,	
		},
		{img: "./img/review2.png",
			stars: 4,	
		},
		{img: "./img/review3.png",
			stars: 4,	
		},
	]
  return (
	<div className='Reviews'>
        <h1 className='reviews-title'>Reviews</h1>

		
		
		{reviews.map((review, index) => (<div key={index} className='Reviews_block'>
			<Review key={index} stars={review.stars} img={review.img} />
			</div>
		))}
		
	</div>
  )
}
