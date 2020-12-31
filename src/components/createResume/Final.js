const Final = (props) => {
	console.log(props.state);
	return (
		<div>
			firstName: {props.state.firstName} <br />
			lastName: {props.state.lastName} <br />
			job: {props.state.job} <br />
			summary: {props.state.summary} <br />
			city: {props.state.city} <br />
			state: {props.state.state} <br />
			email: {props.state.email} <br />
			website: {props.state.website} <br />
		</div>
	);
};

export default Final;
