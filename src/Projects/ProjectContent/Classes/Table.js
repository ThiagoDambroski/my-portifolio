import React from 'react'

function Table({data,dataType}) {

  const headers = 
      dataType === "methods"
      ? ["Method", "URL", "Description"]
      : ["Type", "Property Name", "Description"];

  return (
    <table>
        <tbody>
            <tr>
              {headers.map((headers,index) => (
                <th key={index}>{headers}</th>
              ))}
            </tr>
            {data.map((item, subIndex) => (
                <tr key={subIndex}>
                  <td>{dataType == "methods" ? item.method : item.type}</td>
                  <td>{dataType == "methods" ? item.URL : item.propertieName}</td>
                  <td>{item.description}</td>
                </tr>
            ))}
        </tbody>
              </table>
  )
}

export default Table