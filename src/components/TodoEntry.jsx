import { useState } from "react";
import style from "./TodoEntry.module.css";
import { IoMdAddCircle } from "react-icons/io";

function TodoEntry({ handleNewItem,handleWarning }) {
  const [itemValue, setitemVal] = useState("");
  const [dueDate, setdueDate] = useState("");
  // const [warning,setwarning]=useState("");


  const handleOnNameChange = (event) => {
    setitemVal(event.target.value);
  };
  const handleOnDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleItem=()=>{
    if(itemValue==="" && dueDate===""){
      handleWarning("Please Enter Todo and Date");
    }
    else if(itemValue===""){
      handleWarning("Please Enter Todo");
    }
    else if(dueDate===""){
      handleWarning("Please Enter Date");
    }
    else{
      handleNewItem(itemValue,dueDate)
      setitemVal("")
      setdueDate("")
    }
  }

  return (
    <div className={`${style.rkRow} row`}>
      <div className="col-6">
        <input type="text" placeholder="Enter "value={itemValue} onChange={handleOnNameChange} />
      </div>

      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleOnDateChange} />
      </div>

      <div className="col-2">
        <button
          type="button"
          className={`btn btn-success ${style.rkButton}`}
          onClick={handleItem}
        >
          <IoMdAddCircle/>
        </button>
      </div>
    </div>
  );
}

export default TodoEntry;
