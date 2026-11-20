/**
 * A compact isometric cutaway: the house is the diagram, and each service is
 * shown where it physically belongs. SVG keeps this explainer available when
 * the browser has no WebGL context.
 */
export default function HomeAnatomy({ buildStage = 5 }) {
  return <svg className="sr-anatomy-art" data-build-stage={buildStage} viewBox="0 0 760 540" role="img" aria-label="Casa isométrica abierta con patio protegido, cámaras perimetrales, sensores interiores, radar, sirena, central de alarma y pantalla táctil">
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
    <ellipse cx="355" cy="513" rx="295" ry="32" fill="#000" opacity=".4" />
    {/* A full patio makes the protected perimeter and the entry path legible. */}
    <g className="an-ground" filter="url(#an-shadow)">
      <path d="m36 345 264-155 414 220-284 120z" fill="url(#an-base)" stroke="#9caaa0" strokeOpacity=".48"/>
      <path d="m58 342 242-140 375 199-255 100z" fill="#a4a498" stroke="#d9d5c9" strokeOpacity=".48"/>
      <path d="m420 501 255-100-1 13-254 100z" fill="#626b65"/>
      <path d="m58 342 362 159v-14L58 328z" fill="#85877d"/>
      <path d="m74 340 226-130 61 32-226 132z" fill="#77836e" opacity=".68"/>
      <path d="m452 395 86-50 75 40-86 51z" fill="#828a76" opacity=".65"/>
      <path d="m152 395 72-42 66 36-72 42z" fill="#c1b69f" opacity=".9"/>
      <path d="m221 433 72-42 12 7-72 42zM194 417l18-11 18 10-18 11z" fill="#d0c8b7" opacity=".85"/>
      <path d="m76 343 43-25 39 21-43 25z" fill="#455448"/><path d="m91 344 14-8 11 6-14 8zM118 352l14-8 10 6-14 8z" fill="#66805f"/>
      <path d="m565 416 47-28 37 20-47 28z" fill="#455448"/><path d="m579 416 14-8 11 6-14 8zM607 423l14-8 10 6-14 8z" fill="#66805f"/>
      <path d="m236 463 36-21 44 24-36 21z" fill="#d4d0c5" opacity=".82"/>
      <path d="m276 440 27-16 45 25-27 16z" fill="#d4d0c5" opacity=".82"/>
    </g>
    {/* Perimeter beam and gate are drawn onto the patio slab, with a real opening for entry. */}
    <g className="an-perimeter" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="m58 342 242-140 375 199-250 99M397 506 58 342" stroke="#75c6b8" strokeWidth="1.7" strokeDasharray="5 7" opacity=".9"/>
      <path d="m397 506 22-13m-19 19 25-15" stroke="#d4e1d2" strokeWidth="2.2"/>
      <path d="m382 493 25 14m-28-8 24 14" stroke="#84bd00" strokeWidth="1.5"/>
      <path d="m89 325 55 30m407 66 55 29m-333-239 52 28" stroke="#00c9e4" strokeWidth="1" strokeDasharray="2 6" opacity=".6"/>
      <circle cx="58" cy="342" r="5" fill="#84bd00" stroke="#d5e4d0"/><circle cx="300" cy="202" r="5" fill="#84bd00" stroke="#d5e4d0"/>
      <circle cx="675" cy="401" r="5" fill="#84bd00" stroke="#d5e4d0"/><circle cx="420" cy="501" r="5" fill="#84bd00" stroke="#d5e4d0"/>
    </g>
    {/* Roofless shell: the open plan stays visible from above. */}
    <g className="an-shell">
      <path d="m94 334 179-104 205 111-190 111z" fill="url(#an-floor)" stroke="#e1ddd2" strokeWidth="1.2"/>
      <path d="m94 334 179-104v-94L94 240z" fill="url(#an-wall)" stroke="#f2eee4" strokeOpacity=".74"/>
      <path d="m273 230 205 111v-94L273 136z" fill="url(#an-wall-side)" stroke="#d9ded6" strokeOpacity=".54"/>
      {/* Room divisions and interior wall caps */}
      <path d="m244 246 1-77 20-12v80z" fill="#aaa99f" stroke="#eeeadf" strokeOpacity=".65"/>
      <path d="m350 286v-77l15 8v77z" fill="#8a938a" stroke="#e0e2d9" strokeOpacity=".4"/>
      <path d="m244 169 18-10 18 10-18 11zM350 209l15-9 17 9-16 10z" fill="#ede9df"/>
    </g>
    <g className="an-interior">
      {/* Bathroom: shower tray and screen, toilet, small vanity and basin. */}
      <path d="m267 258 28-16 31 17-29 17z" fill="#84918b" stroke="#d6d8ce" strokeWidth="1"/>
      <path d="m270 258 24-14 27 15-24 14z" fill="#a8c1bc" fillOpacity=".42" stroke="#c5ddd7" strokeWidth="1.2"/>
      <path d="m294 243v28m-24-13 24 14" stroke="#d6e5df" strokeWidth="1"/>
      <path d="m326 263 13-8 14 8-13 8z" fill="#e3e4db" stroke="#66716a"/><path d="m330 269 9 5v8l-9-5z" fill="#bdc4bb" stroke="#7a837b"/>
      <ellipse cx="340" cy="276" rx="6" ry="3.6" fill="#f0efe7" stroke="#8b948a"/><ellipse cx="340" cy="276" rx="2.6" ry="1.5" fill="#8fa09a"/>
      <path d="m269 290 17-10 20 11-18 10z" fill="#5c6660" stroke="#d1d3c8"/><path d="m269 290 19 11v13l-19-11z" fill="#817f72"/><path d="m275 287 11-6 12 7-11 7z" fill="#d6d7cc"/><ellipse cx="287" cy="288" rx="4" ry="2" fill="#8fa8a1"/>
      <path d="m270 318 22-13m20-34 19-11" stroke="#65766f" strokeWidth="1" strokeDasharray="2 3"/>
      {/* Room names anchor the floor plan for first-time visitors. */}
      <g fill="#53645c" fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="800" letterSpacing=".8" opacity=".92">
        <text x="136" y="382">LIVING</text><text x="307" y="354">COCINA</text><text x="279" y="304">BAÑO</text><text x="390" y="386">DORMITORIO</text>
      </g>
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
    {/* Attached garage: open bay, structural posts, sectional door and a parked car. */}
    <g className="an-garage" transform="translate(35 15)">
      <path d="m427 355 71-42 80 43-74 44z" fill="#6c746d" stroke="#c4c9bd" strokeWidth="1.2"/>
      <path d="m427 355 71 41v-51l-71-41z" fill="#424c49" stroke="#aab3aa" strokeWidth="1"/>
      <path d="m498 313 80 43v51l-80-45z" fill="#899189" stroke="#d5d8ce" strokeWidth="1"/>
      <path d="m427 304 71-42 80 43-80 47z" fill="#d4d5ca" stroke="#eef0e7" strokeWidth="1.2"/>
      <path d="m427 304 71 48v-9l-71-40z" fill="#555e59"/>
      <path d="m435 350 7-4v-48l-7 4zm63 40 7-4v-50l-7 4zm68-33 7 4v48l-7-4z" fill="#404b48" stroke="#cbd1c6" strokeWidth=".8"/>
      <path d="m440 304 58-34 62 34-61 35z" fill="#222e30" stroke="#d1d5ca" strokeWidth="1.5"/>
      <path d="m448 306 50-29v43l-50-29z" fill="#394747" stroke="#71827a"/><path d="m498 320 54-31v43l-54 31z" fill="#53615b" stroke="#d0d4c9"/>
      <path d="m454 353 28-17 52 28-28 17z" fill="#646d66" opacity=".65"/>
      {/* Compact car silhouette, with body, glazing, wheels and headlamps. */}
      <ellipse cx="506" cy="366" rx="49" ry="12" fill="#202522" opacity=".45"/>
      <path d="m460 351 28-17 49 27-29 18z" fill="#78928e" stroke="#d1d7ca" strokeWidth="1.2"/>
      <path d="m460 351 48 28v12l-48-27z" fill="#3e5c5c" stroke="#273735"/>
      <path d="m508 379 29-18v12l-29 18z" fill="#293a3b" stroke="#d3d8ce"/>
      <path d="m476 341 13-8 27 15-13 8z" fill="#233537" stroke="#a9c3bb"/><path d="m503 356 13-8 22 12-13 8z" fill="#304545" stroke="#a9c3bb"/>
      <ellipse cx="477" cy="377" rx="8" ry="5" fill="#202625" stroke="#c1c8bd" strokeWidth="1.3"/><ellipse cx="524" cy="402" rx="8" ry="5" fill="#202625" stroke="#c1c8bd" strokeWidth="1.3"/>
      <path d="m458 349 5 2-4 3-5-3z" fill="#e2d79b"/><path d="m538 359 5 3-4 3-5-3z" fill="#d7a18d"/>
      <g fill="#506057" fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="800" letterSpacing="1"><text x="468" y="327">GARAGE</text></g>
    </g>
    {/* Separate solar island sits in the patio, never on the house or over its rooms. */}
    <g className="an-energy">
      <g transform="translate(74 -120)">
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
      <path d="m586 385v18l-22 24-27 18" fill="none" stroke="#84bd00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m533 442 4 3-4 3-4-3z" fill="#d8e2d3" stroke="#66756a"/>
      </g>
    </g>
    {/* Perimeter protection: corner cameras, radar sectors, access contact and siren. */}
    <g className="an-perimeter-devices">
      <path d="m100 251 20 10 46 52-67-35zM467 257l26 13 95 64-97-42zM566 321l31 8 43 55-65-34z" fill="#00c9e4" fillOpacity=".075" stroke="#69c9c5" strokeOpacity=".5" strokeWidth="1" strokeDasharray="3 4"/>
      <path d="m80 316q12-21 28-24m-34 17q17-28 39-33M623 382q12-21 28-24m-34 17q17-28 39-33" fill="none" stroke="#84bd00" strokeWidth="1.2" strokeDasharray="3 3" opacity=".75"/>
      <path d="m91 243 13-8 11 6-13 8z" fill="#263032" stroke="#d1d7cc" strokeWidth="1"/><path d="m101 249 2 8 7-4-2-8z" fill="#4a5854"/><circle cx="107" cy="250" r="1.8" fill="#73d5dc"/>
      <path d="m449 249 13-8 11 6-13 8z" fill="#263032" stroke="#d1d7cc" strokeWidth="1"/><path d="m459 255 2 8 7-4-2-8z" fill="#4a5854"/><circle cx="465" cy="256" r="1.8" fill="#73d5dc"/>
      <path d="m555 316 13-8 11 6-13 8z" fill="#263032" stroke="#d1d7cc" strokeWidth="1"/><path d="m565 322 2 8 7-4-2-8z" fill="#4a5854"/><circle cx="571" cy="323" r="1.8" fill="#73d5dc"/>
      {/* Radar heads sit on opposite patio corners and look across blind approaches. */}
      <path d="m71 328 12-7 12 7-12 7z" fill="#303d3b" stroke="#c5d0c5"/><circle cx="83" cy="328" r="2.3" fill="#84bd00" filter="url(#an-glow)"/>
      <path d="m627 397 12-7 12 7-12 7z" fill="#303d3b" stroke="#c5d0c5"/><circle cx="639" cy="397" r="2.3" fill="#84bd00" filter="url(#an-glow)"/>
      {/* Siren on the garage's exterior wall, visible from the patio. */}
      <path d="m602 303 13-8 11 6-13 8z" fill="#253033" stroke="#d0d6ca" strokeWidth="1"/>
      <path d="m602 303 11 6v18l-11-6z" fill="#d7d9cf" stroke="#68736b" strokeWidth=".8"/>
      <path d="m605 307 5 3v9l-5-3zm6 3 1 1v9l-1-1zm3 2 1 1v9l-1-1z" fill="#76847d"/>
      <path d="m613 300 5-3 4 2-5 3z" fill="#b94f49" filter="url(#an-glow)"/>
      {/* Gate reader and door contact mark the only planned entry. */}
      <path d="m388 486 11-7 12 7-11 7z" fill="#263332" stroke="#d1d8cd"/><circle cx="399" cy="486" r="2" fill="#84bd00"/>
    </g>
    {/* Indoor PIR/radar and opening contacts distinguish room detection from the perimeter. */}
    <g className="an-security">
      <path d="m170 303 12-7 12 7-12 7z" fill="#303d3b" stroke="#d4dace"/><circle cx="182" cy="303" r="2.1" fill="#84bd00"/>
      <path d="m167 300q15-19 30-1m-35-5q20-26 40-2" fill="none" stroke="#84bd00" strokeWidth="1.2" strokeDasharray="2 3" opacity=".72"/>
      <path d="m337 243 11-7 11 7-11 7z" fill="#303d3b" stroke="#d4dace"/><circle cx="348" cy="243" r="2.1" fill="#84bd00"/>
      <path d="m330 239q18-21 36 0m-23-1q7-9 14 0" fill="none" stroke="#84bd00" strokeWidth="1.1" strokeDasharray="2 3" opacity=".72"/>
      <path d="m119 291 8-5 9 5-8 5z" fill="#e9e8de" stroke="#68736b"/><circle cx="127" cy="291" r="1.4" fill="#67cbd0"/>
      <path d="m222 273 8-5 9 5-8 5z" fill="#e9e8de" stroke="#68736b"/><circle cx="230" cy="273" r="1.4" fill="#67cbd0"/>
      <path d="m398 291 8-5 9 5-8 5z" fill="#e9e8de" stroke="#68736b"/><circle cx="406" cy="291" r="1.4" fill="#67cbd0"/>
      <path d="m180 303-20 31m168-91-25 29m67-29-17 20m-110 20 24-14" fill="none" stroke="#7ccac0" strokeWidth=".8" strokeDasharray="2 4"/>
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
      <text x="36" y="207">PROTECCIÓN</text><text x="616" y="126">GENERACIÓN</text><text x="30" y="407">RED LOCAL</text><text x="448" y="393">CONTROL</text>
      <text x="611" y="430">RADAR EXTERIOR</text><text x="346" y="477">ACCESO</text>
    </g>
  </svg>;
}
