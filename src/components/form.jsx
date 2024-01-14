import { useState } from "react";
import { fetchData } from "../utils/callApi";
import { nanoid } from "nanoid";

const Form = ({onGetData}) => {
  const [task, setTask] = useState({
    id: nanoid(5),
    text:'',
    date:new Date(),
  });

  const handleDataInput=(e)=>{
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task.text)
      try {
        const result = await fetchData('notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    onGetData()
  }
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Task..." 
        name="text" 
        value={task.text} 
        onChange={handleDataInput}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default Form;
