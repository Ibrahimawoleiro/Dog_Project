

const RightDiscover = (props) => {
    function messi(){
        console.log("lionel")
    }
    return (
        <div className="rightDiscover">
            <div className="back"></div>
            <h1 className="bold"> Fallin' on Dogs</h1>
            <p className="bold">Discover Dogs from around the world</p>
            <p>🐩🐕🐕🐶🦮🐶🦮🐕‍🦺🐩</p>
            <div className="buttonContainer"></div>
            <div className="curr"></div>
            <button className="button" onClick={props.onSubmit}>Discover!!!</button>
        </div>
    )
}
export default RightDiscover