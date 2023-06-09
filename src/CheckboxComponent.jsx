import React, { useEffect, useState } from 'react'
import fathericon from './Health img icon/father-icon.png'
import mothericon from './Health img icon/mother-icon.png'
const CheckboxComponent = () => {
    const[father,setFather]=useState('');
    const[mother,setMother]=useState('');
    const[checkArray,setCheckArray]=useState([{checked:false,value:' ',gender:'male'}])
    useEffect(()=>
    {
        const storedFather=localStorage.getItem('father')
        const storedMother=localStorage.getItem('mother)')
        const storedCheckArray=localStorage.getItem('checkArray')
        if(storedFather){
            setFather(storedFather)
        }
        if(storedMother){
            setMother(storedMother)
        }
        if(storedCheckArray){
            setCheckArray(JSON.parse(storedCheckArray))
        }        
    },[])
    useEffect(()=>{
         localStorage.setItem('father',father)
         localStorage.setItem('mother',mother)
         localStorage.setItem('checkArray',JSON.stringify(checkArray))
    },[father,mother,checkArray])
    const fatherCheckBoxChange=(event)=>{
      const value=event.target.value 
      const checked=event.target.checked
      if(checked){
        setCheckArray((prevArray)=>[...prevArray,{checked:true,value:value,gender:'male'}])
    }else{
        setCheckArray((prevMembers)=>
        prevMembers.filter((member) => member.value!== value)
        )
    }
}
const motherCheckBoxChange=(event)=>{
    const value=event.target.value 
    const checked=event.target.checked
    if(checked){
        setCheckArray((prevArray)=>[...prevArray,{checked:true,value:value,gender:'female'}])
    }else{
        setCheckArray((prevMembers)=>
        prevMembers.filter((member) => member.value!== value)
        )
    }
}
  return (
    <div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="youCheckbox4"
            value="father"
            checked={father==='father'}
            onChange={fatherCheckBoxChange}
            className="checkbox-input"
          />
          <label htmlFor="youCheckbox4" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
            <img src={fathericon} alt="You" className="checkbox-image" />
            Father
          </label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="youCheckbox5"
            value="mother"
            checked={mother==='mother'}
            onChange={motherCheckBoxChange}
            className="checkbox-input"
          />
          <label htmlFor="youCheckbox5" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
            <img src={mothericon} alt="Mother" className="checkbox-image" />
            Mother
          </label>
        </div>
    </div>
  )
}

export default CheckboxComponent