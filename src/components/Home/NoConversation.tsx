const NoConversation = () => {
  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="text-center">
        <h5 className="font-bold text-xl">No Conversations</h5>
        <p className="text-xs">
          Add some friends and start chatting with them.
        </p>
        <p className="text-xs">Your conversations will show up here</p>
        <button className="btn-primary mt-5">Add Friends</button>
      </div>
    </div>
  );
};

export default NoConversation;
