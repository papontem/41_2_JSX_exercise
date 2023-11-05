const Person = ({ name, age, hobbies }) => {
	const age_result = age >= 18 ? "Please go vote!" : "You must be 18 to Vote";
	const name_result = name.length > 8 ? name.slice(0, 6) : name;

	return (
		<div>
			<p>Learn some information about this person:</p>
			<p>name: {name_result}</p>
			<p>age: {age}</p>
			<h3>{age_result}</h3>
			<ul>
				{/* iterate over the hobbies array this person has */}
				{hobbies.map((hobby) => (
					<li> {hobby}</li>
				))}
			</ul>
		</div>
	);
};
