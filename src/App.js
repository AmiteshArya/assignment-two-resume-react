import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';





function App() {

  const [resumeData, setResumeData] = useState({
    header: {
        name: "Zh Rimel",
        title: "Data Scientist",
        email: "abc@email.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
    },
    personalProfile: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`,
    workExperience: [
        {
            jobTitle: "Job Title at Company",
            date: "August 2022 – December 2023",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`
        },
        {
            jobTitle: "Job Title 2 at Company",
            date: "August 2020 – December 2021",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`
        }
    ],
    skills: ["A Key skill", "A Key skill", "A Key skill", "A Key skill","A Key skill", "A Key skill", "A Key skill", "A Key skill","A Key skill"],
    education: [
        {
            institution: "New Jersey Institute of Technology",
            degree: "BS in Computer Science",
            date: "2018 - 2022",
            gpa: "3.9"
        },
        {
            institution: "New Jersey Institute of Technology",
            degree: "MS in Data Science",
            date: "2022 - 2023",
            gpa: "4.0"
        }
    ]
  });

return (
    <div className="App">
        <Header data={resumeData.header} />
        <PersonalProfile data={resumeData.personalProfile} />
        <WorkExperience data={resumeData.workExperience} />
        <Skills data={resumeData.skills} />
        <Education data={resumeData.education} />
    </div>
);

}

export default App;
