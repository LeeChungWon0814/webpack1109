const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
module.exports = {
  // 시작점
entry:'./js/main.js',
  // 결과물의 반환하는 패스 설정
output:{
  // path:path.resolve(__dirname,'dist'),
  // filename:'main.js',    // 디폴트 옵션 (폴더 이름이나(예:dist) 파일이름(예:main.js)는 변경가능)
  clean:true
  // clean:true 는 내가 설정한 파일(예:main.js)을 제외한 파일을 정리(삭제) 해준다
},
  // module
module:{
  rules:[
    {
      // scss, css
      test:/\.s?css$/,
      use:[
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test:/\.js$/,
      exclude:/node_modules/,
      use:['babel-loader']
    }
  ]
},
  // plugins
plugins:[
  new htmlPlugin({
    template:'./index.html'
  }),
  new copyPlugin(
    {patterns:[
      {from:'static'}
    ]}
  )
]
}