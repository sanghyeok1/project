// const[실행함수] = useMutation(CREATE_BOARD)
// use로 시작하면 hook  어떤 하나의 함수를 만듦 
// 실행함수() api요청이 날라간다 
// CREATE_BOARD(플레이그라운드에서 작성했던 내용 ) 에 셋팅을 해놓고  그걸 1번자리에 집어넣는다 

import {useMutation, gql} from '@apollo/client'

const 나의그래프큐엘셋팅 = gql`
  mutation{
      createBoard(writer:"철수", title:"안녕하세요", contents:"반갑습니다"){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationPage(){
  const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit = async () => {
    const result = await 나의함수()
    console.log(result)
  }

  //한 줄일땐 괄호 필요 없음 
  return(
    <button onClick={onClickSubmit}>GRAPQL-API 요청하기</button>
  )
}