
let courses = ['C/C++', 'Java', 'Javascript'];

export const getCourses = (req, res) => {
    console.log(`Courses in the database: ${courses}`);

    res.send(courses);
}

export const addCourse = (req, res) => {
    const course = req.body;
    courses.push(course);
    console.log(`Course ${courses.slice(-1)} added.`);
    res.send(`Course ${courses.slice(-1)} added.`);
};


export const deleteCourse = (req, res) => {

    courses = courses.filter(function (value, index) {
        return index != req.params.id;
    })
    console.log(`Course with id ${req.params.id} has been deleted`);
    res.send(`Course with id ${req.params.id} has been deleted`);
};


export const updateCourse = (req, res) => {
    var i;
    for (i = 0; i < courses.length; i++) {
        if (i == req.params.id) {
            break;
        }
    }

    courses[i] = req.body;

    console.log(`Course has been updated to ${req.body}`)
    res.send(`Course has been updated to ${req.body}`)
};