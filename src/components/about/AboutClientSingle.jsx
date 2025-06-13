const AboutClientSingle = ({ title, image }) => {
	return (
		<div className="flex justify-center items-center h-32 w-32 md:h-48 md:w-48 py-5 px-5 sm:px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer">
			<img
				src={image}
				className="w-full h-full object-contain"
				alt={title}
			/>
		</div>
	);
};

export default AboutClientSingle;
