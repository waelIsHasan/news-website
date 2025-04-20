import CustomSwiper from "../../components/CutomSwiper/CutomSwiper";
import { ApiProvider } from "../../contexts/ApiContext";
import { endPoint } from "../../services/apiEndPoints";
import { HeaderBlockProvider } from "../../contexts/HeaderBlockContext";
import Block from "../../components/Block/Block";
export default function Tech() {
  return (
    <div className="tech">
      <ApiProvider url={endPoint["tech"]}>
        <CustomSwiper />
      </ApiProvider>

      <ApiProvider url={endPoint["sports"]}>
        <HeaderBlockProvider headerTheme={"doNotMiss"} color={'black'}>
          {/* this is to provide the block the right theme data from context */}
          <Block isList={true}/>
        </HeaderBlockProvider>
      </ApiProvider>
    </div>
  );
}
