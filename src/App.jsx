import { useState } from 'react'
import Nav from './components/Nav'
import Titlebar from './components/Titlebar'
import Button from './components/core/Button'
import ButtonGroup from './components/core/ButtonGroup'
import Container from './components/Container'
import CardContainer from './components/CardContainer'
import Calendar from './Calendar'
import DiaryForm from './DiaryForm'
import Spacer from './components/core/Spacer'
import Maxims from './components/Maxims'
import { buildCalendarData } from './utils/buildCalendarData'

const App = () => {
  const today = new Date()
  const [pickDay, setPickDay] = useState(0)
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth() + 1)

  const calendar = buildCalendarData(year, month)  

  const onGoToday = () => {
    setYear(today.getFullYear())
    setMonth(today.getMonth() + 1)
  }

  const onChangeMonth = (direction) => {
    if (direction === 'prev') {
      if (month === 1) {
        setYear(year - 1)
        setMonth(12)
      } else {
        setMonth(month - 1)
      }
    } else {
      if (month === 12) {
        setYear(year + 1)
        setMonth(1)
      } else {
        setMonth(month + 1)
      }
    }
  }

  const onSelectDay = (day) => {
    setPickDay(day)
  }

  return (
    <Container>
      <Nav>
        <Titlebar>{year}년 {month}월 {pickDay !== 0 ? `${pickDay}일` : ''} Diary</Titlebar>
        { pickDay === 0 ? 
          <ButtonGroup>
            <Button onClick={() => onChangeMonth('prev')}>◀︎</Button>
            <Button onClick={() => onGoToday()}>오늘</Button>
            <Button onClick={() => onChangeMonth('next')}>►</Button>
          </ButtonGroup>
          : null
        }
      </Nav>
      <CardContainer>
        { pickDay === 0 
            ? <Calendar data={calendar} year={year} month={month} onSelectDay={onSelectDay} />
            : <DiaryForm 
                date={`${year}-${String(month).padStart(2, '0')}-${String(pickDay).padStart(2, '0')}`} 
                onCancel={() => setPickDay(0)}
              />
        }
      </CardContainer>
      <Spacer size={2} />
      <Maxims />
    </Container>
  )
}

export default App
