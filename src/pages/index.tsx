import Head from 'next/head';
import Image from 'next/image';

import styles from './homePage.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homePage}>
        <section className={styles.mainSection}>
          <div className={styles.mainText}>
            <h1 className={styles.title}>Львів</h1>
            <h2 className={styles.subtitle}>
              Місто, де Історія Живе у Кожному Камінці!
            </h2>
          </div>
        </section>

        <section>
          <h2 className={styles.subtitleArchItems}>
            Топ 5 архітектурних пам&apos;яток Львова, які варто відвідати
          </h2>

          <div className={styles.architecturalItems}>
            <div className={styles.architecturalItem}>
              <div className={styles.architecturalDesc}>
                <p>
                  <b>Величний храм у Львові – собор святого Юра</b> – це не
                  тільки один з найгарніших храмів нашого міста, а й одна з
                  найцікавіших архітектурних пам’яток. Це – монументальний
                  архітектурний ансамбль з виразними національними рисами, який
                  тривалий час вважався головною святинею українських
                  греко-католиків. Так було аж до появи в столиці Патріаршого
                  собору Воскресіння Христового, однак велич храму і далі
                  зберігає святість особливого місця.
                </p>
                <p>
                  Цей храм – це пам’ятка архітектури ЮНЕСКО (з 1998 року),
                  унікальний собор, який прикрашають скульптурні витвори знаних
                  міських скульпторів. А все починалося тільки з заселеної ще в
                  13 столітті печери, де, за легендами, оселився чернець, який
                  усамітнився тут і в постійних молитвах спокутував свої земні
                  гріхи…
                </p>
              </div>
              <div className={styles.architecturalImage}>
                <Image
                  src="https://lviv-future.com.ua/wp-content/uploads/sites/12/2020/06/2_28.jpg"
                  alt="Собор святого Юра"
                  fill
                  sizes="(min-width: 1360px) 600px, (min-width: 1000px) calc(38.24vw + 88px), (min-width: 680px) 600px, calc(94.44vw - 23px)"
                />
              </div>
            </div>

            <div className={styles.architecturalItem}>
              <div className={styles.architecturalImage}>
                <Image
                  src="https://lviv-future.com.ua/wp-content/uploads/sites/12/2020/06/3_24.jpg"
                  alt="Церква святого Андрія"
                  fill
                  sizes="(min-width: 1360px) 600px, (min-width: 1000px) calc(38.24vw + 88px), (min-width: 680px) 600px, calc(94.44vw - 23px)"
                />
              </div>
              <div className={styles.architecturalDesc}>
                <p>
                  <b>
                    Ще одна архітектурна пам’ятка нашого міста – це церква
                    святого Андрія
                  </b>
                  , храм, який більше знаний для львів’ян як Костел та монастир
                  бернандинів. Це – греко-католицька культова споруда,
                  історико-архітектурна пам’ятка, розташована в центральній
                  частині Львова, на площі Соборній, 3-А.
                </p>
                <p>
                  Храм можна назвати без сумніву одним із найстаріших храмів
                  нашого міста. Історія унікальної сьогодні архітектурної
                  пам’ятки бере початок ще з 15-го століття, коли на місці
                  сучасного комплексу було зведено дерев’яний бернандинський
                  костел – перший у Львові. Та перший монастир згорів, друга
                  реконструкція храму також пройшла даремно, і вже втретє
                  комплекс відбудували за проєктом Павла Римлянина. Тривалий час
                  храм виконував оборонну функцію – важливу на ті неспокійні
                  часи. Звідси – масивні стіни, стійкі до будь-чого.
                </p>
                <p>
                  Мальовничий храм є справжньою окрасою центральної частини
                  міста, приваблює численних туристів з різних куточків Європи.
                </p>
              </div>
            </div>

            <div className={styles.architecturalItem}>
              <div className={styles.architecturalDesc}>
                <p>
                  <b>Домініканський собор</b> – це найбільший бароковий храм на
                  території нашого міста, монументальна архітектурна пам’ятка
                  християнської архітектури. Будували його з цегли та каменю в
                  середині 18 століття на місці колишнього готичного храму.
                </p>
                <p>
                  Домініканський собор має тривалу історію. Тривалий час тут
                  були склади за радянської влади, згодом в стінах унікальної
                  архітектурної пам’ятки відкрили музей релігії та атеїзму.
                </p>
                <p>
                  Чималий інтерес у львів’ян та гостей нашого міста викликають
                  підземелля Домініканського собору, які сьогодні оповиті
                  загадковими легендами.
                </p>
                <p>
                  Сьогодні Домініканський собор відкритий для всіх охочих, які
                  прагнуть нових знань і вражень. Тільки тут на території
                  України можна споглядати роботу легендарного скульптора
                  Бертеля Торвальдсена у вигляді надгробка графині Дунін –
                  справді унікальне видовище, яке заслуговує на увагу львів’ян.
                </p>
              </div>
              <div className={styles.architecturalImage}>
                <Image
                  src="https://lviv-future.com.ua/wp-content/uploads/sites/12/2020/06/4_16.jpg"
                  alt="Домініканський собор"
                  fill
                  sizes="(min-width: 1360px) 600px, (min-width: 1000px) calc(38.24vw + 88px), (min-width: 680px) 600px, calc(94.44vw - 23px)"
                />
              </div>
            </div>

            <div className={styles.architecturalItem}>
              <div className={styles.architecturalImage}>
                <Image
                  src="https://lviv-future.com.ua/wp-content/uploads/sites/12/2020/06/5_12.jpg"
                  alt="Церква святих Ольги і Єлизавети"
                  fill
                  sizes="(min-width: 1360px) 600px, (min-width: 1000px) calc(38.24vw + 88px), (min-width: 680px) 600px, calc(94.44vw - 23px)"
                />
              </div>
              <div className={styles.architecturalDesc}>
                <p>
                  <b>Церква святих Ольги і Єлизавети у Львові</b> – ще одна
                  цікава архітектурна пам’ятка, чинна неоготична церква
                  українських греко-католиків на площі Кропивницького. Храм було
                  зведено в честь знаної історичної особистості – імператриці
                  Єлизавети Баварської, яка була дружиною цісаря Астро-Угорщини
                  Франца-Йосифа І.
                </p>
                <p>
                  Цікавий факт: храм не тільки один із найвеличніших у Львові,
                  він ще й – найвищий, адже висота будівлі складає 88 метрів.
                </p>
                <p>
                  Славетний храм було зведено до 1911 року, а проєктував споруду
                  знаний архітектор Теодор-Мар’ян Тальовський. Спершу в
                  засновників храму була мета зробити так, щоб римо-католицький
                  храм святої Єлизавети має заступити своїми могутніми стінами
                  вид на греко-католицький собор святого Юра, якщо спостерігати
                  за спорудою з залізничного вокзалу.
                </p>
                <p>
                  Греко-католицькій громаді Львова храм передали тільки на
                  початку 90-х років. Тоді храм охрестили як церкву святих Ольги
                  та Єлизавети.
                </p>
              </div>
            </div>

            <div className={styles.architecturalItem}>
              <div className={styles.architecturalDesc}>
                <p>
                  <b>Оперний театр в нашому місті</b> – ще одна архітектурна
                  гордість, яку було зведено на початку 20-го століття. Це один
                  з найгарніших оперних театрів Європи, будівля, зведена в стилі
                  неоренесансу.
                </p>
                <p>
                  Тривалий час львівський оперний театр порівнювали з Паризькою
                  та Віденською оперою. Без сумніву, атмосферна споруда,
                  фотографію з якою має кожен львів’янин. Саме тут, під стінами
                  міського оперного театру, відчуваєш всю велич старого міста,
                  тут хочеться поринути в культурне життя цього великого міста.
                  А для архітекторів та істориків ця споруда – справжня
                  знахідка, адже втілює риси різних європейських стилів.
                </p>
              </div>
              <div className={styles.architecturalImage}>
                <Image
                  src="https://lviv-future.com.ua/wp-content/uploads/sites/12/2020/06/6_8.jpg"
                  alt="Оперний театр"
                  fill
                  sizes="(min-width: 1360px) 600px, (min-width: 1000px) calc(38.24vw + 88px), (min-width: 680px) 600px, calc(94.44vw - 23px)"
                />
              </div>
            </div>

            <div className={styles.conclusion}>
              Ось такий чудовий наш Львів – мальовниче місто з численними
              архітектурними пам’ятками, які роблять наше місто особливим і
              привабливим для туристів з різних куточків планети.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
