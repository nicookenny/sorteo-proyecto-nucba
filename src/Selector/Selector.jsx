import React, { useState, useEffect } from 'react';
import { WrapperSelector, BoxSelector, Container1, Container2, Container3, Title, Button } from './styles';
import fireworks from 'fireworks';

const Selector = () => {
	const opciones = [
		{
			name: 'Aplicación bancaria',
			ID: 1,
		},
		{
			name: 'Aplicacion de delivery',
			ID: 2,
		},
		{
			name: 'Aplicación de gestión incidentes tipo HelpDesk',
			ID: 3,
		},
		{
			name: 'Aplicación gestión de turnos para hospitales, veterinarias o similar',
			ID: 4,
		},
		{
			name: 'Aplicación de citas tipo Tinder',
			ID: 5,
		},
		{
			name: 'Aplicación de gestión de reservas, menú, pagos para restaurantes',
			ID: 6,
		},
	];

	const [palabra, setPalabra] = useState('');
	const [palabraseleccionada, setPalabraseleccionada] = useState(null);
	const [selected, setSelected] = useState(null);
	const [selecting, setSelecting] = useState(false);

	let opciones_mezcladas = opciones.map((opcion) => ({
		...opcion,
		shuffled: opcion.name
			.split('')
			.sort(function () {
				return 0.5 - Math.random();
			})
			.join('')
			.replaceAll(' ', ''),
	}));

	const onShuffle = () => {
		setSelecting(true);
		const seconds = 10;

		const interval = setInterval(() => {
			const random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
			const toShow = opciones_mezcladas.find((i) => i.ID === random);
			setPalabra(toShow.shuffled);
			setSelected(toShow.ID);
			opciones_mezcladas = opciones.map((opcion) => ({
				...opcion,
				shuffled: opcion.name
					.split('')
					.sort(function () {
						return 0.5 - Math.random();
					})
					.join('')
					.replaceAll(' ', ''),
			}));
		}, 75);

		setTimeout(() => {
			clearInterval(interval);
			setPalabra(null);
			fireworks({
				x: window.innerWidth / 2,
				y: window.innerHeight / 2,
				colors: ['#cc3333', '#4CAF50', '#81C784'],
			});
			setSelecting(false);
		}, seconds * 1000);
	};

	useEffect(() => {
		setPalabraseleccionada(opciones_mezcladas.find((i) => i.ID === selected)?.name);
	}, [selected]);

	return (
		<WrapperSelector>
			<BoxSelector>
				<Container1>
					<Title>Selector de proyecto final</Title>
				</Container1>
				<Container2>{palabra || palabraseleccionada}</Container2>
				<Container3>
					<Button disabled={selecting} onClick={onShuffle}>
						SORTEAR
					</Button>
				</Container3>
			</BoxSelector>
		</WrapperSelector>
	);
};

export default Selector;
