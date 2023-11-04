const App = () => {
    // username, name, date, message
    return <div>
        <Tweet username={"PAM"} name={"Phedias"} date={"11/4/23"} message={"my left arm hurts"}/>
        <Tweet username={"PAM"} name={"Phedias"} date={"11/4/23"} message={"i slept on it the whole night i think"}/>
        <Tweet username={"PAM"} name={"Phedias"} date={"11/4/23"} message={"i hope its not a heart attack"}/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));