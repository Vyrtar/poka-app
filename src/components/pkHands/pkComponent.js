import React from "react";
import PkHandsEntry from "./PkHandsEntry";
import { PokerProvider } from "./PokerContext";

const pkComponent = () => {


	return (
		<PokerProvider>
			<PkHandsEntry />
		</PokerProvider>
	)
}
export default pkComponent;