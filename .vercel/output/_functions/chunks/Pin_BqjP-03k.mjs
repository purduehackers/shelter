import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead } from './astro/server_B4R6OevK.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Project Shelter" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-amber-900 font-sans"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jackhogan/Code/JS/shelter/src/layouts/Layout.astro", void 0);

const GliderPin = new Proxy({"src":"/_astro/Glider_Pin.BToeWuv7.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackhogan/Code/JS/shelter/src/assets/Glider_Pin.png";
							}
							
							return target[name];
						}
					});

const ImaginalPin = new Proxy({"src":"/_astro/Imaginal_Pin.DJzx6ISY.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackhogan/Code/JS/shelter/src/assets/Imaginal_Pin.png";
							}
							
							return target[name];
						}
					});

const SeveredPin = new Proxy({"src":"/_astro/Severed_Pin.B9mVn2o_.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackhogan/Code/JS/shelter/src/assets/Severed_Pin.png";
							}
							
							return target[name];
						}
					});

const StrawberryPin = new Proxy({"src":"/_astro/Strawberry_Pin.DFiJyB0D.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jackhogan/Code/JS/shelter/src/assets/Strawberry_Pin.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Pin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pin;
  const {
    seed,
    hashOffset = 0,
    cssColor = "bg-red-500",
    position = "center",
    topOffset = 0
  } = Astro2.props;
  function seededRandom(s) {
    return () => {
      s = s * 1103515245 + 12345 & 2147483647;
      return s / 2147483647;
    };
  }
  function createSeed(str, offset = 0) {
    let hash = offset + 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i) | 0;
    }
    return Math.abs(hash);
  }
  const seedValue = createSeed(seed, hashOffset * 7919);
  const random = seededRandom(seedValue);
  const pinImages = [GliderPin, ImaginalPin, SeveredPin, StrawberryPin];
  const useImagePin = random() < 0.67;
  const selectedPinImage = pinImages[Math.floor(random() * pinImages.length)];
  const pinRotationDeg = Math.floor(random() * 41) - 20;
  const positionClasses = {
    center: "left-1/2 -translate-x-1/2",
    left: "left-8",
    right: "right-8"
  };
  const posClass = positionClasses[position];
  const imagePinTransform = position === "center" ? `translateX(-50%) rotate(${pinRotationDeg}deg)` : `rotate(${pinRotationDeg}deg)`;
  const imageTop = -24 + topOffset;
  const cssTop = -12 + topOffset;
  return renderTemplate`${useImagePin ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`absolute z-50 ${posClass}`, "class")}${addAttribute(`top: ${imageTop}px; transform: ${imagePinTransform};`, "style")}><img${addAttribute(selectedPinImage.src, "src")} alt="Pin" class="w-12 h-12 object-contain drop-shadow-md"></div>` : renderTemplate`<div${addAttribute(`absolute z-50 ${posClass}`, "class")}${addAttribute(`top: ${cssTop}px;`, "style")}><div${addAttribute(`w-6 h-6 rounded-full ${cssColor} shadow-md border-2 border-white`, "class")}><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/50"></div></div><div class="absolute top-5 left-1/2 -translate-x-1/2 w-1 h-2 bg-gray-400 rounded-b"></div></div>`}`;
}, "/Users/jackhogan/Code/JS/shelter/src/components/Pin.astro", void 0);

export { $$Layout as $, $$Pin as a };
