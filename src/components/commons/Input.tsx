const Input = ({
  children,
  value,
  handleOnChange,
  placeholder,
  type,
  name,
}: {
  children: React.ReactNode | undefined;
  value: string;
  handleOnChange: (payload: string) => void;
  placeholder: string;
  type?: string;
  name: string;
}) => {
  return (
    <label className="relative block border border-primary rounded-3xl p-1 pl-5 w-full mt-5 bg-white">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        {children}
      </span>
      <input
        className="placeholder:text-slate-400 block bg-transparent rounded-xl w-full py-1 pl-5 pr-3 focus:outline-none focus:border-none focus:ring-0 sm:text-sm"
        placeholder={placeholder}
        type={type ? type : "text"}
        name={name}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </label>
  );
};

export default Input;
