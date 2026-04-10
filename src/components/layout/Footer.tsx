import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Camera } from 'lucide-react';

export const Footer = () => {
  return (
    // Footer uses a true near-black (#111111) in both modes — it's a footer, always dark
    <footer className="bg-textTitle text-white pt-16 pb-8 border-t-[6px] border-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & Intro */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Club Patinatge Borriol Logo"
                className="h-24 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md bg-white rounded-xl p-1"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                  next?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-oswald text-2xl font-extrabold tracking-tight uppercase">
                CP <span className="text-primary">BORRIOL</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              El club de referencia en la provincia de Castellón. Pasión, esfuerzo y deportividad sobre ruedas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary transition-colors" 
                aria-label="Instagram"
              >
                <Camera size={22} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-oswald text-lg font-bold text-white tracking-wide uppercase">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                info@clubpatinatgeborriol.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +34 600 000 000
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Pabellón Municipal de Borriol<br />12190 Borriol, Castellón</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-oswald text-lg font-bold text-white tracking-wide uppercase">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Aviso Legal', 'Política de Privacidad', 'Normativa Interna'].map((label) => (
                <li key={label}>
                  <Link to="/rules" className="hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Institutional Logos (Grayscale Effect) */}
        <div className="mt-16 pt-10 border-t border-gray-800">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-bold">Organismos Oficiales</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
            {[
              { name: 'FPCV', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyNm9cvtP20WfguKhnvJ5m9YGpNIEMTf9Rw&s', url: 'https://fpcv.info/' },
              { name: 'RFEP', logo: 'https://fep.es/img/logo-rfep.png', url: 'https://fep.es/' },
              { name: 'Ayto Borriol', logo: 'https://www.borriol.es/wp-content/uploads/2023/05/Logo-Ajuntament-de-Borriol-escut-horitz-color.png', url: 'https://www.borriol.es/' },
              { name: 'GVA Deporte', logo: 'https://presidencia.gva.es/documents/161862862/162432465/boton_comunitat_esport.png/0112fe92-0032-03d8-916e-3bdd2ac6a8c8?t=1746773088193', url: 'https://ceice.gva.es/es/web/deporte' },
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-500"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 w-auto grayscale contrast-125 brightness-150 hover:grayscale-0 transition-all duration-500"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Club Patinatge Borriol. Todos los derechos reservados.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-700">Diseño y desarrollo por <span className="text-gray-500 font-bold">5SV Informática</span></p>
        </div>
      </div>
    </footer>
  );
};
