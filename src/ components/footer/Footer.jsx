import React, { useState, useEffect, useCallback } from 'react'
import "./Footer.scss";

export default function Footer() {
	
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const [isHovering, setIsHovering] = useState(false)
  
	const handleMouseMove = useCallback((event) => {
	  const rect = event.currentTarget.getBoundingClientRect()
	  setMousePosition({
		x: event.clientX - rect.left,
		y: event.clientY - rect.top,
	  })
	}, [])
  
  return (
    <div className="Footer" onMouseMove={handleMouseMove}
	onMouseEnter={() => setIsHovering(true)}
	onMouseLeave={() => setIsHovering(false)}>
      <div className="Footer_rules">
        <h5>Rules</h5>
        <p>
          I can refuse to fulfill an order without giving any reason.<br/>If I was
          unable to fulfill the order for any reason, I will refund the
          prepayment.<br/>If I have completed more than 70% of the work, and you or
          I refuse further development, you will have to pay for half of the
          completed work.
        </p>
      </div>
      <div className="Footer_contacts">
        <h5>Contacts</h5>
        <p>Telegram: <a className="Footer_contacts_link" href="https://t.me/jsrhscss">https://t.me/jsrhscss</a></p>
		<p>lolz: <a className="Footer_contacts_link" href="#">link to topic</a></p>
      </div>

	  {isHovering && (
          <div
		  className='GlowEffect'
            style={{
				pointerEvents: 'none',

              left: mousePosition.x - 2.5,
              top: mousePosition.y - 2.5,
            }}
          />
        )}
    </div>
  );
}
