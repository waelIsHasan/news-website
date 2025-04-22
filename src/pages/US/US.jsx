import Grid from "../../components/Grid/Grid";
import { endPoint } from "../../services/apiEndPoints.js";
import { ApiProvider } from "../../contexts/ApiContext.js";
import GroupCard from "../../components/GroupCard/GroupCard.jsx";
export default function US() {
  return (
    <div className="us">
      <ApiProvider url={endPoint["general"]}>
        <Grid />
      </ApiProvider>

      <ApiProvider url={endPoint["health"]}>
        <GroupCard />
      </ApiProvider>
    </div>
  );
}
