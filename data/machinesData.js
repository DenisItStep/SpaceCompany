Game.machinesCategoryData = (function(){

    var instance = {};

    instance.resources = {
        title: 'Ресурсы',
        category: 'resources',
        page: 'machines',
        order: 1, // 1st category item of the machines page
        unlocked: false
    };

    instance.other = {
        title: 'Другое',
        category: 'other',
        page: 'machines',
        order: 2,
        unlocked: false
    };

    return instance;
}());

Game.machinesData = (function(){

	var instance = {};

    instance.energy = {
        title: 'Энергия',
        id: 'energy',
        category: 'resources',
        order: 1, // 1st category item of the machines page
        unlocked: false
    };

    instance.fabricated = {
        title: 'Произведено',
        id: 'fabricated',
        category: 'resources',
        order: 2,
        unlocked: false
    };

    instance.earth = {
        title: 'Земные Ресурсы',
        id: 'earth',
        category: 'resources',
        order: 3,
        unlocked: true
    };

    instance.innerSol = {
        title: 'Ископаемые Ресурсы Планеты',
        id: 'innerSol',
        category: 'resources',
        order: 4,
        unlocked: false
    };

    instance.outerSol = {
        title: 'Внешние Ресурсы Планеты',
        id: 'outerSol',
        category: 'resources',
        order: 5,
        unlocked: false
    };

    instance.science = {
        title: 'Наука',
        id: 'science',
        category: 'other',
        order: 6, // 1st category item on the science page
        unlocked: false
    };

    instance.rocketFuel = {
        title: 'Ракетное Топливо',
        id: 'rocketFuel',
        category: 'other',
        order: 7,
        unlocked: true
    };

	return instance;
}());
