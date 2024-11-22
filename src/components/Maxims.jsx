import { randomNumber } from '../utils/rand'
import './Maxims.css'

const Maxims = () => {
  const maxims = [
    ["일기는 오늘을 기록하고, 내일을 계획하며, 어제를 반성하는 데 도움을 준다.", "벤자민 프랭클린"],
    ["일기는 우리의 침묵의 친구, 신뢰할 수 있는 자문가, 그리고 창의적인 영감의 원천이다.", "안느 프랭크"],
    ["일기를 쓴다는 것은 자신의 삶의 작가가 되는 것을 의미한다.", "로빈 쇼마"],
    ["일기를 쓰는 것은 날마다 자신에게 편지를 쓰는 것과 같다.", "다이앤 아코먼"],
    ["내면의 목소리를 듣고 싶다면, 일기를 쓰기 시작하라.", "마야 안젤루"],
  ]
  const [maxim, author] = maxims[randomNumber(0, maxims.length - 1)]

  return (
    <div className="maxims">
      <blockquote>🌜 {maxim} - <strong>{author}</strong></blockquote>
    </div>
  )
}

export default Maxims
