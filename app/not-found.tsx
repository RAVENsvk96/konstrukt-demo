import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return <main className="flex min-h-screen items-center bg-background"><Container className="py-20"><div className="mx-auto flex max-w-2xl flex-col items-center text-center"><Logo /><p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Chyba 404</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Stránka nebola nájdená</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted">Hľadaná stránka v tomto ukážkovom projekte neexistuje.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row"><Button href="/">Späť na hlavnú stránku</Button><Button href="https://www.samuelzeliska.sk/#projekty" variant="secondary">Späť na portfólio</Button></div><p className="mt-12 text-sm text-muted">Demo projekt Samuela Zelísku</p></div></Container></main>;
}
