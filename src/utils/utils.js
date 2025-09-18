// This file contains utility functions such as getCountryName and getDateTime.
export const getCountryName = (code) => {
	return new Intl.DisplayNames([code], {
		type: "region",
	}).of(code);
};

export const getDateTime = (dt) => {
	const curdate = new Date(dt * 1000);

	let options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
	const formatter = Intl.DateTimeFormat("en-us", options);
	return formatter.format(curdate);
};
