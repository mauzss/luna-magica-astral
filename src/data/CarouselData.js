export const data = [
	{
		title: 'Que dicen nuestros clientes',
		description:
			'Nuestras predicciones los han ayudado en muchas oportunidades, sobre economia, amor.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Nuestras predicciones',
		description: 'Consulte sobre nuestras predicciones para tener una vida mas segura, adelantese a su fortuna.',
		image: './assets/security.jpg',
	},
	{
		title: 'Nuestros Mediums',
		description: 'Diplomados en las artes misticas en la academia Hogwarts.',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Nuestros contactos',
		description: 'Tenemos comunicacion directa con seres sobrenaturales.',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Nuestros Top Clientes',
		description: 'Facebook, Bitcoin, Tesla motors, SpaceEx',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
