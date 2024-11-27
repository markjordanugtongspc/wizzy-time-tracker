import EmployeeList from './components/EmployeeList';

function App() {
  const employees = [
    'John Smith',
    'Sarah Johnson',
    'Michael Brown',
    'Emily Davis'
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-4 sm:py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center text-gray-100">
        Ellry Cafe Time Tracker
      </h2>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;