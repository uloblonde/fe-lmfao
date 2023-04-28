import { useMutation, useQuery } from "react-query";
import { API } from "../config/Api";
import { useState } from "react";

export default function Table() {

    const count = 0

  const {data: transaction} = useQuery('transCache', async () =>{
    const response = await API.get('/caritrans')
    return response.data
  })
  const Statuspayment = ({ status }) => {
    switch (status) {
        case "pending":
            return <p className='text-warning'>Pending</p>
        case "success":
            return <span className='text-success'>Success</span>
        case "failed":
            return <span className='text-danger'>Failed</span>
        default: return
    }
}
  return (
    <div className="bg-black py-2">
       <style>{'body { background-color: black; }'}</style>
      <div className="container">
        <h3 className="text-light pt-5" >Incoming Transaction</h3>
        <div className="pt-4">
      <table class="table table-dark table-hover">
        <thead>
          <tr className="text-danger">
            <th scope="col">No</th>
            <th scope="col">Users</th>
            <th scope="col">Remaining Active</th>
            <th scope="col">Status User</th>
            <th scope="col">Status Payment</th>
          </tr>
        </thead>
        <tbody>
          {transaction?.map((item,i)=>(
          <tr  key={i} className="table-active">
            <th scope="row">{i + 1}</th>
            <td>{item.user.fullName}</td>
            <td>{item.endDate.split("T")[0]}</td>
            <td>{item?.user.subscribe ? "Subscribe" : "not subscribed"}</td>
            <td>{<Statuspayment status={item.status} />}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
  
}
