import Link from 'next/link';
import {platforms} from '@/lib/platforms';

export default function Home(){
  return <main className="container homeContainer">
    <section className="hero">
      <div className="eyebrow">SOHELPSOCIAL</div>
      <h1>Social account<br/>support center</h1>
      <p>Choose a platform and submit a support request. We never ask for or store passwords, passcodes, OTPs, or recovery codes.</p>
    </section>
    <div className="grid">{platforms.map(p=><Link className="card" href={'/'+p.slug} key={p.slug}>
      <img className="logo" src={p.logoUrl} alt=""/>
      <h3>{p.name}</h3>
      <p className="muted">{p.description}</p>
      <span className="btn secondary">Get help →</span>
    </Link>)}</div>
    <div className="footer">SOHELPSOCIAL · Independent account support · Never share your password with support staff.</div>
  </main>
}
