
const checkOrder = (avaliable, ordered) => {

    if (ordered === 0) return "Your order is too large, we don’t have enough goods."
    if (avaliable >= ordered) return "Your order is accepted"
    return "Your order is too large, we don’t have enough goods."

}

const ordered = Math.random()
const avaliable = Math.random()

console.log(checkOrder(avaliable, ordered))


