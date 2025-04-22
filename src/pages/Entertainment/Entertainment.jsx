import { ApiProvider } from "../../contexts/ApiContext";
import { endPoint } from "../../services/apiEndPoints";

import GroupCard from "../../components/GroupCard/GroupCard";
export default function Entertainment(){
    return(
        <div className="entertainment">
                <ApiProvider url={endPoint["entertainment"]}>
                     <GroupCard />
                   </ApiProvider>
        </div>
    )
}