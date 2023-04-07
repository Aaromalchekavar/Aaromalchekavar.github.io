import React from 'react'
import Skillbar from 'react-skillbars';
import './skills.css'

const skill = [
    { type: "React", level: 60 },
    { type: "Javascript", level: 70 },
    { type: "NodeJS", level: 80 },
    { type: "MongoDB", level: 70 },
    { type: "Python", level: 85 },
    { type: "C/CPP", level: 75 },
    { type: "Java", level: 60 },
    { type: "Flutter", level: 70 },
    { type: "Cloud", level: 80 },
    { type: "Linux", level: 95 },
    { type: "Googling", level: 100 },
    { type: "Figma", level: 85 },
    { type: "Confidence", level: 100 }
];
const colors = {
    bar: "#FFD580",
    title: {
        text: "#000000",
        background: "#D3D3D3"
    }
};

function skillbartemplate() {
    return (
        <>
            <div className="containerr border">
                <h2 id="skills">Skills</h2>
                <Skillbar skills={skill} height={30} colors={colors} />
            </div>

        </>
    )
}

export default skillbartemplate
