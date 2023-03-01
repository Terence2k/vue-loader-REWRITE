export default function (vm, eventPool) {

    for (let [node, info] of eventPool) {

        // console.log(info.handle)
        vm[info.handle.name] = info.handle

        // console.log(vm[info.handle.name], info.type, node)

        node.addEventListener(info.type, () => {
            console.log('执行:', info.handle.name, node)
            vm[info.handle.name]()
        }, false)

    }
}