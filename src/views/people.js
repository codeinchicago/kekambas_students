import React, { Component } from 'react';

class LocalFileRead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }
    }

    componentDidMount() {
        fetch("https://kekambas-bs.herokuapp.com/kekambas.json").then((res) => res.json())
            .then((data) => {
                console.log(data)

                this.setState({ employee: JSON.stringify(data) }, () => {
                    alert(this.state.hugeText);
                });
            })
    }
    render() {
        const emp = this.state.employee
        return (<div >
            <ul>
                {emp.map((record, i) => <li key={i}>{record.id} - {record.firstName} {record.firstName}</li>)}
            </ul>
        </div>
        );
    }
}

// OLD FUNCTION COMPONENT - DOES SAME THING AS CLASS COMPONENT ABOVE
// export default function RacerTable(props) {
//     let headers = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];
//     return (
//         <>
//             <h1 className='text-center mt-5'>Driver Standings</h1>
//             <RacerForm handleFormSubmit={props.handleFormSubmit} />
//             <table className='table table-primary table-striped'>
//                 <thead>
//                     <tr>
//                         {headers.map((elem,idx) => <th key={idx}>{elem}</th>)}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.racers.map((racer, idx) => <RacerRow racer={racer} key={idx} />)}
//                 </tbody>
//             </table>
//         </>
//     )
// }
