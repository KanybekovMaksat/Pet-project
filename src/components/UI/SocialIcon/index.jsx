import React from 'react'




const SocialIcon = ({src}) => {
    const {text, img, link, id} = src;

    const styles = {
      padding: "11px 35px",
      borderRadius:'13px',
      border: "2px solid #E3ECF5",
      display:"flex",
      justifyContent:'center'
    }

  return (
    <div style={styles}>
      <a href={link}>
         <img style={{ width:"30px", height: "30px"}} src={img} alt={text} />
      </a>
    </div>
  )
}

export default SocialIcon