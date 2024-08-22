import {useRouter} from 'next/router'
// next.js에서 제공하는 useRouter 훅을 가져오는 것  다른경로로 이동하는 것 

export default function StaticRoutingPage(){
  const router = useRouter()

  const onClickMove = () => {
    router.push("/section05/05-01-static-routing-moved")
    // router.push 메서드를 사용하여 다른 경로로 이동
  }

  return <button onClick={onClickMove}>페이지 이동하기!!!</button>
}