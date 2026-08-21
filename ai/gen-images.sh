#!/bin/bash
set -e
OUT=ai/raw-images
mkdir -p "$OUT"

gen() {
  local name="$1"
  local prompt="$2"
  echo "Generating: $name"
  for attempt in 1 2; do
    if curl -s --max-time 120 -X POST "https://router.huggingface.co/together/v1/images/generations" \
      -H "Authorization: Bearer $HF_TOKEN" -H "Content-Type: application/json" \
      -d "{\"model\":\"black-forest-labs/FLUX.1-schnell\",\"prompt\":\"$prompt\",\"response_format\":\"b64_json\",\"width\":1024,\"height\":768}" \
      | python3 -c "import json,sys,base64;d=json.load(sys.stdin);open('$OUT/$name.png','wb').write(base64.b64decode(d['data'][0]['b64_json']))" 2>/tmp/gen-err.txt; then
      echo "OK: $name"
      break
    else
      echo "FAIL attempt $attempt: $name — $(cat /tmp/gen-err.txt)"
      sleep 3
    fi
  done
  sleep 2
}

# NOTE: known FLUX defect fixes from southernutahinsulation.com build (2026-07-28):
#  (1) Spurious inset/picture-in-picture box artifact — avoid "subject + separately-described
#      background landscape" and "wide establishing/vista" phrasing. Use tight, single-continuous-
#      scene phrasing instead ("built directly at the base of X, rising immediately behind it in
#      the SAME SHOT").
#  (2) Persistent unwanted cactus/saguaro insertion in St. George/red-rock home prompts — negation
#      ("no cactus") does NOT work on this model and can worsen it. Fix: avoid xeriscape/gravel-yard
#      framing entirely; describe a green grass lawn instead — structurally incompatible with cactus
#      in the model's training association.

gen "hero-insulation" "Wide photograph of a technician in protective coveralls spray-applying closed-cell polyurethane foam insulation directly onto the underside of a roof deck inside a sunlit residential attic in southern Utah, cream-colored foam expanding across wooden rafters in the same continuous shot, warm daylight through a gable vent, professional architectural photography, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-open-cell" "Macro photograph of cured, light cream-colored open-cell spray foam insulation filling a wood-framed interior wall cavity, soft bumpy texture, warm interior lighting, professional architectural photography, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-closed-cell" "Macro photograph of cured, dense, off-white closed-cell spray foam insulation sprayed onto a roof deck rafter bay, smooth rigid texture with visible expansion ridges, cool crisp lighting, professional architectural photography, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-attic" "Photograph taken inside a residential attic showing a technician spray-applying foam insulation to the roof deck directly above, sunlight filtering through the same frame, wooden trusses visible throughout, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-wall" "Photograph of an open interior wall stud cavity mid-renovation with fresh spray foam insulation applied between studs, drywall removed on one side, natural daylight through a nearby window in the same shot, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-crawlspace" "Photograph taken inside a low residential crawl space showing a technician on their knees spray-applying foam insulation to the foundation wall and rim area, a work light illuminating the same frame, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-garage" "Photograph inside a residential garage showing the ceiling and one wall freshly spray-foam insulated with cream-colored foam, a car partially visible in the same shot, bright overhead lighting, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-new-construction" "Photograph of a new home under construction in southern Utah with exposed wall studs and roof trusses, a technician spray-applying foam insulation between studs, other framing visible in the same continuous frame, daylight, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-rim-joist" "Close-up photograph of a technician spray-applying foam insulation to a rim joist band at the top of a foundation wall inside a crawl space or basement, work light illuminating the same frame, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "about-crew" "Photograph of two spray foam insulation technicians in protective coveralls and respirators standing beside their work van in a driveway of a modern desert home with a green grass front lawn, red rock cliffs rising directly behind the home in the same shot, bright daylight, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "about-texture" "Close-up photograph of cured spray foam insulation texture with a technician's gloved hand testing its firmness, warm attic lighting, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "service-areas-redrock" "Photograph of a modern single-story desert home with a green grass front lawn and desert landscaping, tall red sandstone cliffs rising directly behind the house in the same continuous shot, bright blue sky, warm afternoon light, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "blog-cost-guide" "Photograph of a clipboard with a cost estimate sheet and a calculator resting on a workbench next to a spray foam application rig hose, warm workshop lighting, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "blog-hot-attic" "Photograph looking up at a sunlit residential attic roof deck from below, wooden rafters and a thermometer showing high temperature clipped to a truss in the same frame, warm hazy light suggesting heat, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "blog-open-closed" "Side by side macro photograph within a single continuous frame of two spray foam samples on a workbench, one lighter open-cell sample and one denser closed-cell sample, labeled work surface, even studio lighting, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "blog-specialist" "Photograph of a spray foam technician in full protective gear and respirator operating a spray foam rig hose inside a residential attic, focused and precise, warm attic lighting, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

gen "quote-texture" "Macro photograph of cured, dense, cream-colored closed-cell spray foam insulation texture, bumpy organic surface, warm desert-toned lighting with a subtle hint of red rock color in the corner of the same frame, single continuous unedited photograph, no inset box, no picture-in-picture, no text overlay"

echo "All images generated."
ls -la "$OUT"
