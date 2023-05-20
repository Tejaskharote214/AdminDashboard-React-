import { DeleteOutline } from "@mui/icons-material";
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

  const [data, setData] = useState(userRows)

  const handleDelete=(id)=>{
    setData(data.filter((item)=> item.id !== id));
  };
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user', headerName: 'User', width: 160, renderCell: (params) => {
        return (
          <div className="userListuser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'EmailID', width: 160 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Value',
      width: 190,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: '160',
      renderCell: (params) => {
        return (
          <>

            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete"
              onClick={() => handleDelete(params.row.id)} />

          </>
        )
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}
