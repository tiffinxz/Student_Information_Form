document.addEventListener("DOMContentLoaded", function () {
    const studentInfoForm = document.getElementById("student-info-form");
    const studentListUl = document.getElementById("student-list-ul");

    studentInfoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const sid = document.getElementById("sid").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>Name: ${name}</span>
            <span>ID: ${sid}</span>
            <span>Email: ${email}</span>
            <span>Department: ${department}</span>
        `;

        studentListUl.appendChild(li);

        studentInfoForm.reset();
    });
});
