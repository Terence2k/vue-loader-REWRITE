const { mkdirSync, writeFileSync, unlinkSync, readdirSync, existsSync } = require('fs')
const { resolve } = require('path')

const templateReg = /\<template\>(.*?)\<\/template\>/
const scriptReg = /\<script\>(.*?)\<\/script\>/
const styleReg = /\<style\>(.*?)\<\/style\>/


function vueLoader(source) {

    //1. 去掉换行

    const _str = source.replace(/[\r\n]/g, '')

    const template = _str.match(templateReg)[1]
    const script = _str.match(scriptReg)[1]
    const style = _str.match(styleReg)[1]
    // 2.把 template放到 script里的一个属性
    const vueScript = script.replace(/\{(.*?)/, (node, key) => {
        return ` { template :'${template}' ,`

    })


    const cssFileName = `__temp/css/${new Date().getTime()}.css`
    writeFile(cssFileName, style)
    
    //3.把css放到这个里面 ：（通过node创建一个临时文件 ， 存放css ,结束后删掉）

    return `
    import '../${cssFileName}'
    
     ${vueScript}
    `
}


function writeFile(cssFileName, str) {
    if (!existsSync(formatPath('../../__temp'))) {
        //没有的创建
        mkdirSync(formatPath('../../__temp'))
        mkdirSync(formatPath('../../__temp/css'))
    }

    //已经有的全删掉
    const files = readdirSync(formatPath('../../__temp/css/'))

    files && files.forEach(file => {
        unlinkSync(formatPath('../../__temp/css/' + file))
    })

    writeFileSync(formatPath(`../../${cssFileName}`), str)
}


function formatPath(path) {
    return resolve(__dirname, path)
}

module.exports = vueLoader