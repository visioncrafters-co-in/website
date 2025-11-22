import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Why Us", path: "/why-us" },
  { label: "Services", path: "/services" },
  { label: "Courses", path: "/courses" },
  { label: "Internships", path: "/internships" },
  { label: "Contact", path: "/contact" },
];

const MobileQuickNav = () => {
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 md:hidden z-40 pointer-events-none">
      <div className="pointer-events-auto rounded-2xl border border-white/10 bg-background/80 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
        <nav className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-hide px-2 py-2">
          {quickLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={cn(
                "flex-1 min-w-[72px] text-center text-[11px] font-semibold px-3 py-2 rounded-xl transition-all duration-200",
                "text-muted-foreground hover:text-foreground",
              )}
              activeClassName="bg-primary/90 text-primary-foreground shadow-lg"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileQuickNav;

