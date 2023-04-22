import React from 'react'
import amber from './../images/amber-kipp-2l3rq_wVWZU-unsplash.jpg';
import igor from './../images/igor-sporynin-0bW45ZK9atw-unsplash.jpg';
import spyr from './../images/shubham-dhage-snw8rLhx3WM-unsplash.jpg';
// import Userdata from './../data.json'
const Home = (props) => {

    let { mode } = props;
    return (
        <div className='conatiner my-2 mx-2'>
            <div className='conatiner my-3' style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                {/* {
                Userdata.map((users, index) => (
                    <div key={index}>
                        <h2>{users.name}</h2>
                        {users.image}<br></br>
                        {index + 1}<br></br></div>))} */}
            </div >
            <div className='container'>
                <div className="row ">
                    <div className='col-md-4'>
                        <div className="card">
                            <img src={amber} style={{ height: '380px' }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Amber</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card">
                            <img src={igor} style={{ height: '380px' }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Igor</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card" >
                            <img src={spyr} style={{ height: '380px' }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Spyr</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home