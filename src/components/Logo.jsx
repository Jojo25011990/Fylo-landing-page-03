const Logo = ({ classes = "" }) => {
	return (
		<div className="w-full max-w-[200px]">
			<img
				src="./images/logo.svg"
				alt="Huddle Logo"
				className={classes}
			/>
		</div>
	);
};

export default Logo;
