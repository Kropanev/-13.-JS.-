const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Инна",
            "id_4": "Арина",
            "id_5": "Диана",
            "id_6": "Наталья",
            "id_7": "Маня",
            "id_8": "Динара",
            "id_9": "Елена",
            "id_10": "Анна"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артем",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Слесарь",
            "id_3": "Шахтер",
            "id_4": "Сварщик",
            "id_5": "Тракторист",
            "id_6": "Профессор",
            "id_7": "Менеджер",
            "id_8": "Писатель",
            "id_9": "Солдат",
            "id_10": "Музыкант"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Кассир",
            "id_2": "Кондуктор",
            "id_3": "Воспитательница",
            "id_4": "Уборщица",
            "id_5": "Повар",
            "id_6": "Дворник",
            "id_7": "Продавщица",
            "id_8": "Билетерша",
            "id_9": "Швея",
            "id_10": "Учительница"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        
        return this.person.gender == this.GENDER_MALE ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },

    randomMiddleName: function() {
        
        return this.person.gender == this.GENDER_MALE ? this.randomValue(this.middleNameMaleJson) : this.randomValue(this.middleNameFemaleJson);

    },

     randomSurname: function() {

        return this.randomValue(this.surnameJson) + (this.person.gender == this.GENDER_MALE ? '' : 'а');

    },

    randomProfession: function() {
        
        return this.person.gender == this.GENDER_MALE ? this.randomValue(this.professionMaleJson) : this.randomValue(this.professionFemaleJson);

    },

    randomGender: function() {

        return this.randomIntNumber(1, 0) == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomBirthYear: function() {

        return this.randomIntNumber(2021, 1980);

    },

    randomBirthMonth: function() {

        return this.randomIntNumber(0, 11);

    },

    randomBirthDay: function() {

        return this.randomIntNumber(1, new Date(this.person.birthYear, this.person.birthMonth, 0).getDate());

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.birthYear = this.randomBirthYear();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();
        return this.person;
    }
};
