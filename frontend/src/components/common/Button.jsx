import { Link } from 'react-router-dom'

const Button = ({ 
  submit, 
  secondary, 
  tertiary,
  clickHandler, 
  link,
  linkRef,
  product,
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
      <Link className={btnClass} to={linkRef} state={{...product}}>{children}</Link>
    )
  )
}

export default Button;
