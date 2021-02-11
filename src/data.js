import { v4 as uuidv4 } from "uuid";

function chillHop() {
	return [
		{
			name: "You and I",
			artist: "Melodiesinfonie",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
			id: uuidv4(),
			active: true,
			color: ["#CFB7C7", "#193D6F"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10339",
		},
		{
			name: "Lilo",
			artist: "Middle School, The Field Tapes",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#CAD673", "#566272"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
		},
		{
			name: "Rain",
			artist: "Psalm Trees, Guillaume Muschalle",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/6fe1f08735f7c54e10e72d2f9d1bec4c78ca01bf-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#767E9A", "#FFF8C2"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=7803",
		},
		{
			name: "Hideout",
			artist: "Tesk",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/669e6ed53ce0d385e072ea9c77d159297bbca41f-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#DF8285", "#A08260"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=8481",
		},
	];
}

export default chillHop;
