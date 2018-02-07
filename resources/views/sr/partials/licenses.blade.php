<div class="columns">
    <div class="column">
        <div class="field">
            <label class="label">Коришћење података</label>
            <p>Изаберите један од начина на који желите да делите своје податке.</p>
            <div class="control">
                <b-tooltip
                    label="Избором ове опције слажете се да делите све податке о
                        налазима врста (осим у случају угрожених врста за чији
                        приказ таксономски експерти одлуче да ограничеприказ)."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="data_license" value="10"{{ $preferences->data_license == 10 ? ' checked' : '' }}>
                        Јавно доступни подаци (<a href="https://creativecommons.org/licenses/by-sa/4.0/">Кријејтив комонс лиценца, ауторство-делити под истим условима</a>)
                    </label>
                </b-tooltip>
                <b-tooltip
                    label="Слично горе наведеној лиценци, али онемогућава комерцијалну употребу
                        података без ваше сагласности. Ваши подаци ће бити доступни за потребе
                        заштите биодиверзитета и израду научних студија."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="data_license" value="20"{{ $preferences->data_license == 20 ? ' checked' : '' }}>
                        Јавно доступни подаци (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Кријејтив комонс лиценца, ауторство-некомерцијално-делити под истим условима</a>)
                    </label>
                </b-tooltip>
                <b-tooltip
                    label="Слично као горе наведене лиценце, само што се подаци јавно приказују
                        у виду квадрата величине 10×10 km. Детаљнији подаци ће бити доступни
                        вама, администраторима веб странице и таксономским експертима."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="data_license" value="30"{{ $preferences->data_license == 30 ? ' checked' : '' }}>
                        Делимично доступни подаци (на нивоу квадрата величине 10x10 km)
                    </label>
                </b-tooltip>
                <b-tooltip
                    label="Не препоручујемо избор ове опције. Само ви, администратори
                        и таксономски експерти ће моћи да виде податке."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="data_license" value="40"{{ $preferences->data_license == 40 ? ' checked' : '' }}>
                        Скривени подаци (подаци се не приказују на мапама)
                    </label>
                </b-tooltip>
            </div>
        </div>
    </div>

    <div class="column">
        <div class="field">
            <label class="label">Коришћење фотографија</label>
            <p>Изаберите један од начина на који желите да делите своје фотографије.</p>
            <div class="control">
                <b-tooltip
                    label="Избором ове опције слажете се да делите све фотографије које
                        пошаљете у базу. Тако послате слике се могу користити и делити
                        уз навођење имена аутора фотографије."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="image_license" value="10"{{ $preferences->image_license == 10 ? ' checked' : '' }}>
                        Јавне фотографије (<a href="https://creativecommons.org/licenses/by-sa/4.0/">Кријејтив комонс лиценца, ауторство-делити под истим условима</a>)
                    </label>
                </b-tooltip>
                <b-tooltip
                    label="Слично горе наведеној лиценци, али онемогућава комерцијалну
                        употребу фотографија без ваше сагласности."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="image_license" value="20"{{ $preferences->image_license == 20 ? ' checked' : '' }}>
                        Јавне фотографије (<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Кријејтив комонс лиценца, ауторство-некомерцијално-делити под истим условима</a>)
                    </label>
                </b-tooltip>
                <b-tooltip
                    label="Избором ове опције слажете се да ваше фотографије буду приказане на
                        веб страници, али не дозвољавате њихову даљу употребу без ваше сагласности.
                        Слике ће добити водени жиг са подацима о лиценци и логом веб странице."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="image_license" value="30"{{ $preferences->image_license == 30 ? ' checked' : '' }}>
                        Фотографије доступне само на овој страници (задржавајући ауторство)
                    </label>
                </b-tooltip>
                <b-tooltip
                    label="Не препоручујемо избор ове опције. Само ви, администратори и
                        таксономски експерти ће моћи да виде фотографије, због чега остали
                        корисници веб странице не могу проверити тачност ваших налаза."
                    multilined>
                    <label class="radio">
                        <input type="radio" name="image_license" value="40"{{ $preferences->image_license == 40 ? ' checked' : '' }}>
                        Скривене фотографије (слике се уопште не приказују у јавном делу)
                    </label>
                </b-tooltip>
            </div>
        </div>
    </div>
</div>
