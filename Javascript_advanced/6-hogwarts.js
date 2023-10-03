const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;

    const changeScore = (points) => {
        privateScore =+ points;
    }
    return {
        setName(newName) {
            newName = name;
        },
        rewardStudent() {
            changeScoreBy(1);
        },
        penalizeStudent() {
            changeScoreBy(1);
        },
        getScore() {
            return (`${name}: ${privateScore}`)
        }
    }
}
let harry = studentHogwarts()
harry.setName('harry')
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
console.log(harry.getScore())

let draco = studentHogwarts()
draco.setName('draco')
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
console.log(draco.getScore)

