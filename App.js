//nested html structure in react
import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("div",{id: "parent" , xyz:"abc"},
    React.createElement("div",{id: "child" }, 
        React.createElement("h1",{id: "heading" },"I am h1 tag" )
    ))
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)

//react element using JSX    
const jsxHeading = <h1 id ="head"> Jsx heading</h1>
root.render(jsxHeading)

//functional component
const TitleComponent = () => {
    return <h1 id ="title">Title Component</h1>
}

//componnet composition
const HeadingComponent = () => (          
            <div>
            {TitleComponent()}    
            <TitleComponent/>
            <TitleComponent></TitleComponent>
            {10000}
            {jsxHeading}
                <h1 id="heading">Heading Component</h1>
            </div>
    )


root.render(<HeadingComponent/>)