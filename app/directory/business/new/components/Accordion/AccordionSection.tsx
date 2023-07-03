import React, { useState } from "react";
import AccordionHeader from "./AccordionHeader";
import AccordionPanel from "./AccordionPanel";
import { SectionProps } from "./AccordionTypes";

const AccordionSection = ({
	id,
	title,
	ariaSection,
	children,
}: SectionProps) => {
	// State handles hidden/shown UI property
	const [active, setActive] = useState(false);

	return (
		<>
			<AccordionHeader
				id={id}
				title={title}
				ariaSection={ariaSection}
				onClick={() => setActive((prev) => !prev)}
			/>
			<AccordionPanel
				id={ariaSection}
				ariaLabel={id}
				hidden={active ? true : false}>
				{children}
			</AccordionPanel>
		</>
	);
};

export default AccordionSection;
