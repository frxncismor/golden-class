function showMember(member) {
	const element = document.querySelector('.about-us__text');
	let img;
	console.log(element);
	console.log();
	switch (member) {
		case 1:
			element.querySelector('.about-us__text--description').innerHTML =
				'Moonyi es un artista urbano que le gusta el perreo intenso y sucio y le gusta mojar la brocha en lugares inadecuados, fan destacado de la wera del tec y del konan big';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/moonyi.jpg';
			img.classList.add('photo');
			break;
		case 2:
			element.querySelector('.about-us__text--description').innerHTML =
				'River G es un artista urbano por el dia y por la noche es el cosplayer del kurt cobain alias la robia margot, le gusta tomar un cafe bajo la lluvia y leer un buen libro';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/riverg.jpg';
			img.classList.add('photo');
			break;
		case 3:
			element.querySelector('.about-us__text--description').innerHTML =
				'Kinny G mejor conocido como Jhon Lennon es un ser extraño traido desde el planeta gol, sus gustos van mas alla de este planeta, tik toker espacial. Fan destacado de BTS y la sonora dinamita';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/tony.jpg';
			img.classList.add('photo');
			break;
		case 4:
			element.querySelector('.about-us__text--description').innerHTML =
				'Moonyi es un artista urbano que le gusta el perreo intenso y sucio y le gusta mojar la brocha en lugares inadecuados, fan destacado de la wera del tec y del konan big';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/tony.jpg';
			img.classList.add('photo');
			break;
		case 5:
			element.querySelector('.about-us__text--description').innerHTML =
				'Moonyi es un artista urbano que le gusta el perreo intenso y sucio y le gusta mojar la brocha en lugares inadecuados, fan destacado de la wera del tec y del konan big';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/tony.jpg';
			img.classList.add('photo');
			break;
		case 6:
			element.querySelector('.about-us__text--description').innerHTML =
				'Moonyi es un artista urbano que le gusta el perreo intenso y sucio y le gusta mojar la brocha en lugares inadecuados, fan destacado de la wera del tec y del konan big';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/tony.jpg';
			img.classList.add('photo');
			break;
		case 7:
			element.querySelector('.about-us__text--description').innerHTML =
				'Moonyi es un artista urbano que le gusta el perreo intenso y sucio y le gusta mojar la brocha en lugares inadecuados, fan destacado de la wera del tec y del konan big';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/tony.jpg';
			img.classList.add('photo');
			break;
		case 8:
			element.querySelector('.about-us__text--description').innerHTML =
				'Moonyi es un artista urbano que le gusta el perreo intenso y sucio y le gusta mojar la brocha en lugares inadecuados, fan destacado de la wera del tec y del konan big';
			img = element.querySelector('figure').querySelector('img');
			img.src = './images/tony.jpg';
			img.classList.add('photo');
			break;

		default:
			break;
	}
}