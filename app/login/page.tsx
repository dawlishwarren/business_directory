import AuthForm from "./auth-form";

export default function Page() {
	return (
		<section>
			<div className="container">
				<h1>Login</h1>
				<h6>Enter the Admin Email and Password to edit the directory.</h6>
				<AuthForm />
				<h6>
					Once logged in, simply select 'Logout' in the top right corner to log
					back out.
				</h6>
			</div>
		</section>
	);
}
