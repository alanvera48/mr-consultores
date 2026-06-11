/** @type {import('next').NextConfig} */
const nextConfig = {
  // El JS original (orbital, carrusel, observers) no es idempotente:
  // crea nodos y dots en el DOM. StrictMode lo ejecutaría dos veces en dev
  // y duplicaría esos elementos. Lo desactivamos para mantener el
  // comportamiento 100% idéntico al HTML original.
  reactStrictMode: false,
};

export default nextConfig;
