const isProd = true;

const links = {
    dashboard: isProd ? "https://trade-manager-dashboard.vercel.app/" : "http://localhost:5173",
    backend : isProd ? "https://zerodha-project-backend.onrender.com" : "http://localhost:8080",
    frontend : isProd ? "https://trade-manager-frontend.vercel.app/" : "http://localhost:5174",
}

export default links;