import Navbar from "@/components/navbar/navbar";
import AuthModal from "@/components/modals/authModal";
import { useContext } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtoms";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import { useEffect } from "react";
type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
	const authModal=useRecoilValue(authModalState);
	const [user, loading, error] = useAuthState(auth);
	const [pageLoading, setPageLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		if (user) router.push("/");
		if (!loading && !user) setPageLoading(false);
	}, [user, router,loading]);
	if (pageLoading) return null;
	return (
		<div className='bg-gradient-to-r from-sky-950 to-cyan-800 h-screen relative'>
			<div className='max-w-7xl mx-auto'>
				<Navbar />
				<div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					<div className="flex-col items-center justify-center">
						<div>
					<p className="pb-6 text-center text-2xl font-bold text-white">Enhance your skills.Expand your knowledge.Prepare for 
						technical interviews.</p>
						</div>
					<Image src='/zcoderbg.png' alt='' width={1050} height={1050} />
					</div>
				</div>
				{authModal.isOpen&&<AuthModal/>}
			</div>
		</div>
	);
};
export default AuthPage;