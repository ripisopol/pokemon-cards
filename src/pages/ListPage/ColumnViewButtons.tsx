import React from 'react';
import { BsLayoutTextSidebar, BsColumns } from 'react-icons/bs';

interface ColumnViewProps {
  columnView: number;
  onColumnViewChange: (columns: number) => void;
}

const ColumnViewButtons: React.FC<ColumnViewProps> = ({ columnView, onColumnViewChange }) => {
  return (
    <div className="flex justify-end space-x-2 p-2">
      <button
        className={`p-2 rounded-full ${columnView === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => onColumnViewChange(1)}
      >
        <BsLayoutTextSidebar size={20} />
      </button>
      <button
        className={`p-2 rounded-full ${columnView === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={() => onColumnViewChange(2)}
      >
        <BsColumns size={20} />
      </button>
    </div>
  );
};

export default ColumnViewButtons;
