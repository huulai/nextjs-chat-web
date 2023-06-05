import Conversations from "../components/Home/Conversations";
import HomeListFriend from "../components/Home/HomeListFriend";
// import NoConversation from "../components/Home/NoConversation";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-grow">
      <HomeListFriend />
      <Conversations />
      {/* <NoConversation /> */}
    </div>
  );
};

export default HomePage;
