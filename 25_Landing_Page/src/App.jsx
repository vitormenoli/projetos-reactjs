import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Menu, Sparkles, Star, X, Zap } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);
  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Gerente de Marketing",
      photo: "https://i.pravatar.cc/150?img=47",
      quote: "Nossa taxa de conversão dobrou depois que lançamos a nova landing page. Simplesmente sensacional!",
    },
    {
      name: "Lucas Pereira",
      role: "Fundador",
      photo: "https://i.pravatar.cc/150?img=12",
      quote: "Design limpo e performance incrível — recomendo para todo empreendedor que precisa de resultados rápidos.",
    },
    {
      name: "Marcelo Rodrigues",
      role: "Designer de UX",
      photo: "https://i.pravatar.cc/150?img=65",
      quote: "Ferramenta intuitiva e com templates modernos. Consegui prototipar e publicar em poucas horas.",
    },
  ];

  return (
    <div className="bg-slate-950 text-shadow-slate-100 selection:bg-fuchsia-500/30">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white">
        <div className="mx-auto max-w-6xl py-4 flex items-center justify-between bg-slate-900/50 backdrop-blur-sm px-4">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="hover:text-fuchsia-300 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen((o) => !o)}
          >
            <Menu className="size-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div
              className="fixed bg-black/60"
              onClick={() => setOpen(false)}
            >
              <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-6 text-fuchsia-400" />
                  <span className="font-semibold">Minha Marca</span>
                </div>
                <button className="p-2 rounded-lg" onClick={() => setOpen(false)}>
                  <X className="size-5 cursor-pointer" />
                </button>
              </div>
              <div className="flex flex-col gap-4 bg-slate-800 p-4 w-90">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-slate-200" onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold"
          >
            Acelere sua presença online com uma landing page <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-400 to-violet-300">simples e eficaz</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1 }}
            className="mt-4 text-slate-300 max-w-2xl"
          >
            Crie uma landing page incrível em minutos, sem complicações. Nossa plataforma fácil de usar oferece templates modernos e personalizáveis para destacar seu negócio online.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition">Comece Agora <ArrowRight className="size-4" /> </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium border border-white/10 hover:bg-white/5 transition">Ver Recurso </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: 1.5 }}
            className="mt-14 grid grid-cols-3 gap-4"
          >
            {[
              { title: "Velocidade", desc: "Carregamento rápido para aumentar conversões." },
              { title: "Design Moderno", desc: "Layouts atraentes que valorizam sua marca." },
              { title: "Fácil de Usar", desc: "Editor intuitivo: crie sem programar." },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center gap-2 bg-slate-800 p-4 rounded-lg text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title === "Velocidade" && <Zap className="size-6 text-yellow-400" />}
                  {feature.title === "Design Moderno" && <Sparkles className="size-6 text-purple-400" />}
                  {feature.title === "Fácil de Usar" && <Menu className="size-6 text-green-400" />}
                </motion.div>
                <span className="font-semibold">{feature.title}</span>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl px-4 py-8"
      >
        <h2 className="text-3xl font-bold" >Tudo o que você precisa para criar uma landing page incrível</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">Explore nossos recursos e descubra como nossa plataforma pode transformar sua presença online.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Templates Personalizáveis", desc: "Escolha entre uma variedade de templates modernos.", icon: <Sparkles className="size-6 text-purple-400" /> },
            { title: "Editor Intuitivo", desc: "Arraste e solte para criar sua página sem complicações.", icon: <Menu className="size-6 text-green-400" /> },
            { title: "Otimização para Conversão", desc: "Ferramentas integradas para aumentar suas conversões.", icon: <Zap className="size-6 text-yellow-400" /> },
            { title: "Suporte 24/7", desc: "Nossa equipe está sempre pronta para ajudar você.", icon: <Sparkles className="size-6 text-pink-400" /> },
            { title: "Integrações Poderosas", desc: "Conecte-se com suas ferramentas favoritas para um fluxo de trabalho perfeito.", icon: <Menu className="size-6 text-teal-400" /> },
            { title: "Análises Detalhadas", desc: "Acompanhe o desempenho da sua página com insights valiosos.", icon: <Zap className="size-6 text-orange-400" /> },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white[0.02] p-6">
              <div className="flex flex-row gap-3">{f.icon}<span className="font-semibold">{f.title}</span></div>
              <p className="text-sm text-slate-400 pt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section
        id="testimonials"
        className="mx-auto max-w-6xl px-4 py-8 mb-20"
      >
        <h2 className="text-3xl font-bold">Quem usou, aprovou!</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 bg-white[0.02] p-6"
            >
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mt-2">{t.quote}</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Preço */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl px-4 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">Plano único, sem complicação</h2>
            <p className="text-slate-300 mt-6 max-w-2xl">Aproveite todos os recursos da nossa plataforma com um único plano acessível.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Acesso a todos os templates e recursos
             </li>
             <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Suporte 24/7
             </li>
             <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Atualizações contínuas
             </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white[0.02] p-8">
            <div className="text-sm text-slate-400">A partir de</div>
            <div className="text-5xl font-extrabold mt-2">R$ 49,90</div>
            <div className="text-sm text-slate-300 mt-4 flex gap-2 items-center"><Clock className="size-4 text-amber-400" /> <p>Somente hoje!</p> </div>
            <button
              className="mt-6 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium cursor-pointer hover:bg-fuchsia-700 transition"
            >Comprar agora!</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="faq" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-8 mb-20 flex flex-col items-center justify-between">
            <div className="mb-4">Minha Marca @ {new Date().getFullYear()}</div>
            <a href="#" className="text-slate-300">Política de Privacidade</a>
          </div>
      </footer>
    </div>
  );
}

export default App;
