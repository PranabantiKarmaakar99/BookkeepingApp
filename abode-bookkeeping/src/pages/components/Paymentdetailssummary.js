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
                     if (cell.column.id === 'Edit') {
                        // Render a link for the "Edit" column
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border p-2 text-gray-900"
                          >
                            <Link href="/components/Accountadd" target="_blank" rel="noopener noreferrer">
                              Edit
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

const Paymentdetailssummary = () => {
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
        Header: 'Category',
        accessor: 'Category',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
      {
        Header: 'Amount',
        accessor: 'Amount',
      },
      {
        Header: 'Bill',
        accessor: 'Bill',
      },
      {
        Header: 'Edit',
        accessor: 'Edit',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        Name: 'PK',
        Projects: 'TATA',
        Category: 'Carpentery',
        Description: 'lorem ipsum',
        Amount: 30000,
        Bill: 'www.abc.com',
        Edit :"Edit"
      },
      {
        Name: 'MK',
        Projects: 'Sanjeeva',
        Category: 'False ceiling',
        Description: 'lorem ipsum',
        Amount: 50000,
        Bill: 'www.abc.com',
        Edit :"Edit"
      },
      {
        Name: 'MD',
        Projects: 'Swan Court',
        Category: 'Painting',
        Description: 'lorem ipsum',
        Amount: 30000,
        Bill: 'www.xyz.com',
        Edit :"Edit"
      },
      {
        Name: 'PK',
        Projects: 'Ideal',
        Category: 'Plumbing',
        Description: 'lorem ipsum',
        Amount: 50000,
        Bill: 'www.567.com',
        Edit :"Edit"
      },
    ],
    []
  );

  return (

    <div className=' h-full w-full flex-col items-center justify-center mb-20 '>
    <Navbar />
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h2 className="my-10 text-2xl font-semibold">Payment Request Summary</h2>
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

export default Paymentdetailssummary;


