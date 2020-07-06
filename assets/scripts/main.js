const coinWithoutClass = {

    state: 0,

    flip: function () {
        console.log("coin.flip() has been invoked.")
    },

    toString: function () {
        console.log("coin.toString() has been invoked.")
    },

    toHTML: function () {
        let image = document.createElement('img')

        console.log("coin.toHTML() has been invoked.")

        return image
    }

}

console.group("coinWithoutClass")
console.log(coinWithoutClass)
console.groupEnd()