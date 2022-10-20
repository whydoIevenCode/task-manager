import "./button.styles.scss";

const Button = ({ children, type, handler }) => {
  const types = {
    add: "btn__add",
    delete: "btn__delete",
    completed: "btn__completed",
    clear: "btn__clear",
  };
  return (
    <button onClick={handler} className={`btn ${types[type]}`}>
      {children}
    </button>
  );
};

export default Button;
