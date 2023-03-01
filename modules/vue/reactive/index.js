import { update } from '../render'
export default function (vm, data, propsPool) {
    vm.$data = data

    for (let key in vm.$data) {
        Object.defineProperty(vm, key, {
            get() {
                return vm.$data[key]
            },
            set(value) {
                console.log('修改值', value,key)
                vm.$data[key] = value

                update(vm, propsPool, key)
            }
        })

    }
}