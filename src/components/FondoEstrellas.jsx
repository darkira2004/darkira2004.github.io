import React, { useRef, useEffect } from "react";

const STAR_COUNT = 250;
const STAR_COLOR = "#fff";
const STAR_SIZE = 1.1;
const STAR_SPEED = 0.2;

function randomBetween(a, b) {
	return a + Math.random() * (b - a);
}

export default function FondoEstrellas({ blueTone }) {
	const canvasRef = useRef(null);
	const stars = useRef([]);
	// Leer blueTone de localStorage si no se recibe como prop
	const [bgTone, setBgTone] = React.useState(blueTone);

	useEffect(() => {
		if (!blueTone) {
			const savedTone = localStorage.getItem("blueTone") || "#0f172aff";
			setBgTone(savedTone);
		} else {
			setBgTone(blueTone);
		}
	}, [blueTone]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let width = window.innerWidth;
		let height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;

		// Inicializar estrellas en 3D
		stars.current = Array.from({ length: STAR_COUNT }, () => ({
			x: randomBetween(-width/2, width/2),
			y: randomBetween(-height/2, height/2),
			z: randomBetween(0.1, width/2),
		}));

		function draw() {
			
			ctx.clearRect(0, 0, width, height);
			for (let star of stars.current) {
				// Movimiento tipo "Gojo infinito": las estrellas se acercan al centro
				star.z -= STAR_SPEED * 10;
				if (star.z < 1) {
					star.x = randomBetween(-width/2, width/2);
					star.y = randomBetween(-height/2, height/2);
					star.z = width/2;
				}
				// Proyección 3D
				const sx = width/2 + star.x * (width/2) / star.z;
				const sy = height/2 + star.y * (height/2) / star.z;
				const size = STAR_SIZE * (1 - star.z/(width/2));
				ctx.beginPath();
				ctx.arc(sx, sy, Math.max(size, 0.5), 0, 2 * Math.PI);
				ctx.fillStyle = STAR_COLOR;
				ctx.globalAlpha = 0.7 + 0.3 * (1 - star.z/(width/2));
				ctx.shadowColor = STAR_COLOR;
				ctx.shadowBlur = 8 * (1 - star.z/(width/2));
				ctx.fill();
				ctx.shadowBlur = 0;
			}
			ctx.globalAlpha = 1;
			requestAnimationFrame(draw);
		}
		draw();

		function handleResize() {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
			// Reubicar estrellas
			stars.current.forEach(star => {
				star.x = randomBetween(-width/2, width/2);
				star.y = randomBetween(-height/2, height/2);
				star.z = randomBetween(0.1, width/2);
			});
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: -1,
				background: bgTone || "#0f172aff",
				pointerEvents: "none",
			}}
		/>
	);
}
