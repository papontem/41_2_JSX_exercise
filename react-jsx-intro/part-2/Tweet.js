const Tweet = ({ username, name, date, message }) => {
	const tweet_container_style = {
		padding: "20px 30px",
		margin: "42px",
		borderRadius: "63px",
		color: "#ffffff",
		backgroundColor: "#000000",
	};
	return (
		<div style={tweet_container_style} className="tweet_container">
			<p className="tweet_info">
				<b className="name">{name}</b>
				&nbsp; &nbsp;
				<i className="username">@{username}</i>
				&nbsp; &nbsp;
				<span className="date">{date}</span>
			</p>

			<p className="tweet_content">
				<span>{message}</span>
			</p>
		</div>
	);
};
