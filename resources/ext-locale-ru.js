Ext.onReady(function() {
    if (Ext.Date) {
        Ext.Date.monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        Ext.Date.monthNumbers = {
            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
        };
        Ext.Date.dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ' ',
            decimalSeparator: ',',
            currencySign: '₽',
            dateFormat: 'd.m.Y'
        });
    }
});

Ext.define("Ext.locale.ru.view.View", {
    override: "Ext.view.View",
    emptyText: ""
});

Ext.define("Ext.locale.ru.grid.plugin.DragDrop", {
    override: "Ext.grid.plugin.DragDrop",
    dragText: "Выбрано {0} строк(и)"
});

Ext.define("Ext.locale.ru.tab.Tab", {
    override: "Ext.tab.Tab",
    closeText: "Закрыть вкладку"
});

Ext.define("Ext.locale.ru.form.field.Base", {
    override: "Ext.form.field.Base",
    invalidText: "Недопустимое значение"
});

Ext.define("Ext.locale.ru.view.AbstractView", {
    override: "Ext.view.AbstractView",
    loadingText: "Загрузка..."
});

Ext.define("Ext.locale.ru.picker.Date", {
    override: "Ext.picker.Date",
    todayText: "Сегодня",
    minText: "Эта дата раньше минимальной",
    maxText: "Эта дата позже максимальной",
    disabledDaysText: "",
    disabledDatesText: "",
    nextText: 'Следующий месяц (Control+Вправо)',
    prevText: 'Предыдущий месяц (Control+Влево)',
    monthYearText: 'Выберите месяц (Control+Вверх/Вниз для выбора года)',
    todayTip: "{0} (Пробел)",
    format: "d.m.y",
    startDay: 1
});

Ext.define("Ext.locale.ru.picker.Month", {
    override: "Ext.picker.Month",
    okText: "OK",
    cancelText: "Отмена"
});

Ext.define("Ext.locale.ru.toolbar.Paging", {
    override: "Ext.PagingToolbar",
    beforePageText: "Страница",
    afterPageText: "из {0}",
    firstText: "Первая страница",
    prevText: "Предыдущая страница",
    nextText: "Следующая страница",
    lastText: "Последняя страница",
    refreshText: "Обновить",
    displayMsg: "Показано {0} - {1} из {2}",
    emptyMsg: "Нет данных для отображения"
});

Ext.define("Ext.locale.ru.form.field.Text", {
    override: "Ext.form.field.Text",
    minLengthText: "Минимальная длина поля {0}",
    maxLengthText: "Максимальная длина поля {0}",
    blankText: "Это поле обязательно для заполнения",
    regexText: "",
    emptyText: null
});

Ext.define("Ext.locale.ru.form.field.Number", {
    override: "Ext.form.field.Number",
    minText: "Минимальное значение для этого поля: {0}",
    maxText: "Максимальное значение для этого поля: {0}",
    nanText: "{0} не является числом"
});

Ext.define("Ext.locale.ru.form.field.Date", {
    override: "Ext.form.field.Date",
    disabledDaysText: "Недоступно",
    disabledDatesText: "Недоступно",
    minText: "Дата должна быть позже {0}",
    maxText: "Дата должна быть раньше {0}",
    invalidText: "{0} — неверная дата. Ожидается формат {1}",
    format: "d.m.y",
    altFormats: "d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"
});

Ext.define("Ext.locale.ru.form.field.ComboBox", {
    override: "Ext.form.field.ComboBox",
    valueNotFoundText: undefined
}, function() {
    Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
        loadingText: "Загрузка..."
    });
});

Ext.define("Ext.locale.ru.form.field.VTypes", {
    override: "Ext.form.field.VTypes",
    emailText: 'Это поле должно содержать адрес электронной почты в формате "user@example.com"',
    urlText: 'Это поле должно содержать URL в формате "http://www.example.com"',
    alphaText: 'Это поле должно содержать только буквы и символ _',
    alphanumText: 'Это поле должно содержать только буквы, цифры и символ _'
});

Ext.define("Ext.locale.ru.form.field.HtmlEditor", {
    override: "Ext.form.field.HtmlEditor",
    createLinkText: 'Введите адрес ссылки:'
}, function() {
    Ext.apply(Ext.form.field.HtmlEditor.prototype, {
        buttonTips: {
            bold: {
                title: 'Жирный (Ctrl+B)',
                text: 'Применить жирное начертание к выделенному тексту.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            italic: {
                title: 'Курсив (Ctrl+I)',
                text: 'Применить курсив к выделенному тексту.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            underline: {
                title: 'Подчеркнутый (Ctrl+U)',
                text: 'Подчеркнуть выделенный текст.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            increasefontsize: {
                title: 'Увеличить размер',
                text: 'Увеличить размер шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            decreasefontsize: {
                title: 'Уменьшить размер',
                text: 'Уменьшить размер шрифта.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            backcolor: {
                title: 'Цвет фона',
                text: 'Изменить цвет фона выделенного текста.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            forecolor: {
                title: 'Цвет текста',
                text: 'Изменить цвет текста.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyleft: {
                title: 'Выровнять по левому краю',
                text: 'Выровнять текст по левому краю.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifycenter: {
                title: 'По центру',
                text: 'Выровнять текст по центру.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            justifyright: {
                title: 'Выровнять по правому краю',
                text: 'Выровнять текст по правому краю.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertunorderedlist: {
                title: 'Маркированный список',
                text: 'Начать маркированный список.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            insertorderedlist: {
                title: 'Нумерованный список',
                text: 'Начать нумерованный список.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            createlink: {
                title: 'Гиперссылка',
                text: 'Сделать выделенный текст гиперссылкой.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            },
            sourceedit: {
                title: 'Исходный код',
                text: 'Переключиться в режим редактирования исходного кода.',
                cls: Ext.baseCSSPrefix + 'html-editor-tip'
            }
        }
    });
});

Ext.define("Ext.locale.ru.grid.header.Container", {
    override: "Ext.grid.header.Container",
    sortAscText: "Сортировать по возрастанию",
    sortDescText: "Сортировать по убыванию",
    lockText: "Закрепить колонку",
    unlockText: "Открепить колонку",
    columnsText: "Колонки"
});

Ext.define("Ext.locale.ru.grid.PropertyColumnModel", {
    override: "Ext.grid.PropertyColumnModel",
    nameText: "Название",
    valueText: "Значение",
    dateFormat: "d.m.Y"
});

Ext.define("Ext.locale.ru.window.MessageBox", {
    override: "Ext.window.MessageBox",
    buttonText: {
        ok: "OK",
        cancel: "Отмена",
        yes: "Да",
        no: "Нет"
    }
});

Ext.define("Ext.locale.ru.Component", {
    override: "Ext.Component"
});
