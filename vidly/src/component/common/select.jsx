import React from 'react';

const Select = ({data, lable, onSelect}) => {
    return ( 
        <select class="form-select" lable={lable} aria-label="Default select example" onChange={onSelect()}>
        <option selected></option>
        {data.map(()=>{
            <option value={data._id}>{data.name}</option>
        })}
  </select> );
}
 
export default DropDown;