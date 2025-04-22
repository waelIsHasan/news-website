import Grid from "../../components/Grid/Grid";
import Block from "../../components/Block/Block";
import "./Home.css";
import { endPoint } from "../../services/apiEndPoints.js";
import { ApiProvider } from "../../contexts/ApiContext.js";
import { HeaderBlockProvider } from "../../contexts/HeaderBlockContext.js";
import { GroupBanner } from "../../components/Banner/Banner.jsx";
import CustomSwiper from "../../components/CutomSwiper/CutomSwiper.jsx";
export default function Home() {
  return (
    <div className="home">
      <ApiProvider url={endPoint["everything"]}>
        <Grid />
      </ApiProvider>

      <div className="f-block">
      <ApiProvider url={endPoint["sports"]}>
        <HeaderBlockProvider headerTheme={"doNotMiss"} color={"black"}>
          {/* this is to provide the block the right theme data from context */}
          <Block />
        </HeaderBlockProvider>
        <GroupBanner isVertical={true}></GroupBanner>
      </ApiProvider>
      </div>
      
      <ApiProvider url={endPoint["tech"]}>
        <GroupBanner />
      </ApiProvider>

      <ApiProvider url={endPoint["science"]}>
        <HeaderBlockProvider headerTheme={"toBeSmart"} color={"blue"}>
          <Block />
        </HeaderBlockProvider>
      </ApiProvider>

      <ApiProvider url={endPoint["general"]}>
        <CustomSwiper />
      </ApiProvider>
    </div>
  );
}
