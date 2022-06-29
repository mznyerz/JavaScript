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
  ];
// Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
// Для предприятия посчитать сумму всех сотрудников во всех отделах.
    en.find(el =>{
      var sum = Number();
      var otdel = [];
    for (i=0;i<el.departments.length; i++){
      sum = sum +el.departments[i].employees_count
      otdel = otdel+ '\n' + el.departments[i].name +'—'+ el.departments[i].employees_count 
      if (sum == 0){
        sum = 'Люди отсутствуют'
        otdel = '\nОтделы пустуют'
      }
    }
    console.log('Всего человек в', el.name,'-', sum, '\nСостоит из:', otdel)
  })

