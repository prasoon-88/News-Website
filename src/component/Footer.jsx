import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footermain flex">
                <div className="socialLinks-main footer-section">
                    <h3>Created By</h3>
                    <ul>
                        <h4>Prasoon Asati</h4>
                        <h5><a href="tel:9424415952">+919424415952</a><br /><a href="tel:7610490206">+917610490206</a></h5>
                        <a href="mailto:prasouna@gmail.com">Email Me !</a>
                    </ul>

                </div>
                <div className="socialLinks-main footer-section">
                    <h3>Lets Connect</h3>
                    <ul>
                        <li className='social-link hover-link'><a href="https://www.linkedin.com/in/prasoon-asati-01a843196/">Linkdin</a></li>
                        <li className='social-link hover-link'><a href="https://github.com/prasoon-88/">Github</a></li>
                        <li className='social-link hover-link'><a href="https://api.whatsapp.com/send?phone=919424415952&text=%F0%9F%98%83%20Hi!%20%0AThis%20is">Whatsapp</a></li>
                        <li className='social-link hover-link'><a href="mailto:prasouna@gmail.com">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer