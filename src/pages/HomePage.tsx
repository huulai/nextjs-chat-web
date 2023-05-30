import Conversations from "../components/Home/Conversations";
// import NoConversation from "../components/Home/NoConversation";
import Avatar from "../components/commons/Avatar";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-grow">
      <div className="whitespace-nowrap overflow-scroll">
        {[
          "lai1",
          "lai1",
          "lai1",
          "lai1",
          "lai1",
          "lai1",
          "lai1",
          "lai1",
          "lai1",
          "lai1",
        ].map((el, idx) => (
          <div className="inline-block mr-4" key={idx}>
            <Avatar imgUrl={`/avatar/girl.png`} name={el} />
          </div>
        ))}
      </div>
      <Conversations />
      {/* <NoConversation /> */}
    </div>
  );
};

export default HomePage;
