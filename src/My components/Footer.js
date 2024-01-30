import React from 'react'

const Footer = () => {
    let footerstyle={
        position: "absolute",
    width: "100%",
    top: "91vh"
    }
  return (
    <footer className='bg-dark text-light py-3' style=
    {footerstyle}>
     <p className='text-center'>
         copyright &copy;  MyTodosList.com
     </p>
    </footer>
  )
}

export default Footer
