const Work = () => {
	const metodos = [
		{
			id: 0,
			name: "Evaluación inicial detallada",
			explic: "Comenzaremos con una evaluación exhaustiva de tu piel y tus preocupaciones específicas. Analizaré tu tipo de piel, historial médico y tus metas de belleza para personalizar un plan de tratamiento que se adapte a tus necesidades individuales.",
		},
		{
			id: 1,
			name: "Consulta individualizada",
			explic: "Durante nuestras consultas, nos sentaremos juntos para discutir tus objetivos, responder a tus preguntas y brindarte recomendaciones personalizadas. Mi objetivo es que te sientas escuchado/a y cómodo/a durante todo el proceso.",
		},
		{
			id: 2,
			name: "Tratamientos personalizados",
			explic: "Basándome en la evaluación inicial y nuestras consultas, diseñaré tratamientos personalizados para abordar tus preocupaciones específicas. Utilizaré una combinación de técnicas y productos especializados para garantizar los mejores resultados para ti.",
		},
		{
			id: 3,
			name: "Seguimiento y ajustes",
			explic: "A lo largo de tu tratamiento, realizaré un seguimiento cuidadoso para evaluar tu progreso y realizar los ajustes necesarios. Tu satisfacción y resultados óptimos son mi prioridad, por lo que estaremos en constante comunicación para asegurarnos de que estés satisfecho/a con los resultados.",
		},
		{
			id: 4,
			name: "Educación y recomendaciones",
			explic: "No solo recibirás tratamientos de alta calidad, sino también educación sobre el cuidado de la piel y recomendaciones para mantener y mejorar tus resultados en el hogar. Te proporcionaré consejos prácticos y recomendaciones de productos adecuados para mantener tu piel saludable y radiante.",
		},
		{
			id: 5,
			name: "Enfoque integral del bienestar",
			explic: "Reconozco la importancia del bienestar general en la salud de la piel. Además de los tratamientos, te brindaré orientación sobre hábitos saludables, nutrición y estilo de vida que pueden complementar y potenciar los resultados de los tratamientos.",
		},
	];
	return (
		<section id="trabajo">
			<div className="grid gap-6 lg:grid-cols-3">
				<div className="overflow-hidden rounded lg:flex lg:col-span-3">
					<img
						src="https://img.freepik.com/foto-gratis/mujer-salon-belleza-tratamiento-facial_23-2148875511.jpg?w=1380&t=st=1686085256~exp=1686085856~hmac=c6b3bc116cbddf7d2d89f4aa6638b8b909c8797ceada214deb7903830ec3b7e9"
						alt=""
						className="object-cover w-full h-auto max-h-96 "
					/>
					<div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-moody-blue-300">
						<span className="self-start px-3 py-1 text-sm rounded-full bg-moody-blue-500 text-moody-blue-50">
							Formas de trabajo
						</span>
						<h2 className="text-3xl font-bold md:flex-1">
							Conoce como trabajo con cada uno de mis pacientes
						</h2>
						<p className="text-gray-900">
							*Puede variar segun las necesidades
						</p>
					</div>
				</div>
				{metodos.map((method) => (
					<div
						key={method.id}
						className="p-6 rounded lg:p-8 lg:py-10 bg-moody-blue-400 flex flex-col gap-3"
					>
						<h3 className="inline font-medium text-moody-blue-50">
							{method.name}:
						</h3>
						<p className="inline text-gray-950 text-sm">
							{method.explic}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Work;
