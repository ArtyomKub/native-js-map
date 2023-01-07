export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Ivan Petrov', age: 24},
    {name: 'Mark Greg', age: 15},
]



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

const dev2 = [
    ArtyomTransformator(people[0]),
    ArtyomTransformator(people[1]),
    ArtyomTransformator(people[2])
]
