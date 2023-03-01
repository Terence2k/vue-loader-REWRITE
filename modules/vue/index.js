import reactive from './reactive'
import pool from './pool'
import event from './event'
import render from './render'

export function createApp(components) {



    const vm = {}
    const $data = components.data()  //
    const $methods = components.methods
    const $template = components.template

    vm.mount = mount

    vm.DOM = createDom($template)
    const { eventsPool, propsPool } = pool(vm.DOM, $methods)


    const init = () => {

        //这里处理响应式数据 =》 编译模板-> 插值 ，事件，指令存放在对应的pool =》 渲染 =》绑定事件

        reactive(vm, $data ,propsPool)
        // console.log(pools,'pools')
        event(vm, eventsPool)
        render(vm, propsPool)

    }

    init()
    return vm
}

function createDom(template) {
    //创建一个新的div , 要去掉这个
    const _c = document.createElement('div')
    _c.innerHTML = template

    const firstChildNode = getFirstElementChild(_c)

    return firstChildNode
}

function getFirstElementChild(node) {
    const childNodes = node.childNodes;
    let childNode

    for (let i = 0; i < childNodes.length; i++) {
        childNode = childNodes[i]
        if (childNode.nodeType === 1) {
            return childNode
        }
    }

}

function mount(el) {
    const dom = document.querySelector(el)
    dom.appendChild(this.DOM)
}