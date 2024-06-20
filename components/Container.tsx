interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export default function Container({ children }: Props) {
  return (
    <div className="w-full max-w-[768px] border-2 border-solid border-green-500 rounded-3xl bg-white flex flex-col justify-start items-center gap-[20px] p-[30px]">
      {children}
    </div>
  );
}
