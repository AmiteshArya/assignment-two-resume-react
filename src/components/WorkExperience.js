import React from 'react';

function WorkExperience({ data }) {
    return (
        <section className="section work-experience">
            <div className="section-header">
                <h3>Work Experience</h3>
            </div>
            <div className="section-body">
                {data.map((experience, index) => (
                    <div key={index}>
                        <h4>{experience.jobTitle} ({experience.date})</h4>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;
