import { MetadataRoute } from "next";
import { TAB_ICON_192 } from "@/components/tab-icon-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elevate Build Tech",
    short_name: "Elevate",
    description:
      "Architecture, Construction, and Project Management in Sagar and Malnad region.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0f12",
    theme_color: "#0e0f12",
    icons: [
      {
        src: TAB_ICON_192,
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
