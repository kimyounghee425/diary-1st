// 하나의 커다란 함수 buildCalenderData 만 정의된 코드

// export : 모듈의 내보내기. 다른 파일에서 이 함수를 갖다 쓸 수 있음
export const buildCalendarData = (year, month) => {
  const calendar = []
  const firstDay = new Date(year, month - 1, 1)
  const lastDay = new Date(year, month, 0)

  const firstDayPosition = firstDay.getDay()
  let week = []
  let day = 1

  for (let i=0; i < firstDayPosition; i++) week.push(0)

  while (day <= lastDay.getDate()) {
    if (week.length === 7) {
      calendar.push(week)
      week = []
    }

    week.push(day)

    day++
  }

  if (week.length < 7) {
    while (week.length < 7) week.push(0)
  }

  calendar.push(week)
  
  console.log(calendar)
  return calendar
}
