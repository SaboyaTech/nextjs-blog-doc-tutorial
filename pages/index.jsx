import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const { headingMD } = utilStyles

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={headingMD}>
				<p>
					Hello, I'm <b>SaboyaDev</b>. I'm a Frontend Software Engineer and I
					love learning different languages. You can contact me on{' '}
					<a href='https://twitter.com'>Twitter</a>.
				</p>
				<br />
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	)
}
