import ContentTitle from "../components/common/ContentTitle/ContentTitle";
import PreSale from './../components/common/PreSale/PreSale';
import BlanceInfo from './../components/dashboard/BlanceInfo';
import DashboardSlider from './../components/dashboard/DashboardSlider';
import Features from './../components/dashboard/Features';
import dashboardIcon from "../images/dashboard.PNG"

function Dashboard() {


    return (<div>
            <ContentTitle imgSrc={dashboardIcon} text="DASHBOARD" />
            <PreSale />
            <div className="mt-16">
                <BlanceInfo />
                <DashboardSlider />
                <Features />
            </div>
        </div>

    );
}

export default Dashboard;
