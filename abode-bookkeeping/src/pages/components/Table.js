import React from 'react'

const Table = ({data}) => {
  return (
    <table className="table-fixed border">
    <thead>
      <tr className='border text-xs'>
        <th>Name </th>
        <th>Project</th>
        <th>Category</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Bill</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item,index) => (
        <tr key={index}>
          <td>{item.first}</td>
          <td>{item.last}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table


