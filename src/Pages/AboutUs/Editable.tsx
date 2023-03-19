 const Editable = ({ value, setValue }:any) => {
    const onChange = (event:any) => {
        setValue(event.target.value);
    }
  
    return (
      // <input
      //   type="text"
      //   aria-label="Field name"
      //   value={value}
      //   onChange={onChange}
      //   style={{backgroundColor: 'transparent',border: '0',padding: '8px', width: '50rem'}}
      // />
      <textarea name="text" rows={4} cols={100} wrap="soft" value={value} style={{backgroundColor: 'transparent',border: '0'}} onChange={onChange}></textarea>
    )
  }

  export default Editable;