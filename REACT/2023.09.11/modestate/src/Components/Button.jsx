import {outText} from './Display';

function Button () {

  const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];
  let cssStyle = {width:'100%', height:40, marginTop:5, border:'none', borderRadius:0, boxSizing:'border-box', fontWeight:'bold'};

  return (
    <ul style={{listStyle:"none", padding:0}}>
      {/* <li><button>{menus[0]}</button></li> */}
      {menus.map((btn) => {
        return <li><button style={cssStyle} onClick={outText}>기분이: {btn}</button></li>
      })}
    </ul>
  )
}

export default Button;