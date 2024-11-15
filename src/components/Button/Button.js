import style from './button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
