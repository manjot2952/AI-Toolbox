import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/70 dark:bg-slate-950 dark:border-slate-800 px-6 py-10">
      <div className="mx-auto max-w-7xl space-y-10 text-slate-700 dark:text-slate-300">
        <div className="grid gap-8 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.32em] text-indigo-600 font-semibold">AI Toolbox</p>
            <p className="max-w-sm text-slate-500 dark:text-slate-400">
              Discover, compare, and save the best AI tools for productivity, creativity, and growth — all in one premium hub.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Product</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>Discover</li>
              <li>Categories</li>
              <li>Favorites</li>
              <li>Insights</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Help center</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Stay connected</h3>
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
              <Github className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/80 dark:border-slate-800 pt-6 text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} AI Toolbox. Crafted for modern teams and creative builders.
        </div>
      </div>
    </footer>
  );
}
