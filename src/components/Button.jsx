const Button = ({ text, className, onClick, isForm = null }) => {
	return isForm ? (
		<button
			type="submit"
			className="w-full max-w-[160px] h-[48px] font-bold text-white bg-pink-primary rounded-[5px] hover:opacity-75 active:opacity-70 transition-all duration-200 cursor-pointer"
			onClick={onClick}
		>
			{text}
		</button>
	) : (
		<a
			href="#"
			className={`relative z-50 w-full text-center font-normal rounded-full hover:opacity-75 active:opacity-70 transition-all duration-200 ${className}`}
		>
			{text}
		</a>
	);
};

export default Button;
