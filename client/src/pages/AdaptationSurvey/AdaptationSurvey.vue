<template>
    <div>
        <Navbar></Navbar>
        <div class="container mx-auto px-5 p-16 mb-10">
            <div class="w-full relative">
                <div class="ellipse ellipse-blue"></div>
                <div class="relative z-10">
                    <h1 class="text-[42px] font-bold">Анкета адаптации сотрудника</h1>
                    <p class="text-[21px] text-[#F5F5F5] leading-6 mt-5 mb-16">Уважаемый сотрудник! <br> <br> Предлагаем Вам принять участие в исследовании процесса адаптации работников. <br> <br> Ваши ответы будут учитываться при выявлении наиболее важных проблем, с которыми сталкивается человек на новом месте работы, и для разработки программы помощи адаптирующимся. <br> <br> Мы надеемся, что, искренне отвечая на вопросы этой анкеты, выявляя моменты, на которые руководству и отделу работы с персоналом следует обратить внимание, Вы поможете быстрее освоиться в организации не только себе, но и будущим новичкам.</p>
                </div>
                <div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-5">1. Как долго продолжается Ваше освоение в условиях нового места работы?</h1>
                        <div class="grid grid-cols-4 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.first.select === 'До 1 месяца'}" @click="userForm.first.select = 'До 1 месяца'">До 1 месяца</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.first.select === 'До 2 месяцев'}" @click="userForm.first.select = 'До 2 месяцев'">До 2 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.first.select === 'До 3 месяцев'}" @click="userForm.first.select = 'До 3 месяцев'">До 3 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.first.select === 'Еще не закончено'}" @click="userForm.first.select = 'Еще не закончено'">Еще не закончено</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-5">2. Что Вам показалось наиболее сложным в течение этого периода?</h1>
                        <div class="grid grid-cols-3 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.second.select === 'Профессиональные  обязанности'}" @click="userForm.second.select = 'Профессиональные  обязанности'">Профессиональные  обязанности</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.second.select === 'Вхождение в коллектив'}" @click="userForm.second.select = 'Вхождение в коллектив'">Вхождение в коллектив</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.second.select === 'Условия труда'}" @click="userForm.second.select = 'Условия труда'">Условия труда</div>
                        </div>
                        <div class="mt-5">
                            <h1 class="text-2xl mb-5">Другое:</h1>
                            <div>
                                <textarea 
                                    v-model="userForm.second.text" 
                                    type="text" 
                                    id="secondText"
                                    class="scroll-none text-white font-base bg-transparent border text-[1.25rem] rounded-3xl outline-none resize-none block w-full h-16 px-6 pb-4 py-4" 
                                    :class="{'empty-area' : !userForm.second.text.length}" 
                                    style="min-height: 125px;"
                                    @keydown="flexibleScroll('second')"
                                    autocomplete="off" 
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">3. Как Вы думаете, почему это для Вас оказалось трудным?</h1>
                        <div class="mt-5">
                            <div>
                                <textarea 
                                    v-model="userForm.third.text" 
                                    type="text" 
                                    id="thirdText"
                                    class="scroll-none text-white font-base bg-transparent border text-[1.25rem] rounded-3xl outline-none resize-none block w-full h-16 px-6 pb-4 py-4" 
                                    :class="{'empty-area' : !userForm.third.text.length}" 
                                    style="min-height: 125px;"
                                    @keydown="flexibleScroll('third')"
                                    autocomplete="off" 
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">4. Вы решили возникшие проблемы? Если да, то как? Если нет, то почему?</h1>
                        <div class="mt-5">
                            <div>
                                <textarea 
                                    v-model="userForm.fourth.text" 
                                    type="text" 
                                    id="fourthText"
                                    class="scroll-none text-white font-base bg-transparent border text-[1.25rem] rounded-3xl outline-none resize-none block w-full h-16 px-6 pb-4 py-4" 
                                    :class="{'empty-area' : !userForm.fourth.text.length}" 
                                    style="min-height: 125px;"
                                    @keydown="flexibleScroll('fourth')"
                                    autocomplete="off" 
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">5. В каких случаях (когда) возникали сложные ситуации наиболее часто?</h1>
                        <div class="mt-5">
                            <div>
                                <textarea 
                                    v-model="userForm.fifth.text" 
                                    type="text" 
                                    id="fifthText"
                                    class="scroll-none text-white font-base bg-transparent border text-[1.25rem] rounded-3xl outline-none resize-none block w-full h-16 px-6 pb-4 py-4" 
                                    :class="{'empty-area' : !userForm.fifth.text.length}" 
                                    style="min-height: 125px;"
                                    @keydown="flexibleScroll('fifth')"
                                    autocomplete="off" 
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">6. Как долго Вам нужна была в работе помощь коллег?</h1>
                        <div class="grid grid-cols-4 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.sixth.select === 'До 1 месяца'}" @click="userForm.sixth.select = 'До 1 месяца'">До 1 месяца</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.sixth.select === 'До 2 месяцев'}" @click="userForm.sixth.select = 'До 2 месяцев'">До 2 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.sixth.select === 'До 3 месяцев'}" @click="userForm.sixth.select = 'До 3 месяцев'">До 3 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.sixth.select === 'Еще не закончено'}" @click="userForm.sixth.select = 'Еще не закончено'">Еще не закончено</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">7. В какой период своей деятельности Вы почувствовали, что овладели профессиональными навыками?</h1>
                        <div class="grid grid-cols-4 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.seventh.select === 'До 1 месяца'}" @click="userForm.seventh.select = 'До 1 месяца'">До 1 месяца</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.seventh.select === 'До 2 месяцев'}" @click="userForm.seventh.select = 'До 2 месяцев'">До 2 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.seventh.select === 'До 3 месяцев'}" @click="userForm.seventh.select = 'До 3 месяцев'">До 3 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.seventh.select === 'Еще не закончено'}" @click="userForm.seventh.select = 'Еще не закончено'">Еще не закончено</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">8. Что, как Вам кажется, особенно помогло бы Вам в период адаптации?</h1>
                        <div class="mt-5">
                            <div>
                                <textarea 
                                    v-model="userForm.eighth.text" 
                                    type="text" 
                                    id="eighthText"
                                    class="scroll-none text-white font-base bg-transparent border text-[1.25rem] rounded-3xl outline-none resize-none block w-full h-16 px-6 pb-4 py-4" 
                                    :class="{'empty-area' : !userForm.eighth.text.length}" 
                                    style="min-height: 125px;"
                                    @keydown="flexibleScroll('eighth')"
                                    autocomplete="off" 
                                    placeholder="Lorem ipsum dolor sit amet consectetur. Vestibulum ut mauris turpis sit sed semper. Pellentesque auctor massa diam a arcu in eu eget tincidunt. Eu ultrices arcu eget aenean quam vel felis non blandit. Ornare nunc morbi magna morbi dolor." 
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mb-[4.25rem]">
                        <h1 class="text-[26px] font-semibold mb-4">9. Бывают ли у Вас конфликты?</h1>
                        <div class="mb-5">
                            <h1 class="text-[22px] mb-3">С руководителем</h1>
                            <div class="grid grid-cols-3 gap-5 h-16">
                                <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.ninth.select1 === 'Не бывают'}" @click="userForm.ninth.select1 = 'Не бывают'">Не бывают</div>
                                <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.ninth.select1 === 'Редко'}" @click="userForm.ninth.select1 = 'Редко'">Редко</div>
                                <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.ninth.select1 === 'Время от времени'}" @click="userForm.ninth.select1 = 'Время от времени'">Время от времени</div>
                            </div>
                        </div>
                        <div class="mb-14">
                            <h1 class="text-[22px] mb-3">С кем-либо из коллег</h1>
                            <div class="grid grid-cols-3 gap-5 h-16">
                                <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.ninth.select2 === 'Не бывают'}" @click="userForm.ninth.select2 = 'Не бывают'">Не бывают</div>
                                <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.ninth.select2 === 'Редко'}" @click="userForm.ninth.select2 = 'Редко'">Редко</div>
                                <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.ninth.select2 === 'Время от времени'}" @click="userForm.ninth.select2 = 'Время от времени'">Время от времени</div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">10. Оцените, пожалуйста, Ваш интерес к дальнейшему продвижению внутри компании, профессиональному росту</h1>
                        <div class="grid grid-cols-4 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.tenth.select === 'До 1 месяца'}" @click="userForm.tenth.select = 'До 1 месяца'">До 1 месяца</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.tenth.select === 'До 2 месяцев'}" @click="userForm.tenth.select = 'До 2 месяцев'">До 2 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.tenth.select === 'До 3 месяцев'}" @click="userForm.tenth.select = 'До 3 месяцев'">До 3 месяцев</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.tenth.select === 'Еще не закончено'}" @click="userForm.tenth.select = 'Еще не закончено'">Еще не закончено</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] font-semibold mb-3">11. В какой мере Вы удовлетворены следующими факторами в нашей организации?</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select1 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select1 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select1 === 'Не удовлетворен'}" @click="userForm.eleventh.select1 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select1 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select1 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select1 === 'Удовлетворен'}" @click="userForm.eleventh.select1 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select1 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select1 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Содержание труда</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select2 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select2 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select2 === 'Не удовлетворен'}" @click="userForm.eleventh.select2 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select2 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select2 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select2 === 'Удовлетворен'}" @click="userForm.eleventh.select2 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select2 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select2 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Занимаемая должность</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select3 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select3 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select3 === 'Не удовлетворен'}" @click="userForm.eleventh.select3 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select3 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select3 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select3 === 'Удовлетворен'}" @click="userForm.eleventh.select3 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select3 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select3 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Соответствие работы специальности</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select4 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select4 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select4 === 'Не удовлетворен'}" @click="userForm.eleventh.select4 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select4 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select4 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select4 === 'Удовлетворен'}" @click="userForm.eleventh.select4 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select4 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select4 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Соответствие квалификации работе</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select5 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select5 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select5 === 'Не удовлетворен'}" @click="userForm.eleventh.select5 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select5 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select5 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select5 === 'Удовлетворен'}" @click="userForm.eleventh.select5 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select5 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select5 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Соответствие характера работы моим способностям и склонностям</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select6 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select6 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select6 === 'Не удовлетворен'}" @click="userForm.eleventh.select6 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select6 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select6 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select6 === 'Удовлетворен'}" @click="userForm.eleventh.select6 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select6 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select6 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Наличие перспектив должностного продвижения</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select7 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select7 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select7 === 'Не удовлетворен'}" @click="userForm.eleventh.select7 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select7 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select7 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select7 === 'Удовлетворен'}" @click="userForm.eleventh.select7 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select7 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select7 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Возможность повышения квалификации</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select8 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select8 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select8 === 'Не удовлетворен'}" @click="userForm.eleventh.select8 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select8 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select8 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select8 === 'Удовлетворен'}" @click="userForm.eleventh.select8 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select8 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select8 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Наличие высокой степени ответственности за результат труда</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select9 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select9 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select9 === 'Не удовлетворен'}" @click="userForm.eleventh.select9 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select9 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select9 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select9 === 'Удовлетворен'}" @click="userForm.eleventh.select9 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select9 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select9 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Информированность о делах коллектива и компании</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select10 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select10 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select10 === 'Не удовлетворен'}" @click="userForm.eleventh.select10 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select10 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select10 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select10 === 'Удовлетворен'}" @click="userForm.eleventh.select10 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select10 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select10 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Бытовые условия труда</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select11 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select11 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select11 === 'Не удовлетворен'}" @click="userForm.eleventh.select11 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select11 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select11 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select11 === 'Удовлетворен'}" @click="userForm.eleventh.select11 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select11 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select11 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Организация труда</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select12 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select12 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select12 === 'Не удовлетворен'}" @click="userForm.eleventh.select12 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select12 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select12 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select12 === 'Удовлетворен'}" @click="userForm.eleventh.select12 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select12 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select12 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Режим работы</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select13 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select13 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select13 === 'Не удовлетворен'}" @click="userForm.eleventh.select13 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select13 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select13 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select13 === 'Удовлетворен'}" @click="userForm.eleventh.select13 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select13 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select13 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Зарплата</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select14 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select14 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select14 === 'Не удовлетворен'}" @click="userForm.eleventh.select14 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select14 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select14 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select14 === 'Удовлетворен'}" @click="userForm.eleventh.select14 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select14 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select14 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Помощь и поддержка руководителя</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select15 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select15 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select15 === 'Не удовлетворен'}" @click="userForm.eleventh.select15 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select15 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select15 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select15 === 'Удовлетворен'}" @click="userForm.eleventh.select15 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select15 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select15 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-14">
                        <h1 class="text-[26px] mb-3">Отношения с непосредственным руководителем</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select16 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select16 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select16 === 'Не удовлетворен'}" @click="userForm.eleventh.select16 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select16 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select16 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select16 === 'Удовлетворен'}" @click="userForm.eleventh.select16 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select16 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select16 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div class="mb-24">
                        <h1 class="text-[26px] mb-3">Отношения с коллегами</h1>
                        <div class="grid grid-cols-5 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select17 === 'Совершенно не удовлетворен'}" @click="userForm.eleventh.select17 = 'Совершенно не удовлетворен'">Совершенно не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select17 === 'Не удовлетворен'}" @click="userForm.eleventh.select17 = 'Не удовлетворен'">Не удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select17 === 'Затрудняюсь ответить'}" @click="userForm.eleventh.select17 = 'Затрудняюсь ответить'">Затрудняюсь ответить</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select17 === 'Удовлетворен'}" @click="userForm.eleventh.select17 = 'Удовлетворен'">Удовлетворен</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100 text-center" :class="{'bg-white text-black opacity-max font-semibold' : userForm.eleventh.select17 === 'Совершенно удовлетворен'}" @click="userForm.eleventh.select17 = 'Совершенно удовлетворен'">Совершенно удовлетворен</div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-[26px] font-semibold mb-5">12. Часто ли Вам приходилось менять место работы в последние два года?</h1>
                        <div class="grid grid-cols-4 gap-5 h-16">
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.twelfth.select === 'Ни разу'}" @click="userForm.twelfth.select = 'Ни разу'">Ни разу</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.twelfth.select === '1–2 раза'}" @click="userForm.twelfth.select = '1–2 раза'">1–2 раза</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.twelfth.select === '3–4 раза'}" @click="userForm.twelfth.select = '3–4 раза'">3–4 раза</div>
                            <div class="flex items-center justify-center bg-transparent border border-solid border-white rounded-[15px] outline-none w-full px-5 py-5 opacity-60 cursor-pointer transition-all hover:opacity-100" :class="{'bg-white text-black opacity-max font-semibold' : userForm.twelfth.select === 'Более 5 раз'}" @click="userForm.twelfth.select = 'Более 5 раз'">Более 5 раз</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-center mt-16">
                    <h3 class="text-[32px] font-bold">Спасибо за прохождение анкеты!</h3>
                    <button class="text-lg bg-blue-dark hover:bg-blue-darker px-16 py-2 mt-6 rounded-2xl" @click="saveReplies">Сохранить ответы</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../../components/layout/Navbar/Navbar.vue';
import Footer from '../../components/layout/Footer/Footer.vue';

export default {
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            userForm: {
                first: {
                    select: ''
                },
                second: {
                    select: '',
                    text: ''
                },
                third: {
                    text: ''
                },
                fourth: {
                    text: ''
                },
                fifth: {
                    text: ''
                },
                sixth: {
                    select: ''
                },
                seventh: {
                    select: ''
                },
                eighth: {
                    text: ''
                },
                ninth: {
                    select1: '',
                    select2: ''
                },
                tenth: {
                    select: '',
                },
                eleventh: {
                    select1: '',
                    select2: '',
                    select3: '',
                    select4: '',
                    select5: '',
                    select6: '',
                    select7: '',
                    select8: '',
                    select9: '',
                    select10: '',
                    select11: '',
                    select12: '',
                    select13: '',
                    select14: '',
                    select15: '',
                    select16: '',
                    select17: '',
                    select19: '',
                    select19: '',
                },
                twelfth: {
                    select: ''
                }
            }
        }
    },
    methods: {
        flexibleScroll(num) {
            console.log(num);
            switch (num) {
                case 'second':
                    secondText.style.height = (secondText.scrollHeight + 2) + 'px'
                    break
                case 'third':
                    thirdText.style.height = (thirdText.scrollHeight + 2) + 'px'
                    break
                case 'fourth':
                    fourthText.style.height = (fourthText.scrollHeight + 2) + 'px'
                    break
                case 'fifth':
                    fifthText.style.height = (fifthText.scrollHeight + 2) + 'px'
                    break
                case 'eighth':
                    eighthText.style.height = (eighthText.scrollHeight + 2) + 'px'
                    break
                default: 
                    console.log(num);
            }
        },
        saveReplies() {
            alert('saving replies...')
        }
    }
}
</script>

<style lang="scss" scoped>
.empty-area {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 87.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 300 !important;
}

textarea {
    &::-webkit-scrollbar {
        display: none;
    }
}

.opacity-max {
    opacity: 1 !important;
}

.ellipse{
    position: absolute;

    &-blue {
        width: 320px;
        height: 300px;
        
        background: #169DFF;
        opacity: 0.3;
        filter: blur(159.0px);
        top: 3rem;
        left: -5rem;
    }
}
</style>