// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转换的单位
      viewportWidth: 375, // 设计稿的视口宽度（一般是375）
      unitPrecision: 5, // 转换后的精度，即小数点位数
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 希望使用的视口单位
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: [], // 需要忽略的CSS选择器
      minPixelValue: 1, // 最小的转换数值
      mediaQuery: false, // 是否转换媒体查询中的px
      replace: true, // 是否直接替换属性值而不添加备用属性
      exclude: [/node_modules/], // 忽略某些文件夹下的文件
      include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 812, // 横屏时使用的视口宽度
    },
    autoprefixer: {}, // 自动添加浏览器前缀
  },
};
