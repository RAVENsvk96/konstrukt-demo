import Logo from "@/components/ui/Logo";
import { company } from "@/content/company";
import { navigation } from "@/content/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[#E6DED2] bg-[#F7F5F2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo className="h-20 w-auto" priority={false} />

          <p className="mt-4 max-w-sm text-sm leading-6 text-[#666666]">
            {company.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#111111]">Navigácia</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-[#666666]">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#A7865A]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#111111]">Kontakt</h3>

          <div className="mt-4 space-y-2 text-sm leading-6 text-[#666666]">
            <p>{company.address}</p>
            <p>{company.phone}</p>
            <p>{company.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E6DED2] px-6 py-4 text-center text-sm text-[#666666]">
        © 2026 {company.name}. Všetky práva vyhradené.
      </div>
    </footer>
  );
}