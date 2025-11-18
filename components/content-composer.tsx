"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateAgenticContent } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { platforms, languagePresets, pacingPresets } from "@/lib/data";
import type { GeneratedContent } from "@/lib/generator";
import { cn } from "@/lib/utils";
import { Sparkles, Loader2, Copy, Share2 } from "lucide-react";

const initialState: GeneratedContent | null = null;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="mt-6 w-full md:w-auto" disabled={pending}>
      {pending ? (
        <span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Synthesizing virality...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Generate Viral Blueprint
        </span>
      )}
    </Button>
  );
}

const SectionLabel = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex flex-col">
    <span className="text-xs uppercase tracking-[0.32em] text-white/60">{title}</span>
    <span className="text-sm text-white/70">{subtitle}</span>
  </div>
);

const FieldGroup = ({
  label,
  description,
  children
}: {
  label: string;
  description: string;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
    <span className="text-base font-semibold text-white">{label}</span>
    <span className="text-xs uppercase tracking-[0.42em] text-white/40">{description}</span>
    {children}
  </label>
);

const copyToClipboard = async (content: string) => {
  try {
    await navigator.clipboard.writeText(content);
  } catch (error) {
    console.error("Clipboard copy failed", error);
  }
};

const CopyChip = ({ label, text }: { label: string; text: string }) => (
  <button
    type="button"
    onClick={() => copyToClipboard(text)}
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/20"
  >
    <Copy className="h-3.5 w-3.5" />
    {label}
  </button>
);

const ResultCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="card-border rounded-3xl bg-[#030712]/80 p-6 shadow-[0_24px_72px_rgba(3,7,18,0.7)]">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-col gap-3 text-sm text-white/85">{children}</div>
  </div>
);

export const ContentComposer = () => {
  const [state, formAction] = useFormState(generateAgenticContent, initialState);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-24 pt-12">
      <form
        action={formAction}
        className="card-border grid gap-6 rounded-3xl bg-[#030712]/70 p-8 shadow-[0_30px_120px_rgba(2,6,23,0.65)] backdrop-blur-xl md:grid-cols-2"
      >
        <div className="md:col-span-2 flex items-center justify-between">
          <SectionLabel title="Input Stack" subtitle="Feed the agent with context" />
          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Viral in 60 seconds
          </span>
        </div>

        <FieldGroup label="Niche Heat" description="What arena are we dominating?">
          <input
            name="niche"
            defaultValue="Creator economy growth hacks"
            placeholder="Example: Viral fintech automation"
            required
            className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-base text-white outline-none transition focus:border-primary"
          />
        </FieldGroup>

        <FieldGroup label="Audience Persona" description="Who's obsessing over this?">
          <input
            name="audience"
            defaultValue="New-age content creators"
            placeholder="Example: Ambitious solopreneurs"
            required
            className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-base text-white outline-none transition focus:border-secondary"
          />
        </FieldGroup>

        <FieldGroup label="Promise / Payoff" description="What's the transformation?">
          <input
            name="promise"
            defaultValue="Explode reach without ad spend"
            placeholder="Example: Close 5 clients weekly"
            required
            className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-base text-white outline-none transition focus:border-primary"
          />
        </FieldGroup>

        <FieldGroup label="Objection / Drama" description="What's the doubt or controversy?">
          <input
            name="objection"
            defaultValue="Short-form is dead in 2024"
            placeholder="Example: Audience is bored of reels"
            required
            className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-base text-white outline-none transition focus:border-secondary"
          />
        </FieldGroup>

        <div className="grid gap-4 md:grid-cols-3 md:col-span-2">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-white">Platform Mode</span>
            <span className="text-xs uppercase tracking-[0.32em] text-white/40">Optimize for reach</span>
            <select
              name="platform"
              defaultValue="instagram"
              className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-sm text-white outline-none"
            >
              {platforms.map((platform) => (
                <option key={platform.value} value={platform.value} className="text-slate-900">
                  {platform.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-white">Language Vibe</span>
            <span className="text-xs uppercase tracking-[0.32em] text-white/40">Pick your tone</span>
            <select
              name="language"
              defaultValue="hinglish"
              className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-sm text-white outline-none"
            >
              {Object.entries(languagePresets).map(([key, preset]) => (
                <option key={key} value={key} className="text-slate-900">
                  {preset.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-white">Pacing</span>
            <span className="text-xs uppercase tracking-[0.32em] text-white/40">Runtime energy</span>
            <select
              name="pacing"
              defaultValue="30"
              className="rounded-2xl border border-white/10 bg-[#050b1a] px-4 py-3 text-sm text-white outline-none"
            >
              {Object.entries(pacingPresets).map(([key, preset]) => (
                <option key={key} value={key} className="text-slate-900">
                  {preset.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <SubmitButton />
        </div>
      </form>

      {state ? (
        <div className="grid gap-6 lg:grid-cols-2">
          <ResultCard title="Hooks that Freeze the Scroll">
            <div className="flex flex-col gap-2">
              {state.hooks.map((hook, idx) => (
                <p key={idx} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white">
                  {hook}
                </p>
              ))}
            </div>
            <CopyChip label="Copy Hooks" text={state.hooks.join("\n")} />
          </ResultCard>

          <ResultCard title="60s Viral Script Blueprint">
            <p className="text-xs uppercase tracking-[0.32em] text-primary">{state.hookStyle}</p>
            <div className="flex flex-col gap-2">
              {state.script.map((line, idx) => (
                <p key={idx} className="rounded-2xl border border-white/5 bg-white/10 px-4 py-2 leading-normal">
                  {idx + 1}. {line}
                </p>
              ))}
            </div>
            <CopyChip label="Copy Script" text={state.script.join("\n")} />
          </ResultCard>

          <ResultCard title="Caption Crafted for Shares">
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-medium text-white">
              {state.caption}
            </p>
            <CopyChip label="Copy Caption" text={state.caption} />
          </ResultCard>

          <ResultCard title="SEO + Reach Stack">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/40">Trending Hashtags</p>
                <p className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                  {state.hashtags.join(" ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/40">Keyword Targets</p>
                <p className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.32em]">
                  {state.keywords.join(" · ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/40">Thumbnail Text</p>
                <p className="mt-2 whitespace-pre-wrap rounded-2xl border border-white/10 bg-gradient-to-br from-primary/80 to-secondary/40 px-4 py-6 text-center font-display text-2xl font-black tracking-tight text-black">
                  {state.thumbnailText}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <CopyChip label="Copy Hashtags" text={state.hashtags.join(" ")} />
              <CopyChip label="Copy Keywords" text={state.keywords.join(", ")} />
              <CopyChip label="Copy Thumbnail" text={state.thumbnailText} />
            </div>
          </ResultCard>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center text-white/80">
          <Share2 className="h-12 w-12 text-white/60" />
          <p className="max-w-xl text-lg font-medium">
            Feed Viral Content Agent 1.0 with your niche, audience and promise. It will spit out hooks, scripts, captions, hashtags, keywords and thumb text engineered for wild retention and share rate.
          </p>
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Make your next short-form banger in one click.</p>
        </div>
      )}
    </section>
  );
};
