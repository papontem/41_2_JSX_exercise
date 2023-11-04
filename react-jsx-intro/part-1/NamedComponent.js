// const NamedComponent = (props) => {
// 	return <p>My name is {props.name}</p>;
// };
const NamedComponent = ({name = "PAM"}) => {
	return <p>My name is {name}</p>;
};
