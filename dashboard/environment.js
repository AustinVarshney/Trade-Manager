const isProd = true;

const links = {
    dashboard: isProd ? "" : "http://localhost:5173",
    backend : isProd ? "https://zerodha-project-backend.onrender.com" : "http://localhost:8080",
    frontend : isProd ? "" : "http://localhost:5174",
}

export default links;