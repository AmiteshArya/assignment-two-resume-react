import React from 'react';

function Skills({ data }) {
    return (
        <section className="section skills">
            <div className="section-header">
                <h3>Key Skills</h3>
            </div>
            <div className="section-body">
                
                <ul className="skills-list">
                    {data.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;
