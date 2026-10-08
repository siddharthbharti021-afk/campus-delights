import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Heart, MoveUpRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CampusBackground } from '@/components/campus-background';
import { CanteenScene } from '@/components/canteen-scene';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'University Welfare — A little more campus, a lot more life' },
    { name: 'description', content: 'Celebrate the friendships, chai breaks, and shared moments that make university life. Meet the crew at our animated campus canteen.' },
    { property: 'og:title', content: 'University Welfare — Campus life, together' },
    { property: 'og:description', content: 'A place for the little moments that make university life. Join the canteen crew for chai, samosas, and good company.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  return <div className="campus-page">
    <CampusBackground />
    <header className="site-header page-width">
      <a href="#" className="wordmark" aria-label="University Welfare home"><span className="brand-symbol"><Sparkles size={22}/></span><span>university<span className="wordmark-bottom">welfare<span className="brand-period">.</span></span></span></a>
      <nav aria-label="Main navigation"><a className="nav-link" href="#canteen">Campus life</a><a className="nav-link" href="#together">Our community</a><Button asChild variant="outline" className="nav-cta"><a href="#canteen">Find your people <ArrowUpRight /></a></Button></nav>
    </header>
    <main>
      <section className="campus-hero page-width">
        <div className="hero-eyebrow"><span className="status-dot"/> FOR THE DAYS YOU’LL REMEMBER</div>
        <h1>University welfare.<br/>A little more <span className="hero-campus">campus.</span><br/>A lot more <span className="hero-life">life.<svg viewBox="0 0 180 15" aria-hidden="true"><path d="M4 10Q83-3 176 7M13 14Q84 3 158 12"/></svg></span></h1>
        <p>Beyond the lectures. Between the deadlines.<br/>Here’s to finding your people — and making campus feel like home.</p>
        <div className="hero-actions"><Button asChild size="lg"><a href="#canteen">Meet the canteen crew <ArrowUpRight /></a></Button><a className="hero-secondary" href="#together">It’s better together <Heart size={17}/></a></div>
        <div className="hero-footnote"><div className="mini-friends" aria-hidden="true"><span>☺</span><span>☺</span><span>☺</span><span>☺</span></div><span>Different courses. Same kind of chaos.</span></div>
        <span className="hero-doodle doodle-star" aria-hidden="true">✳</span><svg className="hero-doodle doodle-plane" viewBox="0 0 110 95" aria-hidden="true"><path className="doodle-trail" d="M8 88Q60 76 27 49Q5 38 11 62Q24 83 63 44"/><path d="m55 22 48-15-19 38-12-13-17-10Zm17 10 31-25-39 22m8 3-5 16 11-9"/></svg>
        <a className="scroll-cue" href="#canteen" aria-label="Scroll to the canteen"><ArrowDown size={17}/></a>
      </section>
      <section id="canteen" className="canteen-section">
        <div className="page-width">
          <div className="section-eyebrow"><span/> THE UNOFFICIAL CLASSROOM</div>
          <div className="section-heading"><div><h2>Where the real learning<br/>starts: <span>the canteen</span></h2><p>A side of samosas. A cup of chai. A lifetime of inside jokes.</p></div><div className="scene-note">Attendance optional.<br/>Good company mandatory.<svg viewBox="0 0 70 45" aria-hidden="true"><path d="M5 7Q54 5 48 36m-12-10 12 10 12-12"/></svg></div></div>
          <CanteenScene />
          <div className="scene-caption"><span><span className="live-dot"/> Somewhere on campus, right now</span><span>One bench. Four friends. Zero boring moments. <Sparkles size={14}/></span></div>
        </div>
      </section>
      <section id="together" className="together-section page-width"><div className="together-icon"><Heart/></div><div><div className="section-eyebrow">YOUR CAMPUS. YOUR PEOPLE.</div><h2>No one does university alone.</h2><p>The best part of campus isn’t a place. It’s the people you find there.</p></div><Button asChild variant="outline"><a href="#canteen">Save you a seat? <MoveUpRight/></a></Button></section>
    </main>
    <footer className="site-footer page-width"><span>university welfare<span className="brand-period">.</span></span><span>Made for the in-between moments. <Heart size={13}/></span></footer>
  </div>;
}
