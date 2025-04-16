
    function List({items = [{id:1, name:"NO DATA", calories:"NO DATA"}], category = "Category"}) {
        
        const itemlist = items;
        

        // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
        // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE APLHABETICAL ORDER
        // fruits.sort((a, b) => a.calories- b.calories); //NUMBERICAL ORDER
        // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMBERICAL ORDER

        // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
        // const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

        const listItems = itemlist.map((item) => <li key={item.id}> 
                                                    {item.name}: &nbsp; <b>{item.calories}</b>
                                                 </li>);

        return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );
    }

    export default List;