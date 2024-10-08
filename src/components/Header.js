import React from 'react';

function Header({ data }) {
    return (
        <div className="header">

            <div className="bio">
                <h1>{data.name}</h1>
                <h2>{data.title}</h2>
            </div>
            
            <div className='contact'>
                <p>Email: <a href={data.email}>{data.email}</a></p>
                <p>Web: <a href={data.web}>{data.web}</a></p>
                <p>Mobile: <a href={data.mobile}>{data.mobile}</a></p>
            </div>
            
        </div>
    );
}

export default Header;
