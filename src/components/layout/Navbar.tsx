import { useState, useCallback, memo } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Navigation Data ─────────────────────────────────────────────
// (Defined at module level — no re-creation on re-renders)
const navItems = [
  { name: 'Inicio', path: '/', children: null },
  {
    name: 'El Club',
    path: null,
    children: [
      { name: 'Noticias',     path: '/news' },
      { name: 'Reglamentos',  path: '/rules' },
      { name: 'Enlaces de Interés', path: '/links' },
    ],
  },
  {
    name: 'Disciplinas',
    path: null,
    children: [
      { name: 'Patinaje Artístico en Línea', path: '/artistic' },
      { name: 'Hockey Línea',       path: '/inline' },
    ],
  },
  { name: 'Competición', path: '/championships', children: null },
  {
    name: 'Multimedia',
    path: null,
    children: [
      { name: 'Imágenes', path: '/gallery' },
      { name: 'Social',   path: '/social' },
    ],
  },
] as const;

type NavItem = typeof navItems[number];

// ── Animation variants (module-level, never re-created) ──────────
const dropdownVariants = {
  hidden:  { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 380, damping: 28 } },
  exit:    { opacity: 0, y: -8,  scale: 0.97, transition: { duration: 0.14 } },
} as const;

const drawerVariants = {
  hidden:  { x: '100%' },
  visible: { x: 0,      transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit:    { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
} as const;

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
  exit:    { opacity: 0 },
} as const;

// ── Desktop nav item ─────────────────────────────────────────────
const NavItemDesktop = memo(({ item, isActive, isDark }: {
  item: NavItem; isActive: boolean; isDark: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const activeCls = isActive ? 'text-white' : 'text-textBase dark:text-gray-200 hover:text-primary dark:hover:text-primary-bright';

  if (!item.children) {
    return (
      <div className="relative">
        {isActive && (
          <motion.div
            layoutId="activeTabIndicator"
            className="absolute inset-0 bg-primary rounded-md z-0 pointer-events-none"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <NavLink
          to={item.path}
          end
          className={`relative z-10 block px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 ${activeCls}`}
        >
          {item.name}
        </NavLink>
      </div>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {isActive && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute inset-0 bg-primary rounded-md z-0 pointer-events-none"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      {/* min 44px touch-target via py-2 + px-4 */}
      <button className={`relative z-10 flex items-center gap-1 px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-200 ${activeCls}`}>
        {item.name}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 min-w-[190px] rounded-xl shadow-xl overflow-hidden z-50 ${isDark ? 'glass' : 'glass-light'}`}
          >
            {item.children.map((child) => (
              <NavLink
                key={child.name}
                to={child.path}
                className={({ isActive: ca }) =>
                  // min 44px touch-target: py-3 ≈ 12px * 2 + font ≈ 44px
                  `flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-150 ${
                    ca
                      ? 'bg-primary text-white font-semibold'
                      : isDark
                      ? 'text-gray-200 hover:bg-white/10 hover:text-white'
                      : 'text-textBase hover:bg-neutralMuted hover:text-primary'
                  }`
                }
              >
                <ChevronRight size={13} className="shrink-0 opacity-60" />
                {child.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
NavItemDesktop.displayName = 'NavItemDesktop';

// ── Mobile Drawer ────────────────────────────────────────────────
const MobileDrawer = memo(({
  open, onClose, isDark, pathname,
}: {
  open: boolean; onClose: () => void; isDark: boolean; pathname: string;
}) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = useCallback((name: string) => {
    setExpanded((prev) => (prev === name ? null : name));
  }, []);

  const getParentActive = (item: NavItem) => {
    if (item.path) return pathname === item.path;
    return item.children?.some((c) => pathname === c.path) ?? false;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.22 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 right-0 bottom-0 w-[min(320px,90vw)] z-50 md:hidden flex flex-col shadow-2xl ${
              isDark ? 'bg-dk-surface border-l border-dk-border' : 'bg-white border-l border-gray-100'
            }`}
          >
            {/* Drawer header */}
            <div className={`flex items-center justify-between px-5 h-20 border-b ${isDark ? 'border-dk-border' : 'border-gray-100'} shrink-0`}>
              <Link to="/" onClick={onClose} className="flex items-center group">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Club Patinatge Borriol"
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="ml-2 font-oswald font-extrabold text-lg uppercase text-textTitle dark:text-white">
                  CP <span className="text-primary">Borriol</span>
                </span>
              </Link>
              {/* ≥44px touch target */}
              <button
                onClick={onClose}
                className="p-3 text-gray-500 dark:text-gray-300 hover:text-primary rounded-lg -mr-1"
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const active = getParentActive(item);

                if (!item.children) {
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      end
                      onClick={onClose}
                      className={({ isActive }) =>
                        // 44px touch target: py-3
                        `flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-textBase dark:text-gray-200 hover:bg-neutralMuted dark:hover:bg-dk-surface2'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  );
                }

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggle(item.name)}
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        active
                          ? 'bg-primary text-white'
                          : 'text-textBase dark:text-gray-200 hover:bg-neutralMuted dark:hover:bg-dk-surface2'
                      }`}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: expanded === item.name ? 90 : 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <ChevronRight size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded === item.name && (
                        <motion.div
                          key="children"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 mt-1 pl-3 border-l-2 border-primary space-y-0.5 pb-1">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.name}
                                to={child.path}
                                onClick={onClose}
                                className={({ isActive: ca }) =>
                                  `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    ca
                                      ? 'text-primary font-bold'
                                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-bright'
                                  }`
                                }
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Drawer footer */}
            <div className={`px-5 py-4 border-t text-xs text-gray-400 dark:text-gray-600 ${isDark ? 'border-dk-border' : 'border-gray-100'} shrink-0`}>
              © {new Date().getFullYear()} Club Patinatge Borriol
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
MobileDrawer.displayName = 'MobileDrawer';

// ── Main Navbar ──────────────────────────────────────────────────
export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  const location = useLocation();

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const getParentActive = (item: NavItem) => {
    if (item.path) return location.pathname === item.path;
    return item.children?.some((c) => location.pathname === c.path) ?? false;
  };

  return (
    <>
      <nav className={`sticky top-0 z-40 border-b-4 border-primary transition-all duration-300 ${
        isDark ? 'glass' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Club Patinatge Borriol Logo"
                className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                  fb?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-oswald text-xl font-extrabold text-textTitle dark:text-white tracking-tight uppercase ml-2">
                CP <span className="text-primary">BORRIOL</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navItems.map((item) => (
                <NavItemDesktop
                  key={item.name}
                  item={item}
                  isActive={getParentActive(item)}
                  isDark={isDark}
                />
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-1">
              {/* Theme toggle — ≥44px touch target */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg text-textBase dark:text-gray-300 hover:text-primary dark:hover:text-primary-bright focus:outline-none transition-colors"
                aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Hamburger — mobile only, ≥44px touch target */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="md:hidden p-3 text-textBase dark:text-gray-300 hover:text-primary focus:outline-none rounded-lg"
                aria-label="Abrir menú"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer — rendered in a Portal-like sibling outside nav */}
      <MobileDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        isDark={isDark}
        pathname={location.pathname}
      />
    </>
  );
};
