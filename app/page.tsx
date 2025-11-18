import { ContentComposer } from "@/components/content-composer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-x-0 top-10 mx-auto h-72 w-[40rem] rounded-full bg-primary/30 blur-[160px]" />
        <div className="absolute inset-x-0 top-1/2 mx-auto h-96 w-[50rem] -translate-y-1/2 rounded-full bg-secondary/20 blur-[200px]" />
      </div>

      <header className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 pt-20 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
          Viral Content Agent 1.0
        </span>
        <h1 className="text-glow font-display text-4xl leading-tight text-white sm:text-6xl">
          Drop your niche. Get viral hooks, scripts, captions + hashtags engineered for share storms.
        </h1>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          Built for Instagram Reels, YouTube Shorts, TikTok and Facebook. Trend-aware, controversy-primed, emotion-charged. Every output finishes with a CTA & share trigger.
        </p>
      </header>

      <ContentComposer />
    </main>
  );
}
