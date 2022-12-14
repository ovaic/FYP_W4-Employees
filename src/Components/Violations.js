import React from 'react'
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Link,
} from 'react-router-dom';
import axios from 'axios'

export default function Violations() {

  const [data,setData] = useState([]);
  const [search, setSearch] = useState('');
  const [reload, setReload] = useState(false);
  
  useEffect(() => {
    let interval;
    const loadViolations = async () => {
      await axios.get('http://127.0.0.1:8000/violations/all-violations/')
      .then(response =>{
         setData(response.data)
        })
    }   

    loadViolations();
      // The logic of changing counter value to come soon.
    
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get('http://127.0.0.1:8000/violations/search-violations/'+search+'/')
    .then(response =>{
      var element = document.getElementById('showviolations')
      if(response.data.length > 0)
      {
        setData(response.data)
       //element.innerHtml = <ShowSearchResults/>
      }
      else if(response.data.length === 0){
        console.log("caco");
        setData([])
        element.innerHtml = <ShowError/>;

      }
       
       console.log(response.data)
      })
  }   
  const ShowError = () => {
    return(
      <>
      <h8>No Results Found</h8>
      </>
    )
  }
  const ShowSearchResults = () => {
    return(
      <>
      <table className='violationTable p-0'>
                    <tr>
                      <th>Activity</th>
                      <th>Person</th>
                      <th>Zone</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Date</th>
                      <th>Operations</th>                    
                    </tr> 
                    <ShowViolationData/>
        </table>
      </>
    )
  }
  console.log(data);
  const ShowViolationData = () => {
    return(
    <>
    
    {data.map((violation,i)=>{
        return(
          <tr key={i}>
                    <td>{violation.activity}</td>
                    <td>{violation.person!=null?violation.person:'Unknown'}</td>
                    <td>{violation.zone}</td>
                    <td>{violation.start_time}</td>
                    <td>{violation.end_time}</td>
                    <td>{violation.date}</td>
                    <td><Link to='/violationdetails'><img src='/icon.svg' height='27px'></img></Link></td>
           </tr>
          )})}            
    </>
    )
  } 
 console.log(ShowViolationData);
  return (
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'450px'}}>
            <div className="row p-0 m-0">
              <h1 className='col-2 topHeading'>
                Violations
              </h1>
            </div>
            <div className="row">
              <form className='px-4' onSubmit={handleSubmit}>
                <input type="text" className="form-control my-3" id="searchbar" placeholder='Search Users by Employee ID, CNIC, or Mobile Number' value={search} onChange={(e)=>setSearch(e.target.value)}/>
              </form>
            </div>
            <div className='row mx-2' id='showviolations'>
              <table className='violationTable p-0'>
                    <tr>
                      <th>Activity</th>
                      <th>Person</th>
                      <th>Zone</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Date</th>
                      <th>Operations</th>                    
                    </tr> 
                    {<ShowViolationData/>}
              </table>
            </div>
            
        </div>
  )
}


