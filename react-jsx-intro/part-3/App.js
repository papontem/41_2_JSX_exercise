const App = () => {
	const people = [
		{ name: "PAM", age: 19, hobbies: ["Reading", "Wood Working"] },
		{ name: "PAM", age: 17, hobbies: ["Painting", "Music"] },
		{ name: "PAM", age: 100, hobbies: ["Gardening", "Cooking"] },
	];

	return (
		<div className="app">
			{people.map((person, index) => (
				<Person
					key={index}
					name={person.name}
					age={person.age}
					hobbies={person.hobbies}
				/>
			))}
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
