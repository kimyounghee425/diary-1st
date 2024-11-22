import './ButtonGroup.css'

const ButtonGroup = ({ align = 'left', children }) => { 
  const classList = ['button-group']

  if (align === 'right') classList.push('align-right')
  return (
    <div className={classList.join(' ')}>
      {children}
    </div>
  )
}

export default ButtonGroup
