
    function Button({ label, name="John" }) {

        let count = 0;

        
        /*const handelClick = () => {      
            if(count < 3){
                count++;
                console.log(`${name} you clicked me ${count} times`);
            }
            else{
                console.log(`${name} stop clicking me!`);
            }

        }*/

        const handelClick = (e) => {   
            e.target.textContent = "Dayuem!"; ;   
            
        }

        
        return(
            <>
            <button onClick= {(e) => handelClick(e)} className="btn btn-primary">
                {label}</button>
            </>
        )
    }

    export default Button;