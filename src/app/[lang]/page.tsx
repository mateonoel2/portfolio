import { getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
	const t = await getDictionary(lang);

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="dark:invert text-4xl font-bold text-black">mnoel</div>
				<div className="text-xl text-gray-700 dark:text-gray-300">
					{t.page.desc} <i>{t.page.things}</i>
				</div>
			</main>
		</div>
	);
}
