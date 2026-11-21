/** Top-down reference plan of a familiar one-storey family home. */
export default function HomeAnatomy({ buildStage = 5 }) {
  return <svg className="sr-anatomy-art" data-build-stage={buildStage} viewBox="0 0 900 600" role="img" aria-label="Plano referencial de casa de un piso con cocina, living comedor, tres dormitorios, baño, logia y garage">
    <defs>
      <pattern id="an-yard-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#e2eadb" strokeOpacity=".1" strokeWidth="1"/></pattern>
      <filter id="an-plan-shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity=".28"/></filter>
      <filter id="an-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    {/* The north/back garden is at the top; the street and entrances are below. */}
    <g className="an-ground">
      <rect x="42" y="36" width="816" height="528" rx="26" fill="#283b34" stroke="#657d69" strokeWidth="2"/>
      <rect x="56" y="50" width="788" height="500" rx="18" fill="#71836c"/>
      <rect x="56" y="50" width="788" height="500" rx="18" fill="url(#an-yard-grid)"/>
      <path d="M270 78h250v12H270zm480 0h72v12h-72zM475 500h55v18h-55z" fill="#bdb79e" opacity=".75"/>
      <circle cx="118" cy="145" r="24" fill="#94a77e"/><circle cx="790" cy="120" r="19" fill="#94a77e"/><circle cx="780" cy="472" r="18" fill="#94a77e"/>
      <path d="M88 112h48v88H88zm685 282h55v74h-55z" fill="#62785e"/>
    </g>

    {/* Two separate gates: pedestrian entry lines up with the front door, vehicle entry with the garage. */}
    <g className="an-perimeter" fill="none" strokeLinecap="round">
      <path d="M74 68H826V532H360M270 532H175M65 532H74V68" stroke="#c7daba" strokeWidth="3" strokeDasharray="9 8"/>
      <path d="M65 532h110M270 532h90" stroke="#e0e6d8" strokeWidth="8"/>
      <path d="m65 532 38-26m-38 26 38 26m72-26-38-26m38 26-38 26M270 532l36-25m-36 25 36 25m54-25-36-25m36 25-36 25" stroke="#b7d96c" strokeWidth="2.5"/>
      <path d="M120 532V460M315 532V450" stroke="#d8cfba" strokeWidth="12"/>
      <text x="63" y="558" fill="#edf1e3" stroke="none" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">ACCESO VEHICULAR</text>
      <text x="268" y="558" fill="#edf1e3" stroke="none" fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">ACCESO PEATONAL</text>
      <text x="670" y="92" fill="#edf1e3" stroke="none" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1.2">PATIO TRASERO</text>
    </g>

    {/* Simple rectangular one-floor footprint: rooms share walls and every room has a route. */}
    <g className="an-shell" filter="url(#an-plan-shadow)">
      {/* Main house and attached garage slabs. */}
      <rect x="190" y="106" width="480" height="354" fill="#f0eee4"/>
      <rect x="50" y="270" width="140" height="190" fill="#f2f0e6"/>
      {/* Room floors: kitchen at the back, social area at the front, private wing at right. */}
      <rect x="200" y="116" width="218" height="128" fill="#e2ddcf"/>
      <rect x="200" y="254" width="218" height="196" fill="#ded9cc"/>
      <rect x="428" y="116" width="36" height="334" fill="#c9c7b9"/>
      <rect x="474" y="116" width="86" height="94" fill="#e1ddcf"/>
      <rect x="568" y="116" width="92" height="94" fill="#dedacb"/>
      <rect x="474" y="216" width="186" height="30" fill="#cbc8b9"/>
      <rect x="474" y="252" width="186" height="94" fill="#d8d5c9"/>
      <rect x="474" y="352" width="186" height="30" fill="#cbc8b9"/>
      <rect x="474" y="388" width="86" height="62" fill="#d5d8ce"/>
      <rect x="568" y="388" width="92" height="62" fill="#d6d8cf"/>

      {/* Exterior walls stop at the real doors; the attached garage shares the kitchen wall. */}
      <path d="M190 106h480M670 106v291m0 42v21M190 106v80M190 226v110M190 366v94M190 460h96m38 0h346M50 270h140M50 270v190M50 460h21m98 0h21" fill="none" stroke="#fffdf4" strokeWidth="8"/>
      {/* Wall strokes stop at interior door openings. */}
      <path d="M422 116v78M422 236v14M422 294v156 M468 116v22M468 170v46M468 246v24M468 298v54M468 382v18M468 428v22 M564 116v94M564 388v62" fill="none" stroke="#fffdf4" strokeWidth="8"/>
      <path d="M200 249h77m58 0h83M474 212h186M474 250h120m36 0h34M474 348h186M474 384h120m36 0h34" fill="none" stroke="#fffdf4" strokeWidth="8"/>
      {/* Front door, social-room to hall, kitchen connection, bedroom/bath doors, garage-to-kitchen door. */}
      <path d="M286 460v-38m0 0a38 38 0 0 1 38 38M422 194h-30m0 0a30 30 0 0 1 30 30M277 249v39m0 0a39 39 0 0 0 39-39M468 138h28m0 0a28 28 0 0 0-28 28M596 250v28m0 0a28 28 0 0 1 28-28M468 400h28m0 0a28 28 0 0 0-28 28M596 384v24m0 0a24 24 0 0 0 24-24M190 186h31m0 0a31 31 0 0 1-31 31M190 336h30m0 0a30 30 0 0 1-30 30M670 397h-28m0 0a28 28 0 0 0 28 28" fill="none" stroke="#9c7754" strokeWidth="2.5"/>
      {/* Exterior windows. */}
      <path d="M240 106h72M354 106h64M485 106h48M585 106h50M670 270v42M220 460h42M342 460h43" stroke="#72c6c6" strokeWidth="8"/>
    </g>

    <g className="an-interior" fontFamily="system-ui,sans-serif">
      {/* Kitchen and laundry are at the back, with a door to the garden. */}
      <text x="220" y="144" fill="#34483f" fontSize="16" fontWeight="800" letterSpacing="1">COCINA</text>
      <rect x="218" y="158" width="178" height="28" rx="4" fill="#b8ad96" stroke="#817866" strokeWidth="2"/><rect x="226" y="164" width="43" height="16" rx="3" fill="#e9e6dc"/>
      <circle cx="302" cy="172" r="7" fill="none" stroke="#59675f" strokeWidth="2"/><circle cx="324" cy="172" r="7" fill="none" stroke="#59675f" strokeWidth="2"/>
      <rect x="342" y="198" width="45" height="30" rx="4" fill="#ad9270" stroke="#80674d" strokeWidth="2"/><circle cx="350" cy="194" r="5" fill="#73877a"/><circle cx="380" cy="194" r="5" fill="#73877a"/>
      <text x="334" y="238" fill="#66736a" fontSize="10" fontWeight="700" letterSpacing=".5">LAVADO</text>

      {/* Open living/dining, entered directly from the front door. */}
      <text x="218" y="286" fill="#34483f" fontSize="15" fontWeight="800" letterSpacing=".8">LIVING · COMEDOR</text>
      <rect x="220" y="316" width="103" height="47" rx="10" fill="#748b80" stroke="#536b61" strokeWidth="3"/><rect x="228" y="309" width="87" height="22" rx="8" fill="#a5b4a7"/><path d="M270 312v47" stroke="#596e63" strokeWidth="2"/>
      <rect x="334" y="318" width="54" height="40" rx="4" fill="#ad9270" stroke="#80674d" strokeWidth="2"/><circle cx="326" cy="326" r="5" fill="#73877a"/><circle cx="396" cy="326" r="5" fill="#73877a"/><circle cx="326" cy="350" r="5" fill="#73877a"/><circle cx="396" cy="350" r="5" fill="#73877a"/>
      <rect x="220" y="392" width="68" height="17" rx="4" fill="#b7aa91"/>

      {/* Hall: a simple spine from the entry through to all private rooms. */}
      <text x="438" y="132" fill="#58685e" fontSize="10" fontWeight="800" letterSpacing="1" transform="rotate(90 438 132)">PASILLO</text>
      <rect x="430" y="402" width="31" height="33" rx="4" fill="#263b3d" stroke="#f0f1e8" strokeWidth="2"/><rect x="435" y="407" width="21" height="20" rx="2" fill="#15353a"/><path d="M439 413h13m-13 6h10" stroke="#81d2d1" strokeWidth="1.6"/><circle cx="452" cy="411" r="2" fill="#b2db5c"/>
      <text x="428" y="447" fill="#43554d" fontSize="8.5" fontWeight="800" letterSpacing=".3">ALARMA</text>

      {/* Private wing: two compact bedrooms, a shared passage, then the main suite. */}
      <text x="484" y="139" fill="#34483f" fontSize="13" fontWeight="800" letterSpacing=".5">DORM. 2</text>
      <rect x="482" y="154" width="66" height="43" rx="4" fill="#8a9b91" stroke="#61746b" strokeWidth="2"/><rect x="486" y="158" width="23" height="16" rx="3" fill="#f1eee5"/><rect x="511" y="158" width="32" height="35" rx="3" fill="#bac5ba"/>

      <text x="578" y="139" fill="#34483f" fontSize="13" fontWeight="800" letterSpacing=".5">DORM. 3</text>
      <rect x="578" y="154" width="68" height="43" rx="4" fill="#8a9b91" stroke="#61746b" strokeWidth="2"/><rect x="582" y="158" width="23" height="16" rx="3" fill="#f1eee5"/><rect x="608" y="158" width="34" height="35" rx="3" fill="#bac5ba"/>

      <text x="489" y="273" fill="#34483f" fontSize="12" fontWeight="800" letterSpacing=".5">DORMITORIO</text>
      <text x="489" y="286" fill="#34483f" fontSize="10" fontWeight="800" letterSpacing="1">PRINCIPAL</text>
      <rect x="503" y="296" width="119" height="38" rx="5" fill="#82978d" stroke="#60766c" strokeWidth="2.5"/><rect x="509" y="300" width="37" height="16" rx="4" fill="#f0eee5"/><rect x="550" y="300" width="66" height="29" rx="3" fill="#b8c5b8"/><rect x="628" y="286" width="25" height="48" rx="3" fill="#9e8666"/>

      <text x="484" y="403" fill="#34483f" fontSize="12" fontWeight="800" letterSpacing=".6">BAÑO</text>
      <rect x="485" y="414" width="29" height="29" rx="4" fill="#b7d0c8" stroke="#7d9a90" strokeWidth="2"/><path d="M489 418h21v15h-21z" fill="#dce9e2" stroke="#8eaaa0" strokeWidth="1.5"/><ellipse cx="530" cy="425" rx="10" ry="7" fill="#f5f3e9" stroke="#929e94" strokeWidth="2"/><rect x="523" y="425" width="15" height="16" rx="6" fill="#f5f3e9" stroke="#929e94" strokeWidth="2"/>
      <text x="578" y="403" fill="#34483f" fontSize="12" fontWeight="800" letterSpacing=".6">LOGIA</text>
      <rect x="581" y="414" width="28" height="29" rx="4" fill="#e5e4db" stroke="#8d978c" strokeWidth="2"/><circle cx="595" cy="429" r="8" fill="#b4c7c3" stroke="#798c85" strokeWidth="2"/><rect x="615" y="414" width="37" height="29" rx="4" fill="#526760" stroke="#344a43" strokeWidth="2"/><text x="619" y="432" fill="#ecf1e6" fontSize="6" fontWeight="800">BATERÍA</text>
    </g>

    {/* Attached single-car garage with a direct internal door to the house. */}
    <g className="an-garage" fontFamily="system-ui,sans-serif">
      <text x="69" y="296" fill="#34483f" fontSize="15" fontWeight="800" letterSpacing="1">GARAGE</text>
      <rect x="61" y="315" width="118" height="122" rx="8" fill="#aab2a5" stroke="#fffdf4" strokeWidth="5"/>
      <rect x="94" y="336" width="54" height="83" rx="17" fill="#49666a" stroke="#2d484a" strokeWidth="3"/><path d="M101 344h40l7 26H94z" fill="#a9d0cf"/><path d="M97 378h48" stroke="#d7e5db" strokeWidth="3"/><circle cx="105" cy="410" r="7" fill="#263432"/><circle cx="137" cy="410" r="7" fill="#263432"/>
      <path d="M71 457h98" stroke="#e5decb" strokeWidth="7" strokeDasharray="5 5"/>
    </g>

    {/* Solar panels sit in the backyard, outside the house roof. */}
    <g className="an-energy" fontFamily="system-ui,sans-serif">
      <rect x="694" y="118" width="130" height="108" rx="7" fill="#566f55" stroke="#a8bd91" strokeWidth="2"/><text x="703" y="137" fill="#f0f4e6" fontSize="12" fontWeight="800" letterSpacing=".6">ENERGÍA SOLAR</text>
      <rect x="708" y="149" width="102" height="61" rx="3" fill="#203a45" stroke="#d2ded2" strokeWidth="2"/><path d="M742 150v59m34-59v59m-67-30h100" stroke="#81aeb1" strokeWidth="1.5"/><circle cx="800" cy="160" r="4" fill="#b5df67" filter="url(#an-glow)"/>
    </g>

    {/* Perimeter cameras and a few indoor sensors. */}
    <g className="an-perimeter-devices">
      <g fill="#172b30" stroke="#e9f1df" strokeWidth="2"><rect x="67" y="64" width="27" height="19" rx="5"/><rect x="806" y="64" width="27" height="19" rx="5"/><rect x="806" y="517" width="27" height="19" rx="5"/><rect x="67" y="517" width="27" height="19" rx="5"/></g>
      <g fill="#55d2d3"><circle cx="87" cy="73" r="4"/><circle cx="827" cy="73" r="4"/><circle cx="827" cy="526" r="4"/><circle cx="87" cy="526" r="4"/></g>
      <path d="M94 82 140 128 94 128zm712 0-46 46h46zm0 435-46-46h46zm-712 0 46-46H94z" fill="#64cbd0" fillOpacity=".08"/>
      <rect x="303" y="519" width="34" height="25" rx="5" fill="#263b37" stroke="#d7e3d4" strokeWidth="2"/><circle cx="320" cy="531" r="5" fill="#b5df67"/>
    </g>
    <g className="an-security">
      <g fill="#243a36" stroke="#eff3e6" strokeWidth="2"><circle cx="226" cy="305" r="8"/><circle cx="444" cy="268" r="8"/><circle cx="528" cy="184" r="8"/><circle cx="642" cy="320" r="8"/></g>
      <g fill="#a9dc56"><circle cx="226" cy="305" r="2.8"/><circle cx="444" cy="268" r="2.8"/><circle cx="528" cy="184" r="2.8"/><circle cx="642" cy="320" r="2.8"/></g>
      <path d="M187 342h12v20h-12z" fill="#f2f0e6" stroke="#53665b" strokeWidth="2"/><path d="M199 347q12 5 0 10m3-14q19 9 0 18" fill="none" stroke="#cf7469" strokeWidth="2"/>
    </g>
    <g className="an-control"><circle cx="444" cy="420" r="4" fill="#6ad1d1"/><circle cx="444" cy="420" r="1.5" fill="#b5df67"/></g>
    <g className="an-network"><circle cx="444" cy="250" r="5" fill="#173d42" stroke="#80d5d4" strokeWidth="2"/></g>
    <g className="an-automation"><circle cx="642" cy="320" r="4" fill="#173d42" stroke="#dfe8d8" strokeWidth="2"/></g>
    <g className="an-wiring"/>
    <g className="an-signals"/><g className="an-markers"/>
  </svg>;
}
