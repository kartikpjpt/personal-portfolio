import React from "react";
import "./skill.css";

const Skills = () => {
    return (
        <div className="s">
            <h1 className="s-title">Skillset </h1>

            <div className="s-skills">
                <div className="s-sub">
                    <i class="fab fa-html5"></i>
                    <p className="s-desc">HTML 5</p>
                </div>
                <div className="s-sub">
                <i class="fab fa-css3-alt"></i>
                    <p className="s-desc">CSS 3</p>
                </div>
                
                <div className="s-sub">
                <i class="fab fa-react"></i>
                    <p className="s-desc">React.js</p>
                </div>
                <div className="s-sub">
                <i class="fab fa-node"></i>
                    <p className="s-desc">Node.js</p>
                </div>
                <div className="s-sub">
                <i class="fas fa-database fab"></i>
                    <p className="s-desc">Database</p>
                </div>
                <div className="s-sub">
                <i class="fas fa-terminal"></i>
                    <p className="s-desc">Terminal</p>
                </div>
                <div className="s-sub">
                <i class="fab fa-linux"></i>
                    <p className="s-desc">Linux</p>
                </div>
                <div className="s-sub">
                <i class="fab fa-cuttlefish"></i>
                    <p className="s-desc">C/C++</p>
                </div>
                
            </div>
        </div>
    );
};

export default Skills;
