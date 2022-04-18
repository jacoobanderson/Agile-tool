import SprintInputRow from "../components/SprintInputRow";

const SprintBacklog = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-gray-800 text-gray-500">
          <tr>
            <th className="rounded-lg p-2">Task</th>
            <th className="rounded-lg p-2">Requirement</th>
            <th className="rounded-lg p-2">Test Status</th>
            <th className="rounded-lg p-2">Estimated Time</th>
            <th className="rounded-lg p-2">Actual Time</th>
          </tr>
        </thead>
        <tbody>
            <SprintInputRow />
        </tbody>
      </table>
    </div>
  );
};

export default SprintBacklog;
