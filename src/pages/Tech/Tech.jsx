import { ApiProvider } from "../../contexts/ApiContext";
import { endPoint } from "../../services/apiEndPoints";

import GroupCard from "../../components/GroupCard/GroupCard";
export default function Tech() {
  return (
    <div className="tech">
      <ApiProvider url={endPoint["tech"]}>
        <GroupCard />
      </ApiProvider>
    </div>
  );
}
