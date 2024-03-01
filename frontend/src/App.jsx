import { useEffect, useState } from 'react';
import './App.css';


import DataTable from 'react-data-table-component';




function App() {

  const [customers, setCustomers] = useState([]);

  const [records, setRecords] = useState()


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('api/customer');
      const data = await res.json();
      setCustomers(data);
      setRecords(data)
    }
    fetchData();
  }, [])

  const columns = [
    {
      name: 'S.No.',
      selector: row => row.sno,
      sortable: true,
    },
    {
      name: 'Customer Name',
      selector: row => row.name
    },
    {
      name: 'Age',
      selector: row => row.age
    },
    {
      name: 'Phone No.',
      selector: row => row.phone
    },
    {
      name: 'Location',
      selector: row => row.location
    },
    {
      name: 'Date',
      selector: row => row.date
    },
    {
      name: 'Time',
      selector: row => row.time
    },
  ]



  const handleSearch = (e) => {
    const searchValue = e.target.value;
    const newData = customers.filter((val) => {
      
      if (val.age == searchValue) {
        return val.age
      }
      if (val.phone == searchValue) {
        return val.phone
      }
      if(val.location==searchValue){
        return val.location;
      }

      if (val.date == searchValue) {
        return val.date
      }
      if (val.time == searchValue) {
        return val.time
      }


      return val.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    setRecords(newData)
  }



  return (
    <div className="container">
      <div className='search-container' >
        <input type="text" placeholder='search...' onChange={handleSearch} />
      </div>
      <DataTable
        columns={columns}
        data={records}
        fixedHeader
        pagination
        fixedHeaderScrollHeight="300px"
      />
    </div>
  )


}

export default App
