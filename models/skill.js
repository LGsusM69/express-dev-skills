
const skills = [
    {skill: "JavaScript", expYears: 1, projects: 1},
    {skill: "Java", expYears: 7, projects: 1},
    {skill: "HTML", expYears: 1, projects: 1},
    {skill: "CSS", expYears: 1, projects: 1},
    {skill: "Python", expYears: 0, projects: 0}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skills.skill === id);
}