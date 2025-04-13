import propTypes from 'prop-types';


    function Student(props) {
        return(
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        )

    };
    Student.propTypes = {
        name: propTypes.string.isRequired,
        age: propTypes.number.isRequired,
        isStudent: propTypes.bool.isRequired,
    };
    Student.defaultProps = {
        name: "Unknown",
        age: 0,
        isStudent: false,
    };

    export default Student;
// This code defines a functional component called Student that takes props as an argument.
// It returns a div containing the student's name, age, and whether they are a student or not.
// The component uses prop-types to validate the types of the props passed to it.
// The propTypes object specifies that name should be a string, age should be a number, and isStudent should be a boolean.
// The component is then exported for use in other parts of the application.
// The component is styled with a class name "student".