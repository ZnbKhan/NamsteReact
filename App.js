// const heading = React.createElement("h1",{id:"heading"}, "Hello World");

// console.log(heading) 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //return react object



/**
 * nested child in react
 *  <div class = parent>
 *     <div class="child">
 *      <h1>Hii</h1>
 *      <h2>I am second child</h2>
 * </div>
 * </div>
 */

const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div" ,{id:"child"},
     [React.createElement("h1", {}, "Hii I am h1 tag"), React.createElement("h2",{},"Hii I am h2")]   
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)