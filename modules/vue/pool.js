import { vProps, vEvents } from './propsType'

/**
 * propsPool
 * @type {*} vIF vShow
 * @prop {*} key 
 * 
 * eventsPool
 * @type {*}  { click , bind }  from vEvents
 * @handle {*} 
 * 
 */

export default function (dom, methods) {

    console.log(methods)
    const propsPool = new Map()
    const eventsPool = new Map()

    const allNodes = dom.getElementsByTagName('*')

    const { vIf, vShow } = vProps
    const { vClick } = vEvents

    let node = null

    for (let i = 0; i < allNodes.length; i++) {
        node = allNodes[i]

        const vIfVal = node.getAttribute(vIf)
        const vShowVal = node.getAttribute(vShow)
        const vClickVal = node.getAttribute(vClick)


        //把模板的指令，事件绑定简历缓存池
        if (vIfVal) {
            propsPool.set(node, {
                type: vIf,
                props: vIfVal
            })
            node.removeAttribute(vIf)
        } else if (vShowVal) {
            propsPool.set(node, {
                type: vShow,
                props: vShowVal
            })
            node.removeAttribute(vShow)

        }

        if (vClickVal) {
            eventsPool.set(node, {
                type: 'click',
                handle: methods[vClickVal]
            })
            node.removeAttribute(vClick)
        }



    }
    console.log(propsPool, 'propsPool', eventsPool)
    return {
        propsPool,
        eventsPool
    }

}