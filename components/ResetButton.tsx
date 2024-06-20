interface Props {
  onClick: () => void;
}

export default function ResetButton({ onClick }: Props) {
  return (
    <button
      type="button"
      className="bg-transparent border-2 border-solid border-black rounded-md px-3 py-2 text-lg transition-all duration-300 ease-in-out hover:bg-green-300 active:bg-yellow-300"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
