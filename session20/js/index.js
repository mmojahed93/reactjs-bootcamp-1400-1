const car = {
    brand: 'BMW',
    model: '2016',
    color: 'silver',

    get name() {
        return `${this.brand} ${this.model}`
    },
    set name(value) {
        const error = new Error()
        if (typeof value !== 'string') {
            throw new Error(`Name of car is not string. value: ${value}`)
        }
        this.brand = value.split(' ')[0]
        this.model = value.split(' ')[1]
    }

}


// car.name = 10

// try {
//     car.name = 10
//     console.log(car.name)
// } catch (myError) {
//     console.error(myError)
// }

// let lName = 'mojahed'
// let name = "mohammad" + lName
// name = 'mohammad' + lName
// name = `mohammad ${car}`

let name = ''

const logName = () => {
    name = 'mohammad'
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
    // console.log(i)
}

function setName() {
    name = 'mohammad'
    // console.log(name)
}


// console.log(name)

// function video(title) {
//     this.title = title
//     console.log(this)
// }
//
// const v = new video('hello')
// console.log(v)


const video = {
    title: 'Squid Game',
    tags: ['action'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag)
        }.bind(this))
    }
}


video.showTags()