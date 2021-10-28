type Props = {
  userScore: UserScore[]
};

const LeaderboardTable: React.FC<Props> = (props) => {

  const formatTime = (timestamp: TimeStamp) => {
    let seconds = "";
    let minutes = "";
    let hours = "";
    if (timestamp.hours < 10) {
      hours = "0";
    }
    if (timestamp.minutes < 10) {
      minutes = "0";
    }
    if (timestamp.seconds < 10) {
      seconds = "0";
    }
    seconds += timestamp.seconds;
    minutes += timestamp.minutes;
    hours += timestamp.hours;

    return hours + ":" + minutes + ":" + seconds;
  }

  const tableRows = props.userScore.map((item, key) => {
    return (<tr key={key}>
      <th scope="row">{key + 1}</th>
      <td>{item.fullName}</td>
      <td>{item.score}</td>
      <td>{formatTime(item.timeCompleted)}</td>
    </tr>);
  })
  return (
    <div className="tableFixHead">
      <table className="table leaderboard-table">
        <thead className="table-header bg-primary leaderboard-head">
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
    </div>
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

interface TimeStamp {
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