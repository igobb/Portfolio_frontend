import React, { useState, useEffect } from 'react';
import './Informations.scss'

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
        <div className="app__informations-wrapper">
            <div className="app__informations">
                {informations.map((information, index) => (
                    <ul>
                        <li key={information.title + index}><strong>{information.title}</strong><a href={information.link}>{information.description}</a></li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Information;
