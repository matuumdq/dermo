const Presentation = () => {
	return (
		<section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
			<div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 bg-moody-blue-400 flex flex-col items-center justify-center gap-4">
				<span className="block mb-2 text-moody-blue-50 italic">
					&quot;Tu belleza es mi pasión, y mi objetivo es realzarla y
					empoderarte en cada tratamiento.&quot;
				</span>
				<h1 className="text-5xl font-extrabold">Amelia Lorenzo</h1>
				<p className="my-8">
					<span className="font-medium ">Cosmeatra. </span>
					Especializada en belleza facial.
				</p>
			</div>
			<img
				src="https://img.freepik.com/foto-gratis/mujer-procedimientos-tratamiento-belleza-salon_1303-28394.jpg?w=1380&t=st=1686085709~exp=1686086309~hmac=66eee3f5828153ba817d7216a129042f51e2297de9f01e61690984b030034db6"
				alt=""
				className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
			/>
		</section>
	);
};

export default Presentation;
