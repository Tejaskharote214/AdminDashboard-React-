import { CurrencyRupee, Equalizer, Feedback, LineStyle, Mail, ManageAccounts, Message, Person, Report, Storefront, Timeline, TrendingUp } from '@mui/icons-material'
import './sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analyatics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                        <li className="sidebarListItem active">
                            <Person className='sidebarIcon' />
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon' />
                            Products 
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <CurrencyRupee className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Mail className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <ManageAccounts className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
