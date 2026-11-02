export const SITE_TITLE = 'Biagio Cyberspace';
export const SITE_DESCRIPTION = "Biagio Scaglia's personal blog: full-stack developer, UX/UI designer, and lover of the retro web.";

/** Hand-edit this block when your "now" status changes — used by the sidebar Now widget. */
export const NOW = {
	building: 'Biagio Cyberspace polish + Frutiger-JS vibes',
	playing: 'Retroid Pocket Nova (PS2 / GameCube library)',
	listening: 'Daft Punk — One More Time',
	updatedLabel: 'Nov 2, 2026',
};

export const PROJECTS = [
	{
		id: 'homurajs',
		name: 'HomuraJS',
		tagline: 'Non-destructive DAG time-travel state engine',
		stack: 'TypeScript · React · Vue · WordPress',
		status: 'Released',
		url: 'https://biagio-scaglia.github.io/homura-js/',
		repo: 'https://github.com/biagio-scaglia/homura-js',
	},
	{
		id: 'moon-inferno',
		name: 'Moon-Inferno',
		tagline: 'Accessibility-first React UI for retro / Y2K / CRT apps',
		stack: 'React · TypeScript · WCAG 2.1 AA',
		status: 'Released',
		url: 'https://biagio-scaglia.github.io/moon-inferno/',
		repo: 'https://github.com/biagio-scaglia/moon-inferno',
	},
	{
		id: 'yumia-md',
		name: 'Yumia-MD',
		tagline: 'Presentations-as-code → PPTX, PDF & HTML',
		stack: 'TypeScript · OpenXML · PDF',
		status: 'Released',
		url: 'https://biagio-scaglia.github.io/Yumia-MD/',
		repo: 'https://github.com/biagio-scaglia/Yumia-MD',
	},
	{
		id: 'kawaijs',
		name: 'KawaiJS',
		tagline: 'Web-native visual novel engine (.kawa scripts)',
		stack: 'TypeScript · CSS UI · HTML5 export',
		status: 'Released',
		url: 'https://biagio-scaglia.github.io/KawaiJS/',
		repo: 'https://github.com/biagio-scaglia/KawaiJS',
	},
	{
		id: 'frutiger-js',
		name: 'Frutiger-JS',
		tagline: 'CSS framework for Frutiger Aero nostalgia',
		stack: 'CSS · Frutiger Aero · Y2K',
		status: '★ 10 stars',
		url: 'https://github.com/biagio-scaglia/frutiger-js',
		repo: 'https://github.com/biagio-scaglia/frutiger-js',
	},
	{
		id: 'vellum',
		name: 'Vellum - RPG Companion',
		tagline: 'Mobile character sheet & campaign assistant',
		stack: 'React Native',
		status: 'In development',
		url: '',
		repo: '',
	},
] as const;
