import  { useRef } from 'react'

const Use =() =>{
    const dref1 = useRef(null);
    const dref2 = useRef(null);
    const dref3 = useRef(null);
    const dref4 = useRef(null)
    const colorchange = () =>{
        dref1.current.style.background ="red"
        dref2.current.style.background ="pink"
        dref3.current.style.background ="blue"
        dref4.current.style.background ="grey"

    }
  return (
    <div>
    <div ref={dref1}>first div</div>
    <div ref={dref2}>second div</div>
    <div ref={dref3}>third div</div>
    <div ref={dref4}>four div</div>
    <button onClick={() =>colorchange(dref1,dref2,dref3,dref4)}>change color</button>
      
    </div>
  )
}
export default  Use;
