
    function Picture({ imageUrl }) {

        const imgUrl = './src/assets/pic.jpg';

        const handleClick = (e) => { 
            e.target.style.display = 'none'; // Hide the image when clicked
        }

      return (
        <>
            <img onClick={(e) => handleClick(e)} src={imgUrl} width="10%" ></img>
        
        </>

        );
    }

    export default Picture;