<?php

return [
    'id' => 'ID',
    'actions' => 'Акције',

    'login' => [
        'email' => 'Email',
        'password' => 'Лозинка',
        'forgot_password' => 'Заборавили сте лозинку?',
        'remember_me' => 'Запамти ме',
    ],

    'register' => [
        'first_name' => 'Име',
        'last_name' => 'Презиме',
        'email' => 'Email',
        'password' => 'Лозинка',
        'password_confirmation' => 'Поновите лозинку',
        'verification_code' => 'Верификациони код',
    ],

    'forgot_password' => [
        'email' => 'Email',
    ],

    'reset_password' => [
        'email' => 'E-Mail адреса',
        'password' => 'Лозинка',
        'password_confirmation' => 'Потврдите лозинку',
    ],

    'users' => [
        'first_name' => 'Име',
        'last_name' => 'Презиме',
        'roles' => 'Улоге',
        'curated_taxa' => 'Таксони које уређује',
    ],

    'taxa' => [
        'rank' => 'Таксономска категорија',
        'name' => 'Назив',
        'parent' => 'Родитељски таксон',
        'native_name' => 'Народни назив',
        'description' => 'Опис',
        'fe_old_id' => '(стара) FaunaEuropea ID',
        'fe_id' => 'FaunaEuropea ID',
        'restricted' => 'Да ли су подаци ограничени',
        'allochthonous' => 'Да ли је алохтон?',
        'invasive' => 'Да ли је инвазиван?',
        'stages' => 'Stadijumi',
        'conservation_lists' => 'Konservacione liste',
        'red_lists' => 'Crvene liste',
        'add_red_list' => 'Dodaj crvenu listu',
    ],

    'field_observations' => [
        'taxon' => 'Таксон',
        'date' => 'Датум',
        'year' => 'Година',
        'month' => 'Месец',
        'day' => 'Дан',
        'photos' => 'Фотографије',
        'upload' => 'Отпреми',
        'map' => 'Мапа',
        'latitude' => 'Географска ширина',
        'longitude' => 'Географска дужина',
        'accuracy_m' => 'Прецизност/Пречник (m)',
        'accuracy' => 'Прецизност',
        'elevation_m' => 'Надморска висина (m)',
        'elevation' => 'Надморска висина',
        'location' => 'Локација',
        'details' => 'Детаљи',
        'more_details' => 'Више детаља',
        'note' => 'Белешка',
        'number' => 'Број',
        'sex' => 'Пол',
        'stage' => 'Стадијум',
        'time' => 'Време',
        'observer' => 'Уочио',
        'identifier' => 'Идентификовао',
        'found_dead' => 'Јединка нађена мртва?',
        'found_dead_note' => 'Белешке о мртвој јединки',
        'data_license' => 'Лиценца податка',
        'image_license' => 'Лиценца слика',
        'default' => 'Подразумевано',
        'choose_a_stage' => 'Одаберите стадијум',
        'choose_a_value' => 'Одаберите вредност',
        'click_to_select' => 'Кликнитекако бисте одабрали...',
        'status' => 'Статус',
    ],
];
