export const getYear = (dateStr) => {
	// const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];

	const d = new Date(dateStr);
	// const date = d.getDate();
	// const monthIndex = d.getMonth();
	// const month = months[monthIndex];
	const year = d.getFullYear();

	return year;
};
