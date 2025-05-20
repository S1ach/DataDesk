Ext.define('DataDesk.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    pageSize: 20,

    fields: [
        { name: 'ID', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'desc', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'count', type: 'int' }
    ],

    data: [
        { ID: 1, name: 'Ноутбук Acer Aspire', desc: 'Отличный выбор для студентов и повседневных задач.', price: 277, count: 10 },
        { ID: 2, name: 'Ноутбук Lenovo IdeaPad', desc: 'Ультратонкий корпус и высокая автономность для работы на ходу.', price: 141, count: 0 },
        { ID: 3, name: 'Ноутбук HP Pavilion', desc: 'Идеален для просмотра фильмов и интернет-сёрфинга.', price: 59, count: 5 },
        { ID: 4, name: 'Ноутбук Dell Inspiron', desc: 'Надёжный помощник в офисе с классическим дизайном.', price: 286, count: 0 },
        { ID: 5, name: 'Ноутбук ASUS VivoBook', desc: 'Яркий экран и быстрый SSD для комфортной работы.', price: 253, count: 6 },
        { ID: 6, name: 'Ноутбук MSI Modern', desc: 'Компактный и лёгкий – легко брать с собой.', price: 67, count: 3 },
        { ID: 7, name: 'Ноутбук Apple MacBook Air', desc: 'Мгновенный отклик и невероятная плавность работы.', price: 107, count: 8 },
        { ID: 8, name: 'Ноутбук Acer Nitro 5', desc: 'Графика уровня GeForce – идеально для гейминга.', price: 140, count: 5 },
        { ID: 9, name: 'Ноутбук Lenovo Legion', desc: 'Мощный процессор для тяжёлых игр и задач.', price: 226, count: 4 },
        { ID: 10, name: 'Ноутбук HP Envy', desc: 'Стильный металлический корпус и сенсорный экран.', price: 235, count: 13 },
        { ID: 11, name: 'Ноутбук ASUS ROG Strix', desc: 'Настоящая игровая станция с охлаждением высокого уровня.', price: 165, count: 15 },
        { ID: 12, name: 'Ноутбук Dell XPS 13', desc: 'Безрамочный дисплей и ультрапортативный дизайн.', price: 78, count: 2 },
        { ID: 13, name: 'Ноутбук Apple MacBook Pro', desc: 'Для дизайнеров, разработчиков и творческих задач.', price: 201, count: 4 },
        { ID: 14, name: 'Ноутбук Huawei MateBook D', desc: 'Тихая работа, качественный экран и долгий заряд.', price: 202, count: 12 },
        { ID: 15, name: 'Ноутбук Samsung Galaxy Book', desc: 'Современный дизайн с быстрой зарядкой и LTE.', price: 148, count: 4 },
        { ID: 16, name: 'Ноутбук LG Gram', desc: 'Вес меньше 1 кг – один из самых лёгких ноутбуков в мире.', price: 216, count: 0 },
        { ID: 17, name: 'Ноутбук Microsoft Surface Laptop', desc: 'Премиальный корпус и потрясающий тачпад.', price: 195, count: 16 },
        { ID: 18, name: 'Ноутбук ASUS ZenBook', desc: 'Сбалансирован по мощности, весу и автономности.', price: 202, count: 20 },
        { ID: 19, name: 'Ноутбук MSI GF63', desc: 'Доступный игровой ноутбук с современным железом.', price: 215, count: 9 },
        { ID: 20, name: 'Ноутбук Lenovo ThinkPad', desc: 'Легендарная клавиатура и устойчивость к нагрузкам.', price: 67, count: 11 },
        { ID: 21, name: 'Ноутбук HP Omen', desc: 'Высокая частота экрана – для киберспортсменов.', price: 148, count: 13 },
        { ID: 22, name: 'Ноутбук ASUS TUF Gaming', desc: 'Прочный корпус и мощное охлаждение для длительных сессий.', price: 112, count: 6 },
        { ID: 23, name: 'Ноутбук Dell G15', desc: 'Игровой дух и строгий дизайн в одном корпусе.', price: 101, count: 14 },
        { ID: 24, name: 'Ноутбук Acer Swift 3', desc: 'Лёгкий, тихий и быстрый ноутбук для повседневной жизни.', price: 269, count: 0 },
        { ID: 25, name: 'Ноутбук Lenovo Yoga', desc: 'Трансформируется в планшет – удобен для презентаций.', price: 128, count: 10 }
    ],

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json'
        }
    }
});

