import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
      <div className="widgetLarge">
       <h3 className="widgetLgTitle">Latest Transaction</h3>
       <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1492632736198-174776a820f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Gaurav Patil</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1492632736198-174776a820f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Gaurav Patil</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1492632736198-174776a820f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Gaurav Patil</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1492632736198-174776a820f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
             alt="" className="widgetLgImg" />
            <span className="widgetLgName">Gaurav Patil</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
       </table>
      </div>
  )
}
