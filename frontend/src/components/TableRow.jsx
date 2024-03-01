

const TableRow = ({customer,index}) => {

    console.log(customer,index)
    // const customers = {
    //     "sno": 1,
    //     "name": "Praven",
    //     "age": 20,
    //     "phone": "538423842",
    //     "location": "unknown",
    //     "date": null,
    //     "time": null
    //     }

  return (

    <tr  >
      <td>{customer.sno}</td>
      <td>{customer.name}</td>
      <td>{customer.age}</td>
      <td>{customer.phone}</td>
      <td>{customer.location}</td>
      <td>{customer.date}</td>
      <td>{customer.time}</td>
    </tr>
  )
}

export default TableRow
