import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Message from "./Message";
import Title from "./Title";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleChangeInput = (e) => setEmail(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailValue = email.trim().toLowerCase();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const isValidEmail = emailRegex.test(emailValue);

		const errorDelayTime = 2000;

		if (!isValidEmail) {
			setError(true);

			setTimeout(() => {
				setError(false);
			}, errorDelayTime);
		} else {
			setError(false);
		}
	};

	return (
		<footer className="relative z-[1] w-full min-h-[600px] flex items-center justify-center  bg-dark-primary text-white px-10 py-10 footer">
			<div className="background-footer"></div>
			<div className="w-full max-w-[1180px] flex justify-between items-center gap-[50px]">
				{/* First Block */}
				<div className="relative z-50 w-full max-w-[340px] footer-block-01">
					<Logo classes={"footer-logo"} />
					<Message
						text={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem."
						}
						className={"font-semibold text-sm leading-[24px] my-6"}
					/>

					<div className="w-fit flex gap-4 mb-4 hover-state">
						{" "}
						<i className="fa-solid fa-phone-volume text-2xl"></i>
						<a
							href="tel:+15431234567"
							className="font-normal text-base leading-[24px]"
						>
							Phone: +1-543-123-4567
						</a>
					</div>
					<div className="w-fit flex gap-4 hover-state">
						{" "}
						<i className="fa-solid fa-envelope text-2xl"></i>
						<a
							href="mailto:example@huddle.com"
							className="font-normal text-base leading-[24px]"
						>
							example@huddle.com
						</a>
					</div>

					<ul className="w-fit flex gap-4 mt-20">
						<li>
							<a href="" className="text-[32px] hover-state">
								<i className="fa-brands fa-square-facebook"></i>
							</a>
						</li>
						<li>
							<a href="" className="text-[32px] hover-state">
								<i className="fa-brands fa-instagram"></i>
							</a>
						</li>
						<li>
							<a href="" className="text-[32px] hover-state">
								<i className="fa-brands fa-square-twitter"></i>
							</a>
						</li>
					</ul>
				</div>
				{/* End of First Block */}
				{/* Second Block */}
				<div className="relative z-50 w-full max-w-[520px] self-start footer-block-02">
					<Title isFooter={true} />
					<Message
						text={
							"to recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address"
						}
						className={
							"max-w-[344px] font-semibold text-sm leading-[24px] my-4"
						}
					/>

					<form
						className="relative w-full flex justify-between gap-5 mt-10"
						autoComplete="off"
						noValidate
						onSubmit={handleSubmit}
					>
						<label htmlFor="email" className="sr-only">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							value={email}
							placeholder="Email Address"
							className={`w-full max-w-[320px] h-[48px] bg-white text-neutral-950 rounded-[5px] transition-colors duration-300 pl-2.5 outline-2  hover:outline-pink-primary  placeholder:text-neutral-700 ${
								error
									? "outline-red-primary"
									: "outline-transparent"
							}`}
							onChange={handleChangeInput}
							aria-invalid={error ? "true" : "false"}
							aria-describedby="email-error"
						/>

						{/* First Way - Condition Render */}
						{/* {error && (
							<Message
                                id={"email-error"}
								text={"Check your email please"}
								className={
									"absolute -bottom-6 font-semibold text-xs leading-[24px] text-red-primary transition-opacity duration-300"
								}
							/>
						)} */}
						{/* End of First Way - Condition Render */}

						{/* Second Way - Opacity Animation Toggle (Vanilla Style, my preferred 😂) */}
						<Message
							id={"email-error"}
							text={"Check your email please"}
							className={`absolute -bottom-6 font-semibold text-xs leading-[24px] text-red-primary transition-opacity duration-300 error-message ${
								error ? "opacity-100" : "opacity-0 "
							}`}
						/>
						{/* End of  Second Way - Opacity Animation Toggle (Vanilla Style, my preferred 😂) */}

						<Button text={"Subscribe"} isForm={true} />
					</form>
				</div>
			</div>

			{/* End of Second Block */}
		</footer>
	);
};

export default Footer;

// *** Describe ***
// No extra components - footer content is project-specific and not reused, I'm contented 🤣
// *** End of Describe ***
