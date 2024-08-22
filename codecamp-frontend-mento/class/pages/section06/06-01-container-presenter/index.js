// const[실행함수] = useMutation(CREATE_BOARD)
// use로 시작하면 hook  어떤 하나의 함수를 만듦 
// 실행함수() api요청이 날라간다 
// CREATE_BOARD(플레이그라운드에서 작성했던 내용 ) 에 셋팅을 해놓고  그걸 1번자리에 집어넣는다 

import BoardWrite from "@/src/components/units/board/write/BoardWrite.container"

export default function GraphqlMutationPage(props){


  //한 줄일땐 괄호 필요 없음 
  return(
    <div>
      <div>############ 여기는 페이지입니다 #######</div>
    <BoardWrite qqq="철수"/>
      <div>############ 여기는 페이지입니다 #######</div>
    </div>
  )
}