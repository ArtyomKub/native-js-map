export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Ivan Petrov', age: 24},
    {name: 'Mark Greg', age: 15},
]

const ArtyomTransformator = (man: ManType) => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split('')[0],
    lastName: man.name.split('')[1]
})


const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrei', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Ivan', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Mark', lastName: 'Greg'
    },
]


const devs2 = [
    ArtyomTransformator(people[0]),
    ArtyomTransformator(people[1]),
    ArtyomTransformator(people[2]),
]

const devs3 = people.map(ArtyomTransformator)
const devs4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split('')[0],
    lastName: man.name.split('')[1]
}))
