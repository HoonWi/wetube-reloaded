export const trending = (req, res) => {
	const videos = [
		{
			title: "First",
			rating: 5,
			comment: 2,
			createdAt: "2minutes ago",
			views: 50,
			id: 1,
		},
		{
			title: "Second",
			rating: 5,
			comment: 2,
			createdAt: "2minutes ago",
			views: 50,
			id: 2,
		},
	];
	res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
