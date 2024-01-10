const MyHOC = (Component, name) => {

    const MeComp = (props) => {
        return(
            <div className="wrapper">
                <Component name={name.name}></Component>
            </div>
        )
    }
    return MeComp

}
export default MyHOC;