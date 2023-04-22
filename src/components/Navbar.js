import React from 'react'
import weatherlogosunny from './../images/icons8-light-mode-35.png';
import weatherlogomoon from'./../images/icons8-moon-symbol-30.png';
import applogo from './../images/weather-app.png'
const Navbar = (props) => {
    let {togglemode,mode } = props
   
  
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={applogo} alt=''/> Weather App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                           </ul>
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'} mx-2`}>
                            <input className="form-check-input" onClick={togglemode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{mode==='light'?'Dark Mode': 'Light Mode'}</label>
                        </div>
                        <img src={mode==='dark'?weatherlogosunny:weatherlogomoon} alt=''/>
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



