"use client";

import { useState } from "react";

export const Inc = () => {
	const [inc, setInc] = useState(0);

	return (
		<button onClick={() => setInc(inc + 1)}>Clicked {inc} times</button>
	);
};