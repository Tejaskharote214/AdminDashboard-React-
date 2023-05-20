import Charts from "../../components/charts/Charts"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Charts data={userData} title="User Analytics" grid datakey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
