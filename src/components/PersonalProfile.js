import React from 'react';

function PersonalProfile({ data }) {
    return (
        <section className="section">
            <div class="section-header">
                <h3>Personal Profile</h3>
            </div>
            <div className='section-body'>
                <p>{data}</p>
            </div>
        </section>



    );
}

export default PersonalProfile;
