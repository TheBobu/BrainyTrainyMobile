import { SetStateAction, useState } from "react";
import Card from "../Card";
import ToDoChart from "../ToDoChart";
import ToDoFilter from "../ToDoFilter";
import ToDoList from "../ToDoList";

type Props = {
    items:{
        id: string;
        title: string;
        amount: number;
        date: Date;
    }[],

}

const ToDos = (props:Props) => {
    const [filteredYear, setFilteredYear] = useState<string>("2020");
  
    const filterChangeHandler = (selectedYear: string) => {
      setFilteredYear(selectedYear);
    };
  
    const filteredExpenses = props.items.filter((toDo) => {
      return toDo.date.getFullYear().toString() === filteredYear; //returns true or false
    });
    return (
      <div>
        <Card className="toDos">
          <ToDoFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ToDoChart toDos={filteredExpenses} />
          <ToDoList items={filteredExpenses} />
        </Card>
      </div>
    );
  };

  export default ToDos;