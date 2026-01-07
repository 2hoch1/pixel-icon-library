import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    external: ['react'],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        clean: true,
      }),
    ],
    output: [
      // ESM-Ausgabe: Module erhalten, tiefe Importe möglich
      {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
        entryFileNames: '[name].esm.js'
      },
      // CJS-Ausgabe: ebenfalls modulare Dateien
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        entryFileNames: '[name].cjs'
      },
    ],
    treeshake: true,
  },
];
