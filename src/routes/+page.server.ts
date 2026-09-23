import type { PageServerLoad } from './$types';

const commitsUrl = 'https://api.github.com/repos/AdrienTrahan/site/commits';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch(commitsUrl);
		if (!response.ok) return { latestUpdate: undefined };

		const commits = await response.json();
		const latestCommit = commits.find(
			(commit: any) => !commit?.commit?.message?.toUpperCase().includes('CV')
		);

		return { latestUpdate: latestCommit?.commit?.committer?.date };
	} catch {
		return { latestUpdate: undefined };
	}
};
