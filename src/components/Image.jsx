const Image = ({ srcImg, altImg, className = "", isNeedTagImg = null }) => {
	return (
		<div className={className}>
			{isNeedTagImg && <img src={srcImg} alt={altImg} />}
		</div>
	);
};

export default Image;

// *** Second Version ***
// const Image = ({srcImg, altImg, className = "", isNeedTagImg = false}) => {
//     return isNeedTagImg ? (
//         <img src={srcImg} alt={altImg} className={className} />
//     ) : (
//         <div className={className} />
//     )
// }
// *** End of Second Version ***
