import { useState } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

const TimeTracker = ({ name, data, onUpdate }) => {
  const [startTime, setStartTime] = useState(null);
  const [hours, setHours] = useState(0);
  const [lastAction, setLastAction] = useState(null);

  const handleToggle = () => {
    const now = new Date();
    setLastAction(now);

    if (!data.isActive) {
      setStartTime(now);
    } else {
      const worked = (now - startTime) / (1000 * 60 * 60);
      setHours(prev => prev + worked);
      setStartTime(null);
    }
    
    onUpdate(name, !data.isActive);
  };

  const formatTime = (time) => {
    if (!time) return '';
    const manilaTime = toZonedTime(time, 'Asia/Manila');
    return format(manilaTime, 'MM/dd/yyyy hh:mm:ss aa');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-dark-200 rounded-lg mb-4">
      <div className="flex-1 mb-4 sm:mb-0">
        <h3 className="text-lg sm:text-xl text-gray-100">{name}</h3>
        <p className={data.isActive ? 'text-emerald-400' : 'text-rose-400'}>
          {data.isActive ? '● Active' : '○ Inactive'}
        </p>
        {lastAction && (
          <p className="text-gray-400">Last action: {formatTime(lastAction)}</p>
        )}
        <p className="text-gray-400">Total hours: {hours.toFixed(2)}</p>
      </div>
      <button
        onClick={handleToggle}
        className={`w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg ${
          data.isActive 
            ? 'bg-rose-500 hover:bg-rose-600' 
            : 'bg-emerald-500 hover:bg-emerald-600'
        } text-white transition-all duration-200`}
      >
        {data.isActive ? 'Clock Out' : 'Clock In'}
      </button>
    </div>
  );
};

export default TimeTracker; 