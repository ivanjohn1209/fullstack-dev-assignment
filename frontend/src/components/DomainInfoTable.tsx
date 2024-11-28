import React from 'react';

interface DomainInfoTableProps {
  data: any;
}

const DomainInfoTable: React.FC<DomainInfoTableProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Domain Information</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {Object.keys(data).map((key) => (
                <th
                  key={key}
                  className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(data).map((value: any, idx) => (
                <td
                  key={idx}
                  className="border border-gray-300 px-4 py-2 text-sm sm:text-base"
                >
                  {value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DomainInfoTable;
