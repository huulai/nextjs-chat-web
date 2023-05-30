const Avatar = ({
  imgUrl,
  name,
  isOnline,
}: {
  imgUrl: string;
  name: string;
  isOnline?: boolean;
}) => {
  return (
    <div className="inline-block rounded-full relative">
      <img src={imgUrl} alt="chevron-left" width={40} height={40} />
      {isOnline && (
        <p className="absolute w-2 h-2 rounded-full bg-success shadow-sm right-0 bottom-4 z-10"></p>
      )}
      <p className="text-center text-xs">{name}</p>
    </div>
  );
};

export default Avatar;
