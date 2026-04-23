// 'use client';

// import React, { useState, useEffect } from 'react';
// import { 
//   Globe, Shield, Droplets, Factory, Zap, 
//   ChevronDown, ChevronLeft, ChevronRight,
//   ArrowUpRight, Menu, MapPin, Activity, 
//   Settings, Award, Scale, Beaker, Truck, Container, X, Phone, Mail,
//   Send
// } from 'lucide-react';
// import { Logo1 } from '@/components/ui/logos/logo1';
// let email1 = "ventas@puertollanorefinery.com"
// // let joined_number1 ="34 917 538 200 / 100 / 000"
// let joined_number1 ="34 917 500 200 / 100 / 000"
// let number1 ="+34 917 500 200"

// // let blogimgs = [
// //   "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800" , "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800" , "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"
// // ]
// let blogimgs = [
//   "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800",
//   "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800",

//   "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800", // Oil refinery / industrial safety
//   "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800", // Industrial control room / automation (FIXED)
//    // Industrial automation / energy systems
//   "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800"
// ]
// // git config user.name "tubeyoouu01-hash"
// // git config user.email "tubeyoouu01@gmail.com"

// // rm -rf .git
// // git init

// // git init


// // let slideimg = [
// //   "https://images.unsplash.com/photo-1544380904-c686aad2fc40?q=80&w=2000" , "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000" ,"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000"
// // ]

// let slideimg = [
//  "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000",
//  "/pilmo-kang-H72SCCTZPE8-unsplash.jpg", // Oil refinery aerial shot
//  "/stepan-konev-sTlQYjzvXCQ-unsplash.jpg", // Oil refinery aerial shot
//   "https://images.unsplash.com/photo-1581092202980-4a71f8a2e43f?q=80&w=2000", // Industrial pipelines / refinery network
//   "https://images.unsplash.com/photo-1581092840393-c1f07173ed5b?q=80&w=2000"  // Refinery towers and flare stacks
// ]


//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const name = formData.get('name');
//     const subject:any = formData.get('subject');
//     const message = formData.get('message');
//     window.location.href = `mailto:${email1}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + message)}`;
//   };

// // Add inside ES: { ... }


// // Add inside EN: { ... }


// const translations = {
//   ES: {

// products: {
//   title: "Cartera de Productos",
//   subtitle: "Soluciones Energéticas y Materias Primas",
//   groups: [
//     {
//       id: "oil",
//       name: "Petróleo y Lubricantes",
//            image: "/fulvio-ciccolo-qWl6oAOaMrM-unsplash.jpg",
//       // image: "https://images.unsplash.com/photo-1610444583731-971759547f4f?q=80&w=800",
//       items: [
//         { name: "Crudo Brent Refinado",    img: "/download (3).jpeg"  },
//         { name: "Aceites Base (Grupo I/II)",   img: "/download (4).jpeg"},
//         { name: "Lubricantes Sintéticos",   img: "/images (1).jpeg"  }
//       ]
//     },
//     {
//       id: "fuel",
//       name: "Combustibles",
//     image: "/engin-akyurt-f4UbPVbJcjw-unsplash.jpg",
//       items: [
//         { name: "Diésel Euro 6", img: "/download (2).jpeg" },
//         { name: "Queroseno Aviación (Jet A-1)", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=400" },
//         { name: "Biocombustibles Avanzados",img: "/images.jpeg" }
//       ]
//     },
//     {
//       id: "gas",
//       name: "Gases e Hidrógeno",
//           image: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg",
//       items: [
//         { name: "Hidrógeno Verde", img: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg"  },
//         { name: "GLP (Butano/Propano)", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400" },
//         { name: "Etileno de Alta Pureza", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400" }
//       ]
//     }
//   ]
// },
//         contact: {
//       title: "Centro de Contacto",
//       subtitle: "Solicitudes de Refino y Logística",
//       name: "Nombre Completo",
//       email: "Correo Corporativo",
//       subject: "Asunto",
//       msg: "Mensaje Técnico",
//       btn: "Enviar Solicitud"
//     },
//     nav: ["Infraestructura", "Logística", "Estrategia ESG", "Inversores", "Sostenibilidad", "Seguridad", "I+D+", "Carreras"],
//     heroButtons: ["Directorio de Activos", "Documentos Técnicos"],
//     hero: [
//       { title: "Independencia Energética", desc: "Optimizando el complejo de Puertollano para liderar el suministro energético de la Península Ibérica. Nuestra infraestructura de vanguardia garantiza un flujo constante de recursos estratégicos, fortaleciendo la soberanía energética regional mediante procesos de refinado de última generación y una red logística sin precedentes en el sur de Europa." },
//       { title: "Circularidad Total", desc: "Transformando residuos urbanos y biomasa en combustibles renovables de alta calidad. Este proceso no solo reduce el impacto ambiental, sino que redefine el concepto de materia prima dentro de la industria petroquímica moderna, permitiéndonos cerrar el ciclo de vida de los productos plásticos y avanzar hacia una economía neutra." },
//       { title: "Pivote Hidrógeno", desc: "Instalación del mayor electrolizador de España para descarbonizar la industria pesada. Este proyecto representa la piedra angular de nuestra estrategia de hidrógeno verde, integrando energías renovables directamente en el núcleo de nuestros procesos térmicos y de hidrogenación, eliminando toneladas de emisiones de CO2 anualmente." }
//     ],
//     overview: {
//       tag: "Complejo Industrial Puertollano",
//       title: "Liderando la Transformación Multienérgetica en España.",
//       p1: "El complejo de Puertollano es un referente en integración química. No solo refinamos; conectamos procesos de destilación con la producción de olefinas y plásticos de alto valor técnico.",
//       p2: "Nuestra hoja de ruta 2026 incluye la puesta en marcha de la planta de biocombustibles avanzados, consolidando nuestra posición en la economía circular."
//     },
//     tech: {
//       title: "Capacidades Técnicas",
//       units: [
//         { label: "Destilación Atmosférica", value: "A-1", desc: "Fraccionamiento primario de crudo con capacidad de 150.000 BPD." },
//         { label: "Hidrotratamiento", value: "HDT", desc: "Eliminación de azufre para cumplir con la normativa Euro 6." },
//         { label: "Unidad de Olefinas", value: "OP-2", desc: "Producción de etileno y propileno de alta pureza." }
//       ]
//     },
//     cards: [
//       { title: "Resiliencia Técnica", text: "Integración de gemelos digitales para el mantenimiento predictivo de unidades de vacío." },
//       { title: "Cumplimiento RED III", text: "Alineación estricta con las directivas europeas de energías renovables y bajas en carbono." },
//       { title: "Pureza Química", text: "Producción de polipropileno y polietileno de grado médico y alimentario." },
//       { title: "Seguridad Laboral", text: "Líderes en el sector con más de 2 millones de horas sin accidentes con baja." }
//     ],
//     insights: {
//       title: "Inteligencia Operativa",
//       subtitle: "Análisis técnico del hub petroquímico más importante de Castilla-La Mancha.",
//       cta: "Ver Todos los Informes",
//       // blogs: [
//       //   { tag: "Informe Técnico", title: "Integración de Hidrógeno Verde en procesos de Hidrotratamiento", date: "25 Ene 2026", desc: "Cómo el electrolizador de 100MW está reduciendo la huella de carbono en la producción de diésel..." },
//       //   { tag: "Sostenibilidad", title: "Reciclaje Químico: Del residuo plástico a la materia prima", date: "12 Ene 2026", desc: "Puertollano inicia pruebas con pirólisis avanzada para cerrar el círculo de los plásticos..." },
//       //   { tag: "Seguridad", title: "Digitalización de la Seguridad en Paradas de Mantenimiento", date: "02 Ene 2026", desc: "Uso de IoT y geolocalización para proteger a los más de 1.000 operarios en paradas críticas..." }
//       // ]
//       blogs: [
//   { tag: "Informe Técnico", title: "Integración de Hidrógeno Verde en procesos de Hidrotratamiento", date: "25 Ene 2026", desc: "Cómo el electrolizador de 100MW está reduciendo la huella de carbono en la producción de diésel..." },
//   { tag: "Sostenibilidad", title: "Reciclaje Químico: Del residuo plástico a la materia prima", date: "12 Ene 2026", desc: "Puertollano inicia pruebas con pirólisis avanzada para cerrar el círculo de los plásticos..." },
//   { tag: "Seguridad", title: "Digitalización de la Seguridad en Paradas de Mantenimiento", date: "02 Ene 2026", desc: "Uso de IoT y geolocalización para proteger a los más de 1.000 operarios en paradas críticas..." },

//   { tag: "Innovación", title: "Optimización de Procesos en Refinerías mediante IA", date: "30 Ene 2026", desc: "Cómo los modelos de aprendizaje automático mejoran el rendimiento, la eficiencia energética y la predicción de paradas..." },
//   { tag: "Transición Energética", title: "Captura y Utilización de Carbono en Plantas Industriales", date: "18 Ene 2026", desc: "Análisis de tecnologías de captura de CO₂ que transforman las emisiones en materias primas de valor..." }
// ]

//     },
//     stats: ["Barriles/Día Capacidad", "Soporte Técnico 24/7", "Reducción CO2 2030", "Centros Logísticos"],
//     footer: {
//       desc: "Complejo Petroquímico de Puertollano: Innovación constante para una energía más eficiente y sostenible.",
//       follow: "SÍGUENOS",
//       cols: [
//         { title: "Infraestructura", links: ["Unidades de Crudo", "Complejo Olefinas", "Logística Ductos", "I+D Tech"] },
//         { title: "Cumplimiento", links: ["Seguridad y Salud", "Medio Ambiente", "Ética Profesional", "Certificaciones ISO"] },
//         { title: "Inversores", links: ["Resultados Anuales", "Gobierno Corporativo", "Accionistas", "Calendario Financiero"] }
//       ],
//       legal: ["Privacidad", "Aviso Legal", "Cookies"],
//       copy: "© 2026 PuertollanoRefinery / Grupo Energético Industrial."
//     }
//   },
//   EN: {
// products: {
//   title: "Product Portfolio",
//   subtitle: "Energy Solutions & Raw Materials",
//   groups: [
//     {
//       id: "oil",
//       name: "Oil & Lubricants",
//       image: "/fulvio-ciccolo-qWl6oAOaMrM-unsplash.jpg",
//       items: [
//         { name: "Refined Brent Crude", img: "/download (3).jpeg" },
//         { name: "Base Oils (Group I/II)", img: "/download (4).jpeg" },
//         { name: "Synthetic Lubricants", img: "/images (1).jpeg" }
//       ]
//     },
//     {
//       id: "fuel",
//       name: "Fuels",
//       image: "/engin-akyurt-f4UbPVbJcjw-unsplash.jpg",
//       items: [
//         { name: "Euro 6 Diesel", img: "/download (2).jpeg" },
//         { name: "Aviation Kerosene (Jet A-1)", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=400" },
//         { name: "Advanced Biofuels", img: "/images.jpeg" }
//       ]
//     },
//     {
//       id: "gas",
//       name: "Gas & Hydrogen",
//       image: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg",
//       items: [
//         { name: "Green Hydrogen", img: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg" },
//         { name: "LPG (Butane/Propane)", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400" },
//         { name: "High Purity Ethylene", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400" }
//       ]
//     }
//   ]
// },
//        contact: {
//       title: "Contact Hub",
//       subtitle: "Refining & Logistics Inquiries",
//       name: "Full Name",
//       email: "Corporate Email",
//       subject: "Subject",
//       msg: "Technical Message",
//       btn: "Send Inquiry"
//     },
//     nav: ["Infrastructure", "Logistics", "ESG Strategy", "Investors", "Sustainability", "Safety", "R&D", "Careers"],
//     heroButtons: ["Asset Directory", "Technical Papers"],
//     hero: [
//       { title: "Energy Independence", desc: "Optimizing the Puertollano complex to lead the energy supply of the Iberian Peninsula. Our cutting-edge infrastructure guarantees a constant flow of strategic resources, strengthening regional energy sovereignty through state-of-the-art refining processes and a logistics network unprecedented in Southern Europe." },
//       { title: "Total Circularity", desc: "Transforming urban waste and biomass into high-quality renewable fuels. This process not only reduces environmental impact but redefines the concept of raw materials within the modern petrochemical industry, allowing us to close the life cycle of plastic products and move toward a neutral economy." },
//       { title: "Hydrogen Pivot", desc: "Installing Spain's largest electrolyzer to decarbonize heavy industry. This project represents the cornerstone of our green hydrogen strategy, integrating renewable energy directly into the core of our thermal and hydrogenation processes, eliminating tons of CO2 emissions annually." }
//     ],
//     overview: {
//       tag: "Puertollano Industrial Complex",
//       title: "Leading Spain's Multi-Energy Transformation.",
//       p1: "The Puertollano complex is a benchmark in chemical integration. We don't just refine; we connect distillation processes with high-value technical plastics.",
//       p2: "Our 2026 roadmap includes launching the advanced biofuels plant, solidifying our circular economy position."
//     },
//     tech: {
//       title: "Technical Capabilities",
//       units: [
//         { label: "Atmospheric Distillation", value: "A-1", desc: "Primary crude fractionation with 150,000 BPD capacity." },
//         { label: "Hydrotreating", value: "HDT", desc: "Sulphur removal to meet Euro 6 regulations." },
//         { label: "Olefins Unit", value: "OP-2", desc: "High purity ethylene and propylene production." }
//       ]
//     },
//     cards: [
//       { title: "Technical Resilience", text: "Digital twin integration for predictive maintenance of vacuum units." },
//       { title: "RED III Compliance", text: "Strict alignment with European renewable and low-carbon energy directives." },
//       { title: "Chemical Purity", text: "Production of medical and food-grade polypropylene and polyethylene." },
//       { title: "Operational Safety", text: "Sector leaders with over 2 million hours without lost-time accidents." }
//     ],
//     insights: {
//       title: "Operational Intelligence",
//       subtitle: "Technical analysis of the most important petrochemical hub in central Spain.",
//       cta: "View All Reports",
//       // blogs: [
//       //   { tag: "Technical Report", title: "Green Hydrogen Integration in Hydrotreating", date: "25 Jan 2026", desc: "How the 100MW electrolyzer is reducing the carbon footprint of diesel production..." },
//       //   { tag: "Sustainability", title: "Chemical Recycling: From Plastic Waste to Raw Material", date: "12 Jan 2026", desc: "Puertollano begins testing advanced pyrolysis to close the plastics loop..." },
//       //   { tag: "Safety", title: "Safety Digitalization in Maintenance Turnarounds", date: "02 Jan 2026", desc: "Using IoT and geolocation to protect over 1,000 operators during critical stops..." }
//       // ]
//       blogs: [
//   { tag: "Technical Report", title: "Green Hydrogen Integration in Hydrotreating", date: "25 Jan 2026", desc: "How the 100MW electrolyzer is reducing the carbon footprint of diesel production..." },
//   { tag: "Sustainability", title: "Chemical Recycling: From Plastic Waste to Raw Material", date: "12 Jan 2026", desc: "Puertollano begins testing advanced pyrolysis to close the plastics loop..." },
//   { tag: "Safety", title: "Safety Digitalization in Maintenance Turnarounds", date: "02 Jan 2026", desc: "Using IoT and geolocation to protect over 1,000 operators during critical stops..." },

//   { tag: "Innovation", title: "AI-Driven Process Optimization in Refineries", date: "30 Jan 2026", desc: "How machine learning models are improving yield, energy efficiency, and downtime prediction..." },
//   { tag: "Energy Transition", title: "Carbon Capture and Utilization in Industrial Plants", date: "18 Jan 2026", desc: "Exploring how CO₂ capture technologies are turning emissions into valuable feedstock..." }
// ]

//     },
//     stats: ["Barrels/Day Capacity", "24/7 Tech Support", "CO2 Reduction 2030", "Logistics Hubs"],
//     footer: {
//       desc: "Puertollano Petrochemical Complex: Constant innovation for more efficient and sustainable energy.",
//       follow: "FOLLOW US",
//       cols: [
//         { title: "Infrastructure", links: ["Crude Units", "Olefin Complex", "Pipeline Logistics", "R&D Tech"] },
//         { title: "Compliance", links: ["Health & Safety", "Environment", "Ethics", "ISO Certifications"] },
//         { title: "Investors", links: ["Annual Results", "Corporate Governance", "Shareholders", "Financial Calendar"] }
//       ],
//       legal: ["Privacy", "Legal Notice", "Cookies"],
//       copy: "© 2026 PuertollanoRefinery / Industrial Energy Group."
//     }
//   }
// };

// export default function PuertollanoRefinery() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [language, setLanguage] = useState('ES');
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isForbidden, setIsForbidden] = useState(false);
// const [selectedGroup, setSelectedGroup] = useState(null);
//   const t = translations[language] || translations['ES'];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === t.hero.length - 1 ? 0 : prev + 1));
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [t.hero.length]);

//   const handleForbiddenClick = (e) => {
//     e.preventDefault();
//     setIsForbidden(true);
//   };

//   // Forbidden Screen Component
//   if (isForbidden) {
//     return (
//       <div className="fixed font-serif inset-0 bg-white z-[9999] p-8 flex flex-col items-start justify-start font-mono text-black">
//         <h1 className="text-sm font-bold text-[20px]  mb-2 ">Forbidden</h1>
//         <p className=" mb-4">You do not have access to this resource</p>
//         <hr className="w-full border-black-300" />
//         <p className="text-sm italic">Apache 2.4.64(frebsd) npm-itk/2.7-04 PHP/8.4.10</p>
//         <button 
//           onClick={() => setIsForbidden(false)} 
//           className="mt-12 text-blue-600 underline hover:text-blue-800"
//         >
//           Return to home
//         </button>
//       </div>
//     );
//   }

//   // General class for all clickables
//   const clickableClass = "clickable-item cursor-pointer transition-all duration-300 active:scale-95";

//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100">
      
//       {/* 1. Ticker */}
//       <div className="bg-slate-950 text-[10px] text-slate-400 font-bold uppercase tracking-widest py-2 px-6 lg:px-10 flex justify-between border-b border-white/5 relative z-[60]">
//         <div className="flex gap-4 lg:gap-8">
//           <span className="flex items-center gap-2 text-red-500"><Activity size={12} /> BRENT: $84.12 <span className="text-emerald-500">+0.8%</span></span>
//           <span className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-8 text-red-500"><Activity size={12} /> PUERTOLLANO: <span className="text-emerald-500">NOMINAL</span></span>
//         </div>
//         <div className="text-[9px] sm:text-[10px]">ASSET FEED: [01:11 UTC]</div>
//       </div>

//       {/* 2. Nav */}
//       <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
//         <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-20 lg:h-24 flex items-center justify-between">
//           <div className="flex items-center gap-6 lg:gap-16">
//             <div className={`flex items-center gap-2 ${clickableClass}`} onClick={() => window.location.reload()}>
//                 {/* <img className='w-10' src={"/logo1.png"} /> */}
//                 <Logo1/>
//               {/* <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
//                 <Factory size={20} className="text-white" />
//               </div> */}
//               <span className="text-xl lg:text-2xl font-black tracking-tighter uppercase">Puerto<span className="text-red-500">llano</span></span>
//             </div>
//             <div className="hidden xl:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
//               {t.nav.slice(0, 4).map((item, i) => ( 
//                 <a key={i} href="#" onClick={handleForbiddenClick} className={clickableClass}>{item}</a> 
//               ))}
//             </div>
//           </div>
          
//           <div className="flex items-center gap-4">
//             <div className="relative hidden md:block">
//               <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-[10px] font-black uppercase bg-slate-100 px-4 py-2 rounded border border-slate-200">
//                 <Globe size={12} /> {language} <ChevronDown size={12} />
//               </button>
//               {isLangOpen && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 shadow-xl z-50">
//                   {['ES', 'EN'].map((lang) => (
//                     <button key={lang} onClick={() => { setLanguage(lang); setIsLangOpen(false); }} className="w-full text-left px-4 py-2 text-[10px] font-black hover:bg-slate-50 uppercase">{lang === 'ES' ? 'Español' : 'English'}</button>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <button onClick={() => setIsMenuOpen(true)} className={`p-2 bg-slate-100 text-slate-900 rounded hover:bg-red-600 hover:text-white transition ${clickableClass}`}>
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-200">
//           <div className="h-full flex flex-col">
//             <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//               <div className="flex items-center gap-2">
//                 <Logo1/>
//                 {/* <div className="w-7 h-7 bg-red-600 rounded-sm flex items-center justify-center">
//                   <Factory size={16} className="text-white" />
//                 </div> */}
//                 <span className="text-lg font-black tracking-tighter uppercase">Puerto<span className="text-red-500">llano</span></span>
//               </div>
//               <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400">
//                 <X size={28} />
//               </button>
//             </div>
//             <div className="flex-1 overflow-y-auto">
//               <div className="p-6">
//                 <nav className="space-y-6 mb-12">
//                   {t.nav.map((item, i) => (
//                     <a key={i} href="#" onClick={handleForbiddenClick} className={`block text-lg text-slate-700 hover:text-red-600 transition-colors ${clickableClass}`}>
//                       {item}
//                     </a>
//                   ))}
//                 </nav>
//                 <div className="space-y-8 pt-8 border-t border-slate-100">
//                   <section className="space-y-3">
//                     <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Ubicación</p>
//                     <p className="text-sm text-slate-600">Puertollano, Ciudad Real, Spain</p>
//                   </section>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 3. Hero Carousel */}
//       <section className="relative h-[75vh] lg:h-[85vh] bg-slate-900 overflow-hidden">
//         {t.hero.map((slide, i) => (
//           <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
//             <img src={slideimg[i]} className="w-full h-full object-cover brightness-[0.35]" alt="" />
//             <div className="absolute inset-0 flex items-center">
//               <div className="max-w-[1800px] mx-auto px-6 lg:px-10 w-full">
//                 <div className="max-w-3xl">
//                   <div className="w-16 lg:w-20 h-1.5 bg-red-600 mb-8 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
//                   <h1 className="text-4xl lg:text-8xl font-light text-white leading-tight mb-8">
//                     {slide.title.split(' ')[0]} <span className="font-bold text-red-500">{slide.title.split(' ').slice(1).join(' ')}</span>
//                   </h1>
//                   <p className="text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 lg:mb-14">{slide.desc}</p>
//                   <div className="flex flex-wrap gap-4">
//                     <button onClick={handleForbiddenClick} className={`bg-red-600 hover:bg-red-700 text-white px-8 lg:px-10 py-4 font-bold uppercase tracking-widest text-[10px] transition-all ${clickableClass}`}>
//                       {t.heroButtons[0]}
//                     </button>
//                     <button onClick={handleForbiddenClick} className={`border border-white/30 text-white px-8 lg:px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition ${clickableClass}`}>
//                       {t.heroButtons[1]}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="absolute bottom-10 right-10 flex gap-4 z-20">
//           <button onClick={() => setCurrentSlide(currentSlide === 0 ? t.hero.length-1 : currentSlide-1)} className={`p-3 border border-white/20 text-white hover:bg-red-600 transition rounded-full ${clickableClass}`}><ChevronLeft size={20}/></button>
//           <button onClick={() => setCurrentSlide(currentSlide === t.hero.length-1 ? 0 : currentSlide+1)} className={`p-3 border border-white/20 text-white hover:bg-red-600 transition rounded-full ${clickableClass}`}><ChevronRight size={20}/></button>
//         </div>
//       </section>

//       {/* 4. Technical Units */}
//       <section className="py-24 bg-white border-b border-slate-100">
//         <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
//           <div className="flex flex-col lg:flex-row gap-16 items-center">
//             <div className="w-full lg:w-1/3">
//               <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 mb-4">{t.tech.title}</h2>
//               <p className="text-slate-500 text-sm leading-relaxed font-medium">Infraestructura crítica operando bajo estándares de máxima eficiencia térmica y control de emisiones en tiempo real.</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full lg:w-2/3">
//               {t.tech.units.map((unit, i) => (
//                 <div key={i} onClick={handleForbiddenClick} className={`border-l-2 border-red-600 pl-6 py-2 bg-slate-50/50 hover:bg-slate-50 transition p-4 ${clickableClass}`}>
//                   <div className="text-2xl font-black text-slate-900 mb-1">{unit.value}</div>
//                   <div className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest">{unit.label}</div>
//                   <p className="text-xs text-slate-500 leading-relaxed">{unit.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. Strategic Overview */}
//       <section className="py-32 bg-slate-50">
//         <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
//           <div className="grid lg:grid-cols-2 gap-24 items-start">
//             <div>
//               <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-6">{t.overview.tag}</h2>
//               <h3 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-10 leading-tight">{t.overview.title}</h3>
//               <div className="space-y-6 text-slate-600 leading-loose">
//                 <p>{t.overview.p1}</p>
//                 <p>{t.overview.p2}</p>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {t.cards.map((item, i) => (
//                 <div key={i} onClick={handleForbiddenClick} className={`bg-white p-8 border border-slate-200 shadow-sm hover:border-red-500 transition group ${clickableClass}`}>
//                   <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">{i === 0 ? <Settings /> : i === 1 ? <Shield /> : i === 2 ? <Beaker /> : <Award />}</div>
//                   <h4 className="font-bold text-sm uppercase tracking-widest mb-4">{item.title}</h4>
//                   <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>


// <section className="py-24 bg-white border-y border-slate-100">
//   <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
//     <div className="text-center mb-16">
//       <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-4">{t.products.subtitle}</h2>
//       <h3 className="text-4xl font-bold text-slate-950">{t.products.title}</h3>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {t.products.groups.map((group) => (
//         <div 
//           key={group.id} 
//           onClick={() => setSelectedGroup(group)}
//           className={`group relative overflow-hidden h-[400px] border border-slate-200 ${clickableClass}`}
//         >
//           {/* Background Image */}
//           <img src={group.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="" />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
//           {/* Content Overlay */}
//           <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
//             <div className="bg-red-600 w-12 h-12 flex items-center justify-center mb-6 shadow-lg">
//               {group.id === 'oil' ? <Droplets size={20} /> : group.id === 'fuel' ? <Zap size={20} /> : <Factory size={20} />}
//             </div>
//             <h4 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{group.name}</h4>
//             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//               {language === 'ES' ? 'Explorar Catálogo' : 'Explore Catalog'} <ArrowUpRight size={14} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* 6. Insights (Blogs) */}
//       <section className="py-32 bg-white">
//         <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
//             <div>
//               <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{t.insights.title}</h2>
//               <p className="text-slate-400 mt-2 font-medium">{t.insights.subtitle}</p>
//             </div>
//             <button onClick={handleForbiddenClick} className={`text-[10px] font-black uppercase border-b-2 border-red-600 pb-2 flex items-center gap-2 hover:text-red-500 hover:border-red-600 transition ${clickableClass}`}>
//               {t.insights.cta} <ArrowUpRight size={14} />
//             </button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {t.insights.blogs.map((blog, i) => (
//               <div key={i} onClick={handleForbiddenClick} className={`group ${clickableClass}`}>
//                 <div className="aspect-[16/10] overflow-hidden mb-8 border border-slate-100 shadow-lg">
//                   <img src={
//                     // i === 0 ? "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800" : i === 1 ? "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800" : "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"
//                     blogimgs[i]
//                     } className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="" />
//                 </div>
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">{blog.tag}</span>
//                   <span className="text-[10px] font-bold text-slate-400 uppercase">{blog.date}</span>
//                 </div>
//                 <h3 className="text-xl lg:text-2xl font-bold leading-tight group-hover:text-red-500 transition">{blog.title}</h3>
//                 <p className="text-slate-500 mt-4 text-sm leading-relaxed line-clamp-3">{blog.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 7. Stats */}
//       <section className="bg-slate-950 py-24 text-white">
//         <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
//           {["150K", "24/7", "-35%", "12"].map((val, i) => (
//             <div key={i} onClick={handleForbiddenClick} className={clickableClass}>
//               <div className="text-4xl lg:text-5xl font-light mb-2 text-red-500">{val}</div>
//               <div className="text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{t.stats[i]}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//             {/* Contact Form Section */}
//       <section className="py-32 bg-slate-50">
//         <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
//           <div className="grid lg:grid-cols-2 gap-20">
//             <div>
//               <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-6">{t.contact.subtitle}</h2>
//               <h3 className="text-4xl font-bold text-slate-950 mb-8">{t.contact.title}</h3>
//               <p className="text-slate-500 leading-loose mb-12 max-w-md">Para consultas técnicas, asociaciones estratégicas o información logística, utilice el canal corporativo oficial.</p>
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4 text-slate-900 font-bold uppercase text-[11px] tracking-widest">
//                   <div className="p-3 bg-white border border-slate-200"><MapPin size={18} className="text-red-600"/></div>
//                   <span>Puertollano, Ciudad Real, Spain</span>
//                 </div>
//                 <div className="flex items-center gap-4 text-slate-900 font-bold uppercase text-[11px] tracking-widest">
//                   <div className="p-3 bg-white border border-slate-200"><Phone size={18} className="text-red-600"/></div>
//                   <span>{number1}</span>
//                 </div>
//               </div>
//             </div>
//             <form onSubmit={handleFormSubmit} className="bg-white p-10 border border-slate-200 shadow-xl space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{t.contact.name}</label>
//                   <input required name="name" type="text" className="w-full bg-slate-50 border border-slate-200 p-4 text-sm focus:outline-none focus:border-red-500 transition" />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{t.contact.email}</label>
//                   <input required name="email" type="email" className="w-full bg-slate-50 border border-slate-200 p-4 text-sm focus:outline-none focus:border-red-500 transition" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{t.contact.subject}</label>
//                 <input required name="subject" type="text" className="w-full bg-slate-50 border border-slate-200 p-4 text-sm focus:outline-none focus:border-red-500 transition" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{t.contact.msg}</label>
//                 <textarea required name="message" rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 text-sm focus:outline-none focus:border-red-500 transition resize-none"></textarea>
//               </div>
//               <button type="submit" className="w-full bg-slate-950 text-white font-black uppercase tracking-[0.3em] text-[10px] py-5 flex items-center justify-center gap-3 hover:bg-red-600 transition duration-500">
//                 {t.contact.btn} <Send size={14}/>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//       {/* Product Modal */}
// {selectedGroup && (
//   <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//     <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setSelectedGroup(null)} />
//     <div className="relative bg-white w-full max-w-3xl animate-in slide-in-from-bottom-10 duration-300 shadow-2xl border border-slate-200 overflow-hidden">
      
//       {/* Modal Header */}
//       <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
//         <div>
//           <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-1">{selectedGroup.name}</h2>
//           <h3 className="text-2xl font-bold tracking-tight">{language === 'ES' ? 'Especificaciones de Producto' : 'Product Specifications'}</h3>
//         </div>
//         <button onClick={() => setSelectedGroup(null)} className="p-2 hover:bg-red-600 hover:text-white transition-all rounded-full shadow-sm">
//           <X size={24} />
//         </button>
//       </div>

//       {/* Product List with Images */}
//       <div className="p-8 max-h-[60vh] overflow-y-auto grid grid-cols-1 gap-4">
//         {selectedGroup.items.map((item, i) => (
//           <div key={i} className="flex items-center gap-6 p-4 border border-slate-100 hover:border-red-500 transition-all group cursor-default">
//             <div className="w-20 h-20 bg-slate-200 overflow-hidden flex-shrink-0">
//               <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
//             </div>
//             <div className="flex-1">
//               <span className="text-sm font-black uppercase tracking-widest text-slate-400 block mb-1">REF: P-{1000 + i}</span>
//               <span className="text-lg font-bold text-slate-950 tracking-tight">{item.name}</span>
//             </div>
//             <button className="hidden sm:block text-[10px] font-black uppercase tracking-widest bg-slate-950 text-white px-6 py-3 hover:bg-red-600 transition">
//               {language === 'ES' ? 'Ficha Técnica' : 'More Data'}
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
//         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0">Certificación ISO 9001:2026 - Control de Calidad Industrial</p>
//       </div>
//     </div>
//   </div>
// )}

//       {/* 8. Footer */}
//       <footer className="bg-white border-t border-slate-200 pt-20 lg:pt-32 pb-12">
//         <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
//             <div className="sm:col-span-2">
//               <div className="flex items-center gap-2 mb-8">
//                 <Logo1/>
//                 {/* <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm">
//                   <Factory size={24} className="text-white" />
//                 </div> */}
//                 <span className="text-2xl font-black tracking-tighter uppercase">Puerto<span className="text-red-500">llano</span></span>
//               </div>
//               <p className="text-slate-500 text-sm leading-loose max-w-sm mb-4">{t.footer.desc}</p>
//               <div className="space-y-2 text-[11px] font-bold text-slate-900 uppercase">
//                 <p className="flex items-center gap-2"><MapPin size={12} className="text-red-600"/> Puertollano, Ciudad Real, Spain</p>
//                 <div className="flex flex-col gap-1">
//                   <p className="flex items-center gap-2"><Phone size={12} className="text-red-600"/> {joined_number1}</p>
//                 </div>
//                 <p className="flex items-center gap-2 lowercase"><Mail size={12} className="text-red-600"/> ventas@puertollanorefinery.com</p>
//               </div>
//             </div>
//             {t.footer.cols.map((col, i) => (
//               <div key={i}>
//                 <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 lg:mb-8 text-slate-900 border-b border-red-100 pb-2">{col.title}</h5>
//                 <ul className="space-y-3 lg:space-y-4 text-[11px] font-bold uppercase text-slate-500">
//                   {col.links.map(link => ( 
//                     <li key={link}>
//                       <a href="#" onClick={handleForbiddenClick} className={`hover:text-red-600 transition ${clickableClass}`}>{link}</a>
//                     </li> 
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
//             <span>{t.footer.copy}</span>
//             <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
//               {t.footer.legal.map(link => ( <a key={link} href="#" onClick={handleForbiddenClick} className={`hover:text-slate-900 transition ${clickableClass}`}>{link}</a> ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, Shield, Droplets, Factory, Zap, 
  ChevronDown, ChevronLeft, ChevronRight,
  ArrowUpRight, Menu, MapPin, Activity, 
  Settings, Award, Scale, Beaker, Truck, Container, X, Phone, Mail,
  Send, AlertTriangle, TrendingUp, Newspaper, Clock
} from 'lucide-react';

// ─── CONFIG ────────────────────────────────────────────────────────────────
let email1 = "ventas@puertollanorefinery.com";
let joined_number1 = "+34 917 500 200 / 100 / 000";
let number1 = "+34 917 500 200";

let blogimgs = [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800",
  "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800"
];

let slideimg = [
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000",
  "/pilmo-kang-H72SCCTZPE8-unsplash.jpg",
  "/stepan-konev-sTlQYjzvXCQ-unsplash.jpg",
  "https://images.unsplash.com/photo-1581092202980-4a71f8a2e43f?q=80&w=2000",
  "https://images.unsplash.com/photo-1581092840393-c1f07173ed5b?q=80&w=2000"
];

const handleFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const subject: any = formData.get('subject');
  const message = formData.get('message');
  window.location.href = `mailto:${email1}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + "\n\n" + message)}`;
};

// ─── TRANSLATIONS ──────────────────────────────────────────────────────────
const translations = {
  ES: {
    breaking: [
      "BRENT: $84.12 +0.8% ▲",
      "COMPLEJO PUERTOLLANO: ESTADO OPERACIONAL NOMINAL",
      "PLANTA HVO 200.000 T/AÑO — EN PUESTA EN MARCHA 2026",
      "POLIETILENO UAPM: NUEVA LÍNEA ACTIVA Q2 2026",
      "REPSOL SUPERA 1.500 ESTACIONES CON DIÉSEL 100% RENOVABLE",
    ],
    products: {
      title: "Cartera de Productos",
      subtitle: "Soluciones Energéticas y Materias Primas",
      groups: [
        {
          id: "oil",
          name: "Petróleo y Lubricantes",
          image: "/fulvio-ciccolo-qWl6oAOaMrM-unsplash.jpg",
          items: [
            { name: "Crudo Brent Refinado", img: "/download (3).jpeg" },
            { name: "Aceites Base (Grupo I/II)", img: "/download (4).jpeg" },
            { name: "Lubricantes Sintéticos", img: "/images (1).jpeg" }
          ]
        },
        {
          id: "fuel",
          name: "Combustibles",
          image: "/engin-akyurt-f4UbPVbJcjw-unsplash.jpg",
          items: [
            { name: "Diésel Euro 6", img: "/download (2).jpeg" },
            { name: "Queroseno Aviación (Jet A-1)", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=400" },
            { name: "Biocombustibles Avanzados (HVO)", img: "/images.jpeg" }
          ]
        },
        {
          id: "gas",
          name: "Gases e Hidrógeno",
          image: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg",
          items: [
            { name: "Biohidrógeno (Residuos Biomasa)", img: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg" },
            { name: "GLP (Butano/Propano)", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400" },
            { name: "Polietileno UAPM Grado Médico", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400" }
          ]
        }
      ]
    },
    contact: {
      title: "Centro de Contacto",
      subtitle: "Solicitudes de Refino y Logística",
      name: "Nombre Completo",
      email: "Correo Corporativo",
      subject: "Asunto",
      msg: "Mensaje Técnico",
      btn: "Enviar Solicitud"
    },
    nav: ["Infraestructura", "Logística", "Estrategia ESG", "Inversores", "Sostenibilidad", "Seguridad", "I+D+i", "Carreras"],
    heroButtons: ["Directorio de Activos", "Documentos Técnicos"],
    hero: [
      { title: "Independencia Energética", desc: "Optimizando el complejo de Puertollano para liderar el suministro energético de la Península Ibérica. Nuestra infraestructura de vanguardia garantiza un flujo constante de recursos estratégicos, fortaleciendo la soberanía energética regional mediante procesos de refinado de última generación y una red logística sin precedentes en el sur de Europa." },
      { title: "Circularidad Total", desc: "La nueva planta de combustibles 100% renovables de Puertollano — con inversión de más de 120 millones de euros — procesa aceite de cocina usado y residuos agroalimentarios para producir 200.000 toneladas anuales de HVO. Evitará 750.000 toneladas de CO₂ al año, consolidando el complejo como polo multienergético de referencia en Castilla-La Mancha." },
      { title: "Hidrógeno Biogénico", desc: "Repsol invierte 16 millones de euros para producir biohidrógeno en Puertollano, sustituyendo el gas natural por biomethano de origen residual. Esta iniciativa reducirá la huella de CO₂ del diésel renovable hasta en un 98%, evitando más de 29.000 toneladas de emisiones anuales e integrando el hidrógeno renovable en el núcleo operativo del complejo." }
    ],
    overview: {
      tag: "Complejo Industrial Puertollano",
      title: "Liderando la Transformación Multienergética en España.",
      p1: "El complejo de Puertollano es un referente en integración química. No solo refinamos; conectamos procesos de destilación con la producción de olefinas y plásticos de alto valor técnico. La incorporación del polietileno de ultra alto peso molecular (UAPM) en 2026 refuerza la posición del centro como referente nacional en materiales de alto valor añadido.",
      p2: "Nuestra hoja de ruta 2026 incluye la plena puesta en marcha de la planta de biocombustibles avanzados, la integración del biohidrógeno y la expansión del catálogo de productos circulares, consolidando nuestra posición como centro multienergético competitivo y eficiente."
    },
    tech: {
      title: "Capacidades Técnicas",
      units: [
        { label: "Destilación Atmosférica", value: "A-1", desc: "Fraccionamiento primario de crudo con capacidad de 150.000 BPD." },
        { label: "Hidrotratamiento HVO", value: "HDT-R", desc: "Unidad reconvertida para procesar aceite de cocina usado — 200.000 t/año." },
        { label: "Biohidrógeno", value: "BH-1", desc: "Producción de hidrógeno bajo en carbono a partir de biomethano residual. Inversión: €16M." }
      ]
    },
    cards: [
      { title: "Resiliencia Técnica", text: "Integración de gemelos digitales para el mantenimiento predictivo de unidades de vacío y coquer." },
      { title: "Cumplimiento RED III", text: "Alineación estricta con las directivas europeas de energías renovables — la planta HVO recibe apoyo del Innovation Fund de la UE." },
      { title: "Polietileno UAPM", text: "Producción de polietileno de ultra alto peso molecular de grado médico y alimentario a partir de 2026." },
      { title: "Seguridad Laboral", text: "Más de 2 millones de horas sin accidentes con baja. Grupo de Coordinación de Seguridad de 50 personas en paradas." }
    ],
    insights: {
      title: "Inteligencia Operativa",
      subtitle: "Análisis técnico del hub petroquímico más importante de Castilla-La Mancha.",
      cta: "Ver Todos los Informes",
      blogs: [
        { tag: "ACTUALIDAD · ABR 2026", title: "Sindicatos alertan sobre reducción de plantilla en Repsol Fuels y Materials Puertollano", date: "17 Abr 2026", desc: "Más de un centenar de trabajadores de Repsol Fuels y Materials se concentran ante el Ayuntamiento. Los comités de empresa trasladan al alcalde Miguel Ángel Ruiz su preocupación por la propuesta de eliminación de 36 puestos en el complejo petroquímico — 17 en Fuels, 14 en Materials y 5 en RLESA." },
        { tag: "OPERACIONES · MAR 2026", title: "Planta HVO de Puertollano recibe primer lote de diésel 100% renovable desde Cartagena", date: "Mar 2026", desc: "Primer trasiego de HVO (hidrobiodiésel) a través de los más de 400 km del oleoducto entre Cartagena y Puertollano. El combustible, almacenado en tanque dedicado, ya se comercializa por cisterna para cubrir la demanda regional." },
        { tag: "INVERSIÓN · 2026", title: "Repsol destina €26M a nueva planta de polietileno de ultra alto peso molecular en Puertollano", date: "Q1 2026", desc: "La instalación, que fabricará 25.000 toneladas anuales de plástico reciclado — casi el doble de la capacidad actual — refuerza el liderazgo del complejo en la economía circular y responde a la regulación europea de 30% de contenido reciclado en envases para 2030." },
        { tag: "ENERGÍA · 2026", title: "Biohidrógeno integrado en el esquema productivo del complejo: inversión de €16 millones", date: "2026", desc: "Repsol sustituye el gas natural por biomethano de origen residual para producir hidrógeno bajo en carbono. La iniciativa evitará más de 29.000 t CO₂/año y reducirá la huella del diésel renovable hasta un 98% respecto del combustible mineral de referencia." },
        { tag: "MERCADO · DIC 2025", title: "Repsol supera 1.500 estaciones con Nexa Diésel 100% renovable en España y Portugal", date: "Dic 2025", desc: "Con más de 210 millones de litros vendidos, Repsol consolida la red de combustible renovable más relevante de Europa. Puertollano aportará 200.000 t/año adicionales cuando entre en plena producción la segunda planta de HVO." }
      ]
    },
    newsflash: {
      title: "TABLÓN DE NOTICIAS",
      subtitle: "Actividad Reciente del Complejo · Marzo–Abril 2026",
      items: [
        { date: "17 ABR 2026", cat: "RELACIONES LABORALES", headline: "Alcalde se reúne con comités de Repsol Fuels y Materials ante propuesta de 36 supresiones de empleo", src: "Ayuntamiento Puertollano / Europa Press" },
        { date: "14 ABR 2026", cat: "PROTESTA SINDICAL", headline: "Más de 100 operarios marchan desde Euromaster hasta las puertas del complejo en señal de protesta", src: "La Cerca / Lanza Digital" },
        { date: "MAR 2026", cat: "OPERACIONES", headline: "Primer lote HVO recorrido 400 km por oleoducto Cartagena-Puertollano — comercialización iniciada", src: "Ayuntamiento Puertollano / Repsol" },
        { date: "Q1 2026", cat: "PRODUCCIÓN", headline: "Unidad de combustibles 100% renovables entra en fase de puesta en marcha — capacidad 200.000 t/año", src: "Quantum CI / OGJ" },
        { date: "ENE 2026", cat: "POLIETILENO", headline: "Nueva línea UAPM incorporada a cartera de producción — 25.000 t/año de plástico reciclado avanzado", src: "Energies Media / Repsol" },
      ]
    },
    stats: ["Barriles/Día Capacidad", "Soporte Técnico 24/7", "Reducción CO₂ 2030", "Centros Logísticos"],
    footer: {
      desc: "Complejo Petroquímico de Puertollano: Innovación constante para una energía más eficiente y sostenible. Parte del Grupo Repsol.",
      follow: "SÍGUENOS",
      cols: [
        { title: "Infraestructura", links: ["Unidades de Crudo", "Complejo Olefinas", "Logística Ductos", "I+D Tech"] },
        { title: "Cumplimiento", links: ["Seguridad y Salud", "Medio Ambiente", "Ética Profesional", "Certificaciones ISO"] },
        { title: "Inversores", links: ["Resultados Anuales", "Gobierno Corporativo", "Accionistas", "Calendario Financiero"] }
      ],
      legal: ["Privacidad", "Aviso Legal", "Cookies"],
      copy: "© 2026 PuertollanoRefinery / Grupo Repsol Industrial."
    }
  },
  EN: {
    breaking: [
      "BRENT: $84.12 +0.8% ▲",
      "PUERTOLLANO COMPLEX: NOMINAL OPERATIONAL STATUS",
      "HVO PLANT 200,000 T/YR — COMMISSIONING IN PROGRESS 2026",
      "UHMW POLYETHYLENE: NEW LINE ACTIVE Q2 2026",
      "REPSOL SURPASSES 1,500 STATIONS WITH 100% RENEWABLE DIESEL",
    ],
    products: {
      title: "Product Portfolio",
      subtitle: "Energy Solutions & Raw Materials",
      groups: [
        {
          id: "oil",
          name: "Oil & Lubricants",
          image: "/fulvio-ciccolo-qWl6oAOaMrM-unsplash.jpg",
          items: [
            { name: "Refined Brent Crude", img: "/download (3).jpeg" },
            { name: "Base Oils (Group I/II)", img: "/download (4).jpeg" },
            { name: "Synthetic Lubricants", img: "/images (1).jpeg" }
          ]
        },
        {
          id: "fuel",
          name: "Fuels",
          image: "/engin-akyurt-f4UbPVbJcjw-unsplash.jpg",
          items: [
            { name: "Euro 6 Diesel", img: "/download (2).jpeg" },
            { name: "Aviation Kerosene (Jet A-1)", img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=400" },
            { name: "Advanced Biofuels (HVO)", img: "/images.jpeg" }
          ]
        },
        {
          id: "gas",
          name: "Gas & Hydrogen",
          image: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg",
          items: [
            { name: "Bio-Hydrogen (Waste Biomethane)", img: "/martin-adams-a_PDPUPuNZ8-unsplash.jpg" },
            { name: "LPG (Butane/Propane)", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400" },
            { name: "UHMW Polyethylene (Medical Grade)", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400" }
          ]
        }
      ]
    },
    contact: {
      title: "Contact Hub",
      subtitle: "Refining & Logistics Inquiries",
      name: "Full Name",
      email: "Corporate Email",
      subject: "Subject",
      msg: "Technical Message",
      btn: "Send Inquiry"
    },
    nav: ["Infrastructure", "Logistics", "ESG Strategy", "Investors", "Sustainability", "Safety", "R&D", "Careers"],
    heroButtons: ["Asset Directory", "Technical Papers"],
    hero: [
      { title: "Energy Independence", desc: "Optimizing the Puertollano complex to lead the energy supply of the Iberian Peninsula. Our cutting-edge infrastructure guarantees a constant flow of strategic resources, strengthening regional energy sovereignty through state-of-the-art refining processes and a logistics network unprecedented in Southern Europe." },
      { title: "Total Circularity", desc: "The new 100% renewable fuels plant at Puertollano — backed by €120M+ investment — processes used cooking oil and agri-food waste to produce 200,000 tonnes per year of HVO. It will avoid 750,000 tonnes of CO₂ annually, consolidating the complex as a leading multi-energy hub in Castile-La Mancha." },
      { title: "Bio-Hydrogen Integration", desc: "Repsol invests €16M to produce bio-hydrogen at Puertollano by substituting natural gas with waste-derived biomethane. This reduces the CO₂ footprint of renewable diesel by up to 98%, avoiding more than 29,000 tonnes of emissions annually and embedding renewable hydrogen in the core of the complex's operations." }
    ],
    overview: {
      tag: "Puertollano Industrial Complex",
      title: "Leading Spain's Multi-Energy Transformation.",
      p1: "The Puertollano complex is a benchmark in chemical integration. We don't just refine; we connect distillation processes with high-value technical plastics. The addition of ultra-high molecular weight polyethylene (UHMWPE) in 2026 reinforces the centre's position as a national leader in high-value materials.",
      p2: "Our 2026 roadmap includes full commissioning of the advanced biofuels plant, bio-hydrogen integration, and expansion of the circular product catalogue — consolidating our position as a competitive, efficient multi-energy hub."
    },
    tech: {
      title: "Technical Capabilities",
      units: [
        { label: "Atmospheric Distillation", value: "A-1", desc: "Primary crude fractionation with 150,000 BPD capacity." },
        { label: "HVO Hydrotreating", value: "HDT-R", desc: "Converted unit processing used cooking oil — 200,000 t/yr capacity." },
        { label: "Bio-Hydrogen Unit", value: "BH-1", desc: "Low-carbon hydrogen from waste biomethane. Investment: €16M." }
      ]
    },
    cards: [
      { title: "Technical Resilience", text: "Digital twin integration for predictive maintenance of vacuum and coker units." },
      { title: "RED III Compliance", text: "Strict alignment with European renewable energy directives — HVO plant backed by EU Innovation Fund." },
      { title: "UHMW Polyethylene", text: "Production of ultra-high molecular weight polyethylene at medical and food grade from 2026." },
      { title: "Operational Safety", text: "Over 2 million hours without lost-time accidents. 50-person Security Coordination Group for shutdowns." }
    ],
    insights: {
      title: "Operational Intelligence",
      subtitle: "Technical analysis of the most important petrochemical hub in central Spain.",
      cta: "View All Reports",
      blogs: [
        { tag: "CURRENT · APR 2026", title: "Unions raise alarm over workforce reduction at Repsol Fuels and Materials Puertollano", date: "17 Apr 2026", desc: "Over 100 workers from Repsol Fuels and Materials rally outside the Town Hall. Works councils brief Mayor Miguel Ángel Ruiz on the proposed elimination of 36 posts — 17 in Fuels, 14 in Materials and 5 in RLESA — warning of safety implications." },
        { tag: "OPERATIONS · MAR 2026", title: "Puertollano HVO plant receives first batch of 100% renewable diesel from Cartagena", date: "Mar 2026", desc: "First transfer of HVO (hydroprocessed vegetable oil) along the 400 km+ pipeline from Cartagena to Puertollano. The fuel, stored in a dedicated tank, is now being distributed by tanker to meet regional demand." },
        { tag: "INVESTMENT · 2026", title: "Repsol commits €26M to new ultra-high molecular weight polyethylene plant at Puertollano", date: "Q1 2026", desc: "The facility will manufacture 25,000 tonnes per year of recycled plastic — nearly double current output — strengthening the complex's circular economy leadership ahead of Europe's 30% recycled packaging target for 2030." },
        { tag: "ENERGY · 2026", title: "Bio-hydrogen integrated into complex production: €16 million investment", date: "2026", desc: "Repsol replaces natural gas with waste-derived biomethane to produce low-carbon hydrogen. The initiative will avoid over 29,000 t CO₂/yr and reduce renewable diesel's carbon footprint by up to 98% versus conventional mineral fuel." },
        { tag: "MARKET · DEC 2025", title: "Repsol surpasses 1,500 stations with 100% renewable Nexa Diesel in Spain and Portugal", date: "Dec 2025", desc: "With over 210 million litres sold, Repsol consolidates Europe's most significant renewable fuel network. Puertollano will contribute a further 200,000 t/yr once the second HVO plant reaches full production." }
      ]
    },
    newsflash: {
      title: "NEWS BOARD",
      subtitle: "Recent Complex Activity · March–April 2026",
      items: [
        { date: "17 APR 2026", cat: "LABOUR RELATIONS", headline: "Mayor meets Repsol Fuels & Materials works councils over proposed 36-post workforce reduction", src: "Ayuntamiento Puertollano / Europa Press" },
        { date: "14 APR 2026", cat: "INDUSTRIAL ACTION", headline: "100+ workers march from Euromaster roundabout to complex gates in protest", src: "La Cerca / Lanza Digital" },
        { date: "MAR 2026", cat: "OPERATIONS", headline: "First HVO batch transported 400 km by pipeline from Cartagena to Puertollano — now in commercial distribution", src: "Ayuntamiento Puertollano / Repsol" },
        { date: "Q1 2026", cat: "PRODUCTION", headline: "100% renewable fuels unit enters commissioning phase — rated capacity 200,000 t/yr", src: "Quantum CI / OGJ" },
        { date: "JAN 2026", cat: "POLYETHYLENE", headline: "New UHMWPE line incorporated into production portfolio — 25,000 t/yr of advanced recycled plastic", src: "Energies Media / Repsol" },
      ]
    },
    stats: ["Barrels/Day Capacity", "24/7 Tech Support", "CO₂ Reduction 2030", "Logistics Hubs"],
    footer: {
      desc: "Puertollano Petrochemical Complex: Constant innovation for more efficient and sustainable energy. Part of Grupo Repsol.",
      follow: "FOLLOW US",
      cols: [
        { title: "Infrastructure", links: ["Crude Units", "Olefin Complex", "Pipeline Logistics", "R&D Tech"] },
        { title: "Compliance", links: ["Health & Safety", "Environment", "Ethics", "ISO Certifications"] },
        { title: "Investors", links: ["Annual Results", "Corporate Governance", "Shareholders", "Financial Calendar"] }
      ],
      legal: ["Privacy", "Legal Notice", "Cookies"],
      copy: "© 2026 PuertollanoRefinery / Grupo Repsol Industrial."
    }
  }
};

// ─── LOGO ──────────────────────────────────────────────────────────────────
function Logo1() {
  return (
    <div className="flex items-center gap-1">
      <div style={{ width: 36, height: 36, background: '#b91c1c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Factory size={20} color="white" />
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function PuertollanoRefinery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('ES');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isForbidden, setIsForbidden] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [tickerPos, setTickerPos] = useState(0);
  const t = translations[language] || translations['ES'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === t.hero.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [t.hero.length]);

  // Ticker scroll
  useEffect(() => {
    const ticker = setInterval(() => {
      setTickerPos(prev => prev - 1);
    }, 30);
    return () => clearInterval(ticker);
  }, []);

  const handleForbiddenClick = (e) => {
    e.preventDefault();
    setIsForbidden(true);
  };

  if (isForbidden) {
    return (
      <div style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="fixed inset-0 bg-white z-[9999] p-8 flex flex-col items-start justify-start text-black">
        <h1 className="font-bold text-xl mb-2">Forbidden</h1>
        <p className="mb-4">You do not have access to this resource</p>
        <hr className="w-full border-black-300" />
        <p className="text-sm italic">Apache 2.4.64(freebsd) npm-itk/2.7-04 PHP/8.4.10</p>
        <button onClick={() => setIsForbidden(false)} className="mt-12 text-blue-600 underline hover:text-blue-800">
          Return to home
        </button>
      </div>
    );
  }

  const clickableClass = "cursor-pointer transition-all duration-200 active:scale-95";

  const tickerText = t.breaking.join('    ◆    ') + '    ◆    ';

  // ── STYLES (injected for serif/mature fonts) ──
  const globalStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Roboto+Condensed:wght@400;700;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,600;0,8..60,700;1,8..60,400&display=swap');
    
    .font-display { font-family: 'Roboto Condensed', 'Arial Narrow', Arial, sans-serif; }
    .font-body { font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif; }
    .font-serif-display { font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; }
    
    .ticker-wrap { overflow: hidden; white-space: nowrap; }
    .ticker-inner { display: inline-block; animation: ticker-scroll 60s linear infinite; }
    @keyframes ticker-scroll { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
    
    .news-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
    @media (max-width: 768px) { .news-grid { grid-template-columns: 1fr; } }
    
    .divider-rule { border: none; border-top: 2px solid #1e293b; margin: 0; }
    .divider-rule-thin { border: none; border-top: 1px solid #cbd5e1; margin: 0; }
    
    .industrial-stamp {
      display: inline-block;
      border: 2px solid #b91c1c;
      padding: 2px 8px;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 900;
      font-size: 9px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #b91c1c;
    }
    
    .section-rule { 
      display: flex; 
      align-items: center; 
      gap: 12px; 
      margin-bottom: 20px;
    }
    .section-rule::after { 
      content: ''; 
      flex: 1; 
      border-top: 2px solid #1e293b; 
    }
    
    .news-item { border-bottom: 1px solid #e2e8f0; padding: 14px 0; }
    .news-item:last-child { border-bottom: none; }
  `;

  return (
    <div style={{ fontFamily: 'Source Serif 4, Georgia, Times New Roman, serif' }} className="min-h-screen bg-white text-slate-900 selection:bg-red-100">
      <style>{globalStyle}</style>

      {/* ── BREAKING TICKER ── */}
      <div className="bg-slate-950 border-b border-red-800 py-2 overflow-hidden relative z-[60]">
        <div className="flex items-center">
          <div className="bg-red-700 text-white px-4 py-1 flex-shrink-0 z-10 font-display font-black text-[10px] tracking-widest uppercase mr-4 flex items-center gap-2">
            <Activity size={10} /> EN VIVO
          </div>
          <div className="ticker-wrap flex-1">
            <div className="ticker-inner font-display font-bold text-[11px] tracking-wider text-slate-300 uppercase">
              {tickerText}{tickerText}
            </div>
          </div>
          <div className="flex-shrink-0 px-4 font-display text-[10px] text-slate-500 font-bold">
            {new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()} · {new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })} UTC
          </div>
        </div>
      </div>

      {/* ── MASTHEAD / NAV ── */}
      <header className="bg-white border-b-2 border-slate-900">
        {/* Masthead row */}
        <div className="border-b border-slate-200 py-3 px-6 lg:px-10 flex items-center justify-between">
          <div className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
            PUERTOLLANO, CIUDAD REAL — ESPAÑA — COMPLEJO INDUSTRIAL REPSOL
          </div>
          <div className="font-display text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
            EST. 1959 · 320 HA · 150.000 BPD
          </div>
        </div>

        <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-slate-200">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-20 lg:h-24 flex items-center justify-between">
            <div className="flex items-center gap-6 lg:gap-16">
              <div className={`flex items-center gap-3 ${clickableClass}`} onClick={() => window.location.reload()}>
                <Logo1 />
                <div>
                  <div style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-xl lg:text-2xl font-bold tracking-tight uppercase">
                    Puerto<span className="text-red-700">llano</span>
                  </div>
                  <div className="font-display text-[8px] font-bold tracking-[0.3em] text-slate-400 uppercase -mt-1">Complejo Industrial Repsol</div>
                </div>
              </div>
              <div className="hidden xl:flex items-center gap-8 font-display text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600 border-l border-slate-200 pl-10">
                {t.nav.slice(0, 4).map((item, i) => (
                  <a key={i} href="#" onClick={handleForbiddenClick} className={`${clickableClass} hover:text-red-700 border-b-2 border-transparent hover:border-red-700 pb-1`}>{item}</a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-3 border-r border-slate-200 pr-4">
                <div className="text-right">
                  <div className="font-display text-[9px] font-bold text-slate-400 uppercase tracking-widest">Estado</div>
                  <div className="font-display text-[10px] font-black text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Nominal
                  </div>
                </div>
              </div>
              <div className="relative hidden md:block">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 font-display text-[10px] font-black uppercase bg-slate-100 px-4 py-2 border border-slate-300 hover:bg-slate-200 transition">
                  <Globe size={12} /> {language} <ChevronDown size={12} />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-0 w-36 bg-white border border-slate-300 shadow-xl z-50">
                    {['ES', 'EN'].map((lang) => (
                      <button key={lang} onClick={() => { setLanguage(lang); setIsLangOpen(false); }}
                        className="w-full text-left px-4 py-3 font-display text-[10px] font-black hover:bg-slate-50 uppercase border-b border-slate-100 last:border-0 tracking-widest">
                        {lang === 'ES' ? '🇪🇸 Español' : '🇬🇧 English'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => setIsMenuOpen(true)} className={`p-2 bg-slate-900 text-white hover:bg-red-700 transition ${clickableClass}`}>
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MOBILE MENU ── */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white">
          <div className="h-full flex flex-col">
            <div className="p-6 border-b-2 border-slate-900 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Logo1 />
                <div style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-lg font-bold uppercase">Puerto<span className="text-red-700">llano</span></div>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500 hover:text-red-700">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-0 mb-10 border-t-2 border-slate-900">
                {t.nav.map((item, i) => (
                  <a key={i} href="#" onClick={handleForbiddenClick}
                    className={`block font-display font-bold text-sm uppercase tracking-widest py-4 border-b border-slate-200 text-slate-700 hover:text-red-700 ${clickableClass}`}>
                    {item}
                  </a>
                ))}
              </nav>
              <div className="pt-6 border-t border-slate-200">
                <p className="font-display text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-2">Ubicación</p>
                <p className="text-sm text-slate-600">Puertollano, Ciudad Real, España</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO CAROUSEL ── */}
      <section className="relative h-[75vh] lg:h-[85vh] bg-slate-900 overflow-hidden">
        {t.hero.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slideimg[i]} className="w-full h-full object-cover brightness-[0.3]" alt="" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1800px] mx-auto px-6 lg:px-10 w-full">
                <div className="max-w-3xl">
                  {/* Issue number style label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-0.5 bg-red-600" />
                    <span className="font-display font-bold text-[10px] tracking-[0.4em] text-red-400 uppercase">
                      {language === 'ES' ? 'COMPLEJO INDUSTRIAL REPSOL · PUERTOLLANO' : 'REPSOL INDUSTRIAL COMPLEX · PUERTOLLANO'}
                    </span>
                  </div>
                  <h1 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
                    {slide.title.split(' ')[0]} <span className="text-red-500 italic">{slide.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  <p className="text-base lg:text-lg text-slate-300 max-w-2xl leading-loose mb-10 font-light" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
                    {slide.desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={handleForbiddenClick} className={`bg-red-700 hover:bg-red-800 text-white px-8 py-4 font-display font-black uppercase tracking-[0.2em] text-[10px] transition-all ${clickableClass}`}>
                      {t.heroButtons[0]}
                    </button>
                    <button onClick={handleForbiddenClick} className={`border border-white/40 text-white px-8 py-4 font-display font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition ${clickableClass}`}>
                      {t.heroButtons[1]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Slide counter — newspaper-style */}
        <div className="absolute bottom-8 left-6 lg:left-10 flex items-center gap-3 z-20">
          {t.hero.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)}
              className={`h-0.5 transition-all ${i === currentSlide ? 'w-10 bg-red-500' : 'w-4 bg-white/30'}`} />
          ))}
        </div>
        <div className="absolute bottom-6 right-8 flex gap-3 z-20">
          <button onClick={() => setCurrentSlide(currentSlide === 0 ? t.hero.length - 1 : currentSlide - 1)}
            className={`p-3 border border-white/20 text-white hover:bg-red-700 transition ${clickableClass}`}><ChevronLeft size={18} /></button>
          <button onClick={() => setCurrentSlide(currentSlide === t.hero.length - 1 ? 0 : currentSlide + 1)}
            className={`p-3 border border-white/20 text-white hover:bg-red-700 transition ${clickableClass}`}><ChevronRight size={18} /></button>
        </div>
      </section>

      {/* ── NEWSBOARD (REAL APRIL 2026 NEWS) ── */}
      <section className="bg-amber-50 border-y-2 border-slate-900 py-0">
        <div className="max-w-[1800px] mx-auto px-0">
          {/* Header bar */}
          <div className="bg-slate-900 text-white px-6 lg:px-10 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Newspaper size={16} className="text-red-400" />
              <span className="font-display font-black text-[11px] tracking-[0.3em] uppercase">{t.newsflash.title}</span>
              <span className="font-display text-[10px] text-slate-400 uppercase tracking-wider">— {t.newsflash.subtitle}</span>
            </div>
            <div className="font-display text-[9px] text-slate-400 font-bold uppercase tracking-widest hidden md:block">
              FUENTE: LACERCA · LANZA DIGITAL · AYUNTAMIENTO PUERTOLLANO · REPSOL · OGJ
            </div>
          </div>

          {/* News items grid */}
          <div className="divide-y divide-slate-300">
            {t.newsflash.items.map((item, i) => (
              <div key={i} onClick={handleForbiddenClick} className={`flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 px-6 lg:px-10 py-4 hover:bg-amber-100 transition ${clickableClass}`}>
                <div className="flex-shrink-0 w-28">
                  <div className="font-display font-black text-[9px] tracking-widest text-slate-500 uppercase">{item.date}</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="industrial-stamp">{item.cat}</span>
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-[13px] text-slate-900 leading-snug">{item.headline}</p>
                </div>
                <div className="flex-shrink-0 font-display text-[9px] text-slate-400 uppercase tracking-wider hidden lg:block">{item.src}</div>
                <ArrowUpRight size={14} className="flex-shrink-0 text-red-600 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL UNITS ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="section-rule mb-10">
            <h2 className="font-display font-black text-[11px] uppercase tracking-[0.4em] text-red-700">{t.tech.title}</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/3">
              <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
                Infraestructura crítica operando bajo estándares de máxima eficiencia térmica y control de emisiones en tiempo real. Tres grandes proyectos en marcha en 2026 refuerzan la posición del complejo como centro multienergético de referencia.
              </p>
              <div className="mt-6 border-l-4 border-red-700 pl-4">
                <p className="font-display font-black text-[9px] uppercase tracking-widest text-slate-400 mb-1">Capacidad Total</p>
                <p style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-3xl font-bold text-slate-900">150.000 <span className="text-base font-normal text-slate-500">bbl/día</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full lg:w-2/3 border border-slate-300">
              {t.tech.units.map((unit, i) => (
                <div key={i} onClick={handleForbiddenClick}
                  className={`border-r border-slate-300 last:border-r-0 p-8 hover:bg-red-50 transition ${clickableClass}`}>
                  <div className="font-display font-black text-3xl text-red-700 mb-1">{unit.value}</div>
                  <div className="font-display font-bold text-[10px] uppercase text-slate-500 mb-4 tracking-widest border-b border-slate-200 pb-3">{unit.label}</div>
                  <p className="text-xs text-slate-500 leading-relaxed" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>{unit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC OVERVIEW ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="section-rule mb-6">
                <h2 className="font-display font-black text-[11px] uppercase tracking-[0.4em] text-red-700">{t.overview.tag}</h2>
              </div>
              <h3 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-3xl lg:text-4xl font-bold text-slate-950 mb-8 leading-tight">{t.overview.title}</h3>
              <div className="space-y-5 text-slate-700 leading-loose text-sm" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
                <p>{t.overview.p1}</p>
                <p>{t.overview.p2}</p>
              </div>
              {/* Key facts strip */}
              <div className="mt-10 grid grid-cols-2 gap-0 border border-slate-300">
                {[
                  { label: 'Inversión HVO 2026', val: '€120M+' },
                  { label: 'CO₂ evitado/año', val: '750.000 t' },
                  { label: 'Inversión UAPM', val: '€26M' },
                  { label: 'Biohidrógeno', val: '€16M' },
                ].map((f, i) => (
                  <div key={i} className="border-r border-b border-slate-300 last:border-r-0 p-5">
                    <div className="font-display font-black text-[9px] uppercase tracking-widest text-slate-400 mb-1">{f.label}</div>
                    <div style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-xl font-bold text-red-700">{f.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-300">
              {t.cards.map((item, i) => (
                <div key={i} onClick={handleForbiddenClick}
                  className={`p-8 border-r border-b border-slate-300 hover:bg-white transition group ${i % 2 === 1 ? 'border-r-0' : ''} ${i >= 2 ? 'border-b-0' : ''} ${clickableClass}`}>
                  <div className="text-red-700 mb-4 group-hover:scale-110 transition-transform">
                    {i === 0 ? <Settings size={22} /> : i === 1 ? <Shield size={22} /> : i === 2 ? <Beaker size={22} /> : <Award size={22} />}
                  </div>
                  <h4 className="font-display font-black text-[11px] uppercase tracking-widest mb-3 text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 bg-white border-b border-slate-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="section-rule mb-10">
            <h2 className="font-display font-black text-[11px] uppercase tracking-[0.4em] text-red-700">{t.products.subtitle}</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <h3 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-3xl lg:text-4xl font-bold text-slate-950">{t.products.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-300">
            {t.products.groups.map((group, gi) => (
              <div key={group.id} onClick={() => setSelectedGroup(group)}
                className={`group relative overflow-hidden h-[420px] border-r border-slate-300 last:border-r-0 ${clickableClass}`}>
                <img src={group.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900/20" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="bg-red-700 w-10 h-10 flex items-center justify-center mb-5">
                    {group.id === 'oil' ? <Droplets size={18} /> : group.id === 'fuel' ? <Zap size={18} /> : <Factory size={18} />}
                  </div>
                  <div className="font-display font-black text-[9px] uppercase tracking-[0.3em] text-red-400 mb-2">
                    {language === 'ES' ? `${group.items.length} PRODUCTOS` : `${group.items.length} PRODUCTS`}
                  </div>
                  <h4 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-2xl font-bold mb-3">{group.name}</h4>
                  <div className="flex items-center gap-2 font-display text-[10px] font-black uppercase tracking-widest text-red-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {language === 'ES' ? 'Explorar Catálogo' : 'Explore Catalogue'} <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS / NEWS ── */}
      <section className="py-24 bg-slate-50 border-b border-slate-300">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="section-rule mb-4">
                <h2 className="font-display font-black text-[11px] uppercase tracking-[0.4em] text-red-700">{t.insights.title}</h2>
              </div>
              <p className="text-slate-500 text-sm mt-1" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>{t.insights.subtitle}</p>
            </div>
            <button onClick={handleForbiddenClick} className={`font-display font-black text-[10px] uppercase border-b-2 border-red-700 pb-1 flex items-center gap-2 hover:text-red-700 transition ${clickableClass}`}>
              {t.insights.cta} <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-300">
            {t.insights.blogs.map((blog, i) => (
              <div key={i} onClick={handleForbiddenClick}
                className={`group border-r border-b border-slate-300 ${i % 3 === 2 ? 'border-r-0' : ''} ${i >= 3 ? 'border-b-0' : ''} ${clickableClass} bg-white hover:bg-amber-50 transition`}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={blogimgs[i]} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 grayscale group-hover:grayscale-0" alt="" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="industrial-stamp">{blog.tag.split('·')[0].trim()}</span>
                    <span className="font-display font-bold text-[9px] text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Clock size={9} /> {blog.date}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-lg font-bold leading-tight group-hover:text-red-700 transition mb-3">{blog.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-slate-950 py-0 text-white border-y-2 border-red-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800">
          {["150K", "24/7", "−35%", "12"].map((val, i) => (
            <div key={i} onClick={handleForbiddenClick} className={`${clickableClass} py-10 px-8 hover:bg-slate-900 transition`}>
              <div style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-4xl lg:text-5xl font-bold mb-2 text-red-500">{val}</div>
              <div className="font-display font-bold text-[10px] text-slate-500 uppercase tracking-[0.25em]">{t.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-24 bg-white border-b border-slate-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="section-rule mb-6">
                <h2 className="font-display font-black text-[11px] uppercase tracking-[0.4em] text-red-700">{t.contact.subtitle}</h2>
              </div>
              <h3 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-3xl font-bold text-slate-950 mb-8">{t.contact.title}</h3>
              <p className="text-slate-500 leading-loose mb-12 max-w-md text-sm" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
                Para consultas técnicas, asociaciones estratégicas o información logística, utilice el canal corporativo oficial.
              </p>
              <div className="space-y-0 border border-slate-300">
                {[
                  { icon: <MapPin size={16} className="text-red-700" />, label: 'Ubicación', val: 'Puertollano, Ciudad Real, España' },
                  { icon: <Phone size={16} className="text-red-700" />, label: 'Teléfono', val: number1 },
                  { icon: <Mail size={16} className="text-red-700" />, label: 'Correo', val: 'ventas@puertollanorefinery.com' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-5 px-6 py-5 border-b border-slate-200 last:border-b-0">
                    <div className="w-8">{row.icon}</div>
                    <div>
                      <div className="font-display text-[9px] font-bold text-slate-400 uppercase tracking-widest">{row.label}</div>
                      <div className="font-display font-bold text-[12px] text-slate-900 uppercase tracking-wide">{row.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-slate-50 border border-slate-300 p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="font-display text-[9px] font-black uppercase text-slate-500 tracking-widest">{t.contact.name}</label>
                  <input required name="name" type="text" className="w-full bg-white border border-slate-300 p-4 text-sm focus:outline-none focus:border-red-600 transition" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }} />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-[9px] font-black uppercase text-slate-500 tracking-widest">{t.contact.email}</label>
                  <input required name="email" type="email" className="w-full bg-white border border-slate-300 p-4 text-sm focus:outline-none focus:border-red-600 transition" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-display text-[9px] font-black uppercase text-slate-500 tracking-widest">{t.contact.subject}</label>
                <input required name="subject" type="text" className="w-full bg-white border border-slate-300 p-4 text-sm focus:outline-none focus:border-red-600 transition" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }} />
              </div>
              <div className="space-y-2">
                <label className="font-display text-[9px] font-black uppercase text-slate-500 tracking-widest">{t.contact.msg}</label>
                <textarea required name="message" rows={5} className="w-full bg-white border border-slate-300 p-4 text-sm focus:outline-none focus:border-red-600 transition resize-none" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-950 text-white font-display font-black uppercase tracking-[0.25em] text-[10px] py-5 flex items-center justify-center gap-3 hover:bg-red-700 transition duration-300">
                {t.contact.btn} <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODAL ── */}
      {selectedGroup && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setSelectedGroup(null)} />
          <div className="relative bg-white w-full max-w-3xl shadow-2xl border-2 border-slate-900 overflow-hidden" style={{ animation: 'slideUp 0.25s ease' }}>
            <style>{`@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }`}</style>
            <div className="bg-slate-900 px-8 py-6 flex justify-between items-center">
              <div>
                <div className="font-display font-black text-[9px] uppercase tracking-[0.3em] text-red-400 mb-1">{selectedGroup.name}</div>
                <h3 style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-xl font-bold text-white">
                  {language === 'ES' ? 'Especificaciones de Producto' : 'Product Specifications'}
                </h3>
              </div>
              <button onClick={() => setSelectedGroup(null)} className="p-2 text-slate-400 hover:text-white hover:bg-red-700 transition">
                <X size={22} />
              </button>
            </div>
            <div className="p-8 max-h-[60vh] overflow-y-auto divide-y divide-slate-200">
              {selectedGroup.items.map((item, i) => (
                <div key={i} className="flex items-center gap-6 py-5 first:pt-0 hover:bg-red-50 -mx-4 px-4 transition group cursor-default">
                  <div className="w-20 h-20 overflow-hidden flex-shrink-0 border border-slate-200">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                  </div>
                  <div className="flex-1">
                    <span className="font-display text-[9px] font-black tracking-widest text-slate-400 block mb-1 uppercase">REF: P-{1000 + i}</span>
                    <span style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-lg font-bold text-slate-950">{item.name}</span>
                  </div>
                  <button className="hidden sm:block font-display text-[9px] font-black uppercase tracking-widest bg-slate-950 text-white px-5 py-3 hover:bg-red-700 transition">
                    {language === 'ES' ? 'Ficha Técnica' : 'Data Sheet'}
                  </button>
                </div>
              ))}
            </div>
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-200">
              <p className="font-display text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Certificación ISO 9001:2026 · Control de Calidad Industrial</p>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16 pb-16 border-b border-slate-800">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Logo1 />
                <div>
                  <div style={{ fontFamily: 'Libre Baskerville, Georgia, serif' }} className="text-xl font-bold uppercase">Puerto<span className="text-red-500">llano</span></div>
                  <div className="font-display text-[8px] font-bold tracking-[0.3em] text-slate-500 uppercase">Complejo Industrial Repsol</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-loose max-w-sm mb-6" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>{t.footer.desc}</p>
              <div className="space-y-3 text-[11px] font-display font-bold text-slate-400 uppercase tracking-wide border border-slate-800 p-4">
                <p className="flex items-center gap-2"><MapPin size={11} className="text-red-600 flex-shrink-0" /> Puertollano, Ciudad Real, España</p>
                <p className="flex items-center gap-2"><Phone size={11} className="text-red-600 flex-shrink-0" /> {joined_number1}</p>
                <p className="flex items-center gap-2 lowercase"><Mail size={11} className="text-red-600 flex-shrink-0" /> ventas@puertollanorefinery.com</p>
              </div>
            </div>
            {t.footer.cols.map((col, i) => (
              <div key={i}>
                <h5 className="font-display text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-white border-b border-red-900 pb-3">{col.title}</h5>
                <ul className="space-y-3 font-display text-[11px] font-bold uppercase text-slate-500 tracking-wide">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" onClick={handleForbiddenClick} className={`hover:text-red-400 transition ${clickableClass}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-display text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            <span>{t.footer.copy}</span>
            <div className="flex flex-wrap justify-center gap-8">
              {t.footer.legal.map(link => (
                <a key={link} href="#" onClick={handleForbiddenClick} className={`hover:text-slate-300 transition ${clickableClass}`}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}