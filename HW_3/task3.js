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
  for (i in el.departments) {
    if (el.departments[i].employees_count !== 0) {
      sum = sum + el.departments[i].employees_count
      otdel = `${otdel + el.departments[i].name} (${el.departments[i].employees_count}) \n`
    } else if (sum == 0 && el.departments[i].employees_count == 0) {
      otdel = `${el.departments[i].name} (нет сотрудников) \n`
      sum = `нет сотрудников`
    } else if (sum > 0 && el.departments[i].employees_count == 0) {
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
function getEnterpriseNamez1(arr, id) {
  let r = JSON.parse(JSON.stringify(arr)).filter(el => el.departments.find(item => item.id == id))
  return r.map(el => el.name).toString()
}
console.log(getEnterpriseNamez1(en, 4))

//Второй вариант:
function getEnterpriseNamez(arr, id) {
  let r = JSON.parse(JSON.stringify(arr))
  for (i in r) {
    for (l in r[i].departments) {
      if (r[i].departments[l].id == id) {
        return r[i].name
      }
    }
  }
}
console.log(getEnterpriseNamez(en, 8))


// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")
function addEnterprise(arr, pred) {
  let maxid = Number();
  let r = JSON.parse(JSON.stringify(arr))
  r.forEach(el => {
    maxid = el.id + 1
  })
  r.push({ id: maxid, name: pred, departments: [] })
  return r
}
console.log(addEnterprise(en, 'Предприятие 1337'))


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

function addDepartment(arr, nom, pre) {
  let enterprise = JSON.parse(JSON.stringify(arr))
  let maxid = Number();
  enterprise.forEach(el => {
    if (el.id == nom) {
      el.departments.forEach(item => maxid = item.id + 1)
      el.departments.push({ id: maxid, name: pre, employees_count: Math.floor(Math.random() * 10) })
    }
  })
  return enterprise
}
console.log(addDepartment(en, 1, "Noname_otdel"))




// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

let editEnterprise = function (arr, id, name) {
  let r = JSON.parse(JSON.stringify(arr))
  r.forEach(el => {
    if (el.id == id) {
      el.name = name
    }
  })
  return r
}
console.log(editEnterprise(en, 5, "Новое название предприятия"))

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
let editDepartment = function (arr, id, name) {
  let r = JSON.parse(JSON.stringify(arr))
  r.forEach(el => {
    el.departments.forEach(item => {
      if (item.id == id) {
        item.name = name
      }
    })
  })
  return r
}
console.log(editDepartment(en, 2, "Новое название отдела"))

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

function deleteEnterprise(arr, del_id) {
  let result = JSON.parse(JSON.stringify(arr))
  return result.filter(el => el.id !== del_id)

}
console.log(deleteEnterprise(en, 5))


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

let deleteDepartment1 = (arr, id_dep) => {
  let r = JSON.parse(JSON.stringify(arr))
  for (i in r) {
    for (e in r[i].departments) {
      if (r[i].departments[e].id == id_dep && r[i].departments[e].employees_count == 0) {
        delete r[i].departments[e]
      }
    }
  }
  return r
}
console.log(deleteDepartment1(en, 10))
// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)

function moveEmployees(arr, id_from, id_where) {
  let r = JSON.parse(JSON.stringify(arr))
  r.forEach(el => {
    let count = Number()
    for (i in el.departments) {
      for (k in el.departments) {
        if (el.departments[i].id == id_from && el.departments[k].id == id_where) {
          count = el.departments[k].employees_count
          el.departments[k].employees_count = 0
          el.departments[i].employees_count = el.departments[i].employees_count + count
        }
      }
    }
  })
  return r
}
console.log(moveEmployees(en, 2, 4))
