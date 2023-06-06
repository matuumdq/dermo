const Method = () => {
	return (
		<section id="metodos">
			<span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-400">
				Descubre lo mejor para tu piel
			</span>
			<h2 className="text-2xl md:text-5xl font-bold lg:text-center dark:text-gray-50">
				Mi enfoque integral para el cuidado de tu piel
			</h2>
			<div className="grid gap-6 my-16 lg:grid-cols-3">
				<div className="flex flex-col p-8 space-y-4 rounded-md bg-moody-blue-300">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-moody-blue-400">
						1
					</div>
					<p className="text-lg flex flex-col gap-2">
						<span className="font-bold text-2xl">
							Tratamientos Faciales:
						</span>{" "}
						Mis tratamientos faciales personalizados están diseñados
						para purificar, hidratar y rejuvenecer tu piel. Desde
						limpiezas profundas hasta terapias especializadas para
						el acné, te ayudaré a lograr un cutis radiante y
						saludable.
					</p>
				</div>
				<div className="flex flex-col p-8 space-y-4 rounded-md bg-moody-blue-300">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-moody-blue-400">
						2
					</div>
					<p className="text-lg flex flex-col gap-2">
						<span className="font-bold text-2xl">
							Tratamientos Corporales:
						</span>{" "}
						Permíteme mimar tu cuerpo con mis tratamientos
						corporales indulgentes. Desde exfoliaciones suaves hasta
						envolturas revitalizantes, mis servicios están diseñados
						para relajar, tonificar y mejorar la apariencia de tu
						piel de pies a cabeza.
					</p>
				</div>
				<div className="flex flex-col p-8 space-y-4 rounded-md bg-moody-blue-300">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-moody-blue-400">
						3
					</div>
					<p className="text-lg flex flex-col gap-2">
						<span className="font-bold text-2xl">
							Rejuvenecimiento de la Piel:
						</span>{" "}
						Mis terapias de rejuvenecimiento de la piel, incluyendo
						tratamientos con láser, radiofrecuencia y peelings
						químicos, te ayudarán a reducir las arrugas, mejorar la
						textura y restaurar la juventud de tu piel. ¡Recupera la
						confianza en tu apariencia!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Method;
