import express from 'express';

import { getCourses, addCourse, deleteCourse, updateCourse } from '../controllers/courses.js';

const router = express.Router();

router.get('/', getCourses);

router.post('/', addCourse);

router.delete('/:id', deleteCourse);

router.patch('/:id', updateCourse);

export default router;