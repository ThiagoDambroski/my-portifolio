function Table({ data, dataType }) {
  const headers =
    dataType === "methods"
      ? ["Method", "URL", "Description"]
      : ["Type", "Property Name", "Description"];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={`${dataType}-${index}`}>
            <td>{dataType === "methods" ? item.method : item.type}</td>
            <td>
              {dataType === "methods" ? item.URL : item.propertieName}
            </td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
