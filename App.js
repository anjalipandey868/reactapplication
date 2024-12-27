//nested htm structure in react

const heading = React.createElement("div",{id: "parent" , xyz:"abc"},
    React.createElement("div",{id: "child" }, 
        React.createElement("h1",{id: "heading" },"I am h1 tag" )
    ))
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
    console.log(heading)