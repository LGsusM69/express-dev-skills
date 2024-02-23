
const skills = [
    {skill: "JavaScript", expYears: 1, projects: 1},
    {skill: "Java", expYears: 7, projects: 1},
    {skill: "HTML", expYears: 1, projects: 1},
    {skill: "CSS", expYears: 1, projects: 1},
    {skill: "Python", expYears: 0, projects: 0}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    //breed = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(s => s.skill === id);
  }

function create(skill) {
    skill.id = Date.now() % 1000000;
    //skill.expYears = 1;
    skills.push(skill);
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(s => s.id === id);
    skills.splice(idx, 1);
}