const Tabs = ({
  tabSelected,
  setTabSelected,
}: {
  tabSelected: string;
  setTabSelected: (payload: string) => void;
}) => {
  return (
    <div className="flex justify-around flex-row h-10 w-full">
      <button
        onClick={() => setTabSelected("Friends")}
        className={`tab ${tabSelected === "Friends" ? "is-active" : ""}`}
      >
        Friends
      </button>
      <button
        onClick={() => setTabSelected("Requests")}
        className={`tab ${tabSelected === "Requests" ? "is-active" : ""}`}
      >
        Requests
      </button>
    </div>
  );
};

export default Tabs;
