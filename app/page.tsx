"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-800 font-sans">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center text-center py-24 px-6">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-no-repeat opacity-10" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-sm uppercase tracking-[0.4em] text-gray-500"
        >
          Break Through Procrastination
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          Unrot is your AI-powered <br />
          <span className="text-black">learning companion.</span>
        </motion.h1>

        <p className="text-gray-500 max-w-2xl mb-8">
          Personalized guidance, interactive lessons, and a zero-excuses
          approach to help you conquer procrastination and reach every learning
          goal.
        </p>

        <div className="flex gap-4 justify-center mb-10">
          <Image
            src="/appstore.svg"
            alt="Download Unrot on the App Store"
            width={140}
            height={45}
            className="cursor-pointer"
          />
        <Image
            src="/playstore.svg"
            alt="Get Unrot on Google Play"
            width={140}
            height={45}
            className="cursor-pointer"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[280px] md:w-[320px]"
        >
          <Image
            src="/luxique-phone.png"
            alt="Unrot mobile learning experience preview"
            width={320}
            height={640}
            className="drop-shadow-2xl rounded-3xl"
          />
        </motion.div>
      </section>

      {/* ===== FEATURE SECTION ===== */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-4xl">
            Personalized learning that adapts to you
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
            Unrot keeps you motivated with AI guidance, interactive content, and
            trackable progress so every study session counts.
          </p>
        </div>

        <div className="mx-auto mt-14 grid gap-6 md:grid-cols-2 xl:max-w-6xl">
          {[
            {
              title: "AI-powered personalized learning paths",
              description:
                "Let Unrot's AI understand your goals, strengths, and habits to build a learning journey that fits your life.",
            },
            {
              title: "Interactive lessons and quizzes",
              description:
                "Stay engaged with dynamic lessons, instant feedback, and challenges that make complex topics stick.",
            },
            {
              title: "Progress tracking and analytics",
              description:
                "Monitor streaks, milestones, and mastery levels so you always know where you stand and what's next.",
            },
            {
              title: "Gamified learning experience",
              description:
                "Earn badges, level up, and compete with friends-turning consistency into a rewarding habit.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-[28px] border border-white/90 bg-[#f8f6ff] p-8 shadow-[0_35px_80px_-60px_rgba(86,69,255,0.55)]"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
     
      {/* ===== STEPS SECTION ===== */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f5f0ff] via-[#fff8ef] to-white" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
                Simple steps to stay accountable and keep learning
              </h2>
              <p className="max-w-lg text-gray-600">
                Break big goals into daily wins. Unrot guides you through each
                phase so you&apos;re never guessing what to learn next-and never
                tempted to procrastinate.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  step: "01",
                  title: "Set crystal-clear goals",
                  desc: "Define the skills you want to master and the timeline you're aiming for with guided prompts.",
                },
                {
                  step: "02",
                  title: "Get an AI-powered plan",
                  desc: "Receive a personalized learning path that adapts to your pace, strengths, and schedule.",
                },
                {
                  step: "03",
                  title: "Learn through interactive sessions",
                  desc: "Dive into bite-sized lessons, hands-on exercises, and quizzes engineered to keep you engaged.",
                },
                {
                  step: "04",
                  title: "Track and celebrate progress",
                  desc: "Stay motivated with analytics, streaks, and reminders that highlight how far you've come.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative overflow-hidden rounded-[28px] border border-white/90 bg-white/80 p-6 shadow-[0_35px_80px_-55px_rgba(86,69,255,0.55)] backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#efe9ff] text-sm font-semibold text-[#6353d9]">
                      {item.step}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 lg:items-end">
            <p className="max-w-md text-center text-gray-600 lg:text-right">
              Stay consistent with smart nudges, deep insights, and daily wins
              right from the Unrot app.
            </p>
            <div className="relative flex w-full max-w-sm justify-end">
              <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#f7f2ff] via-[#fef5ec] to-white blur-2xl" />
              <Image
                src="/mobile.png"
                alt="Unrot accountability path on mobile"
                width={320}
                height={640}
                className="relative z-10 rounded-[36px] shadow-[0_45px_90px_-50px_rgba(85,70,210,0.55)]"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_35px_-20px_rgba(0,0,0,0.55)] transition hover:bg-gray-800">
              Start Learning
            </button>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 rounded-[40px] bg-[#f4f2ff] px-8 py-16 shadow-[0_45px_100px_-70px_rgba(86,69,255,0.55)] lg:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-[40px]">
                Customer reviews and feedback from real users.
              </h2>
              <p className="text-gray-600">
                Learners around the world trust Unrot to stay consistent,
                motivated, and accountable on their path to mastery.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-gray-800 shadow-[0_20px_30px_-25px_rgba(0,0,0,0.45)] transition hover:bg-gray-100">
                ←
              </button>
              <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-gray-800 shadow-[0_20px_30px_-25px_rgba(0,0,0,0.45)] transition hover:bg-gray-100">
                →
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Robert Mason",
                role: "Product Designer & Lifelong Learner",
                rating: 5,
                feedback:
                  "Unrot keeps me accountable every day. The AI plan adjusts to my schedule and the lessons are actually fun. I've completed more courses in two months than I did all last year.",
                initials: "RM",
              },
              {
                name: "William Blake",
                role: "Software Engineer",
                rating: 5,
                feedback:
                  "The interactive quizzes and progress analytics help me spot gaps instantly. Unrot turns studying into a game-I keep coming back because I want to see my streak grow.",
                initials: "WB",
              },
            ].map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col gap-5 rounded-[32px] bg-white p-8 shadow-[0_30px_70px_-60px_rgba(86,69,255,0.55)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#efe9ff] via-white to-[#dcd3ff] text-sm font-semibold text-[#5e4fff]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#f7b500]">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {testimonial.feedback}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOWNLOAD SECTION ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 rounded-[48px] bg-[#f6f3ff] px-10 py-16 shadow-[0_45px_90px_-60px_rgba(86,69,255,0.55)] lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div className="max-w-xl space-y-8 text-left">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
              Ready to unrot your learning?
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-4xl font-semibold leading-tight text-gray-900 md:text-[42px]">
                Download
                <br />
                Mobile App
              </h2>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-[0_20px_40px_-25px_rgba(0,0,0,0.65)]">
                ↓
              </span>
            </div>
            <p className="text-base leading-relaxed text-gray-600">
              Get AI-powered guidance, interactive lessons, and accountability
              tools that keep your learning goals non-negotiable.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="/appstore.svg"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="cursor-pointer drop-shadow-[0_20px_30px_-25px_rgba(0,0,0,0.45)]"
              />
              <Image
                src="/playstore.svg"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="cursor-pointer drop-shadow-[0_20px_30px_-25px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          <div className="relative mx-auto flex max-w-[360px] justify-center lg:mx-0">
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />
            <Image
              src="/mobile.png"
              alt="Unrot mobile app preview"
              width={360}
              height={640}
              className="relative z-10 -rotate-6 rounded-[40px] shadow-[0_55px_110px_-60px_rgba(86,69,255,0.55)]"
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 border-t text-center text-sm text-gray-500">
        <p>©2025 Unrot. All rights reserved.</p>
      </footer>
      </main>
  );
}
