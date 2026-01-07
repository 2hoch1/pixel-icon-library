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
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
  },
];
