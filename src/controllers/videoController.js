let videos = [
	{
		title: "First Video",
		rating: 5,
		comment: 2,
		createdAt: "2minutes ago",
		views: 50,
		id: 1,
	},
	{
		title: "Second Video",
		rating: 5,
		comment: 2,
		createdAt: "2minutes ago",
		views: 50,
		id: 2,
	},
	{
		title: "Third",
		rating: 5,
		comment: 2,
		createdAt: "2minutes ago",
		views: 50,
		id: 3,
	},
];
export const trending = (req, res) => {
	res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
	const { id } = req.params; // const id = req.params.id;
	const video = videos[id - 1];
	return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
