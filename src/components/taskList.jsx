import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/callApi';

const TaskList = ({dataList}) => {

  return (
    <div>
      <ol>
        {dataList.map((note) => (
          <li key={note.id}>{note.text}</li> 
        ))}
      </ol>
    </div>
  );
};

export default TaskList;

