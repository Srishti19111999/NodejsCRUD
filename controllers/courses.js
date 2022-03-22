
let courses = ['C/C++', 'Java', 'Javascript'];

export const getCourses = (req, res) => {
        console.log(`Courses in the database: ${courses}`);
        res.send(courses);
}

export const addCourse = (req, res) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(500).send(`error: Empty Body`)
    }else{
        const course = req.body;
        courses.push(course);
        console.log(`Course ${courses.slice(-1)} added.`);
        res.send(`Course ${courses.slice(-1)} added.`);
    }
};


export const deleteCourse = (req, res) => {
    //console.log(courses.length, req.params)
    if (req.params.id>=courses.length) {
        res.status(500).send(`error: Course with id ${req.params.id} doesent exist`)
    }
    else{
        courses = courses.filter(function (value, index) {
            return index != req.params.id;
        })
        console.log(`Course with id ${req.params.id} has been deleted`);
        res.send(`Course with id ${req.params.id} has been deleted`);
    }
};

export const updateCourse = (req, res) => {
    if(req.params.id>=courses.length){
        res.status(500).send(`error: Course with id ${req.params.id} doesent exist`)
    }
    else if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(500).send(`error: Empty Body`)
    }
    else{
        var i;
        for (i = 0; i < courses.length; i++) {
            if (i == req.params.id) {
                break;
            }
        }
        courses[i] = req.body;
        console.log(`Course has been updated to ${req.body}`)
        res.send(`Course has been updated to ${req.body}`)
    }
};