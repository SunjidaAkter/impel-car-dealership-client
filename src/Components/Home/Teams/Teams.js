import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

import './Teams.css'

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('f.json')
            .then((res) => res.json())
            .then((data) => setTeams(data));
    }, []);
    return (
        <div className=" teams py-5">
            <h2 className="text-center pb-5">Our team of 2022</h2>
            <div className='teams-container'>

                {teams.map((team) =>
                    <Team
                        key={team._id}
                        team={team}
                    ></Team>
                )}


            </div>
        </div>
    );
};

export default Teams;