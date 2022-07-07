import React from 'react'
import RacerForm from '../components/RacerForm';
import RacerRow from '../components/RacerRow';

export default class RacerTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            racers: [],
            
            
        }
    };

    componentDidMount(){
        fetch("https://kekambas-bs.herokuapp.com/kekambas.json").then((res) => res.json())
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({ racer: JSON.stringify(data) }, () => {
                alert(this.state.hugeText);)
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState, this.state)
        if (prevState.round !== this.state.round || prevState.season !== this.state.season){
            fetch(`https://ergast.com/api/f1/${this.state.season}/${this.state.round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                this.setState({racers : racerStandings})
            })
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const newSeason = event.target.season.value;
        const newRound = event.target.round.value;
        this.setState({season: newSeason, round: newRound});
    }


    render(){
        let headers = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];
        return (
            <>
                <h1 className='text-center mt-5'>Driver Standings</h1>
                <RacerForm handleFormSubmit={this.handleFormSubmit} />
                <table className='table table-primary table-striped'>
                    <thead>
                        <tr>
                            {headers.map((elem,idx) => <th key={idx}>{elem}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.racers.map((racer, idx) => <RacerRow racer={racer} key={idx} />)}
                    </tbody>
                </table>
            </>
        )
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
