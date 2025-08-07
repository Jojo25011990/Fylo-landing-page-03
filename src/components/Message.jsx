const Message = ({ text, className = "", id = null }) => {
	return (
		<p id={id} className={className}>
			{text}
		</p>
	);
};

export default Message;
