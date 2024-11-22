import { useEffect, useState } from 'react'
import { getDiaryArticle } from '../store/database'

const useDiary = (date) => {
  const [diaryEntry, setDiaryEntry] = useState(null)

  useEffect(() => {
    const fetchDiary = async () => {
      const diary = await getDiaryArticle(date)
      setDiaryEntry(diary)
    }

    date && fetchDiary()
  }, [date])

  return diaryEntry
}

export default useDiary
