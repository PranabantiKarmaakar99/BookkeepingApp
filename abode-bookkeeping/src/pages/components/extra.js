import React,{Component} from 'react';

import { useTable } from "react-table";


function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data
    });
  
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  


const Paymentdetailssummary = () => {

    const columns =  React.useMemo (
        () =>[
        "Name", "Projects", "Category", "Description", "Amount", "Bill",
        {  
            Header: 'Name',  
            accessor: 'name'  
           },{  
           Header: 'Projects',  
           accessor: 'projects'  
           },
           {  
            Header: 'Description ',  
            accessor: 'description'  
            },
            {  
                Header: 'Amount',  
                accessor: 'amount'  
                } ,
                {  
                    Header: 'Bill',  
                    accessor: 'bill'  
                    } 

    
      ],[])
    
      const data =  React.useMemo(
        () => [
        {
          Name: "PK",
          Projects: "TATA",
          Category: "Carpentary",
          Description: "lorem ipsum",
          Amount: 30000,
          Bill: "www.abc.com"
        },
        {
          Name: "MK",
          Projects: "Sanjeeva",
          Category: "False ceiling",
          Description: "lorem ipsum",
          Amount: 50000,
          Bill: "www.abc.com"
        },
        {
          Name: "MD",
          Projects: "Swan Court",
          Category: "Painting",
          Description: "lorem ipsum",
          Amount: 30000,
          Bill: "www.xyz.com"
        },
        {
          Name: "PK",
          Projects: "Ideal",
          Category: "Plumbing",
          Description: "lorem ipsum",
          Amount: 50000,
          Bill: "www.567.com"
        },
    
      ],[])

      const Data2 = [
        
          "PK",
           "TATA",
          "Carpentary",
           "lorem ipsum",
           30000,
           "www.abc.com"
        
      
    
      ]
  return (
    <div className="flex flex-col items-center justify-center">
       
    <h2>Payment Request Summary</h2>

    
   <div className='w-[300px] bg-red-200'> 
    
   <Table  
            data={data}  
            columns={columns}  
            
         />  


</div>
   
    
   
    
  
  


 </div>
  )
}

export default Paymentdetailssummary;