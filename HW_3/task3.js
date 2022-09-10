const en = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

//   Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)
en.forEach(el => {
    let otdel = String();
    let sum = Number();
    for (i in el.departments){
      if (el.departments[i].employees_count !== 0){
        sum = sum + el.departments[i].employees_count
        otdel = `${otdel + el.departments[i].name} (${el.departments[i].employees_count}) \n`
        }else if (sum == 0 && el.departments[i].employees_count == 0){
          otdel = `${el.departments[i].name} (нет сотрудников) \n`
          sum = `нет сотрудников`
        } else if (sum > 0 && el.departments[i].employees_count == 0){
          otdel = `${otdel + el.departments[i].name} (нет сотрудников) \n`
        }
    }
    return console.log(`${el.name} (${sum}) \n${otdel}`)
})

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2
//Первый вариант
function getEnterpriseNamez(az){
    for (i in en){
        for (l in en[i].departments){
            if (en[i].departments[l].id == az){
                console.log(en[i].name)
            }
        }
    }}
getEnterpriseNamez(8)
//Второй вариант 
function getEnterpriseNamez1(az){
  en.filter(el => {
    el.departments.filter(item => {
      if(item.id == az){
        return console.log(el.name)
      }
    })
  })
}
getEnterpriseNamez1(6)


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")
function addEnterprise (pred){
    let maxid = Number();
    en.forEach(el => {
        maxid = el.id +1
    })
   en.push({id : maxid , name : pred})
   console.log(en)
}
addEnterprise ('Предприятие 1337')


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
//Первый вариант:
function addDepartment(nom, pre){
  let maxid = Number();
  en.forEach(el => {
    if (el.id == nom){
      el.departments.forEach(item => maxid = item.id+1)
      el.departments.push({id:maxid, name:pre, employees_count : Math.floor(Math.random() * 10)})

}
    console.log(el)})
}
addDepartment(5, "Noname_otdel")
// Второй вариант:
function addDepartment1(nom, pre){
    en.find(el =>{
      let maxid = Number();
      if(el.id == nom){
        el.departments.forEach(item => maxid = item.id+1)
        el.departments.push({id:maxid, name:pre, employees_count:Math.floor(Math.random()* 10)})
      }
      console.log(el)
    })
  }
addDepartment1(5, "Noname_otdel")
  

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

let editEnterprise = function (id, name){
en.forEach(el => {
    if (el.id == id){
    el.name = name
  }
  console.log(el)
})
}
editEnterprise(5, "Новое название предприятия")
// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

let editDepartment = function (id, name){
  en.forEach(el => {
    el.departments.forEach(item =>{
      if(item.id == id){
        item.name = name
      }})
  console.log(el)})
}
editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

// Первый вариант
function deleteEnterprise(del_id){
  let check = en.filter(el => {
      return el.id!==del_id
    })
    return check
  }
  console.log(deleteEnterprise(5))


// Второй вариант
let deleteEnterprise1 = function(del_id){
  en.forEach(el =>{
    if(el.id == del_id){
      delete el['name'] && delete el['id'] && delete el['departments']
    }
  console.log(el)})
}
deleteEnterprise1(5)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

//Первый вариант:
let deleteDepartment = (id_dep) => {
  en.forEach(el => {
    el.departments.forEach(item => {
      if (item.id == id_dep && item.employees_count == 0){
        delete item["id"] &&
        delete item["name"] &&
        delete item["employees_count"]
      }
    })
console.log(el)})
}
deleteDepartment(10)
//Второй вариант:
let deleteDepartment1 = (id_dep) => {  
  for (i in en){
    for (e in en[i].departments){
      if (en[i].departments[e].id == id_dep && en[i].departments[e].employees_count == 0){
        delete en[i].departments[e]
      }
    }
  console.log(en[i])}
}
deleteDepartment1(10)
// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)

function  moveEmployees(id_from, id_where){
  en.forEach(el => {
    let count = Number()
    for (i in el.departments){
      for (k in el.departments){
        if (el.departments[i].id == id_from && el.departments[k].id == id_where){
          count = el.departments[k].employees_count
          el.departments[k].employees_count = 0
          el.departments[i].employees_count = el.departments[i].employees_count + count
        }
      }
    }
  console.log(el.departments)})
}
moveEmployees(2,4)

