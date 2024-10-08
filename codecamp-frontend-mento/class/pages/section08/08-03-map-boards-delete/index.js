import {useQuery,gql} from '@apollo/client'


const FETCH_BOARDS = gql`
query{
  fetchBoards{
    number
    writer
    title
    contents
  }
}
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }
`

export default function StaticRoutingMovedPage(){
  const { data } = useQuery(FETCH_BOARDS)

  const [deleteBoard] = useMutation(DELETE_BOARD)

  console.log(data?.fetchBoards)

  const onClickDelete = (event) => {
    Number(event.target.id)
    deleteBoard({
      variables: {number:Number(event.target.id)},
      refetchQueries: [{query: FETCH_BOARDS}]
    }

    )
  }

  return (
    <div>
      {data?.fetchBoards.map(el, index => (
        // 프레그먼트란? <></> , <Fragment></Fragment>
        // 2. 프레그먼트에 key입력하는 방법? <Fragment key={1}></Fragment>

        <div key={el.number}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{margin:"10px"}}>{el.number}</span> 
          <span style={{margin:"10px"}}>{el.title}</span>
          <span style={{margin:"10px"}}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>삭제</button>
          </span>
        </div>
        ))}
    </div>

)

}