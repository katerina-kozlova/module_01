'use strict';

{
    const removeDuplication = (arr) => {
        return new Set(arr).size;
    }

    const ip = [
        "10.90.112.24",
        "10.181.137.59",
        "10.64.146.250",
        "10.215.63.84",
        "10.125.20.72",
        "10.143.250.143",
        "10.181.137.59", // повтор
        "10.228.172.128",
        "10.215.63.84", // повтор
    ]

    console.log(removeDuplication(ip));
}