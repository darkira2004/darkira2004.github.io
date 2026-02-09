import { useState } from "react";
import { createPortal } from "react-dom";
import { FaEye } from "react-icons/fa";

export default function Profile() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const cvPath = "/assets/docs/CV_Ricardo_Alexander_Villegas_Chavez.pdf";

	const handleOpenCv = (e) => {
		e.preventDefault();
		setIsModalOpen(true);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			setIsModalOpen(false);
		}
	};

	return (
		<>
			<div className="flex flex-col gap-1.5 font-inter text-white/95">
				<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold tracking-tight text-white/90 leading-tight">
					Ricardo Villegas
				</h1>

				<p className="text-base sm:text-lg lg:text-xl font-medium text-white/90 mt-1">
					Ingeniería de Sistemas
				</p>

				<p className="text-sm text-white/70 leading-relaxed mt-2 max-w-xs lg:max-w-sm">
					Desarrollador Full Stack en formación, con experiencia práctica en proyectos reales y alta disposición para aprender.
				</p>

				<button
					onClick={handleOpenCv}
					className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-emerald-400/20 ring-1 ring-inset hover:bg-emerald-400/20 transition-all w-fit mt-4 cursor-pointer"
				>
					<FaEye className="text-xs" /> Ver CV
				</button>
			</div>

			{/* MODAL */}
			{isModalOpen && createPortal(
				<div
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
					onClick={handleBackdropClick}
				>
					<div
						className="relative w-full max-w-5xl h-[85vh] flex flex-col animate-fadeIn"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute -top-10 right-0 text-white/70 hover:text-white"
						>
							✕
						</button>

						<iframe
							src={cvPath}
							className="w-full h-full rounded-md shadow-2xl bg-black/90"
							title="CV Ricardo Villegas"
						></iframe>
					</div>
				</div>,
				document.body
			)}
		</>
	);
}

