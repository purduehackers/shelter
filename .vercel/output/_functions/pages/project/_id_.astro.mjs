import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_B4R6OevK.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Pin } from '../../chunks/Pin_BqjP-03k.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const CMS_URL = "https://cms.purduehackers.com";
  const { id } = Astro2.params;
  let project = null;
  let error = null;
  try {
    const response = await fetch(`${CMS_URL}/api/shelter-projects/${id}?depth=1`);
    if (!response.ok) {
      if (response.status === 404) {
        return Astro2.redirect("/404");
      }
      throw new Error(`Failed to fetch project: ${response.status}`);
    }
    project = await response.json();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load project";
    console.error("Error fetching project:", e);
  }
  const imageUrl = project?.image.url.startsWith("http") ? project.image.url : `${CMS_URL}${project?.image.url}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project ? `${project.name} - Project Shelter` : "Project Not Found", "data-astro-cid-iejuj6pp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-amber-700 relative" data-astro-cid-iejuj6pp> <!-- Cork texture layers --> <div class="absolute inset-0 cork-texture" data-astro-cid-iejuj6pp></div> <div class="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPGZpbHRlciBpZD0ibm9pc2UiPgo8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CjwvZmlsdGVyPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC41Ii8+Cjwvc3ZnPg==')]" data-astro-cid-iejuj6pp></div> <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2Q0YTU3NCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0iI2M5OWE2OSIgb3BhY2l0eT0iMC41Ij48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOCIgZmlsbD0iI2JlOGY1ZSIgb3BhY2l0eT0iMC4zIj48L2NpcmNsZT4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMTIiIGZpbGw9IiNkOWFhNzkiIG9wYWNpdHk9IjAuNCI+PC9jaXJjbGU+Cjwvc3ZnPg==')]" data-astro-cid-iejuj6pp></div> <!-- Speckle overlay --> <div class="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxNSIgcj0iMiIgZmlsbD0iIzhhNjM0MiIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0iI2E4N2M1MCIgb3BhY2l0eT0iMC4zIi8+CjxjaXJjbGUgY3g9IjkwIiBjeT0iMjAiIHI9IjIuNSIgZmlsbD0iIzZkNGMyOCIgb3BhY2l0eT0iMC41Ii8+CjxjaXJjbGUgY3g9IjEzMCIgY3k9IjQ1IiByPSIxLjgiIGZpbGw9IiM5YTZiM2UiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIyNSIgcj0iMiIgZmlsbD0iIzdiNTMzMCIgb3BhY2l0eT0iMC4zNSIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjcwIiByPSIyLjIiIGZpbGw9IiNhNTc4NGEiIG9wYWNpdHk9IjAuNDUiLz4KPGNpcmNsZSBjeD0iNzAiIGN5PSI4NSIgcj0iMS41IiBmaWxsPSIjOGE2MzQyIiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iMTEwIiBjeT0iNzUiIHI9IjIuOCIgZmlsbD0iIzZkNGMyOCIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjkwIiByPSIxLjgiIGZpbGw9IiM5YTZiM2UiIG9wYWNpdHk9IjAuMzUiLz4KPGNpcmNsZSBjeD0iMTg1IiBjeT0iNjUiIHI9IjIuMiIgZmlsbD0iI2E1Nzg0YSIgb3BhY2l0eT0iMC40NSIvPgo8Y2lyY2xlIGN4PSIzNSIgY3k9IjEyMCIgcj0iMiIgZmlsbD0iIzdiNTMzMCIgb3BhY2l0eT0iMC4zIi8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iMTQwIiByPSIyLjUiIGZpbGw9IiM4YTYzNDIiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxMjUiIGN5PSIxMjUiIHI9IjEuNSIgZmlsbD0iI2E4N2M1MCIgb3BhY2l0eT0iMC4zNSIvPgo8Y2lyY2xlIGN4PSIxNjUiIGN5PSIxNDUiIHI9IjIuMiIgZmlsbD0iIzZkNGMyOCIgb3BhY2l0eT0iMC40NSIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE3MCIgcj0iMS44IiBmaWxsPSIjOWE2YjNlIiBvcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iNTUiIGN5PSIxODUiIHI9IjIuNSIgZmlsbD0iI2E1Nzg0YSIgb3BhY2l0eT0iMC40Ii8+CjxjaXJjbGUgY3g9Ijk1IiBjeT0iMTY1IiByPSIyIiBmaWxsPSIjN2I1MzMwIiBvcGFjaXR5PSIwLjM1Ii8+CjxjaXJjbGUgY3g9IjE0MCIgY3k9IjE4MCIgcj0iMS41IiBmaWxsPSIjOGE2MzQyIiBvcGFjaXR5PSIwLjQ1Ii8+CjxjaXJjbGUgY3g9IjE4MCIgY3k9IjE3MCIgcj0iMi44IiBmaWxsPSIjNmQ0YzI4IiBvcGFjaXR5PSIwLjMiLz4KPC9zdmc+')]" data-astro-cid-iejuj6pp></div> <!-- Wood frame border --> <div class="absolute inset-0 border-[16px] border-amber-950 shadow-inner pointer-events-none" style="box-shadow: inset 0 0 30px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.2);" data-astro-cid-iejuj6pp></div> <!-- Content --> <div class="relative z-10 px-8 py-12 md:px-16 md:py-16" data-astro-cid-iejuj6pp> <!-- Back button --> <a href="/" class="inline-flex items-center gap-2 text-amber-100 hover:text-white transition-colors mb-8 font-handwriting text-xl" data-astro-cid-iejuj6pp> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-iejuj6pp> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" data-astro-cid-iejuj6pp></path> </svg>
Back to all projects
</a> ${error ? renderTemplate`<div class="max-w-md mx-auto bg-white/90 p-6 rounded-lg shadow-lg text-center" data-astro-cid-iejuj6pp> <p class="text-red-600 font-medium" data-astro-cid-iejuj6pp>Oops! ${error}</p> <p class="text-gray-600 mt-2" data-astro-cid-iejuj6pp>Please try again later.</p> </div>` : project ? renderTemplate`<div class="max-w-4xl mx-auto" data-astro-cid-iejuj6pp> <!-- Main card --> <article class="bg-white p-6 md:p-10 shadow-2xl relative" data-astro-cid-iejuj6pp> <!-- Push pins --> ${renderComponent($$result2, "Pin", $$Pin, { "seed": `${project.name}${project.description}${project.last_owner}`, "position": "left", "cssColor": "bg-red-500", "data-astro-cid-iejuj6pp": true })} ${renderComponent($$result2, "Pin", $$Pin, { "seed": `${project.name}${project.description}${project.last_owner}`, "position": "right", "cssColor": "bg-blue-500", "hashOffset": 8, "data-astro-cid-iejuj6pp": true })} <div class="md:flex gap-8" data-astro-cid-iejuj6pp> <!-- Image --> <div class="md:w-1/2 mb-6 md:mb-0" data-astro-cid-iejuj6pp> <div class="bg-gray-100 p-3 shadow-md" data-astro-cid-iejuj6pp> <img${addAttribute(imageUrl, "src")}${addAttribute(project.image.alt || project.name, "alt")} class="w-full aspect-square object-cover" data-astro-cid-iejuj6pp> </div> </div> <!-- Info --> <div class="md:w-1/2" data-astro-cid-iejuj6pp> <h1 class="text-4xl md:text-5xl font-handwriting text-gray-800 mb-4" data-astro-cid-iejuj6pp> ${project.name} </h1> <!-- Stats - Sticky note style --> <div class="bg-yellow-100 p-4 mb-6 shadow-md transform -rotate-1 relative" style="box-shadow: 2px 3px 8px rgba(0,0,0,0.2);" data-astro-cid-iejuj6pp> <div class="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-yellow-200 border-b-[16px] border-b-transparent" data-astro-cid-iejuj6pp></div> <h2 class="font-handwriting text-xl text-amber-900 mb-2" data-astro-cid-iejuj6pp>
Project Details
</h2> <dl class="space-y-1 font-handwriting text-lg" data-astro-cid-iejuj6pp> <div class="flex justify-between" data-astro-cid-iejuj6pp> <dt class="text-amber-700" data-astro-cid-iejuj6pp>Last Owner:</dt> <dd class="text-amber-900" data-astro-cid-iejuj6pp>${project.last_owner}</dd> </div> <div class="flex justify-between" data-astro-cid-iejuj6pp> <dt class="text-amber-700" data-astro-cid-iejuj6pp>Last Division:</dt> <dd class="text-amber-900" data-astro-cid-iejuj6pp>${project.last_division}</dd> </div> </dl> </div> <!-- Description --> <div class="mb-8" data-astro-cid-iejuj6pp> <h2 class="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2" data-astro-cid-iejuj6pp>
About This Project
</h2> <p class="text-gray-700 leading-relaxed whitespace-pre-wrap" data-astro-cid-iejuj6pp> ${project.description} </p> </div> <!-- CTA - Sticky note style --> <div class="bg-green-100 p-4 shadow-md transform rotate-1 relative" style="box-shadow: 2px 3px 8px rgba(0,0,0,0.2);" data-astro-cid-iejuj6pp> <div class="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-green-200 border-b-[16px] border-b-transparent" data-astro-cid-iejuj6pp></div> <p class="font-handwriting text-xl text-green-800 mb-1" data-astro-cid-iejuj6pp>
Interested in adopting?
</p> <p class="font-handwriting text-lg text-green-700" data-astro-cid-iejuj6pp>
Reach out to an organizer to claim this project and give it a new home!
</p> </div> </div> </div> <!-- Paper texture overlay --> <div class="absolute inset-0 pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" data-astro-cid-iejuj6pp></div> </article> <!-- Share link --> <div class="mt-6 text-center" data-astro-cid-iejuj6pp> <p class="text-amber-200 text-sm" data-astro-cid-iejuj6pp>
Share this project:
<span class="font-mono bg-amber-900/50 px-2 py-1 rounded text-amber-100" data-astro-cid-iejuj6pp> ${Astro2.url.href} </span> </p> </div> </div>` : null} <!-- Footer --> <footer class="mt-16 text-center" data-astro-cid-iejuj6pp> <p class="text-amber-200/70 font-handwriting text-lg" data-astro-cid-iejuj6pp>
A Purdue Hackers Initiative 💛
</p> </footer> </div> </div> ` })} `;
}, "/Users/jackhogan/Code/JS/shelter/src/pages/project/[id].astro", void 0);

const $$file = "/Users/jackhogan/Code/JS/shelter/src/pages/project/[id].astro";
const $$url = "/project/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
