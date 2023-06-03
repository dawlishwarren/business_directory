import { Fragment } from "react";

export default function Page() {
	return (
		<Fragment>
			<h1>Hello, Directory Page!</h1>
			<div className="card">
				<h3>Card</h3>
				<h5 className="secondary">Secondary</h5>
				<p className="disabled">Disabled</p>
				<div className="error">ERROR</div>
			</div>
		</Fragment>
	);
}
