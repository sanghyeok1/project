export default function ModalAlertPage():JSX.Element {

  const onClickSuccess = (): void => {

  }

  const onClickError = (): void => {
    
  }

  return (
    <>
    <button onClick={onClickSuccess}>성공했을때!!</button>
    <button onClick={onClickError}>실패했을때!!</button>
    </>
  )
}