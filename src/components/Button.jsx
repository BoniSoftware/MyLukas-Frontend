import "../styles/button.css";

function Button({
  text,
  type="submit",
  disabled = false
}) {
  return (
    <button
      className="custom-button"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;