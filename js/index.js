let property = [{
    "name": 'Survey 42',
    "address": 'Kasvanahalli',
    "city": 'Bangalore',
    "asset": 'Land',
    "marketPrice": '2.3 Cr Rupees',
    "CostPrice": '3.3 Cr Rupees'
}]

let cases = [{
    "name": 'Case 01',
    "caseNumber": '5895SHY',
    "casecategory": 'Land Case',
    "year": '2015',
    "dateOpened": '08-05-2020',
    "courtHallName": 'Hall-3,High Court'
}]

let documentData = [{
    "name": 'Revenue Document',
    "documentNumber": '5895SHY',
    "linkedObject": 'Property Survey 42',
    "sourceDocument": 'Governemnt Document',
    "typeDocument": 'Revenue',
}]

let taskList = [{
    "name": 'Property',
    "linkedTo": 'Property',
    "assignedTo": 'Technoboost',
    "dueDate": '28/03/2024',
    "dueTime": '12 PM',
    "contact": 'Suraj S Nair',
    "priority": 'High',
    "status": 'completed',
}]

let expensesData = [{
    "name": 'Property Photos',
    "linkedTo": 'Property Survey 42',
    "amount": '4000 Rupees',
    "submittedDate": '12/04/2024',
}]

let properties = []
let caseDetail = []
let documentDetail = []
let taskData = []
let expenses = []

document.addEventListener('DOMContentLoaded', function () {
    getPropertyList(property)
    getCaseList(cases)
    getDocumentList(documentData)
    getTaskList(taskList)
    getExpensesList(expensesData)
});



function getPropertyList(property) {

    for (let i = 0; i < 200; i++) {
        properties.push(property[0]); // Duplicate the first item in the array
    }
    let tblHtmlData = ''
    let searialNo = ''

    properties.forEach((property, i) => {
        $("#totalPropertiesNumber").html('(' + properties.length + ')')
        searialNo++
        tblHtmlData += `
        <tr class="fw-400 fs-14 text-black text-center">
        <td>${searialNo}</td>
        <td>${property.name}</td>
        <td>${property.address}</td>
        <td>${property.city}</td>
        <td>${property.asset}</td>
        <td>${property.marketPrice}</td>
        <td>${property.CostPrice}</td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button type="button" class="text-lightGreen bg-lightGreen fw-500 fs-12 rounded-pill px-3 p-2 border-0">Edit</button>
                <button type="button" class="text-red bg-lightRed fw-500 fs-12 rounded-pill px-3 p-2 border-0">Delete</button>
            </div>
        </td>
    </tr>`;

    })
    if ($.fn.DataTable.isDataTable('#propertyTable')) {
        $('#propertyTable').DataTable().destroy();
    }

    $('#propertyTableId').html(tblHtmlData);
    $('#propertyTable').DataTable()


    // if (document.querySelector('#propertyTableId').querySelector('table')) {
    //     document.querySelector('#propertyTable').DataTable().destroy();
    // }

    // document.querySelector('#propertyTableId').innerHTML = tblHtmlData;
    // var table = document.querySelector('#propertyTable').DataTable({
    //     "paging": true,
    //     "pageLength": 10
    // });
}

function getCaseList(cases) {

    for (let i = 0; i < 200; i++) {
        caseDetail.push(cases[0]); // Duplicate the first item in the array
    }
    let tblHtmlData = ''
    let searialNo = ''

    caseDetail.forEach((cases, i) => {
        $("#totalCasesNumber").html('(' + caseDetail.length + ')')
        searialNo++
        tblHtmlData += `
        <tr class="fw-400 fs-14 text-black text-center">
        <td>${searialNo}</td>
        <td class="text-green">${cases.name}</td>
        <td>${cases.caseNumber}</td>
        <td>${cases.casecategory}</td>
        <td>${cases.year}</td>
        <td>${cases.dateOpened}</td>
        <td class="nowrap">${cases.courtHallName}</td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button type="button" class="text-lightGreen bg-lightGreen fw-500 fs-12 rounded-pill px-3 p-2 border-0">Edit</button>
                <button type="button" class="text-red bg-lightRed fw-500 fs-12 rounded-pill px-3 p-2 border-0">Delete</button>
            </div>
        </td>
    </tr>`;

    })
    if ($.fn.DataTable.isDataTable('#caseTable')) {
        $('#caseTable').DataTable().destroy();
    }

    $('#caseTableId').html(tblHtmlData);
    $('#caseTable').DataTable()


    // if (document.querySelector('#propertyTableId').querySelector('table')) {
    //     document.querySelector('#propertyTable').DataTable().destroy();
    // }

    // document.querySelector('#propertyTableId').innerHTML = tblHtmlData;
    // var table = document.querySelector('#propertyTable').DataTable({
    //     "paging": true,
    //     "pageLength": 10
    // });
}

function getDocumentList(documentData) {

    for (let i = 0; i < 200; i++) {
        documentDetail.push(documentData[0]); // Duplicate the first item in the array
    }
    let tblHtmlData = ''
    let searialNo = ''

    documentDetail.forEach((documentData, i) => {
        $("#totalDocumentNumber").html('(' + documentDetail.length + ')')
        searialNo++
        tblHtmlData += `
        <tr class="fw-400 fs-14 text-black text-center">
        <td>${searialNo}</td>
        <td class="text-green">${documentData.documentNumber}</td>
        <td>${documentData.name}</td>
        <td>${documentData.linkedObject}</td>
        <td>${documentData.sourceDocument}</td>
        <td>${documentData.typeDocument}</td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button type="button" class="text-lightGreen bg-lightGreen fw-500 fs-12 rounded-pill px-3 p-2 border-0">Edit</button>
                <button type="button" class="text-red bg-lightRed fw-500 fs-12 rounded-pill px-3 p-2 border-0">Delete</button>
            </div>
        </td>
    </tr>`;

    })
    if ($.fn.DataTable.isDataTable('#documentTable')) {
        $('#documentTable').DataTable().destroy();
    }

    $('#documentTableId').html(tblHtmlData);
    $('#documentTable').DataTable()

}

function getTaskList(taskList) {

    for (let i = 0; i < 200; i++) {
        taskData.push(taskList[0]); // Duplicate the first item in the array
    }
    let tblHtmlData = ''
    let searialNo = ''

    taskData.forEach((taskList, i) => {
        $("#totalTasksNumber").html('(' + taskData.length + ')')
        searialNo++
        tblHtmlData += `
        <tr class="fw-400 fs-14 text-black text-center">
        <td>${searialNo}</td>
        <td>${taskList.name}</td>
        <td>${taskList.linkedTo}</td>
        <td>${taskList.assignedTo}</td>
        <td>${taskList.dueDate}</td>
        <td>${taskList.dueTime}</td>
        <td>${taskList.contact}</td>
        <td><div class="d-flex justify-content-center gap-1"> <img src="/img/redDotIcon.svg">${taskList.priority} </div></td>
        <td class="d-flex justify-content-center"><div class="text-lightGreen bg-lightGreen fw-500 fs-12 rounded-pill px-3 p-2 border-0 d-flex gap-1 align-item-center">
        <img src="/img/completedIcon.svg">
        ${taskList.status}</div></td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button type="button" class="text-lightGreen bg-lightGreen fw-500 fs-12 rounded-pill px-3 p-2 border-0">View</button>
                <button type="button" class="text-red bg-lightRed fw-500 fs-12 rounded-pill px-3 p-2 border-0">Delete</button>
            </div>
        </td>
    </tr>`;

    })
    if ($.fn.DataTable.isDataTable('#taskTable')) {
        $('#taskTable').DataTable().destroy();
    }

    $('#taskTableId').html(tblHtmlData);
    $('#taskTable').DataTable()

}

function getExpensesList(expensesData) {

    for (let i = 0; i < 200; i++) {
        expenses.push(expensesData[0]); // Duplicate the first item in the array
    }
    let tblHtmlData = ''
    let searialNo = ''

    expenses.forEach((expensesData, i) => {
        $("#totalExpensesNumber").html('(' + expenses.length + ')')
        searialNo++
        tblHtmlData += `
        <tr class="fw-400 fs-14 text-black text-center">
        <td>${searialNo}</td>
        <td class="text-green">${expensesData.name}</td>
        <td>${expensesData.linkedTo}</td>
        <td>${expensesData.amount}</td>
        <td>${expensesData.submittedDate}</td>
        <td>
            <div class="d-flex gap-2 justify-content-center">
                <button type="button" class="text-lightGreen bg-lightGreen fw-500 fs-12 rounded-pill px-3 p-2 border-0">Edit</button>
                <button type="button" class="text-red bg-lightRed fw-500 fs-12 rounded-pill px-3 p-2 border-0">Delete</button>
            </div>
        </td>
    </tr>`;

    })
    if ($.fn.DataTable.isDataTable('#expenseTable')) {
        $('#expenseTable').DataTable().destroy();
    }

    $('#expenseTableId').html(tblHtmlData);
    $('#expenseTable').DataTable()

}

function addProperty() {
    $("#totalPropertiesData").addClass('d-none');
    $("#addProperties").removeClass('d-none')
}

function backToPropertyTable() {
    $("#totalPropertiesData").removeClass('d-none');
    $("#addProperties").addClass('d-none')
}

function addCases() {
    $("#caseDataTable").addClass('d-none')
    $("#addCaseData").removeClass('d-none')
}

function backToCaseTable() {
    $("#caseDataTable").removeClass('d-none');
    $("#addCaseData").addClass('d-none')
}

function addTask(){
    $("#taskDataTable").addClass('d-none')
    $("#addTaskData").removeClass('d-none')
}

function backToTaskTable() {
    $("#taskDataTable").removeClass('d-none');
    $("#addTaskData").addClass('d-none')
}

function addExpenses(){
    $("#expenseDataTable").addClass('d-none')
    $("#addExpensesData").removeClass('d-none')
}

function backToExpensesTable() {
    $("#expenseDataTable").removeClass('d-none');
    $("#addExpensesData").addClass('d-none')
}