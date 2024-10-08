import React from 'react';

function Education({ data }) {
    return (
        <section className="section education">
            <div className="section-header">
                <h3>Education</h3>
            </div>
            <div className="section-body">
                {data.map((edu, index) => (
                    <div key={index}>
                        <h4>{edu.institution}</h4>
                        <p>{edu.degree}</p>
                        <p>{edu.date}</p>
                        <p className="gpa">GPA: {edu.gpa}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
