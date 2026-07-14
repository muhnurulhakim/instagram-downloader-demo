import { onRequestPost as __api_download_js_onRequestPost } from "/Users/muhnurulhakim/Documents/Kim Project/Download Instagram Reels/functions/api/download.js"

export const routes = [
    {
      routePath: "/api/download",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_download_js_onRequestPost],
    },
  ]