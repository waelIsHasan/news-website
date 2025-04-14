import Grid from "../../components/Grid/Grid";
import Block from "../../components/Block/Block";
import "./Home.css";
import { endPoint } from "../../services/apiEndPoints.js";
import { ApiProvider } from "../../contexts/ApiContext.js";
import { HeaderBlockProvider } from "../../contexts/HeaderBlockContext.js";
export default function Home() {
  return (
    <div className="home">
      <ApiProvider url={endPoint["general"]}>
        <Grid />
      </ApiProvider>
      <ApiProvider url={endPoint["sports"]}>
        <HeaderBlockProvider headerTheme={"doNotMiss"}>
          {/* this is to provide the block the right theme data from context */}
          <Block />
        </HeaderBlockProvider>
      </ApiProvider>
      <ApiProvider url={endPoint["entertainment"]}>
        <HeaderBlockProvider headerTheme={"toBeSmart"}>
          <Block />
        </HeaderBlockProvider>
      </ApiProvider>

    </div>
  );
}
