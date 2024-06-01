import React from 'react'

function Pr() {
  return (
    <>

      <div id="checklist">
        <input value="3" name="r" type="checkbox" id="03" onClick={console.log("yes you will do it")} />
        <label for="03">Coffee</label>
      </div>
    </>
  )
}

export default Pr