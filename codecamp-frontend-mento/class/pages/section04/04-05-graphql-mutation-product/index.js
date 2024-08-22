// const[실행함수] = useMutation(CREATE_BOARD)
// use로 시작하면 hook  어떤 하나의 함수를 만듦 
// 실행함수() api요청이 날라간다 
// CREATE_BOARD(플레이그라운드에서 작성했던 내용 ) 에 셋팅을 해놓고  그걸 1번자리에 집어넣는다 

import {useMutation, gql} from '@apollo/client'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller:String, $createProductInput: CreateProductInput!) {  #변수타입적는곳
      createProduct(seller: $seller, createProductInput: $createProductInput){  # 실제 우리가 전달할  변수 적는 곳
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationPage(){
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈이",
        createProductInput: {
          name:"마우스",
          detail:"정말 좋은 마우스",
          price: 3000
        }
      }
    })
    console.log(result)
  }

  //한 줄일땐 괄호 필요 없음 
  return(
    <button onClick={onClickSubmit}>GRAPQL-API 요청하기</button>
  )
}