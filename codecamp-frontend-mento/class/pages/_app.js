import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
// ApolloClient를 초기화하는데 사용 , 그래프ql api와 통신관리 캐싱 데이터가져오기 및 변경 사항 추적처리
// InMemoryCache는 ApolloClient에서 사용하는 캐시 메모리 새로고침이나 다른 요청 시에 다시 요청하지 않고도 데이터를 재사용할수있도록 함
// ApolloProvider 는 react애플리케이션에서  Apollo Client 를 사용할 수 있도록 하는 react 컴포넌트   리액트 컴포넌트 트리 내에   Apollo Client 공유

export default function App({ Component, pageProps }) {
  // export default 현재 파일에서 기본적으로 내보내는 항목 지정 
  // function App({ Component, pageProps }) 는 app이라는 이름의 react컴포넌트 정의   Component, pageProps 매개변수를 받고 
  // Component는 현재 페이지에 해당하는 React 컴포넌트  //  pageProps는 현재 페이지에 전달된 속성(props)

  const client = new ApolloClient({
    // ApolloClient는 Apollo Client 라이브러리에서 제공되는 클래스 > 그래프ql api와 통신하고 캐시 관리를 수행 
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()  // 컴퓨터의 메모리에다 백엔드에서 받아온 데이터 임시로 저장해 놓기 
  }) // 5~8 그래프ql 셋팅
  // uri 안에 urn(유니폼 리소스 네임) url(유니폼 리소스 로테이터)이 있다  
  // 컴포넌트는 조립방식

  return (
    <div>
      <div>==================</div>
    <ApolloProvider client={client}>  
    {/* 모든페이지에 아폴로셋팅을 내려주기때문에 모든페이지에 그래프ql요청가능 */}
  <Component {...pageProps} />
    </ApolloProvider>
    {/* // 이 컴포넌트에서 그래프큐엘을 쓸수있게 제공해줄게 
    //component 역할  index.js나 등등  내용들을 컴포넌트에 붙여넣는형식  불러오는 내용들이 이쪽으로 온다고 생각 */}
      <div>===============</div>
    </div>
    // import 나만의페이지 from '경로' 를 하고  컴포넌트로 <나만의 페이지 />를하면 가져올수있음 
  )
}
