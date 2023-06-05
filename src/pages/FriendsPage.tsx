import { useState } from "react";
import Tabs from "../components/Friends/Tabs";
import RequestsContainer from "../components/Friends/RequestsContainer";
import FriendsContainer from "../components/Friends/FriendsContainer";

const FriendsPage = () => {
  const [tabSelected, setTabSelected] = useState("Friends");

  return (
    <div className="w-full flex flex-col">
      <Tabs tabSelected={tabSelected} setTabSelected={setTabSelected} />
      {tabSelected === "Friends" && <FriendsContainer />}
      {tabSelected === "Requests" && <RequestsContainer />}
    </div>
  );
};

export default FriendsPage;
