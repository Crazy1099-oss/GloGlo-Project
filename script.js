class Worker {
    constructor(firstName, lastName, age, organization, hireDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.organization = organization;
        this.hireDate = hireDate;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    delete(index) {
        workers.splice(index, 1);
        saveToStorage();
        render();
    }
}

class Mechanic extends Worker {
    constructor(firstName, lastName, age, organization, hireDate, rank, tools) {
        super(firstName, lastName, age, organization, hireDate);
        this.rank = rank;
        this.tools = tools;
        this.type = "Слесарь";
    }
}

class Driver extends Worker {
    constructor(firstName, lastName, age, organization, hireDate, license, experience) {
        super(firstName, lastName, age, organization, hireDate);
        this.license = license;
        this.experience = experience;
        this.type = "Водитель";
    }
}

let workers = [];

function saveToStorage() {
    localStorage.setItem("workers", JSON.stringify(workers));
}

function loadFromStorage() {
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    
    workers = data.map(obj => {
        if (obj.type === "Слесарь") {
            return new Mechanic(
                obj.firstName, obj.lastName, obj.age,
                obj.organization, obj.hireDate,
                obj.rank, obj.tools
            );
        } else {
            return new Driver(
                obj.firstName, obj.lastName, obj.age,
                obj.organization, obj.hireDate,
                obj.license, obj.experience
            );
        }
    });
}

function render() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    workers.forEach((w, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${w.firstName}</td>
            <td>${w.lastName}</td>
            <td>${w.age}</td>
            <td>${w.type}</td>
            <td>${w.organization}</td>
            <td>${w.hireDate}</td>
            <td>${w.rank || w.license}</td>
            <td>${w.tools || w.experience}</td>
            <td><button onclick="workers[${index}].delete(${index})">Удалить</button></td>
        `;

        tbody.appendChild(tr);
    });
}

// Работа с формой
document.getElementById("workerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const type = document.getElementById("type").value;
    const organization = document.getElementById("organization").value;
    const hireDate = document.getElementById("hireDate").value;
    const extra1 = document.getElementById("extra1").value;
    const extra2 = document.getElementById("extra2").value;

    let worker;

    if (type === "mechanic") {
        worker = new Mechanic(firstName, lastName, age, organization, hireDate, extra1, extra2);
    } else {
        worker = new Driver(firstName, lastName, age, organization, hireDate, extra1, extra2);
    }

    workers.push(worker);
    saveToStorage();
    render();

    this.reset();
});

loadFromStorage();
render();