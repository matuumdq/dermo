const Blog = () => {
	const blog = [
		{
			id: 0,
			img: "https://img.freepik.com/vector-gratis/ilustracion-cosmetologa-diseno-plano-dibujado-mano_23-2149336991.jpg?w=740&t=st=1686085282~exp=1686085882~hmac=53b77412bae6ff74a5a54291279c4b9d581d2db9d3c9b6092bb58775fcd9ca62",
			name: "blog1",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi assumenda sapiente.",
			url: "http://www.twitter.com",
		},
		{
			id: 1,
			img: "https://img.freepik.com/vector-gratis/ilustracion-cosmetologa-diseno-plano-dibujado-mano_23-2149336991.jpg?w=740&t=st=1686085282~exp=1686085882~hmac=53b77412bae6ff74a5a54291279c4b9d581d2db9d3c9b6092bb58775fcd9ca62",
			name: "blog2",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi assumenda sapiente.",
			url: "http://www.twitter.com",
		},
		{
			id: 2,
			img: "https://img.freepik.com/vector-gratis/ilustracion-cosmetologa-diseno-plano-dibujado-mano_23-2149336991.jpg?w=740&t=st=1686085282~exp=1686085882~hmac=53b77412bae6ff74a5a54291279c4b9d581d2db9d3c9b6092bb58775fcd9ca62",
			name: "blog3",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi assumenda sapiente.",
			url: "http://www.twitter.com",
		},
	];
	return (
		<section id="blog">
			<div className="container p-6 pt-10 mx-auto rounded lg:px-8 bg-moody-blue-300">
				<h2 className="text-5xl font-bold text-center mt-6">
					Articulos recomendados del mes:
				</h2>
				<img
					src="https://img.freepik.com/foto-gratis/mujer-que-recibe-inyeccion-botox-clinica_329181-18788.jpg?w=1380&t=st=1686085338~exp=1686085938~hmac=2d2aa4c4e40c07d1b15f262d8a1e7fb1dffe5f11803d17e330f7a0218877d45f"
					alt=""
					className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
				/>
				<div className="grid lg:grid-cols-3 gap-3 pt-10">
					{blog.map((item) => (
						<div
							className="p-6 rounded lg:p-8 lg:py-10 bg-moody-blue-400 flex flex-col gap-3 w-full justify-center items-center"
							key={item.id}
						>
							<img
								src={item.img}
								className="max-h-56 w-auto mx-auto rounded-md"
								alt=""
							/>
							<h2>{item.name}</h2>
							<p>{item.text}</p>
							<a
								className="py-2 px-4 bg-moody-blue-600 rounded-lg font-thin text-moody-blue-50 hover:scale-105 hover:bg-moody-blue-700 ease-in duration-300 mt-3"
								href={item.url}
								target="_blank"
								rel="noreferrer"
							>
								Ver Articulo
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
