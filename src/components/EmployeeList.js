import { useState } from 'react';
import TimeTracker from './TimeTracker';

const EmployeeList = ({ employees }) => {
  const [timeData, setTimeData] = useState(
    employees.reduce((acc, employee) => ({
      ...acc,
      [employee]: { hours: 0, isActive: false }
    }), {})
  );

  const updateEmployee = (employee, isActive) => {
    setTimeData(prev => ({
      ...prev,
      [employee]: {
        ...prev[employee],
        isActive
      }
    }));
  };

  const resetAll = () => {
    setTimeData(
      employees.reduce((acc, employee) => ({
        ...acc,
        [employee]: { hours: 0, isActive: false }
      }), {})
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-4 sm:p-6">
      <div className="bg-dark-100 rounded-xl shadow-xl p-4 sm:p-6">
        {employees.map(employee => (
          <TimeTracker
            key={employee}
            name={employee}
            data={timeData[employee]}
            onUpdate={updateEmployee}
          />
        ))}
        <button
          onClick={resetAll}
          className="w-full mt-4 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;