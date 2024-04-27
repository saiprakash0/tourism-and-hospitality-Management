// Team.js

import React from "react";
import Banner from "../Components/Nav/Banner/Banner";
import './Team.css'; // Import your CSS file

const teamMembers = [
  {
    ID: '2200031773',
    position: 'Front-End Developer',
    
  },
  {
    ID: '2200030525(TEAM LEAD)',
    position: 'Back-End Developer',
    
  },
  {
      ID: '2200031525',
    position: 'Software Engineer',
   
  },
  // Add more team members here
];

const Team = () => {
  return (
    <>
      <Banner title="Team" smtitle="Team" />
      <div className="header">
        <h1>Our Team Members</h1>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
