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
      {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        preserveModules: true,
        entryFileNames: '[name].esm.js',
      },
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
        entryFileNames: '[name].cjs',
      },
    ],
    treeshake: true,
  },
];