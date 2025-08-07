import Image from "./Image";
import Message from "./Message";
import Title from "./Title";
import Button from "./Button";

const Main = () => {
	return (
		<main className="w-full flex flex-col gap-10 items-center bg-white pt-[280px] pb-[140px] ">
			{/* Grow Together Section */}
			<section className="relative z-[1] w-full flex items-center justify-center bg-light-primary  py-20 px-10">
				<Image className={"background-image-01"} />

				<div className="w-full max-w-[1180px] flex justify-between items-center gap-[100px]">
					<div className="w-full max-w-[488px]">
						<Title text={"Grow Together"} />
						<Message
							text={
								"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
							}
							className={"opacity-60 pt-4"}
						/>
					</div>
					<Image
						isNeedTagImg={true}
						srcImg={"./images/illustration-grow-together.svg"}
						altImg={"Illustration grow together svg icon"}
						className={"max-w-[440px]"}
					/>
				</div>

				<Image className={"background-image-02"} />
			</section>
			{/* End of Grow Together Section */}

			{/* Flowing Conversations Section */}
			<section className="w-full flex items-center justify-center bg-white my-[120px]  py-20 px-10">
				<div className="w-full max-w-[1180px] flex justify-between items-center gap-[100px]">
					<div className="w-full max-w-[488px] order-2">
						<Title text={"Flowing Conversations"} />
						<Message
							text={
								"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
							}
							className={"opacity-60 pt-4"}
						/>
					</div>
					<Image
						isNeedTagImg={true}
						srcImg={
							"./images/illustration-flowing-conversation.svg"
						}
						altImg={"Illustration flowing Conversations svg icon"}
						className={"max-w-[440px] order-1"}
					/>
				</div>
			</section>
			{/* End of Flowing Conversations Section */}

			{/* Your Users Section */}
			<section className="relative z-[1] w-full flex items-center justify-center bg-light-primary  py-20 px-10">
				<Image className={"background-image-03"} />

				<div className="w-full max-w-[1180px] flex justify-between items-center gap-[100px]">
					<div className="w-full max-w-[488px]">
						<Title text={"Your Users"} />
						<Message
							text={
								"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately"
							}
							className={"opacity-60 pt-4"}
						/>
					</div>
					<Image
						isNeedTagImg={true}
						srcImg={"./images/illustration-your-users.svg"}
						altImg={"Illustration your users svg icon"}
						className={"max-w-[440px]"}
					/>
				</div>

				<Image className={"background-image-04"} />
			</section>
			{/* End of Your Users Section */}

			{/* Ready Community (CTA) */}
			<section className="w-full flex flex-col items-center justify-center bg-white my-[120px] py-20 px-10">
				<Title
					text={"Ready To Build Your Community"}
					isLastSection={true}
				/>
				<Button
					text={"Get Started For Free"}
					className={
						"inline-block max-w-[400px] h-[80px]  bg-pink-primary text-white leading-[80px] font-bold text-xl text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-8"
					}
				/>
			</section>
			{/* End of Ready Community (CTA) */}
		</main>
	);
};

export default Main;
