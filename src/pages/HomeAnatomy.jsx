/**
 * A compact isometric cutaway: the house is the diagram, and each service is
 * shown where it physically belongs. SVG keeps this explainer available when
 * the browser has no WebGL context.
 */
export default function HomeAnatomy({ buildStage = 5 }) {
  return <svg className="sr-anatomy-art" data-build-stage={buildStage} viewBox="0 0 680 460" role="img" aria-label="Montaje isométrico de una vivienda protegida con sistema de alarma AX PRO, sensores, cámaras, sirena, pantalla táctil y un módulo solar independiente">
    <defs>
      <linearGradient id="an-base" x2="0" y2="1"><stop stopColor="#66756f"/><stop offset="1" stopColor="#343e3b"/></linearGradient>
      <linearGradient id="an-wall" x2=".95" y2="1"><stop stopColor="#e5e3da"/><stop offset="1" stopColor="#b9b8ae"/></linearGradient>
      <linearGradient id="an-wall-side" x2="1" y2="1"><stop stopColor="#a9b0a9"/><stop offset="1" stopColor="#77817c"/></linearGradient>
      <linearGradient id="an-floor" x2="1" y2="1"><stop stopColor="#c5bca9"/><stop offset="1" stopColor="#817e73"/></linearGradient>
      <linearGradient id="an-glass" x2=".9" y2="1"><stop stopColor="#a8d7d6" stopOpacity=".9"/><stop offset="1" stopColor="#42666b" stopOpacity=".9"/></linearGradient>
      <linearGradient id="an-solar" x2="1" y2="1"><stop stopColor="#244552"/><stop offset="1" stopColor="#142b35"/></linearGradient>
      <filter id="an-shadow" x="-30%" y="-30%" width="160%" height="180%"><feGaussianBlur in="SourceAlpha" stdDeviation="10"/><feOffset dy="12"/><feComponentTransfer><feFuncA type="linear" slope=".42"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="an-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <ellipse cx="289" cy="408" rx="197" ry="24" fill="#000" opacity=".4" />
    {/* Ground: site, slab and a small path give the house a stable, continuous base. */}
    <g className="an-ground" filter="url(#an-shadow)">
      <path d="m58 354 212-124 233 126-216 128z" fill="url(#an-base)" stroke="#9caaa0" strokeOpacity=".42"/>
      <path d="m83 351 187-109 205 111-188 111z" fill="#aaa89e" stroke="#d9d5c9" strokeOpacity=".44"/>
      <path d="m288 464 187-111-1 13-186 110z" fill="#626b65"/>
      <path d="m83 351 205 113v-13L83 338z" fill="#898b80"/>
      <path d="m302 408 42-25 57 31-42 25z" fill="#c1b69f" opacity=".9"/>
      <path d="m354 439 42-25 11 6-42 25zM337 429l9-5 10 6-9 5z" fill="#d0c8b7" opacity=".8"/>
      <path d="m94 352 42-25 32 17-42 25z" fill="#455448"/><path d="m108 353 12-8 9 5-12 8zM130 360l11-7 8 5-11 7z" fill="#66805f"/>
      <path d="m426 357 39-23 30 16-39 23z" fill="#455448"/><path d="m438 358 11-7 9 5-11 7zM458 365l12-7 8 5-12 7z" fill="#66805f"/>
      <path d="m190 414 20-12 10 6-20 12zM445 391l15-9 9 5-15 9z" fill="#d4d0c5" opacity=".72"/>
    </g>
    {/* Main shell: an actual cutaway with a visible floor plan, room divisions and furniture. */}
    <g className="an-shell">
      <path d="m94 334 179-104 205 111-190 111z" fill="url(#an-floor)" stroke="#e1ddd2" strokeWidth="1.2"/>
      <path d="m94 334 179-104v-94L94 240z" fill="url(#an-wall)" stroke="#f2eee4" strokeOpacity=".74"/>
      <path d="m273 230 205 111v-94L273 136z" fill="url(#an-wall-side)" stroke="#d9ded6" strokeOpacity=".54"/>
      <path d="m94 240 179-104 205 111-190 108z" fill="#d5d5ca" stroke="#f0eee5" strokeWidth="1.4"/>
      {/* Room divisions and interior wall caps */}
      <path d="m244 246 1-77 20-12v80z" fill="#aaa99f" stroke="#eeeadf" strokeOpacity=".65"/>
      <path d="m350 286v-77l15 8v77z" fill="#8a938a" stroke="#e0e2d9" strokeOpacity=".4"/>
      <path d="m244 169 18-10 18 10-18 11zM350 209l15-9 17 9-16 10z" fill="#ede9df"/>
      {/* Exterior glazing with mullions and real depth */}
      <path d="m111 260 72-42v58l-72 42z" fill="url(#an-glass)" stroke="#293a3c" strokeWidth="5"/>
      <path d="m147 239v58m-36-29 72-42" stroke="#394a49" strokeWidth="2"/>
      <path d="m395 223 66 36v57l-66-36z" fill="url(#an-glass)" stroke="#34413f" strokeWidth="4"/>
      <path d="m428 241v58m-33-40 66 36" stroke="#46524f" strokeWidth="2"/>
      <path d="m207 272 28-16v60l-28 16z" fill="#795b42" stroke="#44372e" strokeWidth="2"/>
      <circle cx="228" cy="301" r="2.4" fill="#d5bd8c"/>
      {/* Living room: sofa, coffee table, rug and floor lamp */}
      <path d="m130 342 48-28 46 25-48 29z" fill="#7d817a" stroke="#444d49" strokeWidth="2"/>
      <path d="m130 342v-13l47-28 47 25v13l-48 29z" fill="#59645f" stroke="#434b47" strokeWidth="2"/>
      <path d="m137 332 39-23 38 21-39 24z" fill="#9a9b8c"/><path d="m138 347 38 22v-15l-38-22z" fill="#666d67"/>
      <path d="m151 355 30-18 25 14-30 18z" fill="#a89070" opacity=".9"/>
      <path d="m182 331 23-14 25 14-23 14z" fill="#80694f" stroke="#5d4d3b"/><path d="m186 331 19-11 18 10-20 12z" fill="#b59b75"/>
      <path d="m121 307 2-1 1 22-2 1z" fill="#414b49"/><path d="m116 305 8-5 7 4-8 5z" fill="#c8b48b"/>
      {/* Kitchen island and dining zone */}
      <path d="m299 307 35-20 43 23-36 21z" fill="#a89d88" stroke="#534f45" strokeWidth="1.5"/>
      <path d="m303 308 34 19v24l-34-19z" fill="#5b615c"/><path d="m341 329 34-20v24l-34 20z" fill="#414a46"/>
      <path d="m307 305 27-16 33 18-27 16z" fill="#d9d3c4"/><path d="m324 297 12-7 12 7-12 7z" fill="#78928c"/>
      <path d="m286 346 22-13 21 12-22 13z" fill="#775a42"/><path d="m289 355 2-10 3 2v9m27 1v-11l3-2v12" stroke="#4a4135" strokeWidth="2"/>
      {/* Bedroom / work nook */}
      <path d="m375 337 39-23 39 22-39 23z" fill="#a0a59c" stroke="#565e59" strokeWidth="1.3"/>
      <path d="m377 333 37-22 37 21-37 22z" fill="#d5d6cd"/><path d="m383 330 15-9 16 9-15 9z" fill="#e8e4d9"/><path d="m398 339 16-10 31 18-17 10z" fill="#748a87"/>
      <path d="m412 305 29-17 21 12-29 18z" fill="#6f5742"/><path d="m417 304 23-14 14 8-23 14z" fill="#a08d71"/>
      {/* Fitted service wall: rack, inverter and battery are visible in the utility room. */}
      <path d="m426 276 25-15v41l-25 15z" fill="#343f3e" stroke="#b8c1b8" strokeWidth="1.4"/>
      <path d="m431 278 15-9v11l-15 9z" fill="#1b2b30" stroke="#687d7e"/><circle cx="439" cy="279" r="2" fill="#84bd00" filter="url(#an-glow)"/>
      <path d="m431 295 15-9v13l-15 9z" fill="#475b58"/><path d="m434 299 8-5" stroke="#65c9c8" strokeWidth="1.4"/>
      <path d="m457 299 13-8v34l-13 8z" fill="#d9ded6" stroke="#707b75"/><path d="m461 302 6-4v20l-6 4z" fill="#87938d"/><circle cx="464" cy="326" r="1.5" fill="#84bd00"/>
      <path d="m449 307 8-5m-31-11-4-2m4 15-4-2" fill="none" stroke="#77a9a3" strokeWidth="1.2"/>
    </g>
    {/* Cabling is routed along walls and service runs rather than floating as decoration. */}
    <g className="an-wiring" fill="none" stroke="#78a9a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m115 273 16-10 22 12 33-19 29 16 31-18 35 20 34-20 31 17 29-17 37 21 31-18" strokeDasharray="3 4"/>
      <path d="m275 256 1-32 20-12 24 13v25"/><path d="m426 285-24-14-12 7-19-11"/>
      <path d="m301 257 19-11 16 9" stroke="#8ebd62"/>
    </g>
    {/* A compact rear roof wing leaves most rooms exposed in the cutaway. */}
    <g className="an-roof">
      <path d="m87 228 183-108 81 44-184 107z" fill="#303b3c" stroke="#aeb8b0" strokeWidth="2"/>
      <path d="m103 227 167-97 58 32-168 98z" fill="#465252" stroke="#77857f" strokeWidth="1.2"/>
      <path d="m87 228 16-9 77 42-13 8z" fill="#202b2d"/><path d="m270 120 14-8 81 44-14 8z" fill="#626c68"/>
      <path d="m112 219 159-92m-135 102 159-92" fill="none" stroke="#64716c" strokeWidth="1" opacity=".8"/>
    </g>
    {/* Solar generation is a separate ground-mounted island, linked back to the utility wall. */}
    <g className="an-energy">
      <ellipse cx="591" cy="348" rx="70" ry="12" fill="#000" opacity=".28"/>
      <path d="m509 331 76-45 83 45-78 46z" fill="#4a5550" stroke="#aeb9ad" strokeWidth="1.2"/>
      <path d="m509 331 81 46v8l-81-46z" fill="#303a37"/><path d="m590 377 78-46v8l-78 46z" fill="#39433f"/>
      <path d="m533 330 5-3 2 20-5 3zm34-20 5-3 2 23-5 3zm48 25 5-3 2 20-5 3zm34-19 5-3 2 23-5 3z" fill="#87948a" stroke="#c5ccc0" strokeWidth=".7"/>
      <path d="m520 286 66-39 76 41-68 40z" fill="#273840" stroke="#c1cdc2" strokeWidth="2"/>
      <path d="m543 286 65-39m-28 55 66-39" stroke="#81a1a3" strokeWidth="1.2"/>
      <path d="m540 274 76 41m-57-51 76 41" stroke="#81a1a3" strokeWidth="1.2"/>
      <path d="m518 288 76-44 71 39m-143 5 72 40" fill="none" stroke="#d2d7ca" strokeWidth="2"/>
      <path d="m539 279 6-4 4 3-6 4zm56-33 6-4 4 3-6 4zm57 32 6-4 4 3-6 4z" fill="#d9ddcf"/>
      <path d="m579 322 16-9 13 7-17 10z" fill="#717e77" stroke="#c1c9bd"/>
      <path d="m584 320 7-4 7 4-7 4z" fill="#283a40"/><circle cx="591" cy="320" r="1.5" fill="#84bd00" filter="url(#an-glow)"/>
      <path d="m586 344-31 18-35-20-28 17" fill="none" stroke="#84bd00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m489 356 4 3-4 3-4-3z" fill="#d8e2d3" stroke="#66756a"/>
    </g>
    {/* Security devices are discrete mounted hardware, with a restrained status light. */}
    <g className="an-security">
      <path d="m104 244 13-8 11 6-13 8z" fill="#263032" stroke="#c8d0c6" strokeWidth="1"/><path d="m114 250 2 8 7-4-2-8z" fill="#4a5854"/><circle cx="120" cy="251" r="1.8" fill="#73d5dc"/>
      <path d="m449 248 12-7 11 6-12 7z" fill="#263032" stroke="#c8d0c6" strokeWidth="1"/><path d="m458 254 2 8 7-4-2-8z" fill="#4a5854"/><circle cx="464" cy="255" r="1.8" fill="#73d5dc"/>
      <path d="m244 222 9-5 8 5-9 5z" fill="#4f5a55" stroke="#d7d8cc"/><circle cx="253" cy="222" r="1.4" fill="#84bd00"/>
      <path d="m181 297 10-6 9 5-10 6z" fill="#ece7d9" stroke="#68736b"/><circle cx="191" cy="297" r="1.5" fill="#84bd00"/>
      {/* Exterior siren: weatherproof body, speaker grille and visible status beacon. */}
      <path d="m474 269 13-8 11 6-13 8z" fill="#253033" stroke="#d0d6ca" strokeWidth="1"/>
      <path d="m474 269 11 6v18l-11-6z" fill="#d7d9cf" stroke="#68736b" strokeWidth=".8"/>
      <path d="m477 273 5 3v9l-5-3zm6 3 1 1v9l-1-1zm3 2 1 1v9l-1-1z" fill="#76847d"/>
      <path d="m485 266 5-3 4 2-5 3z" fill="#b94f49" filter="url(#an-glow)"/>
    </g>
    {/* Network and automation devices are placed inside the living area and utility room. */}
    <g className="an-network">
      <path d="m246 310 18-11 19 10-19 11z" fill="#283638" stroke="#829590"/><path d="m248 310 16 9v5l-16-9z" fill="#526762"/><path d="m264 319 17-10v5l-17 10z" fill="#3a4b48"/>
      <path d="m257 300q7-10 14 0m-18-3q9-15 21 0" fill="none" stroke="#78b9b4" strokeWidth="1.2" opacity=".9"/>
      <circle cx="263" cy="313" r="1.1" fill="#84bd00"/>
    </g>
    <g className="an-automation">
      <path d="m334 268 14-8 13 7-14 9z" fill="#e4e3d8" stroke="#67726b"/><circle cx="347" cy="268" r="2" fill="#84bd00"/>
      <path d="m316 335 10-6 10 6-10 6z" fill="#354440" stroke="#c5c8ba"/><circle cx="326" cy="335" r="1.5" fill="#72d4d7"/>
      <path d="m383 279 10-6 10 6-10 6z" fill="#e0e0d6" stroke="#69736b"/><circle cx="393" cy="279" r="1.5" fill="#84bd00"/>
    </g>
    {/* Alarm hub and touch panel: the user-facing centre of an AX PRO-like setup. */}
    <g className="an-control">
      {/* Wall-mounted touch screen, angled to the room with a live home status view. */}
      <path d="m292 243 19-11 20 11-19 12z" fill="#f0eee4" stroke="#596560" strokeWidth="1.5"/>
      <path d="m294 243 17 10v25l-17-10z" fill="#202e31" stroke="#aeb8ac" strokeWidth="1"/>
      <path d="m297 246 11 6v3l-11-6z" fill="#6c8580"/><circle cx="303" cy="254" r="2" fill="#84bd00"/>
      <path d="m297 254 11 6m-11-2 7 4m-7 1 9 5" stroke="#a5c0b1" strokeWidth="1"/>
      <path d="m311 253 18-10v28l-18 10z" fill="#f0eee4" stroke="#7a857d" strokeWidth="1"/>
      {/* Alarm hub with radio/status light and a subtle engraved model mark. */}
      <path d="m402 273 22-13 22 12-22 13z" fill="#f2f0e7" stroke="#717c74" strokeWidth="1"/>
      <path d="m402 273 22 12v30l-22-12z" fill="#d6d9cf" stroke="#747f77" strokeWidth="1"/>
      <path d="m424 285 22-13v30l-22 13z" fill="#aeb7ae" stroke="#68736d" strokeWidth="1"/>
      <path d="m407 277 12 7v15l-12-7z" fill="#39494a"/><circle cx="412" cy="283" r="1.5" fill="#83bd00"/><circle cx="416" cy="285" r="1" fill="#6fc5d1"/>
      <path d="m428 290 12-7m-12 11 12-7m-12 11 12-7" stroke="#7d8980" strokeWidth="1"/>
      <text x="407" y="306" fill="#46534c" fontSize="3.8" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing=".5" transform="rotate(29 407 306)">AX PRO</text>
    </g>
    {/* Subtle service routes and device signals terminate on actual equipment. */}
    <g className="an-signals" fill="none" stroke="#66c5c7" strokeWidth="1" strokeDasharray="2 5" opacity=".72">
      <path d="m120 251-18-19-17-9M464 255l21-18 13-7M263 304l-1-25-14-8M347 265l15-18 20-3"/>
    </g>
    <g className="an-markers" fill="#d3e1d8" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.4">
      <text x="36" y="207">PROTECCIÓN</text><text x="545" y="232">GENERACIÓN</text><text x="30" y="407">RED LOCAL</text><text x="448" y="393">CONTROL</text>
    </g>
  </svg>;
}
