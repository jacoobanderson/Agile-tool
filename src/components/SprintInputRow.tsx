import React from "react";

type rowProps = {
  newRow: (row: React.SetStateAction<any>) => void;
};


const SprintInputRow = (newRow: rowProps) => {

    
    const addRow = () => {
        newRow.newRow({
            task: 'Works',
            requirement: 'Works',
            test: 'Works',
            estimate: 'Works',
            actual: 'Works'
        })
    }
  return (
    <tr className="border-2 border-solid border-red-500">
      <td>
        <textarea></textarea>
      </td>
      <td>
        <textarea></textarea>
      </td>
      <td>
        <input></input>
      </td>
      <td>
        <input></input>
      </td>
      <td>
        <input></input>
      </td>
      <button onClick={addRow} className="border-solid border-2 border-red-500" type="submit">
        Submit
      </button>
    </tr>
  );
};

export default SprintInputRow;
