import React from "react";
import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools';

const Newsletter = () => {
	const {
		handleSubmit,
		reset,
		register,
		control,
		formState: { errors },
	} = useForm();

	const formSubmitHandler = (data) => {
		console.log("Form Submitted", data);
		reset();
	};

	return (
		<section id="newsletter" aria-labelledby="Newsletter">
			<div className="container">
				<div className="newsletter-wrapper">
					<h2>
						Subscribe Our <br /> <strong>Newsletter</strong> to Get New <br /> Updates.{" "}
					</h2>

					<form className="newsletter-email" onSubmit={handleSubmit(formSubmitHandler)}>
						<label htmlFor="newsEmail">Email</label>
						<input
							type="email"
							id="newsEmail"
							placeholder="Enter your email..."
							{...register("newsEmail", {
								required: {
									value: true,
									message: "Email is Required!",
								},
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Invalid email format!",
								},
							})}
						/>

						<button type="submit" className="btn-submit">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
								<path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
							</svg>
						</button>
						<p className="form-error"> {errors.newsEmail?.message}</p>
					</form>
					{/* <DevTool control={control} /> */}
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
