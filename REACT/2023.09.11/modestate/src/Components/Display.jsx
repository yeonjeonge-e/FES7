export function outText (text) {
    console.log('hello');
}

function Display (props) {
  
  const cssStyle = {width:'100%', height:200, margin:'5px auto 0', border:'2px solid black', borderRadius:5, boxSizing:'border-box', display:'flex', justifyContent:'center', alignItems:'center'};

  return (
    <div style={cssStyle}><h2>{props.text}</h2></div>
  )
}


export default Display;