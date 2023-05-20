import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import "./user.css"
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit user</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.z1389yIV9BKNOTvh7BWDDwHaLH&pid=Api&rs=1&c=1&qlt=95&w=77&h=116"
                            alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Sherlock Holmes</span>
                            <span className="userShowUserTitle">Software Engineer</span>

                        </div>

                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">sheriholmes99</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">12.5.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">7020791480</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">sheriholmes@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Pune, Maharashtra</span>
                        </div>
                            
                    </div>

                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input type="text"
                                placeholder="sheriholmes99"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text"
                                placeholder="Sherlock Holmes"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text"
                                placeholder="7020791480"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                placeholder="sheriholmes@gmail.com"
                                className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label> 
                                <input type="text"
                                placeholder="Pune, Maharashtra"
                                className="userUpdateInput" />
                            </div>
                        </div>
                        
                        <div className="userUpdateright">
                            <div className="userUpdateUpload">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.z1389yIV9BKNOTvh7BWDDwHaLH&pid=Api&rs=1&c=1&qlt=95&w=77&h=116" 
                                alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateicon"/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}}  />
                            </div>
                             <button className="userUpdateButton">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
