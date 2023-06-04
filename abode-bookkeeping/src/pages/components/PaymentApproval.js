import React from 'react';
import { useTable } from 'react-table';
import Link from 'next/link';
import Navbar from "./Navbar";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className=" border-2 bg-stone-100 w-[300px] h-full shadow-xs text-xs ">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className='border-2 bg-green-200 h-14 text-sm'>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className='border-2 '>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className='border-2 text-center'>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}  className='border-2 ' >
              {row.cells.map(cell => {
                     if (cell.column.id === 'Approval') {
                        // Render a link for the "Edit" column
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border p-2 text-gray-900"
                          >
                            <div >
       
        <div className="mt-2">
          <select id="project" name="project" autocomplete="project-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>Approve</option>
            <option>Reject</option>
       
          </select>
        
        </div>
        </div>

                          </td>
                        );
                      }

                      else if (cell.column.id === 'Details') {

                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border p-2 text-gray-900 font-semibold"
                          >
                            <Link href="/components/Paymentdetailssummary" target="_blank" rel="noopener noreferrer">
                              Details
                            </Link>
                          </td>
                        );

                      }

                return <td {...cell.getCellProps()} className='border-2 '>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const PaymentApproval = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'Name',
      },
      {
        Header: 'Projects',
        accessor: 'Projects',
      },
   
   
      {
        Header: 'Amount',
        accessor: 'Amount',
      },
      {
        Header: 'Details',
        accessor: 'Details',
      },
   
      {
        Header: 'Approval',
        accessor: 'Approval',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        Name: 'PK',
        Projects: 'TATA',
        
        
        Amount: 30000,
        Details: "Details",
        
        Approval :"Approve"
      },
      {
        Name: 'MK',
        Projects: 'Sanjeeva',
       
        
        Amount: 50000,
        Details: "Details",
      
        Approval :"Approve"
      },
      {
        Name: 'MD',
        Projects: 'Swan Court',
        Category: 'Painting',
        
        Amount: 30000,
        Details: "Details",
       
       
      },
      {
        Name: 'PK',
        Projects: 'Ideal',
       
        
        Amount: 50000,
        Details: "Details",
        
        
      },
    ],
    []
  );

  return (

    <div className=' h-full w-full flex-col items-center justify-center mb-20 '>
    <Navbar />
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h2 className="my-10 text-2xl font-semibold">Payment Approval</h2>
      <div className="w-4/5 h-2/3 my-10 mx-2 flex items-center justify-start overflow-scroll ">
        <Table
        className=" border "
        
        
        data={data} columns={columns} />
      </div>
      <div className='flex w-4/5  items-start justify-start'>
      <Link href="/components/Feedback1" target="_blank" className='px-5 py-2 rounded-md bg-green-200 text-stone-500 text-lg
        hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 '> CONFIRM </Link>
      </div>
    </div>
    </div>

  );
};

export default PaymentApproval;


