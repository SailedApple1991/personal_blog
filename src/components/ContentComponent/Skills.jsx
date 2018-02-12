import React, { Component } from 'react';
import '../../css/Skills.css';
class Skills extends Component {
    render() {
        return (
            <div >
                <p className="h2">
                    List of Skills
                </p>
            <div className="skills">

                <div className="prefered-language">
                    <div className='category color-0'>
                    <span className='Icon'>
                        <i className="fas fa-code">
                        </i>
                    </span>
                            Preferred Languages
                            <div className="tree">
                                <div className="vertical-line-1">
                                </div>
                                <div className="skills-1">
                                    <div className="skill-line">
                                    </div>
                                    JavaScript
                                </div>
                                <div className="skills-1">
                                    <div className="skill-line">
                                    </div>
                                    Python
                                </div>
                                <div className="skills-1">
                                    <div className="skill-line">
                                    </div>
                                    Java
                                </div>
                            </div>

                    </div>
                </div>
                <div className='category color-1'>
                    <span className='Icon'>
                        <i className="fas fa-desktop">
                        </i>
                    </span>
                            Front-end Skills
                        <div className="tree">
                            <div className="vertical-line-1">
                            </div>
                            <div className="skills-1">
                                <div className="skill-line">
                                </div>
                                React
                            </div>
                            <div className="skills-1">
                                <div className="skill-line">
                                </div>
                                JQuery
                            </div>
                            <div className="skills-1">
                                <div className="skill-line">
                                </div>
                                HTML/CSS
                                <div className="subtree">
                                    <div className="vertical-line-1">
                                    </div>
                                    <div className="skills-1">
                                        <div className="skill-line">
                                        </div>
                                        Sass
                                    </div>
                                    <div className="skills-1">
                                        <div className="skill-line">
                                        </div>
                                        LESS
                                    </div>
                                </div>
                            </div>
                            <div className="skills-1">
                                <div className="skill-line">
                                </div>
                                Angular
                            </div>
                            <div className="skills-1">
                                <div className="skill-line">
                                </div>
                                Responsive Design
                                <div className="subtree">
                                    <div className="vertical-line-1">
                                    </div>
                                    <div className="skills-1">
                                        <div className="skill-line">
                                        </div>
                                        Bootstrap
                                    </div>
                                    <div className="skills-1">
                                        <div className="skill-line">
                                        </div>
                                        Raw CSS
                                    </div>
                                </div>
                            </div>
                            <div className="skills-1">
                                <div className="skill-line">
                                </div>
                                Visualization
                                <div className="subtree">
                                    <div className="vertical-line-1">
                                    </div>
                                    <div className="skills-1">
                                        <div className="skill-line">
                                        </div>
                                        Svg
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
                <div className='category color-2'>
                    <span className='Icon'>
                        <i className="fas fa-cogs">
                        </i>
                    </span>
                    Back-end Skills
                    <div className="tree">
                        <div className="vertical-line-1">
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Node.js
                            <div className="subtree">
                                <div className="vertical-line-1">
                                </div>
                                <div className="skills-1">
                                    <div className="skill-line">
                                    </div>
                                    Express.js
                                </div>
                                <div className="skills-1">
                                    <div className="skill-line">
                                    </div>
                                    Hapi.js
                                </div>
                            </div>
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Spring
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Flask
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            MongoDB
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            MySQL
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Redis
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Kafka
                        </div>
                    </div>

                </div>
                <div className='category color-3'>
                    <span className='Icon'>
                        <i className="fas fa-mobile-alt">
                        </i>
                    </span>
                    Cross-Platform
                    <div className="tree">
                        <div className="vertical-line-1">
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            React Native
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Android SDK
                        </div>
                    </div>

                </div>

                <div className='category color-4'>
                    <span className='Icon'>
                        <i className="fas fa-wrench">
                        </i>
                    </span>
                    Testing & Automation
                    <div className="tree">
                        <div className="vertical-line-1">
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Webpack
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Grunt
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                           Grunt
                        </div>
                        <div className="skills-1">
                            <div className="skill-line">
                            </div>
                            Mocha
                        </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}
export default Skills;