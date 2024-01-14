import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
import toDoLogo from "/list-icon.svg";
import HeaderTitle from "./components/header";
import Form from "./components/form";
import TaskList from "./components/taskList";
import { fetchData } from "./utils/callApi";
import "./App.css";

function App() {
  const [data, setData] = useState([]);


  const handleGetData = async () => {
      try {
        const result = await fetchData('notes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => { handleGetData(); }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={toDoLogo} className="logo" alt="Vite logo" />
        </a>
        <HeaderTitle />
      </div>
      <Form onGetData={handleGetData}/>
      <TaskList dataList={data}/>
    </>
  );
}

export default App;
