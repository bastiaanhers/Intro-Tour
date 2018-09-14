import {Location} from './location';
import { QUESTIONS } from './mock-questions';

let questions = QUESTIONS;

export const LOCATIONS: Location[] = [
    { 
        id: 1,
        x: 51.79918395,
        y: 4.67980021,
        radius: 17,
        question: questions[0]
    },
    {
        id: 2,
        x: 51.799209,
        y: 4.683417,
        radius: 17,
        question: questions[1]
    },
    {
        id: 3,
        x: 51.799006,
        y: 4.681632,
        radius: 30,
        question: questions[2]
    },
    {
        id: 4,
        x: 51.798062,
        y: 4.678699,
        radius: 25,
        question: questions[3]    
    },
    {
        id: 5,
        x: 51.797279,
        y: 4.680887,
        radius: 17,
        question: questions[4]
    },
    {
        id: 6,
        x: 51.798175,
        y: 4.682989,
        radius: 20,
        question: questions[5]
    },
];