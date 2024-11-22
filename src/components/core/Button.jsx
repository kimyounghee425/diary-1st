import './Button.css'

const Button = ({ size = 'small', onClick, children }) => {
  const classList = ['button']

  classList.push(size)

  return (
    <button
      className={classList.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
