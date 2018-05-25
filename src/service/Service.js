
let id = 0;
const initialSate = {
    subjects: [
        {
            text: "Choose Restaurant",
            id: id++,
            options: [
                {
                    id: id++,
                    text: "abc"
                },
                {
                    id: id++,
                    text: "asfdsf"
                }
            ]
        }, {
            text: "Choose Restaurant",
            id: id++,
            options: [
                {
                    id: id++,
                    text: "abc"
                },
                {
                    id: id++,
                    text: "asfdsf"
                }
            ]
        }
    ]
}

const KEY = "APP_STATE";

export function fetch() {
    const st = localStorage.getItem(KEY);
    return st ? JSON.parse(st) : initialSate;
}

export function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
}