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
