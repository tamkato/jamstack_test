// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   trailingSlash: true,
// }

// // module.exports = nextConfig

// module.exports = {
//   distDir: 'out',
// }

module.exports = {
  distDir: 'out',
  output: {
    // この設定により、静的ファイルが生成された際に、トレーリングスラッシュが追加されます
    exportTrailingSlash: true,
  },
  // この関数により、各ページに対応するパスを定義します
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
};
