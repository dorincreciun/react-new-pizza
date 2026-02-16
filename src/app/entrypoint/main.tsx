import { createRoot } from "react-dom/client"

import "@app/styles/index.css"
import { App } from "@app/entrypoint/App"

createRoot(document.getElementById("root")!).render(<App />)
