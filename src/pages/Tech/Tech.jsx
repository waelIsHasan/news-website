import CustomSwiper from "../../components/CutomSwiper/CutomSwiper";
import { ApiProvider } from "../../contexts/ApiContext";
import { endPoint } from "../../services/apiEndPoints";

export default function Tech() {
  return (
    <div className="tech">
      <ApiProvider url={endPoint["tech"]}>
        <CustomSwiper />
      </ApiProvider>
    </div>
  );
}
