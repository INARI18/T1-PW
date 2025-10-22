import '../../assets/styles/Ui.css';

export default function Button({ text, variant = '', onClick }) {

  return (
    <button className={`button--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}