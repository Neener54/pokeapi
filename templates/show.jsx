import React from 'react'
function getTypes (props) {
  let typeList = ''
  props.map(function (obj, index) {
    console.log(obj)
    typeList += obj.type.name + ','
  })
  return typeList
}
function Show (props) {
  return (
    <div>
      <div>
        <i>Name:</i> { props.name }
        <br/>
        <i>Types:</i> { getTypes(props.types) }
      </div>
    </div>
  )
}
module.exports = Show
