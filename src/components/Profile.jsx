import { FaDownload } from "react-icons/fa";

export default function Profile() {
	return (
		<div className="flex flex-col gap-2 mb-2 ml-3 sm:ml-5 font-inter text-slate-100 mt-5">

			<h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-200">
				Ricardo Villegas
			</h1>

			<p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 mb-2">
				Ingeniería de Sistemas
			</p>

			<p className="text-sm sm:text-md text-slate-400 leading-relaxed mb-2 max-w-xs sm:max-w-sm">
				Desarrollador Full Stack en formación, con experiencia práctica en proyectos reales y alta disposición para aprender.
			</p>

			<a
				href="/assets/docs/CV_Ricardo_Alexander_Villegas_Chavez.pdf"
				download
				className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium bg-emerald-400/10 text-emerald-300 ring-emerald-400/20 ring-1 ring-inset hover:bg-emerald-400/20 transition-all w-fit mt-2"
			>
				<FaDownload className="text-xs" /> Descargar CV
			</a>

		</div>
	);
}
