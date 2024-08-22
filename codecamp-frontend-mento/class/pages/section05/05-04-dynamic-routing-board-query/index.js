import {useRouter} from 'next/router'
// next.js에서 제공하는 useRouter 훅을 가져오는 것  다른경로로 이동하는 것 

export default function StaticRoutingPage(){
  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/1")
    // router.push 메서드를 사용하여 다른 경로로 이동
  }
  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/2")
    // router.push 메서드를 사용하여 다른 경로로 이동
  }
  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/3")
    // router.push 메서드를 사용하여 다른 경로로 이동
  }

  return (
    <div>
  <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
  <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
  <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
  </div>
)
}