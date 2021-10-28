type Props = {
  userScore: UserScore[]
};

const LeaderboardTable: React.FC<Props> = (props) => {
  const tableRows=props.userScore.map((item,key) =>{
      return ( <tr key={key}>
        <th scope="row">{key}</th>
        <td>{item.fullName}</td>
        <td>{item.score}</td>
        <td>{item.timeCompleted.hours}:{item.timeCompleted.minutes}:{item.timeCompleted.seconds}</td>
      </tr>);
  } )
    return (
    <>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Score</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
         {tableRows}
        </tbody>
      </table>
    </>
  );
};

export default LeaderboardTable;

export interface UserScore {
  fullName: string;
  score: number;
  timeCompleted: {
    ticks: number;
    days: number;
    hours: number;
    milliseconds: number;
    minutes: number;
    seconds: number;
    totalDays: number;
    totalHours: number;
    totalMilliseconds: number;
    totalMinutes: number;
    totalSeconds: number;
  };
}
