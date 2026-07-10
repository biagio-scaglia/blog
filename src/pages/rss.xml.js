import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const siteUrl = context.site ? context.site.toString().replace(/\/$/, '') : 'https://biagiocyberspace.it';

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		xmlns: {
			media: 'http://search.yahoo.com/mrss/'
		},
		customData: `<image>
			<url>${siteUrl}/social_share_preview.png</url>
			<title>${SITE_TITLE}</title>
			<link>${siteUrl}/</link>
		</image>`,
		items: sortedPosts.map((post) => {
			const coverImage = post.data.cover || post.data.heroImage;
			const imageUrl = coverImage ? (typeof coverImage === 'string' ? coverImage : coverImage.src) : null;
			let absoluteImageUrl = `${siteUrl}/social_share_preview.png`;
			if (imageUrl) {
				if (imageUrl.startsWith('http')) {
					absoluteImageUrl = imageUrl;
				} else {
					absoluteImageUrl = siteUrl + (imageUrl.startsWith('/') ? '' : '/') + imageUrl;
				}
			}

			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `${import.meta.env.BASE_URL}blog/${post.id}/`,
				customData: `<enclosure url="${absoluteImageUrl}" length="0" type="image/png" />
					<media:content url="${absoluteImageUrl}" medium="image" type="image/png" />`
			};
		}),
	});
}
