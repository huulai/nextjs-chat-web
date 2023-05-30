import { useEffect, useRef, useState } from "react";
import Tabs from "../components/Friends/Tabs";
import RequestsContainer from "../components/Friends/RequestsContainer";
import BlockedContainer from "../components/Friends/BlockedContainer";
import FriendsContainer from "../components/Friends/FriendsContainer";
import { useAppDispatch } from "../store/hooks";
import { getFriendsThunk } from "../store/slices/friend/friendThunk";

const FriendsPage = () => {
  const [tabSelected, setTabSelected] = useState("Friends");
  const dispatch = useAppDispatch();
  const dataFetchedRef = useRef(false);
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    setTimeout(() => {
      dispatch(getFriendsThunk());
    }, 50);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Tabs tabSelected={tabSelected} setTabSelected={setTabSelected} />
      {tabSelected === "Friends" && <FriendsContainer />}
      {tabSelected === "Requests" && <RequestsContainer />}
      {tabSelected === "Blocked" && <BlockedContainer />}
    </div>
  );
};

export default FriendsPage;
