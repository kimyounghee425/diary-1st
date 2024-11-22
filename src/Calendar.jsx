import './Calendar.css'
import DayGroup from './components/DayGroup'
import DayCell from './components/DayCell'

const Calendar = ({ data, year, month, onSelectDay }) => {
  const today = new Date()
  const week = ['일', '월', '화', '수', '목', '금', '토']
  
  return (
    <>
      <DayGroup>
        {week.map((day, i) => (<DayCell key={i} day={day} sunday={i === 0} disableSelect={true} />))}
      </DayGroup>
      {data.map((week, i) => (
        <DayGroup key={i}>
          {week.map((day, j) => (
            <DayCell 
              key={j}
              date={`${year}-${String(month).padStart(2, 0)}-${String(day).padStart(2, 0)}`}
              day={day} 
              today={year === today.getFullYear() && month === today.getMonth() + 1 && day === today.getDate()}
              sunday={j === 0}
              onClick={onSelectDay}
            />
          ))}
        </DayGroup>
      ))}
    </>
  )
}

export default Calendar
