const isProd = true;

const links = {
    dashboard: isProd ? "https://zerodha-project-dashboard-f0lb.onrender.com/" : "http://localhost:5173",
    backend : isProd ? "https://zerodha-project-backend.onrender.com" : "http://localhost:8080",
    frontend : isProd ? "https://zerodha-project-frontend-xysp.onrender.com/" : "http://localhost:5174",
}

export default links;