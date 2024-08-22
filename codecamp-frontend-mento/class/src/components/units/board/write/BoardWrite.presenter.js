import {RedInput, BlueButton} from './BoardWrite.styles'

export default function BoardWriteUI(props) {


  return (
    <div>
    작성자: <RedInput type="text" onChange={props.bbb}/>
    제목: <input type="text" onChange={props.ccc}/>
    내용: <input type="text" onChange={props.ddd}/>
    
    <BlueButton onClick={props.aaa}>GRAPQL-API 요청하기</BlueButton>
    </div>
  )



}