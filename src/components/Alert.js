import React from 'react'

export default function Alert(props) {

    // this function will convert 1st letter of "success" to capital i.e "Success"
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        // convert 0th index of lower to upperCase (+) join with letters of lower from 1st index 
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // since in start of program type is "null"
    // if "props.alert" is null then remaining won't executed
    // if "props .alert" is not null then execution of remaining code is executed
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {/* ${props.alert.type}   used to display color of alert , i.e "success" in green color*/}
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        {/* captitalize(props.alert.type)  conevrt "success" to "Success"*/}
  </div>
  )
}
