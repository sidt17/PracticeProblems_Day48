let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList=getEmployeePayrollDataFromLocalStorage();
    document.querySelector(".emp-count").innerHTML=empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromLocalStorage=()=>{
    return localStorage.getItem('EmployeePayRollList')?
    JSON.parse(localStorage.getItem('EmployeePayRollList')):createEmployeePayRollJSON();
}

const createInnerHtml =() =>{
    const HeaderHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>StartDate</th><th>Actions</th>";

    let innerHtml=`${HeaderHtml}`;
     let empPayrollList= getEmployeePayrollDataFromLocalStorage();
     for(const empPayRollData of empPayrollList)
     {

     

        innerHtml = `${innerHtml}
    <tr> 

    <td><img class="profile" alt="" 
        src=${empPayRollData._profilePic}>
     </td>
     <td>${empPayRollData._name}</td>
     <td>${empPayRollData._gender}</td>
      <td>${getDeptHtml(empPayRollData._department)}
      </td>
     <td>${empPayRollData._salary}</td>
     <td>${stringifyDate(empPayRollData._startDate)}</td>
     <td>
     <button id="${empPayRollData._name}" onclick="remove(this)">Remove</button> 
    <button id="${empPayRollData._name}" onclick="update(this)">Edit</button> 
         
    </td> 
</tr>
`;
}
    document.querySelector('#display').innerHTML=innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
    const createEmployeePayRollJSON=()=>{

        let employeePayRollListLocal=[
            {
                _name:'Siddhant',
                _gender:'Male',
                _department:['Engineering','Finance'],
                _salary:'50000',
                _startDate:'29 Oct 2019',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'img1.jpg'
            },
            {
                _name:'Priya',
                _gender:'Female',
                _department:['Engineering','Finance'],
                _salary:'40000',
                _startDate:'1 Oct 2020',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'img3.jpg'
            },

            {
                _name:'Richa',
                _gender:'Female',
                _department:['Engineering','Finance'],
                _salary:'40000',
                _startDate:'1 Oct 2020',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'img3.jpg'
            }
    
    
        ];
        localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayRollListLocal))
        return employeePayRollListLocal;
    }

    const remove =(node)=>{
        let empPayrollData=empPayrollList.find(empData=>empData._name==node.id);
        if(!empPayrollData)return;
        const index=empPayrollList
                  .map(empData=>empData._name)
                  .indexOf(empPayrollData._name);
                  empPayrollList.splice(index,1);
                  localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
                  document.querySelector(".emp-count").innerHTML=empPayrollList.length;

                  createInnerHtml();












                  
    }