import {Question} from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        event_id: 1,
        text: 'Is dit een vraag?',
        options: [
            {
                id: 1,
                text: 'JA',
                isAnswer: false
            },
            {
                id: 2,
                text: 'NEE',
                isAnswer: true
            }
        ]
    },
    {
        id: 2,
        event_id: 2,
        text: 'Vraag 2',
        options: [
            {
                id: 1,
                text: 'Antwoord 1',
                isAnswer: false
            },
            {
                id: 2,
                text: 'Antwoord 2',
                isAnswer: true
            }
        ]
    },
    {
        id: 3,
        event_id: 3,
        text: 'Vraag 3',
        options: [
            {
                id: 1,
                text: 'Antwoord 1',
                isAnswer: false
            },
            {
                id: 2,
                text: 'Antwoord 2',
                isAnswer: true
            }
        ]
    },
    {
        id: 4,
        event_id: 4,
        text: 'Vraag 4',
        options: [
            {
                id: 1,
                text: 'Antwoord 1',
                isAnswer: false
            },
            {
                id: 2,
                text: 'Antwoord 2',
                isAnswer: true
            }
        ]
    },
    {
        id: 5,
        event_id: 5,
        text: 'Vraag 5',
        options: [
            {
                id: 1,
                text: 'Antwoord 1',
                isAnswer: false
            },
            {
                id: 2,
                text: 'Antwoord 2',
                isAnswer: true
            }
        ]
    },
    {
        id: 6,
        event_id: 6,
        text: 'Vraag 6',
        options: [
            {
                id: 1,
                text: 'Antwoord 1',
                isAnswer: false
            },
            {
                id: 2,
                text: 'Antwoord 2',
                isAnswer: true
            }
        ]
    },
]