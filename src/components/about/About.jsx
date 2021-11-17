import React from 'react';
import './about.css';
import kartik from '../../img/me-2.jpg'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={kartik} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Full Stack Web Developer
                </p>
                <p className="a-desc">
                Hello, I'm Kartik and I'm a sort of curious person. Most of my time I like to learn new things and technologies. 
                I don't like define myself by the work I've done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more than willing to follow my fascinations wherever they take me. 
                </p>

                {/* add fiver or upwork or freelancer */}
                <div className="a-award">
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Hire me on Fiverr
                        </h4>
                        <a href="https://www.fiverr.com/kartik_28?up_rollout=true" className="a-award-desc">
                            @kartik_28
                        </a>
                    </div>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Hire me on Freelancer
                        </h4>
                        <a href="https://www.freelancer.in/u/Karteik5" className="a-award-desc">
                            @Karteik5
                        </a>
                    </div>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Hire me on Upwork
                        </h4>
                        <a href="https://www.upwork.com/freelancers/~013c531e3957f517ba?viewMode=1" className="a-award-desc">
                            @kartik_2805
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
