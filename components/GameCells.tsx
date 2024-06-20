interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export default function GameCells({ children }: Props) {
  return (
    <div className="w-[600px] h-[600px] flex flex-wrap justify-start items-start">{children}</div>
  );
}
