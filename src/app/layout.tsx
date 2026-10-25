import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = {title:'SulitFind | Smarter Shopping PH',description:'Discover curated Philippines-first affordable products and compare purchasing options.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<footer><p>Sample data only. Some future links may earn us affiliate commissions.</p></footer></body></html>}
