import React, { usestate } from 'react'

function ImageUpload() {

    function covertToBase64(e){
        console.log(e);
    }
    return (
    <div className="auth-wrapper" >
    <div className="auth-inner" style={{ width: "auto" }}>
        Let's Upload Image 
        <input accept="image/*" 
        type="file" 
        onChange={covertToBase64}/>
    </div>

</div>
    )
}
export default ImageUpload;