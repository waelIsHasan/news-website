import CustomSwiper from "../../components/CutomSwiper/CutomSwiper";
import { endPoint } from "../../services/apiEndPoints.js";
import { ApiProvider } from "../../contexts/ApiContext.js";
import GroupCard from "../../components/GroupCard/GroupCard.jsx";
export default function Science() {
  return (
    <div className="science">
      <ApiProvider url={endPoint["general"]}>
        <CustomSwiper />
      </ApiProvider>

      <ApiProvider url={endPoint["health"]}>
        <GroupCard />
      </ApiProvider>
    </div>
  );
}
