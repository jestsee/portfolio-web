/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CODE_PROJECT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}