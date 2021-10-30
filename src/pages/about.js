import React from 'react';
import Layout from '../components/Layout';
import {skillset, skillset2, skillset3, inner, h1, desc} from '../styles/resume.module.css'

export default function about() {
    return (
        <Layout>
            <div className={inner}>
            <section>
            <h1 className={h1}>Employment</h1>
            <br />
            <br />
            <h2>🌼 October 2021 - Present | G-research Open Source | Contract, Developer Relations</h2>
            <br />
            <ul className={desc}>
            <li>• Writing blogs, articles and demos on Graphql and Dgraph</li>
            </ul>
            <h2>🌼 Feb 2021 - May 2021 | Hackbright | Student Engineer</h2>
            <br />
            <ul className={desc}>
                <li>• Accelerated full-stack software engineering program with over 68 lectures</li>
                <li>• Pair-programmed for over 30 labs and participated in 22 scrums</li>
                <li>• Gave a lightning talk on REST APIs</li>
                <li>• Learned 14 different languages/frameworks and built 16 apps</li>
                <li>• Scripted and gave the graduation speech!</li>
            </ul>
            <h2>🌼 Jun 2018 - Jan 2021 | The Artists Company | Co-founder</h2>
            <br />
            <ul className={desc}>
                <li>• Initiated and secured over $30,000 in project grants for multiple art shows</li>
                <li>• Organized and curated events in galleries and public spaces</li>
                <li>• Executed funding, budgeting, set-up, social media and press releases</li>
                <li>• Collaborated with over 150 artists </li>
            </ul>
            <h2>🌼 Jun 2015 - Dec 2020 | Ministry of Education | Teacher Researcher</h2>
            <br />
            <ul className={desc}>
                <li>• Awarded a 4-year overseas teaching scholarship at University of the Arts London</li>
                <li>• Spearheaded a Project Grant of $50,000 for study of Virtual Reality and Creativity, achieved cost savings of 25.4% through RFP process</li>
                <li>• Published a 30-page book chapter “Perception as Expression: Virtual Reality in the Classroom” with Springer in 2021</li>
                <li>• Research presented in an education conference and featured on local news</li>
            </ul>
        </section>
        <section>
            <h1 className={h1}>Languages, Frameworks and Libraries</h1>
            <br />
            <ul className={skillset}>
                <li>Javascript</li>
                <li>Python</li>
                <li>HTML</li>
                <li>SQL</li>
                <li>GraphQL</li>
                <li>CSS3</li>
                <li>Jquery</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Jquery</li>
                <li>D3</li>
                <li>SASS</li>
                <li>Pandas</li>
                <li>Docker</li>
                <li>Flask</li>
                <li>PostgresQL</li>
                <li>SQLAlchemy</li>
            </ul>
            <br />

            <ul className={skillset2}>
                <li>After Effects</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>SparkAR</li>
            </ul>

        </section>
        <section>
            <h1 className={h1}>Education</h1>
            <br />
            <p>William Grand | <em>Grand Interactive, llc. | CEO</em></p>
            <p>(617) 448-0910 | wgrand@grandinteractive.com</p>
            <p>Eric Chauvin | <em>PadMatcher Inc. | CEO</em></p>
            <p>(617) 448-0910 | eric@padmatcher.com</p>
            <p>Chris Heller <em>Penrose Realty LLC. | Broker</em></p>
            <p>(617) 794-4554 | chris@penroserealty.com</p>
        </section>
                <section>
            <h1>Hobbies</h1>
            <br />
            <ul className={skillset3}>
            <li>Meditation</li>
            <li>Yoga</li>
            <li>Free-diving</li>
            <li>Probiotics</li>
            <li>Reading</li>
            <li>Art</li>
            <li>Animation movies</li>
            <li>Hiking</li>
            </ul>
        </section>
        </div>
    </Layout>
    );
}
