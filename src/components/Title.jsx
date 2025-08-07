const Title = ({
	isHeader = null,
	isFooter = null,
	text = "Ready To Build Your Community?",
}) => {
	if (isHeader) {
		// *** Header ***
		return (
			<h1 className="font-bold text-[48px] leading-[72px]">
				Build The Community Your Fans Will Love
			</h1>
		);
	} else if (isFooter) {
		// *** Footer ***
		return (
			<h3 className="font-bold text-2xl leading-[36px] uppercase text-white">
				Newsletter
			</h3>
		);
	} else {
		// *** Main - Sections ***
		return <h2 className="font-bold text-[40px] leading-[60px]">{text}</h2>;
	}
};

export default Title;
