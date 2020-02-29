/**
 * 会话存储
 * key { String } 键
 * value { Any } 值
 */
const session = {
    set(key, value) {
        value = typeof value == 'object' ? JSON.stringify(value) + `-${typeof value}` : value + `-${typeof value}`;
        sessionStorage.setItem(key, value)
    },
    get(key) {
        let _temp = sessionStorage.getItem(key).split('-');
        switch (_temp[1]) {
            case 'number':
                _temp[0] = JSON.parse(_temp[0])
                break;
            case 'boolean':
                _temp[0] = JSON.parse(_temp[0])
                break;
            case 'object':
                _temp[0] = JSON.parse(_temp[0])
                break;
            case 'undefined':
                _temp[0] = undefined;
                break;
            default:
                break;
        } 

        return _temp[0]
    },
    remove(key) {
        sessionStorage.removeItem(key)
    }
}

/**
 * 本地存储
 * key { String } 键
 * value { Any } 值
 */
const local = {
    set(key, value) {
        value = typeof value == 'object' ? JSON.stringify(value) + `-${typeof value}` : value + `-${typeof value}`;
        localStorage.setItem(key, value)
    },
    get(key) {
        let _temp = localStorage.getItem(key).split('-');
        switch (_temp[1]) {
            case 'number':
                _temp[0] = JSON.parse(_temp[0])
                break;
            case 'boolean':
                _temp[0] = JSON.parse(_temp[0])
                break;
            case 'object':
                _temp[0] = JSON.parse(_temp[0])
                break;
            case 'undefined':
                _temp[0] = undefined;
                break;
            default:
                break;
        }

        return _temp[0]
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}

export default {
    session,
    local
}