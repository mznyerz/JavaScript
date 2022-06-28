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
    var total1 = Number();
    var total2 = Number();
    var total3 = Number();
  var [first, second, third] = en;
  for (i=0;i<first.departments.length;i++){
    total1 = total1 + first.departments[i].employees_count
    console.log('В первом предприятии существуют отделы с кол-ом сотрудников: ',first.departments[i].name, first.departments[i].employees_count)
  }

  for (i=0;i<second.departments.length;i++){
    total2 = total2 + second.departments[i].employees_count
    console.log('Во втором предприятии существуют отделы с кол-ом сотрудников: ', second.departments[i].name, second.departments[i].employees_count)
  }
  for (i=0;i<third.departments.length;i++){
    total3 = total3 + third.departments[i].employees_count
    console.log('В третьем предприятии существуют отделы с кол-ом сотрудников: ', third.departments[i].name, third.departments[i].employees_count)
  }

  console.log('Всего сотрудников в первом предприятии:', total1,
  'Всего сотрудников во втором предприятии:', total2,
  'Всего сотрудников в третьем предприятии:', total3 )
