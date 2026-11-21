/** Top-down plan of a familiar one-storey, three-bedroom family home. */
export default function HomeAnatomy({ buildStage = 5 }) {
  return <svg className="sr-anatomy-art" data-build-stage={buildStage} viewBox="0 0 900 600" role="img" aria-label="Plano superior de casa de un piso: living comedor, cocina, tres dormitorios, baño, logia y garage conectado">
    <defs>
      <pattern id="an-yard-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#e2eadb" strokeOpacity=".1" strokeWidth="1"/></pattern>
      <filter id="an-plan-shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity=".28"/></filter>
      <filter id="an-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    {/* Yard and garden. The dashed line is the property boundary. */}
    <g className="an-ground">
      <rect x="42" y="36" width="816" height="528" rx="26" fill="#283b34" stroke="#657d69" strokeWidth="2"/>
      <rect x="56" y="50" width="788" height="500" rx="18" fill="#71836c"/>
      <rect x="56" y="50" width="788" height="500" rx="18" fill="url(#an-yard-grid)"/>
      <path d="M80 84h145v10H80zm0 410h106v10H80zm636-410h108v10H716zm13 410h115v10H729z" fill="#8da27d" opacity=".82"/>
      <path d="M82 120h52v90H82zm681 290h57v78h-57z" fill="#62785e"/>
      <circle cx="112" cy="143" r="20" fill="#94a77e"/><circle cx="791" cy="438" r="19" fill="#94a77e"/><circle cx="790" cy="116" r="17" fill="#94a77e"/>
      <path d="M90 466h84v24H90zm660-300h65v24h-65z" fill="#bdb79e" opacity=".72"/>
    </g>

    {/* A single front gate aligns with the front door and entry hall. */}
    <g className="an-perimeter" fill="none" strokeLinecap="round">
      <path d="M74 68H826V532H808M700 532H465M355 532H74V68" stroke="#c7daba" strokeWidth="3" strokeDasharray="9 8"/>
      <path d="M355 532h110" stroke="#e0e6d8" strokeWidth="8"/>
      <path d="m355 532 36-25m-36 25 36 25m74-25-36-25m36 25-36 25" stroke="#b7d96c" strokeWidth="2.5"/>
      <path d="M700 532h108" stroke="#e0e6d8" strokeWidth="8"/>
      <path d="m700 532 36-25m-36 25 36 25m72-25-36-25m36 25-36 25" stroke="#b7d96c" strokeWidth="2.5"/>
      <path d="M410 532V492" stroke="#d8cfba" strokeWidth="12"/>
      <text x="370" y="558" fill="#edf1e3" stroke="none" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">ACCESO PEATONAL</text>
      <text x="708" y="558" fill="#edf1e3" stroke="none" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="1">ACCESO VEHICULAR</text>
    </g>

    {/* House shell, partitions, openings and windows. All walls follow one grid. */}
    <g className="an-shell" filter="url(#an-plan-shadow)">
      <rect x="164" y="116" width="510" height="376" fill="#fffdf4" stroke="#fffdf4" strokeWidth="8"/>
      <rect x="174" y="126" width="202" height="174" fill="#ded9cc"/>
      <rect x="174" y="308" width="202" height="174" fill="#d9d5c8"/>
      <rect x="384" y="126" width="48" height="356" fill="#c9c7b9"/>
      <rect x="440" y="126" width="224" height="90" fill="#e2ddcf"/>
      <rect x="440" y="220" width="224" height="20" fill="#cbc8b9"/>
      <rect x="440" y="246" width="106" height="112" fill="#dedacb"/>
      <rect x="554" y="246" width="110" height="112" fill="#d8d5c9"/>
      <rect x="440" y="364" width="224" height="20" fill="#cbc8b9"/>
      <rect x="440" y="390" width="106" height="92" fill="#d5d8ce"/>
      <rect x="554" y="390" width="110" height="92" fill="#d6d8cf"/>
      {/* Main walls and deliberate door gaps. */}
      <path d="M380 126v74m0 42v48m0 42v40m0 42v148M436 126v28M436 190v30M436 240v20M436 288v70M436 384v22M436 434v48M550 246v112M550 390v92M674 126v276m0 48v42" fill="none" stroke="#fffdf4" strokeWidth="8"/>
      <path d="M174 304h142m42 0h18M164 116h510M164 492h230m40 0h240M440 216h224M440 240h142m36 0h46M440 358h106m8 0h110M440 384h142m36 0h46" fill="none" stroke="#fffdf4" strokeWidth="8"/>
      {/* Door leaves and swing arcs make the route through the home understandable. */}
      <path d="M316 304v42m0 0a42 42 0 0 0 42-42M380 202h-30m0 0a30 30 0 0 1 30 30M436 154h32m0 0a32 32 0 0 0-32 32M436 260h28m0 0a28 28 0 0 0-28 28M590 240v31m0 0a31 31 0 0 1 31-31M436 406h28m0 0a28 28 0 0 0-28 28M590 384v30m0 0a30 30 0 0 1 30-30M674 402h-28m0 0a28 28 0 0 1 28 28M394 492v-38m0 0a38 38 0 0 1 38 38" fill="none" stroke="#9c7754" strokeWidth="2.5"/>
      {/* Window pairs around the facade. */}
      <path d="M208 116h67m39 0h46m25 376h54m66-376h72m-510 52v52m510 32v49" stroke="#72c6c6" strokeWidth="8"/>
    </g>

    <g className="an-interior" fontFamily="system-ui,sans-serif">
      {/* Front social area: a living room and dining table, directly off the entry. */}
      <text x="190" y="151" fill="#34483f" fontSize="14" fontWeight="800" letterSpacing=".8">LIVING · COMEDOR</text>
      <rect x="193" y="178" width="99" height="48" rx="10" fill="#748b80" stroke="#536b61" strokeWidth="3"/><rect x="201" y="171" width="83" height="22" rx="8" fill="#a5b4a7"/><path d="M243 174v48" stroke="#596e63" strokeWidth="2"/>
      <rect x="307" y="182" width="49" height="37" rx="4" fill="#ad9270" stroke="#80674d" strokeWidth="2"/><circle cx="299" cy="190" r="5" fill="#73877a"/><circle cx="364" cy="190" r="5" fill="#73877a"/><circle cx="299" cy="212" r="5" fill="#73877a"/><circle cx="364" cy="212" r="5" fill="#73877a"/>
      <rect x="194" y="254" width="68" height="17" rx="4" fill="#b7aa91"/>

      {/* Kitchen connects to the social area and the hallway. */}
      <text x="190" y="337" fill="#34483f" fontSize="14" fontWeight="800" letterSpacing="1">COCINA</text>
      <rect x="190" y="350" width="166" height="29" rx="4" fill="#b8ad96" stroke="#817866" strokeWidth="2"/><rect x="198" y="356" width="40" height="16" rx="3" fill="#e9e6dc"/>
      <circle cx="276" cy="364" r="7" fill="none" stroke="#59675f" strokeWidth="2"/><circle cx="298" cy="364" r="7" fill="none" stroke="#59675f" strokeWidth="2"/><rect x="320" y="350" width="36" height="69" rx="4" fill="#d1d3c8" stroke="#8a9288" strokeWidth="2"/>
      <rect x="217" y="415" width="86" height="39" rx="4" fill="#a58a69" stroke="#796448" strokeWidth="2"/>
      <text x="188" y="470" fill="#66736a" fontSize="9" fontWeight="700" letterSpacing=".7">LAVADO / DESPENSA</text>

      {/* Hall runs from the front door to bedrooms, bath and laundry. */}
      <text x="389" y="145" fill="#58685e" fontSize="9" fontWeight="800" letterSpacing="1" transform="rotate(90 389 145)">PASILLO</text>
      <rect x="390" y="420" width="36" height="38" rx="5" fill="#263b3d" stroke="#f0f1e8" strokeWidth="2"/><rect x="395" y="425" width="26" height="24" rx="2" fill="#15353a"/><path d="M399 432h17m-17 6h14" stroke="#81d2d1" strokeWidth="2"/><circle cx="416" cy="429" r="2.5" fill="#b2db5c"/>
      <text x="389" y="469" fill="#43554d" fontSize="7" fontWeight="800">ALARMA</text>

      {/* Private wing: three bedrooms plus a shared bath and separate laundry. */}
      <text x="457" y="151" fill="#34483f" fontSize="13" fontWeight="800" letterSpacing=".5">DORMITORIO PRINCIPAL</text>
      <rect x="477" y="165" width="135" height="48" rx="5" fill="#82978d" stroke="#60766c" strokeWidth="2.5"/><rect x="484" y="170" width="41" height="19" rx="4" fill="#f0eee5"/><rect x="530" y="170" width="75" height="37" rx="3" fill="#b8c5b8"/><rect x="626" y="167" width="25" height="47" rx="3" fill="#9e8666"/>

      <text x="455" y="258" fill="#34483f" fontSize="11" fontWeight="800" letterSpacing=".5">DORMITORIO 2</text>
      <rect x="458" y="274" width="65" height="50" rx="4" fill="#8a9b91" stroke="#61746b" strokeWidth="2"/><rect x="463" y="278" width="24" height="17" rx="3" fill="#f1eee5"/><rect x="489" y="278" width="29" height="42" rx="3" fill="#bac5ba"/><rect x="518" y="327" width="22" height="17" rx="3" fill="#a38a68"/>

      <text x="568" y="258" fill="#34483f" fontSize="11" fontWeight="800" letterSpacing=".5">DORMITORIO 3</text>
      <rect x="573" y="274" width="67" height="50" rx="4" fill="#8a9b91" stroke="#61746b" strokeWidth="2"/><rect x="578" y="278" width="24" height="17" rx="3" fill="#f1eee5"/><rect x="604" y="278" width="31" height="42" rx="3" fill="#bac5ba"/><rect x="642" y="278" width="15" height="59" rx="3" fill="#a38a68"/>

      <text x="455" y="383" fill="#34483f" fontSize="11" fontWeight="800" letterSpacing=".5">BAÑO</text>
      <rect x="456" y="398" width="34" height="48" rx="4" fill="#b7d0c8" stroke="#7d9a90" strokeWidth="2"/><path d="M460 402h26v22h-26z" fill="#dce9e2" stroke="#8eaaa0" strokeWidth="1.5"/><ellipse cx="518" cy="414" rx="12" ry="9" fill="#f5f3e9" stroke="#929e94" strokeWidth="2"/><rect x="509" y="414" width="18" height="23" rx="7" fill="#f5f3e9" stroke="#929e94" strokeWidth="2"/>

      <text x="568" y="383" fill="#34483f" fontSize="11" fontWeight="800" letterSpacing=".5">LOGIA</text>
      <rect x="574" y="398" width="32" height="48" rx="4" fill="#e5e4db" stroke="#8d978c" strokeWidth="2"/><circle cx="590" cy="423" r="10" fill="#b4c7c3" stroke="#798c85" strokeWidth="2"/>
      <rect x="614" y="398" width="39" height="48" rx="4" fill="#526760" stroke="#344a43" strokeWidth="2"/><text x="618" y="419" fill="#ecf1e6" fontSize="6.5" fontWeight="800">BATERÍA</text><circle cx="623" cy="432" r="2" fill="#b2db5c"/>
    </g>

    {/* One-car garage attached to the logia by a door. */}
    <g className="an-garage" fontFamily="system-ui,sans-serif">
      <rect x="674" y="318" width="151" height="174" fill="#f2f0e6" stroke="#fffdf4" strokeWidth="7"/>
      <rect x="683" y="327" width="133" height="156" fill="#aab2a5"/>
      <text x="697" y="348" fill="#34483f" fontSize="14" fontWeight="800" letterSpacing="1">GARAGE</text>
      <rect x="724" y="361" width="67" height="96" rx="18" fill="#49666a" stroke="#2d484a" strokeWidth="3"/><path d="M732 369h51l8 28h-67z" fill="#a9d0cf"/><path d="M728 406h59" stroke="#d7e5db" strokeWidth="3"/><circle cx="740" cy="447" r="8" fill="#263432"/><circle cx="776" cy="447" r="8" fill="#263432"/>
      <path d="M754 492v30" stroke="#d0c6ac" strokeWidth="34" opacity=".72"/><path d="M754 492v31" stroke="#e5decb" strokeWidth="2" strokeDasharray="7 7"/>
    </g>

    {/* Solar array in the back garden, with no cable crossing the floor plan. */}
    <g className="an-energy" fontFamily="system-ui,sans-serif">
      <rect x="690" y="112" width="134" height="119" rx="7" fill="#566f55" stroke="#a8bd91" strokeWidth="2"/><text x="702" y="132" fill="#f0f4e6" fontSize="11" fontWeight="800" letterSpacing=".8">PANELES SOLARES</text>
      <rect x="705" y="146" width="104" height="67" rx="3" fill="#203a45" stroke="#d2ded2" strokeWidth="2"/><path d="M739 147v65m35-65v65m-68-33h102" stroke="#81aeb1" strokeWidth="1.5"/><circle cx="800" cy="157" r="4" fill="#b5df67" filter="url(#an-glow)"/>
    </g>

    {/* Security devices follow the perimeter and the actual circulation paths. */}
    <g className="an-perimeter-devices">
      <g fill="#172b30" stroke="#e9f1df" strokeWidth="2"><rect x="67" y="64" width="27" height="19" rx="5"/><rect x="806" y="64" width="27" height="19" rx="5"/><rect x="806" y="517" width="27" height="19" rx="5"/><rect x="67" y="517" width="27" height="19" rx="5"/></g>
      <g fill="#55d2d3"><circle cx="87" cy="73" r="4"/><circle cx="827" cy="73" r="4"/><circle cx="827" cy="526" r="4"/><circle cx="87" cy="526" r="4"/></g>
      <path d="M94 82 141 128 94 128zm712 0-47 46h47zm0 435-47-46h47zm-712 0 47-46H94z" fill="#64cbd0" fillOpacity=".08"/>
      <rect x="387" y="519" width="48" height="25" rx="5" fill="#263b37" stroke="#d7e3d4" strokeWidth="2"/><circle cx="411" cy="531" r="5" fill="#b5df67"/>
    </g>
    <g className="an-security">
      <g fill="#243a36" stroke="#eff3e6" strokeWidth="2"><circle cx="195" cy="160" r="9"/><circle cx="405" cy="270" r="9"/><circle cx="530" cy="187" r="9"/><circle cx="640" cy="300" r="9"/></g>
      <g fill="#a9dc56"><circle cx="195" cy="160" r="3"/><circle cx="405" cy="270" r="3"/><circle cx="530" cy="187" r="3"/><circle cx="640" cy="300" r="3"/></g>
      <path d="M674 406h10" stroke="#b2db5c" strokeWidth="4"/><circle cx="674" cy="406" r="4" fill="#b2db5c"/>
    </g>
    <g className="an-control"><circle cx="405" cy="439" r="4" fill="#6ad1d1"/><circle cx="405" cy="439" r="1.5" fill="#b5df67"/></g>
    <g className="an-network"><circle cx="405" cy="252" r="5" fill="#173d42" stroke="#80d5d4" strokeWidth="2"/></g>
    <g className="an-automation"><circle cx="640" cy="300" r="4" fill="#173d42" stroke="#dfe8d8" strokeWidth="2"/></g>
    <g className="an-wiring" fill="none" stroke="#7ad1ce" strokeWidth="1.5" strokeDasharray="3 7" opacity=".3"><path d="M405 252v187m0-187h124v-65m0 65h111v48"/></g>
    <g className="an-signals"/>
    <g className="an-markers" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" letterSpacing="1"><text x="96" y="286" fill="#edf1e3">PATIO TRASERO</text><text x="98" y="473" fill="#edf1e3">JARDÍN FRONTAL</text></g>
  </svg>;
}
