import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./problem description/problemDescription";
import { Problem } from "@/utils/types/problem";
import Playground from "./playground/Playground";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

type WorkspaceProps = {
	problem:Problem
};

const Workspace: React.FC<WorkspaceProps> = ({problem}) => {

	const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);
const {width,height}=useWindowSize();
	return (
		<Split className='split' minSize={0}>
			<ProblemDescription problem={problem} _solved={solved} />
			<div className='bg-dark-fill-2'>
			<Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
			{success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
			</div>
		</Split>
	);
};
export default Workspace;