import React from 'react'

export default function RacerRow(props) {
    const racer = props.racer;
    return (
        <tr>
            <th>{racer.position}</th>
            <td>{racer.Driver.givenName}</td>
            <td>{racer.Driver.familyName}</td>
            <td>{racer.points}</td>
            <td>{racer.wins}</td>
            <td>{racer.Driver.nationality}</td>
            <td>{racer.Constructors[0].name}</td>
        </tr>
    )
}
