
// useEffect() = React hook that lets you perform side effects in a functional component
// useEffect(() => {}, []) = useEffect() takes a function as its first argument and an array of dependencies as its second argument. The function will run after the component mounts and whenever the dependencies change. If you pass an empty array as the second argument, the function will only run once after the component mounts.
// useEffect(() => { return () => {} }, []) = The function you return from the useEffect() function will run when the component unmounts. This is useful for cleaning up side effects, such as cancelling network requests or removing event listeners.
// useEffect(() => { return () => {} }, [dependencies]) = The function you return from the useEffect() function will run when the component unmounts and whenever the dependencies change. This is useful for cleaning up side effects that depend on the dependencies.
// useEffect(() => {}, [value]) = The function will run after the component mounts and whenever the value changes. This is useful for performing side effects that depend on the value, such as fetching data from an API or updating the DOM.
// useEffect(() => { return () => {} }, [value]) = The function you return from the useEffect() function will run when the component unmounts and whenever the value changes. This is useful for cleaning up side effects that depend on the value, such as cancelling network requests or removing event listeners.


// USES
// #1 Event Listeners: useEffect() is often used to add event listeners to the DOM. For example, you might want to add a click event listener to a button when the component mounts and remove it when the component unmounts. You can do this by using useEffect() with an empty array as the second argument, like this:
// #2 DOM Manipulation: useEffect() can also be used to manipulate the DOM directly. For example, you might want to change the background color of a div when the component mounts. You can do this by using useEffect() with an empty array as the second argument, like this:
// #3 Fetching Data: useEffect() is often used to fetch data from an API when the component mounts. For example, you might want to fetch a list of users from an API when the component mounts. You can do this by using useEffect() with an empty array as the second argument, like this:
// #4 Updating the DOM: useEffect() can also be used to update the DOM when the component mounts. For example, you might want to update the title of the page when the component mounts. You can do this by using useEffect() with an empty array as the second argument, like this:
// #5 Cleaning Up: useEffect() can also be used to clean up side effects when the component unmounts. For example, you might want to remove an event listener when the component unmounts. You can do this by using useEffect() with an empty array as the second argument, like this:
// #6 Conditional Rendering: useEffect() can also be used to conditionally render a component when the component mounts. For example, you might want to render a loading spinner when the component mounts. You can do this by using useEffect() with an empty array as the second argument, like this:


import React, {useState, useEffect} from "react";


function MyComponent2() { 

   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);


   function handleResize() {
         setWidth(window.innerWidth);
         setHeight(window.innerHeight);
   }

   useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
   }, [])

   useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
   }, [width, height]) // This effect will run after the component mounts and whenever the width or height changes.
   // This effect will run after the component mounts and whenever the width or height changes.
    return(
        <>
            <p>Window Width: {width}px</p>
            <p>Window height: {height}px</p>
        </>
    )
}

export default MyComponent2;