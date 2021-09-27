export default function Button({ primary, text, onClick, type = 'button' }) {
  return (
    <button className={`p-2 font-semibold bg-${primary ? 'green' : 'red'}-300 rounded`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
