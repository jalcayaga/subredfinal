/**
 * Clear top-down site plan. The old isometric illustration mixed perspective,
 * labels and equipment; this plan makes the spaces readable before adding systems.
 */
export default function HomeAnatomy({ buildStage = 5 }) {
  return <svg className="sr-anatomy-art" data-build-stage={buildStage} viewBox="0 0 900 600" role="img" aria-label="Plano superior de una vivienda con living, cocina, dormitorio, baño, garage, patio, paneles solares y protección perimetral">
    <defs>
      <pattern id="an-yard-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#d8e4d6" strokeOpacity=".16" strokeWidth="1"/></pattern>
      <filter id="an-plan-shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000" floodOpacity=".3"/></filter>
      <filter id="an-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>

    {/* One site boundary, one clear entrance, one connected house footprint. */}
    <g className="an-ground">
      <rect x="44" y="38" width="812" height="524" rx="28" fill="#283b34" stroke="#657d69" strokeWidth="2"/>
      <rect x="58" y="52" width="784" height="496" rx="20" fill="#71836c"/>
      <rect x="58" y="52" width="784" height="496" rx="20" fill="url(#an-yard-grid)"/>
      <path d="M85 98h72v14H85zm0 390h84v14H85zm660-390h68v14h-68zm-18 390h86v14h-86z" fill="#8ba27a" opacity=".8"/>
      <path d="M115 430h47v34h-47zm624-320h43v42h-43z" fill="#60775c"/>
      <circle cx="138" cy="446" r="18" fill="#91a479"/><circle cx="756" cy="132" r="21" fill="#91a479"/><circle cx="782" cy="460" r="15" fill="#91a479"/>
    </g>

    {/* Perimeter is a single legible line, with an obvious gate at the bottom. */}
    <g className="an-perimeter" fill="none" strokeLinecap="round">
      <path d="M76 72H824V528H505M395 528H76V72" stroke="#b9d8b7" strokeWidth="3" strokeDasharray="9 9"/>
      <path d="M395 528h110" stroke="#d8e1d3" strokeWidth="8"/>
      <path d="M395 528l35-25m-35 25 35 25m75-25-35-25m35 25-35 25" stroke="#b7d96c" strokeWidth="2.5"/>
      <text x="433" y="558" fill="#e2eadc" stroke="none" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="800" letterSpacing="2">ACCESO PRINCIPAL</text>
    </g>

    {/* Rooms use a shared scale and square alignment so their relationship is obvious. */}
    <g className="an-shell" filter="url(#an-plan-shadow)">
      <rect x="174" y="112" width="494" height="374" rx="8" fill="#f0eee4" stroke="#fffdf4" strokeWidth="8"/>
      <rect x="184" y="122" width="222" height="168" fill="#d9d5c8"/>
      <rect x="410" y="122" width="248" height="168" fill="#e1ddcf"/>
      <rect x="184" y="294" width="222" height="182" fill="#d5d1c4"/>
      <rect x="410" y="294" width="248" height="182" fill="#dcd9cd"/>
      <path d="M408 122v354M184 292h474" stroke="#fffdf4" strokeWidth="8"/>
      {/* Doors are openings in the partitions, shown with a clear swing arc. */}
      <path d="M407 198v40m0 0a40 40 0 0 1 40-40M408 358v40m0 0a40 40 0 0 1 40-40" fill="none" stroke="#987657" strokeWidth="3"/>
      {/* Windows on the outside walls. */}
      <path d="M233 112h94m214 0h96M174 174v65m494 44v64" stroke="#73bdc0" strokeWidth="9"/>
    </g>

    <g className="an-interior" fontFamily="system-ui,sans-serif">
      {/* Living: sofa and table are centered below the room name. */}
      <text x="204" y="151" fill="#31443d" fontSize="16" fontWeight="800" letterSpacing="1.5">LIVING</text>
      <rect x="218" y="185" width="112" height="54" rx="12" fill="#718980" stroke="#4b625b" strokeWidth="3"/>
      <rect x="226" y="177" width="96" height="28" rx="9" fill="#9aaea3"/><path d="M274 181v54" stroke="#52675f" strokeWidth="2"/>
      <rect x="341" y="202" width="42" height="38" rx="5" fill="#a88e6d" stroke="#77624a" strokeWidth="2"/>
      <rect x="212" y="252" width="77" height="18" rx="4" fill="#b9ac91"/>

      {/* Kitchen and dining remain a distinct room at the upper right. */}
      <text x="430" y="151" fill="#31443d" fontSize="16" fontWeight="800" letterSpacing="1.5">COCINA</text>
      <rect x="435" y="170" width="196" height="29" rx="4" fill="#b6ad98" stroke="#827b6c" strokeWidth="2"/>
      <rect x="442" y="177" width="48" height="15" rx="3" fill="#e8e4d9"/><circle cx="516" cy="184" r="8" fill="none" stroke="#59665e" strokeWidth="2"/><circle cx="542" cy="184" r="8" fill="none" stroke="#59665e" strokeWidth="2"/>
      <rect x="486" y="222" width="92" height="37" rx="4" fill="#a58a69" stroke="#796448" strokeWidth="2"/>
      <circle cx="474" cy="228" r="8" fill="#71837a"/><circle cx="590" cy="228" r="8" fill="#71837a"/><circle cx="474" cy="253" r="8" fill="#71837a"/><circle cx="590" cy="253" r="8" fill="#71837a"/>

      {/* Bedroom, bathroom and utility cabinet. */}
      <text x="204" y="327" fill="#31443d" fontSize="16" fontWeight="800" letterSpacing="1.5">DORMITORIO</text>
      <rect x="220" y="352" width="126" height="91" rx="6" fill="#8b9a91" stroke="#5e7168" strokeWidth="3"/>
      <rect x="228" y="359" width="47" height="29" rx="5" fill="#e9e5d9"/><rect x="282" y="359" width="56" height="75" rx="4" fill="#b9c4b6"/>
      <rect x="359" y="374" width="31" height="47" rx="3" fill="#a38a68"/>
      <text x="430" y="327" fill="#31443d" fontSize="16" fontWeight="800" letterSpacing="1.5">BAÑO + SERVICIO</text>
      <rect x="430" y="350" width="77" height="91" rx="5" fill="#c7d6d0" stroke="#849d94" strokeWidth="2"/>
      <path d="M438 358h61v33h-61z" fill="#a9c7c2" stroke="#6e9691" strokeWidth="2"/><path d="M438 392h61" stroke="#f7f5eb" strokeWidth="3"/>
      <ellipse cx="534" cy="378" rx="16" ry="12" fill="#f7f5eb" stroke="#8b9990" strokeWidth="2"/><rect x="522" y="378" width="24" height="34" rx="8" fill="#f7f5eb" stroke="#8b9990" strokeWidth="2"/>
      <rect x="570" y="353" width="65" height="90" rx="4" fill="#536762" stroke="#344942" strokeWidth="2"/>
      <text x="579" y="383" fill="#dce8dd" fontSize="9" fontWeight="700">CENTRAL</text><circle cx="582" cy="400" r="3" fill="#9bdd53"/><circle cx="594" cy="400" r="3" fill="#70ced2"/>
    </g>

    {/* Garage is a separate, properly labeled space connected to the driveway. */}
    <g className="an-garage" fontFamily="system-ui,sans-serif">
      <rect x="686" y="280" width="132" height="170" rx="8" fill="#d6d8cf" stroke="#fffdf4" strokeWidth="7"/>
      <rect x="695" y="289" width="114" height="152" rx="4" fill="#9aa69b"/>
      <text x="708" y="312" fill="#34483f" fontSize="15" fontWeight="800" letterSpacing="1">GARAGE</text>
      <path d="M700 329h104" stroke="#d9e0d5" strokeWidth="2" strokeDasharray="5 4"/>
      <rect x="724" y="346" width="57" height="73" rx="17" fill="#4b6669" stroke="#294347" strokeWidth="3"/>
      <path d="M733 355h39l7 22h-53z" fill="#a9d0cf"/><path d="M726 383h53" stroke="#d7e5db" strokeWidth="3"/>
      <circle cx="735" cy="408" r="7" fill="#263432"/><circle cx="770" cy="408" r="7" fill="#263432"/>
    </g>
    <g className="an-driveway"><path d="M668 378h18m-18 15h18m-18 15h18" stroke="#d6d0c1" strokeWidth="7"/><path d="M668 385h18v24h-18" fill="#b9b4a6" opacity=".75"/></g>

    {/* Solar is a small, labeled garden zone; no cable is drawn across the plan. */}
    <g className="an-energy" fontFamily="system-ui,sans-serif">
      <rect x="694" y="110" width="126" height="112" rx="8" fill="#556d56" stroke="#a8bd91" strokeWidth="2"/>
      <text x="708" y="132" fill="#f0f4e6" fontSize="12" fontWeight="800" letterSpacing="1">ENERGÍA SOLAR</text>
      <rect x="710" y="145" width="94" height="60" rx="3" fill="#203a45" stroke="#d2ded2" strokeWidth="2"/>
      <path d="M741 146v58m31-58v58m-61-29h92" stroke="#81aeb1" strokeWidth="1.5"/>
      <circle cx="797" cy="155" r="4" fill="#b5df67" filter="url(#an-glow)"/>
    </g>

    {/* A few clearly placed devices: cameras at corners, sensors inside. */}
    <g className="an-perimeter-devices">
      <g fill="#172b30" stroke="#e9f1df" strokeWidth="2"><rect x="67" y="68" width="28" height="19" rx="5"/><rect x="805" y="68" width="28" height="19" rx="5"/><rect x="805" y="513" width="28" height="19" rx="5"/></g>
      <g fill="#55d2d3"><circle cx="88" cy="77" r="4"/><circle cx="826" cy="77" r="4"/><circle cx="826" cy="522" r="4"/></g>
      <path d="M95 86 153 145 95 145zm710 0-58 59h58zm0 427-58-58h58z" fill="#64cbd0" fillOpacity=".1"/>
      <g fill="#e6ecde" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" letterSpacing="1"><text x="102" y="79">CÁMARA</text><text x="735" y="79">CÁMARA</text><text x="700" y="543">CÁMARA</text></g>
      <rect x="469" y="516" width="48" height="24" rx="5" fill="#263b37" stroke="#d7e3d4" strokeWidth="2"/><circle cx="493" cy="528" r="5" fill="#b5df67"/><text x="525" y="534" fill="#e7eddf" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" letterSpacing="1">PORTÓN</text>
    </g>
    <g className="an-security">
      <g fill="#243a36" stroke="#eff3e6" strokeWidth="2"><circle cx="200" cy="166" r="10"/><circle cx="638" cy="151" r="10"/><circle cx="200" cy="459" r="10"/><circle cx="638" cy="459" r="10"/></g>
      <g fill="#a9dc56"><circle cx="200" cy="166" r="3"/><circle cx="638" cy="151" r="3"/><circle cx="200" cy="459" r="3"/><circle cx="638" cy="459" r="3"/></g>
    </g>

    {/* One control point inside the home, rather than floating labels and routes. */}
    <g className="an-control" fontFamily="system-ui,sans-serif">
      <rect x="576" y="406" width="57" height="37" rx="5" fill="#24383b" stroke="#e3e8db" strokeWidth="2"/>
      <rect x="582" y="411" width="45" height="25" rx="2" fill="#143038"/>
      <path d="M587 419h19m-19 6h29" stroke="#86d5d3" strokeWidth="2"/><circle cx="619" cy="418" r="3" fill="#a9dc56"/>
      <text x="546" y="461" fill="#34483f" fontSize="10" fontWeight="800" letterSpacing=".8">PANTALLA DE CONTROL</text>
    </g>
    <g className="an-network"><circle cx="454" cy="267" r="8" fill="#173d42" stroke="#80d5d4" strokeWidth="2"/><circle cx="454" cy="267" r="3" fill="#a9dc56"/></g>
    <g className="an-automation"><circle cx="624" cy="316" r="7" fill="#173d42" stroke="#dfe8d8" strokeWidth="2"/><circle cx="624" cy="316" r="2.5" fill="#a9dc56"/></g>
    <g className="an-wiring" fill="none" stroke="#7ad1ce" strokeWidth="2" strokeDasharray="4 6" opacity=".65"><path d="M454 267h40v65h82v-16"/><path d="M624 316v90"/></g>
    <g className="an-signals"/>
    <g className="an-markers" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="800" letterSpacing="1"><text x="92" y="306" fill="#e7eddf">PATIO PROTEGIDO</text></g>
  </svg>;
}
