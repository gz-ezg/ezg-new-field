//vue cli3.0以前的版本在build里是有webpack相关配置文件的，在3.0以后隐藏了webpack相关配置文件
//所以用这个vue.config.js文件来配置方便自己的webpack相关配置
//如果想看隐藏的webpack配置，在node_modules的@vue/cli-service/lib/config里面可以找到相关配置
//端口修改在@vue/cli-service/lib/commands、serve.js下修改
const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const tsImportPluginFactory = require('ts-import-plugin')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap : process.env.NODE_ENV === 'production' ? false : true,
    filenameHashing : true,
    outputDir : process.env.NODE_ENV === 'development' ? 'dist/develop' : 'dist/lyc',
    devServer:{
        proxy:{
            '/api':{
                target:'http://192.168.0.220:9000',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        disableHostCheck:true,
        port:3333
    },
    css:{
        loaderOptions:{
            less:{
                modifyVars: {
                    red: '#fff',
                    blue: '#3eaf7c',
                    orange: '#f08d49',
                    'text-color': '#111'
                  }
            },
            postcss:{
                plugins:[
                    autoprefixer(),
                    pxtorem({
                        rootValue:37.5,
                        propList:['*']
                    })
                ]
            }
        }
    },
    chainWebpack: config => {
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test
        // console.log(config.resolve.alias)
        config.resolve.alias
            .set('@image',resolve('/src/assets/image'))
            .set('@svg',resolve('/src/icons/svg'))
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId:'icon-[name]'
            })
            .end()
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options =>{
                options = merge(options,{
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory({
                            libraryName: "vant",
                            libraryDirectory: "es",
                            style: true
                        }) 
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
    }
}