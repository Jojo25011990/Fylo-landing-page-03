import Logo from "./Logo";
import Button from "./Button";
import Title from "./Title";
import Message from "./Message";
import Image from "./Image";

const Header = () => {
	return (
		<header className="w-full flex flex-col justify-center items-center bg-white px-10 pt-20 gap-[225px]">
			<nav className="w-full max-w-[1280px] flex justify-between items-center gap-10">
				<Logo />

				<Button
					text={"Try it free"}
					className={
						"max-w-[136px] bg-white text-pink-primary  leading-[40px] text-sm text-center outline outline-pink-primary hover:bg-pink-primary hover:text-white"
					}
				/>
			</nav>

			<section className="w-full max-w-[1017px] flex flex-col items-center gap-[120px]">
				<div className="w-full text-center">
					<Title isHeader={true} />
					<Message
						text={
							"Huddle re-images the way we guild communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
						}
						className={
							"max-w-[600px] font-normal text-xl leading-[30px] mx-auto mt-[26px] mb-[49px] header-description"
						}
					/>
					<Button
						text={"Get Started For Free"}
						className={
							"block max-w-[400px] h-[80px]  mx-auto text-neutral-50 bg-pink-primary leading-[80px] text-center text-xl font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
						}
					/>
				</div>

				<Image
					srcImg={"./images/screen-mockups.svg"}
					altImg={"Illustration Mockups Svg Icon"}
				/>

				<div className="w-full max-w-[880px] flex justify-between gap-10">
					{/* 1.4k+ Communities */}
					<div>
						<Image
							srcImg={"./images/icon-communities.svg"}
							altImg={"Icon Communities SVG"}
							className={"center-image"}
						/>
						<Message
							text={"1.4k+"}
							className={
								"font-bold text-8xl leading-[144px] first-paragraph"
							}
						/>
						<Message
							text={"Communities Formed"}
							className={
								"text-gray-primary text-2xl leading-[36px] second-paragraph"
							}
						/>
					</div>
					{/* End of 1.4k+ Communities */}

					{/* 2.7m+ Messages */}
					<div>
						<Image
							srcImg={"./images/icon-messages.svg"}
							altImg={"Icon Messages SVG"}
							className={"center-image"}
						/>
						<Message
							text={"2.7m+"}
							className={
								"font-bold text-8xl leading-[144px] first-paragraph"
							}
						/>
						<Message
							text={"Messages Sent"}
							className={
								"text-gray-primary text-2xl leading-[36px] second-paragraph"
							}
						/>
					</div>
					{/* End of 2.7m+ Messages */}
				</div>
			</section>
		</header>
	);
};

export default Header;
