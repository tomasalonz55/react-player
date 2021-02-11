import { v4 as uuidv4 } from "uuid";

function chillHop() {
	return [
		{
			name: "Lilo",
			artist: "Middle School, The Field Tapes",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
			id: uuidv4(),
			active: true,
			color: ["#CAD673", "#566272"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
		},
		{
			name: "You and I",
			artist: "Melodiesinfonie",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#CFB7C7", "#193D6F"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10339",
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
		{
			name: "Hidden Structure",
			artist: "Leavv, Flitz&Suppe",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#A4BCA7", "#FBAE6D"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10554",
		},
		{
			name: "Seascape",
			artist: "Makzo",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#F09A6A", "#384F90"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
		},
		{
			name: "Last Snow",
			artist: "Philanthrope, B-Side, Yasper",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#028983", "#A76A49"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=7871",
		},
		{
			name: "soupeddd!",
			artist: "Philanthrope, mommy, weird inside",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/e2c1d247228c0f82e459dc340741e0b1a46c8f5f-1024x1024.jpg",
			id: uuidv4(),
			active: false,
			color: ["#A6A3AC", "#373633"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9242",
		},
	];
}

export default chillHop;
