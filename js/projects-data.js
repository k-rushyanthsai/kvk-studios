/* =========================================================
   PORTFOLIO DATA — this is the ONLY file you edit to add,
   remove or reorder videos. The cards are built from it.

   Each project:
     id           unique short name, no spaces
     title        shown on the card
     description  one short sentence
     categories   one or more of the filter keys below
                  ("reels", "youtube", "cinematic", "promo", "grading")
     format       "vertical" (Reels/Shorts, 9:16), "horizontal" (16:9)
                  or "square" (1:1) - match the real shape of your video
     duration     text shown on the thumbnail, e.g. "0:30"
     theme        "dark" or "light"  (card style)
     tone         "red", "orange", "amber" or "burgundy"  (accent colour)
     thumbnail    path to an image, e.g. "assets/thumbs/my-video.jpg"
                  (leave "" to show a colour-gradient placeholder)
     videoSrc     path to a video file, e.g. "assets/videos/my-video.mp4"
     youtubeId    OR the part after "v=" in a YouTube link (use one of the two)
     featured     true = big gradient panel across the full width
                  (works best on a horizontal project; use it once or twice)

   To add a video: copy the file into assets/videos/, make a thumbnail in
   assets/thumbs/, then copy one block below and change the values.
   ========================================================= */

const FILTERS = [
  { key: "all",       label: "All Projects" },
  { key: "reels",     label: "Reels" },
  { key: "youtube",   label: "YouTube" },
  { key: "cinematic", label: "Cinematic Edits" },
  { key: "promo",     label: "Promotional Videos" },
  { key: "grading",   label: "Color Grading" },
];

const PROJECTS = [
  {
    id: "lf-1",
    title: "KVK Studio Presents",
    description: "A long-form film with a cinematic title opening and warm, story-led pacing.",
    categories: ["youtube", "cinematic"],
    format: "horizontal",
    duration: "1:13",
    theme: "dark",
    tone: "orange",
    thumbnail: "assets/thumbs/lf_1.jpg",
    videoSrc: "assets/videos/lf_1.mp4",
    youtubeId: "",
    featured: true,
  },
  {
    id: "sf-1",
    title: "Bathukamma '26 at ITM University",
    description: "A festival reel built around flowers, color and crowd energy.",
    categories: ["reels"],
    format: "vertical",
    duration: "1:03",
    theme: "light",
    tone: "amber",
    thumbnail: "assets/thumbs/sf_1.jpg",
    videoSrc: "assets/videos/sf_1.mp4",
    youtubeId: "",
  },
  {
    id: "sf-4",
    title: "Bro Thinks He Is an Editor",
    description: "A punchy night-ride edit with bold captions and tight cuts.",
    categories: ["reels"],
    format: "vertical",
    duration: "0:34",
    theme: "dark",
    tone: "red",
    thumbnail: "assets/thumbs/sf_4.jpg",
    videoSrc: "assets/videos/sf_4.mp4",
    youtubeId: "",
  },
  {
    id: "sf-2",
    title: "Bathukamma Rangoli",
    description: "Rangoli, dance and celebration, graded in warm festival tones.",
    categories: ["cinematic", "grading"],
    format: "horizontal",
    duration: "0:16",
    theme: "light",
    tone: "red",
    thumbnail: "assets/thumbs/sf_2.jpg",
    videoSrc: "assets/videos/sf_2.mp4",
    youtubeId: "",
  },
  {
    id: "sf-0",
    title: "Talking-Head Edit",
    description: "A square creator edit with expressive framing and clean captions.",
    categories: ["reels"],
    format: "square",
    duration: "0:27",
    theme: "dark",
    tone: "orange",
    thumbnail: "assets/thumbs/sf.jpg",
    videoSrc: "assets/videos/sf.mp4",
    youtubeId: "",
  },
  {
    id: "sf-3",
    title: "Shot on iPhone 15",
    description: "A moody travel montage with teal-and-orange color grading.",
    categories: ["cinematic", "grading"],
    format: "horizontal",
    duration: "0:15",
    theme: "dark",
    tone: "amber",
    thumbnail: "assets/thumbs/sf_3.jpg",
    videoSrc: "assets/videos/sf_3.mp4",
    youtubeId: "",
  },
];
