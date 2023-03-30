<template>
 <div class="about-project custom-section metal">
   <div class="container">
     <div class="about-project__content">
       <h1 class="custom-section__title">О проекте</h1>
       <div class="cms-block-stub">
         UCAD.T «Ural creative association of developers» - молодая и проактивная команда разработчиков с Урала (это где-то в России). Мы живем в одном городе и работаем вместе более трех лет. За это время мы научились понимать друг друга без слов, взаимодействовать в условиях agile и находить неочевидные решения, что позволяет дать точную оценку проекту и соответствовать таймингам. Отдыхаем мы также вместе, разделяя увлечения друг друга, среди которых тренажерный зал и боулинг. Нам нравится работа в команде, нам нравится процесс разработки, и нам очень нравится видеть результат своих усилий (UCAD хороший️). Именно в этом направлении мы растем и развиваемся!
       </div>
     </div>
   </div>

   <div class="about-project__image">
     <img src="~/assets/jpg/about-project/image.jpeg"/>
   </div>
 </div>
</template>

<script>
export default {
  name: "AboutProject"
}
</script>

<style lang="scss" scoped>
.about-project {
  padding-top: 240px;
  padding-bottom: 100px;
  box-sizing: border-box;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90.55deg, #161616 51.84%, rgba(22, 22, 22, 0.84787) 64.39%, rgba(22, 22, 22, 0) 86.99%);
  }
}
.about-project__content {
  max-width: 670px;

  .cms-block-stub {
    font-weight: 500;
  }
}
.about-project__image {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  z-index: -2;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
