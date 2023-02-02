import {useEffect,useState} from 'react';
 
const App = () => {
   
  const[record,setRecord] = useState([])
  const [modeldata,setModeldata] = useState({
     id:'',
     userName:'',
     username:'',
     email:'',
     website:''
  })
 
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
 
   useEffect(() => {
      getData();
   },[])
   
    const showDetail = (id) =>
    {
      
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setModeldata(res))
    }
 
 
    return (
    <div class="container mt-2">
        <div class="row mt-2 ">
            <div class="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div class="col-lg-11 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               
              </h5>
                <div class=" mt-5">
                    <table class="table table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                          {record.map((names,index)=>
                           <tr key={index}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td>{names.email}</td>
                              <td>{names.phone}</td>
                              <td><button class="btn btn-primary" onClick={(e)=>showDetail(names.id)} data-toggle="modal" data-target="#myModal">View Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
 
 
{/* 
 Model Box  */}
 
      <div class="modal" id="myModal">
        <div class="modal-dialog" style={{width:"700px"}}>
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Row No : {modeldata.id}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
             
            <div class="modal-body">
            <table class="table table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>Comapny Name</th>
                                <th>Comapny CatchPhrase</th>
                                <th>Company Bs</th>
                                <th>Address</th>
                                <th>Website</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{modeldata.company.name}</td>
                              <td>{modeldata.company.catchPhrase}</td>
                              <td>{modeldata.company.bs}</td>
                              <td>{modeldata.address.city}</td>
                              <td>{modeldata.website}</td>
                               
                           </tr>
                          
                        </tbody>
                    </table>
            </div>
             
             
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
             
          </div>
        </div>
      </div>
 
    </div>
    )
}
 
 
export default App
