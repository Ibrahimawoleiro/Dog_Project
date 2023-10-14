

import LeftDiscover from "./leftDiscover";

import RightDiscover from "./rightDiscover";

const Discover = (props) => {
    return (
        <div className="Discover">
            <LeftDiscover 
            logFunction={props.logFunction} 
            setimage={props.setimage}
            image={props.image}
            prevImage={props.prevImage}
            setpreviousImage={props.setpreviousImage}
            onSubmit={props.onSubmit}></LeftDiscover>
            
            <RightDiscover 
            logFunction={props.logFunction} 
            setimage={props.setimage}
            image={props.image}
            prevImage={props.prevImage}
            setpreviousImage={props.setpreviousImage}
            onSubmit={props.onSubmit}></RightDiscover>
        </div>
    )
}
export default Discover