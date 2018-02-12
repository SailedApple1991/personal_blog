import React, { Component } from 'react';
import '../css/HomePage.css'
class HomePage extends Component {
    render() {
        return (
            <div className="col-md-12 blog-main">
                <p className = "h1">
                About Me
                </p>
                <p id = 'introduction'>
                    I'm a full-stack web developer focusing on using modern JavaScript frameworks to deliver modular, robust web applications. I will graduate from the University at Buffalo with a Master of Science in Computer Science, and B.S in both Computer Science &amp; Electrical Engineering. In addition to solid programming backgrounds, I'm passionate about learning and implementing latest web development techniques. Comfortable and capable of working either collaboratively or individually on projects involving back-end, deployment or design requirements.
                </p>
                <p className="h2">
                    Highlights
                </p>
                <span>
                    <ul className='hightlights-list'>
                        <li>
                            Developing and optimizing modular, modern web applications using Angular(2+), React and Webpack.
                        </li>
                        <li>
                            Designing visually complex, responsive, cross-platform front-end user interfaces.
                        </li>
                        <li>
                            Implementing related mid-scale back-ends and deploying the solutions to major cloud platforms.
                        </li>
                        <li>
                            Prototyping and transforming design ideas into graphics using Adobe and alternative software.
                        </li>
                    </ul>
                </span>
            </div>
        )
    }
}
export default HomePage;