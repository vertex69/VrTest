import React from 'react'
import Unity, {UnityContent} from "react-unity-webgl"

const explore = () => {
    const unityContent = new UnityContent(
        "vr/Build/vr.json",
        "vr/Build/UnityLoader.js"
    );
    return (
        <div className="floating-embed">
            <Unity unityContent={unityContent}/>
        </div>
    )
}

export default explore
