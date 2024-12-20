export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="dark:invert text-4xl font-bold text-black">mnoel</div>
				<div className="text-xl text-gray-700 dark:text-gray-300">
					Hola soy mnoel y en este lugar voy a desarrollar <i>cosas</i>
				</div>
			</main>
		</div>
	);
}
