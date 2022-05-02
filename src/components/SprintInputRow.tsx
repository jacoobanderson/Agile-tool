import React, { useState } from 'react';

interface Row {
  task?: string;
  requirement?: string;
  testStatus?: string;
  estimatedTime?: string;
  actualTime?: string;
}

const SprintInputRow = () => {
  const [edit, setEdit] = useState<Boolean>(true);
  const [input, setInput] = useState<Row | null>(null);

  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  return (
    <tr className="border-2 border-solid border-red-500">
      {edit ? (
        <>
          <td>
            <input name="task" value={input?.task || ''} onChange={handleChange}></input>
          </td>
          <td>
            <input name="requirement" value={input?.requirement || ''} onChange={handleChange}></input>
          </td>
          <td>
            <input name="testStatus" value={input?.testStatus || ''} onChange={handleChange}></input>
          </td>
          <td>
            <input name="estimatedTime" value={input?.estimatedTime || ''} onChange={handleChange}></input>
          </td>
          <td>
            <input name="actualTime" value={input?.actualTime || ''} onChange={handleChange}></input>
          </td>
          <td>
            <button onClick={() => setEdit(!edit)}>Save</button>
            <button>Remove</button>
          </td>
        </>
      ) : (
        <>
          <td>
            <div>{input?.task}</div>
          </td>
          <td>
           <div>{input?.requirement}</div>
          </td>
          <td>
            <div>{input?.testStatus}</div>
          </td>
          <td>
            <div>{input?.estimatedTime}</div>
          </td>
          <td>
           <div>{input?.actualTime}</div>
          </td>
          <td>
            <button onClick={() => setEdit(!edit)}>Edit</button>
            <button>Remove</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default SprintInputRow;
