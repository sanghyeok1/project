import {useQuery,gql} from '@apollo/client'


const FETCH_BOARD = gql`
query fetchBoard($number: Int){
  fetchBoard(number: $number){
    number
    writer
    title
    contents
  }
}
`


export default function StaticRoutingMovedPage(){
  const { data } = useQuery(FETCH_BOARD, {
    variables: {number: Number(Router.query.qqq)}
  })

  console.log(data)

  return (
    <div>
      <div>{Router.query.qqq}번 게시글 이동이 완료 </div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>

)

}