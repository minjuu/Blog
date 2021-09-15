/*eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집','파이썬독학'])
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0)
  let [입력값, 입력값변경] = useState('')

  // function 반복된UI(){
  //   var 어레이 = [];
  //   for (var i = 0; i < 3; i++)
  //   {
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이
  // }
  
  function 제목추가(){
    var arrayCopy = [...글제목];  //결과 공유하지 않는 복사 (deep copy)
    arrayCopy.unshift(입력값)
    글제목변경(arrayCopy);
  }

  // function modal바꾸기(){
  //   if(modal==false){
  //     modal변경(true);
  //   }
  //   else{
  //     modal변경(false);
  //   }
  // }

  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>


      {
        글제목.map(function(글, i){
          return( 
          <div className="list" key={i}>
            <h3 onClick={ ()=>{누른제목변경(i)}}>{ 글 }<span onClick={ ()=>{따봉변경(따봉+1)} }>👍</span> {따봉} </h3>
            <p>9월 15일 발행</p>
            <hr/>
          </div>
          )
        })
      
      }

      <div className="publish">
        <input onChange={ (e)=>{입력값변경(e.target.value)}}/>
        <button onClick={ 제목추가 }>저장</button>
      </div>

      <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>

      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></ Modal>
        : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h2>제목: { props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

// class Profile extends React.Component {
//   constructor(){
//     super();
//     this.state = {  name : 'kim', age : 30  }
//   }
//   changeName(){
//     this.setState( {name: 'Park'} )
//   }
//   render(){
//     return (
//       <div>
//         <h3>프로필 입니다</h3>
//         <p>저는 { this.state.name } 입니다.</p>
//         <button onClick={ this.changeName.bind(this) }>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
