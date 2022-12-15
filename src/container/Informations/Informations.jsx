import React, { useState, useEffect } from 'react';
import './Informations.scss'
import { AppWrapp } from '../../wrapper'

import { urlFor, client } from "../../client";

const Information = () => {
    const [informations, setInformations] = useState([]);

    useEffect(() => {
        const querySecond = '*[_type == "informations"]';

        client.fetch(querySecond).then((data) => {
            setInformations(data);
        });

    }, []);

        return (
            <>
                <div className="app__informations-wrapper">
                    <div className="app__informations">
                        {informations.map((information, index) => (
                            <ul>
                                <li key={information.title + index}><strong>{information.title}</strong><a href={information.link}>{information.description}</a></li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="app__informations-graph">
                    <h1>Experience</h1>
                    <div className="graph-experience">
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-right">11.2015</div>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>Work practice</h4>
                            <p className="p-text">Practical learning of specialization E.12, E.13, E.14</p>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>Student internships - 960 hours at the workplace</h4>
                            <p className="p-text">IT service, marketing, sales</p>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-left">2021-2022</div>
                        </div>
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-right">2018 to now</div>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>Handel Det. Art. Przem. i Spoż. Gołąb Stanisław</h4>
                            <p className="p-text">IT service, marketing, sales</p>
                        </div>
                    </div>
                    <h1>Education</h1>
                    <div className="graph-education">
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-right">2013 to 2017</div>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>Ignacego Mościckiego Secondary School in Tarnów/Mościce</h4>
                            <p className="p-text">Theoretical learning of specialization E.12, E.13, E.14</p>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>Wyższa Szkoła Biznesu - National Louis University</h4>
                            <p className="p-text">Degree course: Management | Specialty: Brand and Public Relations Specialist</p>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-left">2019 to 2022</div>
                        </div>
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-right">07.2022 to 10.2022</div>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>Web Developer and JavaScript course on Udemy</h4>
                            <p className="p-text">Creating websites and programming in JavaScript</p>
                        </div>
                        <div className="timeline__component timeline__component-background">
                            <h4>MegaK course</h4>
                            <p className="p-text">The MegaK course includes JavaScript, Node.JS, Express.JS, MYSQL & MongoDB, Typescript,
                                React, NestJS.</p>
                        </div>
                        <div className="timeline__middle">
                            <div className="timeline__point"></div>
                        </div>
                        <div className="timeline__component">
                            <div className="timeline__date timeline__date-left">10.2022 to 12.2023</div>
                        </div>
                    </div>
                </div>
            </>

    );
};

export default AppWrapp(Information, 'information');
