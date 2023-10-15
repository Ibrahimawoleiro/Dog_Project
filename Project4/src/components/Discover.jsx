

import LeftDiscover from "./leftDiscover";

import RightDiscover from "./RightDiscover";

const Discover = (props) => {
    return (
        <div className="Discover">
            <LeftDiscover
                logFunction={props.logFunction}
                setState={props.setCurrState}
                currState={props.currState}
                prevState={props.prevState}
                setPreviousState={props.setPrevState}
                onSubmit={props.onSubmit}></LeftDiscover>

            <RightDiscover
                logFunction={props.logFunction}
                setState={props.setCurrState}
                currState={props.currState}
                prevState={props.prevState}
                setPreviousState={props.setPrevState}
                onSubmit={props.onSubmit}></RightDiscover>
        </div>
    )
}
export default Discover