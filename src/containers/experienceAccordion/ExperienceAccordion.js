import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div key={section.title} className="experience-section">
              
              {/* Titre de la section */}
              <h2
                style={{
                  color: theme.text,
                  borderBottom: `2px solid ${theme.headerColor}`,
                  paddingBottom: "10px",
                  marginTop: "20px"
                }}
              >
                {section.title}
              </h2>

              {/* Liste des expériences */}
              <div>
                {section.experiences.map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section.experiences.length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;