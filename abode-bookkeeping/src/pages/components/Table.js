import React from 'react'

const Table = () => {
  const Columns = [
    "Name", "Projects", "Category", "Description", "Amount", "Bill",

  ]

  const Data = [
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

  ]
  const Data2 = [
    
      "PK",
       "TATA",
      "Carpentary",
       "lorem ipsum",
       30000,
       "www.abc.com"
    
  

  ]
  const Data3 = [
    {
      Name: "PK",
      Projects: "TATA",
      Category: "Carpentary",
      Description: "lorem ipsum",
      Amount: 30000,
      Bill: "www.abc.com"
    }

  ]



  return (

    <div className="w-full" >
      <table className="table-fixed border w-full">
        
        
         {Columns.map((el,index)=>( <tr><th key={index} > {el} </th> </tr>))}
         
         
         {Data3.map((el,index)=>( <tr  key={index}>

          for (let i=0;i<Data3.length ; i++)
          
          { <th > {el[i].key} </th>
           <td > {el[i].value} </td> }
           
           </tr>))}
         
         
        

        


      </table>

    </div>
  )
}

export default Table


