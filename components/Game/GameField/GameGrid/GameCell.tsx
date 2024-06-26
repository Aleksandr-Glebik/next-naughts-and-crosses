interface Props {
  children?: React.ReactElement;
  onClick: () => void;
}

export default function GameCell({ children, onClick }: Props) {
  return (
    <button
      className="border border-slate-200 -ml-px -mt-px flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
