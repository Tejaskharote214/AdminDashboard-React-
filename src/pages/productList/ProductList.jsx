import "./productList.css"
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product', headerName: 'Product', width: 160, renderCell: (params) => {
                return (
                    <div className="productListproduct">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 160 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 190,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: '160',
            renderCell: (params) => {
                return (
                    <>

                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete"
                            onClick={() => handleDelete(params.row.id)} />

                    </>
                )
            }
        }
    ];
    return (
        <div className="productList">
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
