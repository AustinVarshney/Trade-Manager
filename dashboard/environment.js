const isProd = false;

const links = {
    dashboard: isProd ? "" : "http://localhost:5173",
    backend : isProd ? "" : "http://localhost:8080",
    frontend : isProd ? "" : "http://localhost:5174",
}

export default links;