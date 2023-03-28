const Button = ({ 
  variant, 
  secondary, 
  clickHandler, 
  children 
}) => {
  const btnType = variant === "submit" ? "submit" :  "button";
  const btnClass = `btn ${secondary === true ? "btn-secondary" : "btn-primary"}`

  return (
    <button 
      className={btnClass} 
      type={btnType} 
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}

export default Button;
