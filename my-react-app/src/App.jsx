import List from './List.jsx'


function App() {
  const fruits = [{id:1, name:'Apple', calories:95},
                  {id:2, name:'Banana', calories:120},
                  {id:3, name:'Cherry', calories:105},
                  {id:4, name:'Date', calories:75},
                  {id:5, name:'Elderberry', calories:130}];

  const vegetables = [{id:6, name:'Carrot', calories:25},
                      {id:7, name:'Broccoli', calories:55},
                      {id:8, name:'Spinach', calories:23},
                      {id:9, name:'Potato', calories:77},
                      {id:10, name:'Cucumber', calories:16}];                
                  
  return(
    <>
      
     {fruits.length > 0 && <List  category = "Fruits"/> }
     {vegetables.length > 0 ? <List items = {vegetables} category = "Vegetables"/> : null}
      
      
      
    </>
  );
}



export default App
