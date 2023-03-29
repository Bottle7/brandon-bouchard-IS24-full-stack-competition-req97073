import { Link } from 'react-router-dom'

const Button = ({ 
  submit, 
  secondary, 
  tertiary,
  clickHandler, 
  link,
  linkRef,
  children 
}) => {
  const btnType = submit === true ? "submit" :  "button";
  const btnClass = `btn ${secondary ? "btn-secondary" : tertiary ? "btn-tertiary" : "btn-primary"}`

  return (
    !link ? (
      <button 
        className={btnClass} 
        type={btnType} 
        onClick={clickHandler}
      >
        {children}
      </button>
    ) : (
      <Link className={btnClass} to={linkRef}>{children}</Link>
    )
  )
}

export default Button;
