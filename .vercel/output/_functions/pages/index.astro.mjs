import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_B4R6OevK.mjs';
import 'piccolore';
import { a as $$Pin, $ as $$Layout } from '../chunks/Pin_BqjP-03k.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const CMS_URL = "https://cms.purduehackers.com";
  const { project } = Astro2.props;
  const imageUrl = project.image.url.startsWith("http") ? project.image.url : `${CMS_URL}${project.image.url}`;
  function seededRandom(s) {
    return () => {
      s = s * 1103515245 + 12345 & 2147483647;
      return s / 2147483647;
    };
  }
  function createSeed(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i) | 0;
    }
    return Math.abs(hash);
  }
  const seed = createSeed(
    `${project.name}${project.description}${project.last_owner}`
  );
  const random = seededRandom(seed);
  const pick = (arr) => arr[Math.floor(random() * arr.length)];
  const rotations = ["-2deg", "-1deg", "0deg", "1deg", "2deg"];
  const cardRotation = pick(rotations);
  const pinColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500"
  ];
  const pinColor = pick(pinColors);
  const stampRotations = ["-8deg", "-5deg", "-3deg", "3deg", "5deg", "8deg"];
  const stampColors = [
    "text-red-700",
    "text-red-800",
    "text-rose-700",
    "text-red-900"
  ];
  const stampOpacities = ["opacity-70", "opacity-75", "opacity-80", "opacity-85"];
  const stampPositions = ["left-1", "right-1"];
  const stampRotation = pick(stampRotations);
  const stampColor = pick(stampColors);
  const stampOpacity = pick(stampOpacities);
  const stampPosition = pick(stampPositions);
  return renderTemplate`<!-- SVG filter for stamp roughness -->${maybeRenderHead()}<svg class="hidden" data-astro-cid-mspuyifq> <filter id="stamp-roughness" data-astro-cid-mspuyifq> <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" data-astro-cid-mspuyifq></feTurbulence> <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" data-astro-cid-mspuyifq></feDisplacementMap> </filter> </svg> <a${addAttribute(`/project/${project.id}`, "href")} class="group block pt-4 relative [transform-style:flat]"${addAttribute(`--rotation: ${cardRotation}`, "style")} data-astro-cid-mspuyifq> <!-- Push Pin - before article but with isolation --> <div class="absolute inset-0 z-50 pointer-events-none [transform-style:flat]" data-astro-cid-mspuyifq> ${renderComponent($$result, "Pin", $$Pin, { "seed": `${project.name}${project.description}${project.last_owner}`, "cssColor": pinColor, "topOffset": 15, "data-astro-cid-mspuyifq": true })} </div> <article class="card-curl relative bg-white p-3 pb-4 transition-all duration-300 ease-out [transform:rotate(var(--rotation))]" style="max-width: 280px;" data-astro-cid-mspuyifq> <!-- Polaroid-style image --> <div class="bg-gray-100 aspect-square overflow-hidden" data-astro-cid-mspuyifq> <img${addAttribute(imageUrl, "src")}${addAttribute(project.image.alt || project.name, "alt")} class="w-full h-full object-cover transition-transform duration-300" loading="lazy" data-astro-cid-mspuyifq> </div> <!-- Project Info --> <div class="mt-3 text-center" data-astro-cid-mspuyifq> <h2 class="font-handwriting text-2xl text-gray-800 leading-tight" data-astro-cid-mspuyifq> ${project.name} </h2> <div class="mt-2 space-y-1" data-astro-cid-mspuyifq> <p class="text-xs text-gray-500 uppercase tracking-wide" data-astro-cid-mspuyifq>
Last seen with
</p> <p class="text-sm font-medium text-gray-700" data-astro-cid-mspuyifq> ${project.last_owner} </p> <p class="text-xs text-gray-500" data-astro-cid-mspuyifq> ${project.last_division} </p> </div> </div> <!-- "Adopt Me" stamp --> <div${addAttribute(`stamp absolute bottom-6 ${stampPosition} ${stampColor} ${stampOpacity} font-stamp text-xs uppercase tracking-widest border-[3px] border-current rounded-sm px-2 py-1 pointer-events-none`, "class")}${addAttribute(`transform: rotate(${stampRotation});`, "style")} data-astro-cid-mspuyifq>
Adopt Me!
</div> <!-- Paper texture overlay --> <div class="absolute inset-0 pointer-events-none opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" data-astro-cid-mspuyifq></div> </article> </a> `;
}, "/Users/jackhogan/Code/JS/shelter/src/components/ProjectCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_URL = "https://cms.purduehackers.com";
  let projects = [];
  let error = null;
  let projectHomeText = "Loading...";
  try {
    const response = await fetch(`${CMS_URL}/api/shelter-projects?depth=1`);
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }
    const data = await response.json();
    projects = data.docs;
    projectHomeText = projects.length > 1 ? `${projects.length} Projects Need Homes!` : `1 Project Needs a Home!`;
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load projects";
    console.error("Error fetching projects:", e);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Project Shelter - Find Your Next Project", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="min-h-screen bg-amber-700 relative" data-astro-cid-j7pv25f6> <!-- Cork texture layers --> <div class="absolute inset-0 cork-texture" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPGZpbHRlciBpZD0ibm9pc2UiPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')]" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2Q0YTU3NCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0iI2M5OWE2OSIgb3BhY2l0eT0iMC41Ij48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOCIgZmlsbD0iI2JlOGY1ZSIgb3BhY2l0eT0iMC4zIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMTIiIGZpbGw9IiNkOWFhNzkiIG9wYWNpdHk9IjAuNCI+PC9jaXJjbGU+Cjwvc3ZnPg==')]" data-astro-cid-j7pv25f6></div> <!-- Speckle overlay --> <div class="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxNSIgcj0iMiIgZmlsbD0iIzhhNjM0MiIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0iI2E4N2M1MCIgb3BhY2l0eT0iMC4zIi8+CjxjaXJjbGUgY3g9IjkwIiBjeT0iMjAiIHI9IjIuNSIgZmlsbD0iIzZkNGMyOCIgb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjQ1IiByPSIxLjgiIGZpbGw9IiM5YTZiM2UiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIyNSIgcj0iMiIgZmlsbD0iIzdiNTMzMCIgb3BhY2l0eT0iMC4zNSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjcwIiByPSIyLjIiIGZpbGw9IiNhNTc4NGEiIG9wYWNpdHk9IjAuNDUiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI4NSIgcj0iMS41IiBmaWxsPSIjOGE2MzQyIiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iMTEwIiBjeT0iNzUiIHI9IjIuOCIgZmlsbD0iIzZkNGMyOCIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjkwIiByPSIxLjgiIGZpbGw9IiM5YTZiM2UiIG9wYWNpdHk9IjAuMzUiLz4KPGNpcmNsZSBjeD0iMTg1IiBjeT0iNjUiIHI9IjIuMiIgZmlsbD0iI2E1Nzg0YSIgb3BhY2l0eT0iMC40NSIvPgo8Y2lyY2xlIGN4PSIzNSIgY3k9IjEyMCIgcj0iMiIgZmlsbD0iIzdiNTMzMCIgb3BhY2l0eT0iMC4zIi8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iMTQwIiByPSIyLjUiIGZpbGw9IiM4YTYzNDIiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxMjUiIGN5PSIxMjUiIHI9IjEuNSIgZmlsbD0iI2E4N2M1MCIgb3BhY2l0eT0iMC4zNSIvPgo8Y2lyY2xlIGN4PSIxNjUiIGN5PSIxNDUiIHI9IjIuMiIgZmlsbD0iIzZkNGMyOCIgb3BhY2l0eT0iMC40NSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE3MCIgcj0iMS44IiBmaWxsPSIjOWE2YjNlIiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iNTUiIGN5PSIxODUiIHI9IjIuNSIgZmlsbD0iI2E1Nzg0YSIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9Ijk1IiBjeT0iMTY1IiByPSIyIiBmaWxsPSIjN2I1MzMwIiBvcGFjaXR5PSIwLjM1Ii8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjE4MCIgcj0iMS41IiBmaWxsPSIjOGE2MzQyIiBvcGFjaXR5PSIwLjQ1Ii8+CjxjaXJjbGUgY3g9IjE4MCIgY3k9IjE3MCIgcj0iMi44IiBmaWxsPSIjNmQ0YzI4IiBvcGFjaXR5PSIwLjMiLz4KPC9zdmc+')]" data-astro-cid-j7pv25f6></div> <!-- Wood frame border --> <div class="absolute inset-0 border-[16px] border-amber-950 shadow-inner pointer-events-none" style="box-shadow: inset 0 0 30px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.2);" data-astro-cid-j7pv25f6></div> <!-- Content --> <div class="relative z-10 px-8 py-12 md:px-16 md:py-16" data-astro-cid-j7pv25f6> <!-- Header --> <header class="text-center mb-12" data-astro-cid-j7pv25f6> <h1 class="text-5xl md:text-7xl font-handwriting text-white drop-shadow-lg mb-4" data-astro-cid-j7pv25f6>
Project Shelter
</h1> <p class="text-xl text-amber-100 max-w-2xl mx-auto font-handwriting" data-astro-cid-j7pv25f6>
These projects are looking for a loving home. Could you be
                    their new maintainer?
</p> <!-- Sticky note --> <div class="mt-6 inline-block relative transform rotate-1 hover:rotate-0 transition-transform" data-astro-cid-j7pv25f6> <div class="bg-yellow-200 px-6 py-4 shadow-lg relative" style="box-shadow: 2px 3px 8px rgba(0,0,0,0.3);" data-astro-cid-j7pv25f6> <!-- Folded corner effect --> <div class="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-yellow-300 border-b-[20px] border-b-transparent" data-astro-cid-j7pv25f6></div> <span class="font-handwriting text-2xl text-amber-900" data-astro-cid-j7pv25f6> ${projectHomeText} </span> </div> </div> </header> ${error ? renderTemplate`<div class="max-w-md mx-auto bg-white/90 p-6 rounded-lg shadow-lg text-center" data-astro-cid-j7pv25f6> <p class="text-red-600 font-medium" data-astro-cid-j7pv25f6>Oops! ${error}</p> <p class="text-gray-600 mt-2" data-astro-cid-j7pv25f6>
Please try again later.
</p> </div>` : projects.length === 0 ? renderTemplate`<div class="max-w-md mx-auto bg-white/90 p-6 rounded-lg shadow-lg text-center" data-astro-cid-j7pv25f6> <p class="text-gray-600" data-astro-cid-j7pv25f6>
All projects have found homes! 🎉
</p> <p class="text-gray-500 mt-2 text-sm" data-astro-cid-j7pv25f6>
Check back soon for more projects looking for
                            maintainers.
</p> </div>` : renderTemplate`<div class="flex flex-wrap justify-center gap-8 md:gap-12" data-astro-cid-j7pv25f6> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project, "data-astro-cid-j7pv25f6": true })}`)} </div>`} <!-- Footer note --> <footer class="mt-16 text-center" data-astro-cid-j7pv25f6> <p class="text-amber-200/70 text-sm font-handwriting text-lg" data-astro-cid-j7pv25f6>
A Purdue Hackers Initiative 💛
</p> </footer> </div> </div> ` })} `;
}, "/Users/jackhogan/Code/JS/shelter/src/pages/index.astro", void 0);

const $$file = "/Users/jackhogan/Code/JS/shelter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
