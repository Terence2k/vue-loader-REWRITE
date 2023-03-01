import { vProps } from './propsType'
const { vIf, vShow } = vProps
export default function (vm, propsPool) {

    const $data = vm.$data

    for (let [node, info] of propsPool) {
        switch (info.type) {
            case vIf:

                info.comment = info.comment || document.createComment(vIf)
                !$data[info.props] && node.parentNode.replaceChild(info.comment, node)

                break;
            case vShow:
                node.style.display = $data[info.props] ? '' : 'none'
                break;
            default:
                break;
        }
    }

}

export function update(vm, propsPool, key) {
    const $data = vm.$data

    console.log(propsPool)
    for (let [node, info] of propsPool) {

        if (info.props === key) {
            switch (info.type) {
                case vIf:

                    !$data[key] ? node.parentNode.replaceChild(info.comment, node) : info.comment.parentNode.replaceChild(node, info.comment)

                    break;
                case vShow:
                    node.style.display = $data[key] ? '' : 'none'
                    break;
                default:
                    break;
            }

        }

    }
}