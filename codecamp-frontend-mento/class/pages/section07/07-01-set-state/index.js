import BoardWrite from "@/src/components/units/board/07-write/BoardWrite.container"

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