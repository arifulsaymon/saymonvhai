'use client';

import {useState} from 'react';
import type {Platform} from '@/lib/platforms';

export default function SupportForm({platform}:{platform:Platform}){
  const [email,setEmail]=useState('');
  const [issue,setIssue]=useState('');
  const [status,setStatus]=useState('');
  const [busy,setBusy]=useState(false);

  async function submit(e:React.FormEvent){
    e.preventDefault();
    setBusy(true);setStatus('Submitting request…');
    try{
      const r=await fetch('/api/requests',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({platform:platform.name,email,issue})});
      const j=await r.json();
      setStatus(j.message||'Submitted.');
      if(r.ok){setEmail('');setIssue('');}
    }catch{setStatus('Unable to submit right now. Please try again later.');}
    finally{setBusy(false)}
  }

  return <main className={`supportShell ${platform.theme}`}>
    <section className="supportCard" aria-label={`${platform.name} support request`}>
      <div className="supportBrand">
        <img className="supportLogo" src={platform.logoUrl} alt={`${platform.name} logo`}/>
        <span>{platform.name}</span>
      </div>
      <h1>Log in</h1>
      <p className="supportLead">Log in to your account.</p>
      <div className="securityLine">This is a SoHelpSocial support form. Never enter your password, OTP, recovery code, or security key.</div>
      <form onSubmit={submit} className="authLikeForm">
        <label className="srOnly" htmlFor="contact-email">Contact email</label>
        <input id="contact-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email or contact address" autoComplete="email"/>
        <label className="srOnly" htmlFor="help-details">Describe your issue</label>
        <textarea id="help-details" required value={issue} onChange={e=>setIssue(e.target.value)} placeholder="Describe what you need help with. Do not include passwords or codes."/>
        <button className="primaryAction" disabled={busy} type="submit">{busy?'Submitting…':'Continue'}</button>
      </form>
      {status&&<div className="statusMessage" role="status">{status}</div>}
      <div className="divider"><span>OR</span></div>
      <a className="officialAction" href={platform.recoveryUrl} target="_blank" rel="noreferrer">Open official {platform.name} recovery</a>
      <p className="legalCopy">SoHelpSocial is an independent support service and is not affiliated with or endorsed by {platform.name}.</p>
    </section>
  </main>
}
