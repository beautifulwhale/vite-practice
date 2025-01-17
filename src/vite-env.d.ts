/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface ImportMetaEnv {
  readonly VITE_IMAGE_BASE_URL: string;
}
declare module "virtual:*" {
  export default any;
}
