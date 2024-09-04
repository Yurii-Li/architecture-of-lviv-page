import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.architectural_landmarks.deleteMany();
  await prisma.categories.deleteMany();

  await prisma.categories.createMany({
    data: [
      {
        name: 'temples'
      },
      {
        name: 'defense_structures'
      },
      {
        name: 'museums'
      },
      {
        name: 'parks'
      },
      {
        name: 'monuments'
      },
      {
        name: 'theatres'
      }
    ]
  });

  const categories = await prisma.categories.findMany();

  const temples =
    categories.find(category => category.name === 'temples')?.id || 1;
  const defenseStructures =
    categories.find(category => category.name === 'defense_structures')?.id ||
    1;
  const museums =
    categories.find(category => category.name === 'museums')?.id || 1;
  const parks = categories.find(category => category.name === 'parks')?.id || 1;
  const monuments =
    categories.find(category => category.name === 'monuments')?.id || 1;
  const theatres =
    categories.find(category => category.name === 'theatres')?.id || 1;

  // Храми
  await prisma.architectural_landmarks.createMany({
    data: [
      {
        name: 'Латинський кафедральний собор',
        description:
          'Латинський кафедральний собор - головний храм римо-католицької церкви у Львові. Офіційна назва - Митрополича базиліка Успіння Пресвято́ї Ді́ви Марі́ї Львівської архідієцезії.\n' +
          '\n' +
          'Будувався та перебудовувався львівськими містобудівниками протягом 400 років. Перший камінь заклав польський король Казимир Великий у 1360 році. Після реставрації 1760-1778 років готичні форми поступилися модним тоді бароковим.\n' +
          '\n' +
          'В катедральному соборі була ікона Матері Божої Милостивої ("Прекрасна зірка міста Львова"), оригінал якої зараз зберігається у краківському Вавелі. ЇЇ точну копію було виготовлено для Львова і в 2001 році папа Іван-Павло II її коронував.\n' +
          '\n' +
          'Зберігся головний орган, вітражі Яна Матейка та інше. У східній стіні видніються ядра, що нагадують про турецьку облогу 1672 року, а також снаряд, що залишився з часів українсько-польської війни 1918-1919 років.\n' +
          '\n' +
          'Наприкінці XVIII сторіччя навколо костелу розташовувався цвинтар з численними каплицями, з яких збереглися лише найцінніші: каплиця Боїмів (1609-1615 роки) та каплиця Кампіанів (1619 роки).\n' +
          '\n' +
          'Латинський катедральний собор є Санктуарієм Матері Божої Милостивої і Божого Милосердя.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/6.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/9.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/10.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/11.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Latin-Cathedral/12.png'
        ],
        location: 'площа Катедральна, 1',
        date_of_foundation: '1360-1493 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.357429677264!2d24.0305101!3d49.8407785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adda91dbdfdf9%3A0x1c11956e83fa3219!2z0JvQsNGC0LjQvdGB0YzQutC40Lkg0LrQsNGC0LXQtNGA0LDQu9GM0L3QuNC5INGB0L7QsdC-0YA!5e0!3m2!1suk!2sua!4v1697301671268!5m2!1suk!2sua',
        online_tour_link: '//latin-cathedral-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Церква Святого Архистратига Михаїла (Костел кармелітів босих)',
        description:
          'Церква Святого Архистратига Михаїла у Львові зведена свого часу як католицький костел монастиря ордену босих кармелітів, який вперше згадується в 1634 році, має довгу історію будівництва.\n' +
          '\n' +
          'Збудований, можливо, за проєктом архітектора Івана Покоровича, сина львівського архітектора італійського походження Адама де Лярто. Башти головного фасаду були спроєктовані архітектором Алоїзом Вондрашкою в 1835-1839 роках, а завершені при реставрації вже в 1906 році архітектором Владиславом Галицьким.\n' +
          '\n' +
          'Розписи костелу виконані в 1731-1732 роках італійським художником Джузеппе Карло Педретті разом зі своїм львівським учнем та помічником Бенедиктом Мазуркевичем. Головний вівтар зроблений із чорного мармуру (XVII століття). Його авторство приписується скульптору Олександру Прохенковичу.\n' +
          '\n' +
          'Як один із оборонних вузлів Львова, кармелітський костел неодноразово зазнавав атак, а в 1748 році навіть послужив ареною так званій "монахомахії" - боротьби між ченцями-кармелітами та капуцинами.\n' +
          '\n' +
          'В 1991 році костел і монастир було передано ченцям Студійського Уставу Української греко-католицької церкви (ордену, заснованого в 1920-х роках митрополитом Андреєм Шептицьким) та наново освячено на честь Святого Архистратига Михайла, святого покровителя України-Руси та хоронителя Гробу Господнього.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-St.-Michaels-Archangel-(Carmelites-of-the-Baret)/6.png'
        ],
        location: 'вулиця Володимира Винниченка, 22',
        date_of_foundation: '1634 рік',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0015711695337!2d24.0370328!3d49.842428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c9f88190b%3A0x70adc0d9d0030e00!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNCwINCS0LjQvdC90LjRh9C10L3QutCwLCAyMiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1697302413747!5m2!1suk!2sua'
      },
      {
        name: 'Архикатедральний собор Святого Юра',
        description:
          'Архикатедральний собор Святого Юра у Львові - один із найкрасивіших архітектурних ансамблів міста, перлина українського бароко. Головна святиня Української греко-католицької церкви, де тривалий час розташовувалася резиденція митрополитів УГКЦ.\n' +
          '\n' +
          'Першу церкву на Святоюрській горі у Львові було засновано ще за часів Галицько-Волинського князівства. Нинішній храмовий комплекс споруджено в 1744-1770 роках за проєктом Бернарда Меретина, який поєднав стиль рококо з українською сакральною естетикою. На головному фасаді встановлені скульптури Івана Пінзеля. На дзвіниці розміщено найдавніший в Україні дзвін (1341 рік). Найцінніша реліквія храму - чудотворна ікона Пресвятої Діви Марії (XVII століття).\n' +
          '\n' +
          'У соборі Святого Юра поховані митрополити Андрій Шептицький та Володимир Стернюк, патріарх Йосип Сліпий.\n' +
          '\n' +
          'Поруч з собором знаходиться палац митрополитів, в якому в 2001 році зупинявся під час візиту в Україну Папа Іван Павло ІІ.\n' +
          '\n' +
          'З 1998 року собор Святого Юра разом із ансамблем історичного центру Львова входить до списку світової спадщини ЮНЕСКО.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/6.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/7.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/8.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/St.-Georges-Cathedral/9.png'
        ],
        location: 'площа Святого Юра, 5',
        date_of_foundation: '1744-1770 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.200518455952!2d24.010335876833032!3d49.83868973122249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add777b87f055%3A0xb2d38fb7e99bca0a!2z0JDRgNGF0LjQutCw0YLQtdC00YDQsNC70YzQvdC40Lkg0KHQvtCx0L7RgCDQodCy0Y_RgtC-0LPQviDQrtGA0LAsINC_0LsuINCh0LLRj9GC0L7Qs9C-INCu0YDQsCwgNSwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1697302744012!5m2!1suk!2sua',
        online_tour_link: '//st-george-cathedral-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Бернардинський монастир',
        description:
          'Монастир ордена бернардинів у Львові з костелом Святого Андрія Первозванного в XVII сторіччі являв собою окрему фортифікаційну одиницю за межами міста.\n' +
          '\n' +
          "Був оточений ровом, валом і оборонною стіною, що частково збереглася, з вежею Глинянських воріт, що виходять на Митну площу. Потужні монастирські укріплення були пов'язані з кільцем міських мурів.\n" +
          '\n' +
          "Костел Святого Андрія збудований у 1600-1630 роках за проєктом архітекторів Бернарда Авелідеса та Павла Римлянина в стилі ренесансу. Пишний інтер'єр виконаний в стилі бароко, багато дерев'яних вівтарів XVIII сторіччя. Декоративна колона перед фасадом встановлена в 1736 році на честь Святого Яна з Дуклі, покровителя бернардинців.\n" +
          '\n' +
          'Приміщення монастиря тепер належить Центральному державному архіву Львова, а храм Андрія Первозванного передано Українській греко-католицькій церкві.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Bernardine-Monastery/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Bernardine-Monastery/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Bernardine-Monastery/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Bernardine-Monastery/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Bernardine-Monastery/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Bernardine-Monastery/5.png'
        ],
        location: 'площа Соборна, 1-3А',
        date_of_foundation: '1600-1630 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.154192214204!2d24.031904776833006!3d49.83956023116037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c1cf1bd15%3A0xf98d031cfb204a67!2z0JHQtdGA0L3QsNGA0LTQuNC90YHRjNC60LjQuSDQvNC-0L3QsNGB0YLQuNGA!5e0!3m2!1suk!2sua!4v1697302804205!5m2!1suk!2sua'
      },
      {
        name: 'Вірменський кафедральний собор Успіння Пресвятої Богородиці',
        description:
          'У вірменському кварталі Львова між вулицями Вірменською та Лесі Українки знаходиться кафедральний собор, дзвіниця, палац архієпископів та жіночий монастир. Споруди утворюють колоритний "вірменський дворик".\n' +
          '\n' +
          'Будівництво вів архітектор вірменин Дорінг (Дорхі) коштом вірменських купців. В образі собору багато спільних рис із собором у давній вірменській столиці Ані. Упродовж століть собор оновлювався, добудовувався. Найстаріша частина - східна (з XIV сторіччя). Реконструкція 1723 року надала будівлі барокового вигляду.\n' +
          '\n' +
          'У вівтарній частині є традиційні кам\'яні хрести "хачкари". Значну художню цінність становлять скульптурні групи XV століття "Увірування Хоми" та "Свята Софія з доньками".',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Armenian-Cathedral-of-the-Assumption-of-the-Blessed-Virgin-Mary/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Armenian-Cathedral-of-the-Assumption-of-the-Blessed-Virgin-Mary/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Armenian-Cathedral-of-the-Assumption-of-the-Blessed-Virgin-Mary/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Armenian-Cathedral-of-the-Assumption-of-the-Blessed-Virgin-Mary/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Armenian-Cathedral-of-the-Assumption-of-the-Blessed-Virgin-Mary/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Armenian-Cathedral-of-the-Assumption-of-the-Blessed-Virgin-Mary/5.png'
        ],
        location: 'вулиця Вірменська, 7-13',
        date_of_foundation: '1363-1370 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9543785454703!2d24.028133376833193!3d49.84331473089239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d6f749457%3A0x58185d5eeb47db21!2z0JLRltGA0LzQtdC90YHRjNC60LjQuSDRgdC-0LHQvtGA!5e0!3m2!1suk!2sua!4v1697302843327!5m2!1suk!2sua'
      },
      {
        name: 'Гарнизонний храм святих апостолів Петра і Павла (Костел єзуїтів)',
        description:
          'Гарнизонний храм святих апостолів Петра і Павла (колишній костел Петра і Павла ордену Єзуїтів) - одна з найбільших релігійних споруд міста, перший яскравий зразок маньєризму (раннього бароко) у Львові.\n' +
          '\n' +
          'Будівництво розпочав у 1610 році монах-єзуїт Себастьян Лянхіус, який виступив автором первісного проєкту. Чистий стиль італійського бароко витримав при добудові храму в 1618-1621 роках італійський архітектор Джакомо Бріано, взявши за зразок фасад костелу Іль-Джезу в Римі. В 1630 році будівництво було завершено, храм освятили, але оздоблювальні роботи тривали ще 30 років.\n' +
          '\n' +
          "Тринефний храм. Домінує головний фасад, прикрашений пілястрами, нішами зі статуями та сильно вираженим карнизом. Усередині - пишне барокове оздоблення. Розписи виконали художники Франциск та Себастіан Екштейни з Брно. В одному з бічних вівтарів є високохудожнє дерев'яне розп'яття роботи Яна Пфістера.\n" +
          '\n' +
          'Поруч із костелом знаходиться триповерховий будинок колишньої єзуїтської колегії.\n' +
          '\n' +
          'В 2011 році костел освячено як Гарнізонний храм святих апостолів Петра та Павла УГКЦ.\n' +
          '\n' +
          'У підземних криптах костелу функціонує музей "Підземелля Гарнізонного храму святих апостолів Петра і Павла", де можна замовити екскурсію храмом.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Garrina-Church-of-the-Holy-Apostles-Peter-and-Paul-(Jesuit-Church)/6.png'
        ],
        location: 'вулиця Театральна, 11',
        date_of_foundation: '1610-1630 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.196046666368!2d24.029315!3d49.8415366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6ded2db1ad%3A0x47cd10fac352de07!2z0JPQsNGA0L3RltC30L7QvdC90LjQuSDRhdGA0LDQvCDRgdCy0Y_RgtC40YUg0LDQv9C-0YHRgtC-0LvRltCyINCf0LXRgtGA0LAg0ZYg0J_QsNCy0LvQsCDQo9CT0JrQpg!5e0!3m2!1suk!2sua!4v1697302955622!5m2!1suk!2sua'
      },
      {
        name: 'Домініканський собор (Церква Пресвятої Євхаристії)',
        description:
          "Домініканський собор - одна з найзначніших пам'яток бароко у Львові.\n" +
          '\n' +
          'Келії монастиря домініканців відносяться до XVI сторіччя. В 1559 році княжна Гальшка Острозька, спадкоємиця могутнього волинського роду Острозьких, ховалася тут від магната Лукаша Гурки, який насильно змусив її до шлюбу. В 1701 році цар Петро I підписав тут договір про військовий союз Росії та Польщі проти Швеції.\n' +
          '\n' +
          "До XVIII стопіччя будівля Домініканського костелу була готичною. В 1792-1798 роках архітектором Яном де Вітте коштом Юзефа Потоцького проведено реконструкцію, фасади прикрашені майстром Себастьяном Фесінгером. В інтер'єрі - низка цінних витворів мистецтва: алебастрові надгробні пам'ятники XVI століття, мармуровий пам'ятник Артурові Гротгеру.\n" +
          '\n' +
          "За радянських часів тут був музей атеїзму. Нині це греко-католицька церква Святої Євхаристії. У підземеллях експонується частина колекції пам'яток сакрального мистецтва Львівського музею історії релігії. Проводяться концерти органної музики.",
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Dominican-Cathedral-(Church-of-the-Holy-Eucharist)/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Dominican-Cathedral-(Church-of-the-Holy-Eucharist)/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Dominican-Cathedral-(Church-of-the-Holy-Eucharist)/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Dominican-Cathedral-(Church-of-the-Holy-Eucharist)/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Dominican-Cathedral-(Church-of-the-Holy-Eucharist)/4.png'
        ],
        location: 'площа Музейна, 1',
        date_of_foundation: '1745-1764 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.984262155266!2d24.031248276833153!3d49.84275323093241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add059b7b3cf1%3A0x97bdfa1e04fc9cc!2z0KbQtcyB0YDQutCy0LAg0J_RgNC10YHQstGP0YLQvsyB0Zcg0ITQstGF0LDRgNC4zIHRgdGC0ZbRlw!5e0!3m2!1suk!2sua!4v1697303017064!5m2!1suk!2sua',
        online_tour_link: '//dominican-cathedral-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Княжий Храм Святого Миколая Чудотворця',
        description:
          "Княжий Храм Святого Миколая Чудотворця - найдавніша пам'ятка монументальної архітектури Львова.\n" +
          '\n' +
          'Мабуть, храм будувався як усипальниця галицьких князів, був головним духовним центром львівських русинів. Перша згадка про церкву Святого Миколая датується 1292 роком. Ще в князівські часи церква служила не тільки храмом, а й центром суспільно-політичного життя.\n' +
          '\n' +
          'Розташовувалася біля підніжжя гори Високий Замок, поряд із площею Старий Ринок, де за часів раннього середньовіччя був центр нижнього міста. Товщина стін храму свідчить також про оборонне значення споруди.',
        main_image:
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/1.png",
        images: [
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/1.png",
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/2.png",
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/3.png",
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/4.png",
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/5.png",
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/6.png",
          "https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Prince's-Church-of-St.-Nicholas-the-Wonderworker/7.png"
        ],
        location: 'вулиця Богдана Хмельницького, 28А',
        date_of_foundation: 'XIII ст.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.7356272552115!2d24.02623357683336!3d49.847424830598825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0d1dbe0f89%3A0x3439e65e3b077826!2z0JrQvdGP0LbQuNC5INCl0YDQsNC8INCh0LLRj9GC0L7Qs9C-INCc0LjQutC-0LvQsNGPINCf0KbQow!5e0!3m2!1suk!2sua!4v1697303059937!5m2!1suk!2sua'
      },
      {
        name: 'Костел і монастир бенедиктинок',
        description:
          'Ансамбль монастиря бенедиктинок у Львові – костел та монастирський корпус – споруджувався за участю архітектора Павла Римлянина. Має яскраво виражений оборонний характер.\n' +
          '\n' +
          "Костел Усіх Святих - невелика кам'яна, прямокутна у плані споруда. До південно-східної частини примикає двоповерховий будинок келій, що зберіг прийоми та елементи ренесансної архітектури. Комплекс оточений стінами з барочними воротами ХVІІ сторіччя.\n" +
          '\n' +
          'Нині це діючий Свято-Покровський монастир Сестер Студійського Статуту.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/The-church-and-monastery-of-Benedictine/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/The-church-and-monastery-of-Benedictine/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/The-church-and-monastery-of-Benedictine/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/The-church-and-monastery-of-Benedictine/3.png'
        ],
        location: 'вулиця Вічева, 2',
        date_of_foundation: '1595 р.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.830131395536!2d24.0295087768333!3d49.84564923072578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add12aead4ecb%3A0x7d986501d300e12b!2z0JrQvtGB0YLQtdC7INGWINC80L7QvdCw0YHRgtC40YAg0LHQtdC90LXQtNC40LrRgtC40L3QvtC6!5e0!3m2!1suk!2sua!4v1697303382085!5m2!1suk!2sua'
      },
      {
        name: 'Церква Святих Ольги і Єлизавети',
        description:
          'Церква Святих Ольги і Єлизавети - найвищий львівський храм (85 метрів), який змагається за висотою із собором Святого Юра. Раніше - церква Свято́ї Єлизавети Угорської.\n' +
          '\n' +
          "Величезний неоготичний костел Святої Єлизавети споруджений на початку XX століття. За переказами, названий на честь популярної в народі імператриці Єлизавети (Сісі), дружини імператора Австро-Угорщини Франца-Йосифа I. Архітектор Теодор-Мар'ян Тальовський використовував багато елементів французької та північнонімецької готичної архітектури: високі гостроверхі шпилі, стрільці центр, вертикальний внутрішній простір. Портал прикрашає скульптурна композиція Петра Війтовича \"Розп'яття з пристосованим\", над інтер'єрами працював львівський майстер Казимир Сіхульський.\n" +
          '\n' +
          'Під час війни храм було пошкоджено, потім зачинено. З 1991 року належить Українській греко-католицькій церкві, переосвячений як церква Святих Ольги та Єлизавети.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-Saints-Olga-and-Elizabeth/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-Saints-Olga-and-Elizabeth/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-Saints-Olga-and-Elizabeth/2.png'
        ],
        location: 'площа Кропивницького, 1',
        date_of_foundation: '1903-1912 рр.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2930041871!2d24.002149676832936!3d49.836951831346575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add8266bcedd7%3A0x74026b340a5c8ae2!2z0KXRgNCw0Lwg0KHQstCyLiDQntC70YzQs9C4INGWINCE0LvQuNC30LDQstC10YLQuA!5e0!3m2!1suk!2sua!4v1697303482845!5m2!1suk!2sua',
        online_tour_link:
          '//st-elisabeth-cathedral-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Церква Успіння Пресвятої Богородиці (Волоська)',
        description:
          "Церква Успіння Пресвятої Богородиці (Волоська) у Львові - визначна пам'ятка ренесансної архітектури Галичини.\n" +
          '\n' +
          "Тривалий час храм був дерев'яний. Будівництво кам'яної церкви розпочалося в XV сторіччі й тривало понад чотири десятиліття (архітектор Павло Римлянин) коштом української (руської) громади, а також молдавського (волоського) господаря Олександра Лопушанина, за що храм отримав другу назву. Навколо храму було сконцентровано православну громаду міста.\n" +
          '\n' +
          "Збудовану в 1572 році дзвіницю (висота 66 метрів) називають вежею Корнякта на честь грецького купця та мецената, який сприяв православ'ю у Львові.\n" +
          '\n' +
          "В інтер'єрі - живопис XVII-XVIII століть, іконостас 1773 року, на вікнах вітражі Петра Холодного. Каплиця Трьох Святителів (1578-1591 роки) поєднана з Успенською церквою в середині ХІХ століття.\n" +
          '\n' +
          'Парафія належить до Львівської єпархії Православної церкви України.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/temples/Church-of-the-Assumption-of-the-Blessed-Virgin-(Voloska)/6.png'
        ],
        location: 'вулиця Руська, 5/7',
        date_of_foundation: 'XIV-XVI ст.',
        category_id: temples,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.020854119605!2d24.03444345474484!3d49.84206567760051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c8cca689b%3A0x55738f8bd7ef873a!2z0KPRgdC_0LXQvdGB0YzQutCwINGG0LXRgNC60LLQsCwg0LLQtdC20LAg0JrQvtGA0L3Rj9C60YLQsCDRliDQutCw0L_Qu9C40YbRjyDRgtGA0YzQvtGFINCh0LLRj9GC0LjRgtC10LvRltCyINCf0KbQow!5e0!3m2!1suk!2sua!4v1697303691880!5m2!1suk!2sua',
        online_tour_link:
          '//assumption-church-lviv.virtual.ua/ua/embed-tour/269853/'
      }
    ]
  });

  // Оборонні споруди
  await prisma.architectural_landmarks.createMany({
    data: [
      {
        name: 'Глинянська брама',
        description:
          "Глинянська (В'їзна) брама - частина міських укріплень середньовічного Львова, що найбільш збереглася.\n" +
          '\n' +
          "Споруда у стилі пізнього ренесансу є частиною фортифікаційного комплексу Бернардинського монастиря. Брама збудована на початку XVII сторіччя під наглядом інженера Фрідріха Гетканта. У центрі оборонної стіни розташована квадратна вежа з шатровим дахом та арковим проїздом, що вимощений дерев'яною бруківкою.\n" +
          '\n' +
          'Під час реконструкції 1976-1977 років перед стіною відновлено оборонний рів.\n' +
          '\n' +
          'Наразі у комплексі Глинянської брами розміщується інститут "Укрзахідпроектреставрація та адміністрація історико-архітектурного заповідника".',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Glinyanskaya-gate/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Glinyanskaya-gate/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Glinyanskaya-gate/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Glinyanskaya-gate/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Glinyanskaya-gate/4.png'
        ],
        location: 'вулиця Валова, 20',
        date_of_foundation: '17 ст.',
        category_id: defenseStructures,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.139030285918!2d24.03294777683301!3d49.839845131139974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6bf3e93727%3A0x86fb84356bd13b8b!2z0JPQu9C40L3Rj9C90YHRjNC60LAg0LHRgNCw0LzQsCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1697303787269!5m2!1suk!2sua'
      },
      {
        name: 'Львівська цитадель',
        description:
          'Львівська цитадель - комплекс фортифікаційних споруд австрійських часів, що дійшов до нас із XIX століття майже без змін.\n' +
          '\n' +
          "Споруджена на узгір'ї на південно-західних підступах до Львова для контролю над містом та стрийською дорогою.\n" +
          '\n' +
          'Фортифікаційні роботи тут розпочато поляками ще в 1635 році під керівництвом королівського інженера Фрідріха Ґетканта. В 1672 році під час облоги Львова укріплення використовували війська турецького султана Мухамеда IV. У 1852-1854 роках австрійська влада реконструювала і розширила фортецю, спорудивши корпус казарм, дві квадратні та чотири круглі вежі.\n' +
          '\n' +
          'Комплекс не зіграв значної ролі під час світових воєн, завдяки чому чудово зберігся. У радянські часи на території був розбитий парк "Цитадель", приміщення використовувалися як с ...',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Lviv-Citadel/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Lviv-Citadel/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Lviv-Citadel/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Lviv-Citadel/3.png'
        ],
        location: 'вулиця Павла Грабовського, 11',
        date_of_foundation: '1850-1856 рр.',
        category_id: defenseStructures,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10293.807160041437!2d24.0267880349739!3d49.83396798231581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add65bda8020b%3A0x58aa795acfabb8e4!2sCitadel%20Inn%20-%20Gastro%20Boutique%20Hotel%20(Hotel%20%26%20Restaurant)!5e0!3m2!1suk!2sua!4v1697303876599!5m2!1suk!2sua'
      },
      {
        name: 'Музей-Арсенал (Міський арсенал)',
        description:
          'Будівля Міського арсеналу Львова є однією зі збережених частин міських фортифікаційних укріплень XVI століття.\n' +
          '\n' +
          'Перша невелика зброярня існувала на цьому місці ще на початку XV століття, але після пожежі 1571 року її знесли та збудували в 1574-1575 роках нове двоповерхове приміщення для виготовлення та зберігання зброї. Архітекторами ймовірно були відомі львівські будівничі Павло Щасливий та Себастян Мочиґемба.\n' +
          '\n' +
          'Східним боком Арсенал прилягав до Високого оборонного муру між Токарівською і Шевською вежами. Перед будівлею стояла бастея. При арсеналі були відкриті майстерні для відливу гармат та дзвонів, лагодження зброї. Поряд містився склад боєприпасів.\n' +
          '\n' +
          "За австрійської влади у XVIII столітті будівля використовувалася як неофіційна в'язниця. Зокрема, в ній утримували гайдамаків - учасників Коліївщини, про що нагадує меморіальна дошка.\n" +
          '\n' +
          'В 1981 році в приміщеннях Міського арсеналу відкрився музей "Арсенал", який представляє одну з найкращих у країні колекцій зброї з 30 країн світу. В експозиції: давньоруські та козацькі булави, витончені арабські шаблі, кинджали народів Кавказу та арабського Сходу, важкі європейські дворучні мечі, обладунки польських "крилатих гусар", рушниці і пістолети з різними типами замків, гармати з гербами та багато іншого. Чимало пам’яток декоровано дорогоцінними металами, самоцвітами, слоновою кісткою, перлами, коралами, перламутром. І це лише невелика частина колекції зброї Львівського історичного музею, яка налічує близько 4,5 тисяч одиниць.\n' +
          '\n' +
          'При музеї працює антикварний салон.\n' +
          '\n' +
          'Відвідувачам із порушеннями зору пропонується аудіодискрипція.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Arsenal-Museum-(City-Arsenal)/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Arsenal-Museum-(City-Arsenal)/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Arsenal-Museum-(City-Arsenal)/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Arsenal-Museum-(City-Arsenal)/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Arsenal-Museum-(City-Arsenal)/4.png'
        ],
        location: 'вулиця Підвальна, 5',
        date_of_foundation: '1554-1556 рр.',
        category_id: defenseStructures,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.058036092557!2d24.032639076833075!3d49.841367031031446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add96988cd2ab%3A0xca4f69001f83d980!2z0JzRg9C30LXQuSDQkNGA0YHQtdC90LDQuw!5e0!3m2!1suk!2sua!4v1697303941411!5m2!1suk!2sua',
        online_tour_link: '//arsenal-museum.virtual.ua/ru/embed-tour/'
      },
      {
        name: 'Порохова вежа',
        description:
          "Порохова вежа - фрагмент оборонних споруд Львова, що повністю зберігся. Одна з 17 веж, що входили в кільце міських укріплень. Пам'ятник військово-оборонної архітектури епохи ренесансу.\n" +
          '\n' +
          'Порохова вежа була розташована на оборонному валу за другою лінією фортифікацій, служила для захисту підступів до міста зі східного боку. Також використовувалася для зберігання пороху та боєприпасів, а у мирний час – як склад зерна.\n' +
          '\n' +
          'Побудована з необтесаного каменю, напівкругла в плані, триповерхова, накрита гостроверхим дахом. Товщина стін сягає 2,5 метрів. За більш ніж чотири століття рівень землі, що піднявся, приховав нижню частину вежі на півтора-два метри.\n' +
          '\n' +
          'З 1959 року приміщення займав Будинок архітектора з виставковою залою. Тепер тут розміщується Центр архітектури, дизайну та урбаністики "Порохова Вежа".\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Porokhova-Vezha/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Porokhova-Vezha/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Porokhova-Vezha/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Porokhova-Vezha/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/defense-structures/Porokhova-Vezha/4.png'
        ],
        location: 'вулиця Підвальна, 4',
        date_of_foundation: '1554-1556 рр.',
        category_id: defenseStructures,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.980531374379!2d24.032889276833146!3d49.84282333092745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6cbffe0d01%3A0xa33f619e972b9468!2z0J_QvtGA0L7RhdC-0LLQsCDQstC10LbQsCwg0LLRg9C70LjRhtGPINCf0ZbQtNCy0LDQu9GM0L3QsCwgNCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1697303980366!5m2!1suk!2sua',
        online_tour_link: '//gunpowder-tower-lviv.virtual.ua/UA/embed-tour/'
      }
    ]
  });

  // Музеї
  await prisma.architectural_landmarks.createMany({
    data: [
      {
        name: 'Львівський музей історії релігії',
        description:
          'Комунальний заклад "Львівський музей історії релігії" з 1973 року працює в приміщенні Домініканського монастиря ХІV-XVIII століть у Львові.\n' +
          '\n' +
          'Цей витвір австрійського архітектора Яна де Вітте і належить до найкращих зразків барокової архітектури міста.\n' +
          '\n' +
          'Експозиція музею розповідає про історію світових і національних релігій та церковних організацій всіх часів: релігії стародавнього світу, юдаїзм, раннє християнство, вірменську церкву, римсько-католицьку церкву, українську греко-католицьку церкву, православ’я в Україні, протестантизм, іслам, буддизм.\n' +
          '\n' +
          'Деякі з 50 тисяч експонатів мають унікальну культову, мистецьку та історичну вартість. Зокрема, представлена велика збірка ікон XVI-XIX століть, чимала колекція Біблій (у тому числі Острозька Біблія 1581 року та видана у Парижі 1563 року), релікварій святого Аронтія ХІ століття тощо.\n' +
          '\n' +
          'Музей практикує різні форми науково-освітньої роботи: лекції, екскурсії, концерти органної та камерної музики.\n' +
          '\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Religion-History/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Religion-History/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Religion-History/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Religion-History/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Religion-History/4.png'
        ],
        location: 'площа Музейна, 1',
        date_of_foundation: '1973 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.964698131627!2d24.031146876833187!3d49.843120830906095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adec0948405f7%3A0x60eb66ebaa755e8c!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0LzRg9C30LXQuSDRltGB0YLQvtGA0ZbRlyDRgNC10LvRltCz0ZbRlw!5e0!3m2!1suk!2sua!4v1697304085231!5m2!1suk!2sua',
        online_tour_link: '//museum-history-religion.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Музей "Церква Іоанна Хрестителя"',
        description:
          'Дуже давня церква Іоанна Хрестителя - одна з небагатьох споруд, що збереглися у Львові з князівських часів. Знаходиться в районі Старого Ринку біля підніжжя Високого Замку.\n' +
          '\n' +
          'За легендою, тут поховано угорську принцесу Констанцію, дружину галицько-волинського князя Лева Даниловича, короля Русі.\n' +
          '\n' +
          'Перша письмова згадка про церкву Іоанна Хрестителя у Львові датується 1371 роком. Будівля перебудована в ХІХ столітті в псевдороманському стилі, проте донині дійшли окремі фрагменти первісної архітектури.\n' +
          '\n' +
          'Наразі приміщення займає Музей найдавніших пам\'яток Львова (філія Львівської Національної галереї мистецтв). Експозиція розповідає про культуру, ремесла та побут у часи, що належать до заснування міста. Найцінніший експонат - ікона "Львівська Богородиця" (XIV століття). Також експонується пластична панорама Львова XVIII століття.\n' +
          '\n' +
          'З 2009 року в храмі щонеділі та у свята проводяться богослужіння УГКЦ.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-Church-John-the-Baptist/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-Church-John-the-Baptist/1.png'
        ],
        location: 'вулиця Ужгородська, 1',
        date_of_foundation: '1250 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10291.065229370122!2d24.0311965!3d49.8468484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0d6a939de3%3A0xfa981bf50f04ade8!2z0JzRg9C30LXQuSDCq9Cl0YDQsNC8INCG0LLQsNC90LAg0KXRgNC10YHRgtC40YLQtdC70Y_Cuw!5e0!3m2!1suk!2sua!4v1697304188100!5m2!1suk!2sua'
      },
      {
        name: 'Музей "Личаківський цвинтар"',
        description:
          'Личаківський цвинтар-музей, розташований неподалік центру міста Львова, більше схожий на ландшафтний парк.\n' +
          '\n' +
          "Офіційно цвинтар засновано в 1784 році, хоча він на цьому місці існував ще в XVI сторіччі. Територія в 40 гектарів розбита на 86 полів, на яких знаходяться майже 3,5 тисячі пам'яток та композицій роботи відомих скульпторів та архітекторів. Тут поховані Іван Франко, Соломія Крушельницька, Марія Конопницька, Володимир Івасюк та інші.\n" +
          '\n' +
          'В 1991 році Личаківський цвинтар став історико-меморіальним музеєм-заповідником.\n' +
          '\n' +
          'Багато протиріч у 1990-х роках викликало відновлення знищеного за радянських часів меморіалу "Цвинтар орлят" на честь польських воїнів, які загинули в 1918-1920 роках в українсько-польській та радянсько-польській війні. Офіційно меморіал було відкрито в 2005 році одночасно з меморіалом загиблим воїнам Української Галицької Армії.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/6.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/7.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/8.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/9.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Lychakiv-Cemetery/10.png'
        ],
        location: 'вулиця Мечникова, 33',
        date_of_foundation: '1784 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.531836212236!2d24.053516076832672!3d49.832463731666856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add4f68c422d3%3A0x1d56256364fa4cc0!2zTdGD0LfQtdC5LdC30LDQv9C-0LLRltC00L3QuNC6IMKr0JvQuNGH0LDQutGW0LLRgdGM0LrQuNC5INGG0LLQuNC90YLQsNGAwrs!5e0!3m2!1suk!2sua!4v1697304275424!5m2!1suk!2sua',
        online_tour_link: '//lychakiv-cemetery.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Музей Івана Георгія Пінзеля (Костел кларисок)',
        description:
          'Музей видатного українського скульптора доби бароко Івана Георгія Пінзеля розташований у колишньому костелі кларисок у Львові, що є пам’яткою архітектури XVII століття.\n' +
          '\n' +
          "Скромний за архітектурою, але розкішно розписаний з середини храм споруджений у 1607 році Павлом Римлянином і Бернардом Авелідесом на місці старої каплиці монахинь кларисок бернардинського ордену. З тих часів збереглись ренесансні елементи бічного фасаду костелу від вулиці Личаківської. У 1740-х роках костел зазнав реконструкції у бароковому стилі, а під час реставрації 1938-1939 років було добудовано вежу. Інтер'єри храму прикрашають зроблені у XVIII столітті розписи Станіслава Строїнського, окремі пізніші сюжети у південній наві належать пензлю Тадеуша Попеля.\n" +
          '\n' +
          'З 1996 року в костелі кларисок розташовується Музей барокової скульптури Івана Георгія Пінзеля, якого називають "українським Мікеланджело". Тут зібрано найбагатшу колекцію унікальних барокових скульптур майстра, які вдалося відшукати і врятувати в 1970-х роках. Музей Івана Георгія Пінзеля є відділом Львівської національної галереї мистецтв імені Бориса Возницького.\n' +
          '\n' +
          "Після реконструкції 2021 року оновлений музей скульптури Пінзеля отримав повністю безбар'єрний простір. Від зупинки громадського транспорту та в середині будівлі прокладені тактильні смуги. На вході встановлені звукові маячки. Музей має інклюзивну касу та мнемосхему на вході. Внутрішні сходи продубльовані підйомником. Біля експонатів встановлені інформаційні таблички, що продубльовані шрифтом Брайля. Відвідувачам з порушенням зору пропонують тактильні копії найважливіших експонатів. Доступні аудіогіди та аудіодескрипція. Персонал пройшов підготовку для роботи з усіма категоріями відвідувачів.",
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Ivan-George-Pinzel-Museum-Church-Clarys/6.png'
        ],
        location: 'площа Митна, 2',
        date_of_foundation: '1607 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.151440826541!2d24.03416457683301!3d49.8396119311566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6bea6f5445%3A0x659fb4dd9781ca7c!2z0L_Qu9C-0YnQsCDQnNC40YLQvdCwLCAyLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1suk!2sua!4v1697304456316!5m2!1suk!2sua'
      },
      {
        name: 'Музей науки',
        description:
          '"Музей науки Львів" - це інтерактивний простір площею понад 2000 квадратних метрів, який допомагає пізнати світ завдяки дослідам і взаємодії з експонатами.\n' +
          '\n' +
          'Кожен із дев\'яти експозиційних блоків музею розкриває окрему тему: "Повітря", "Вода", "Акустика", "Оптика", "Електрика", "Наука", "Людина", "Роботи", "Формула-1". Понад 100 інтерактивних експонатів дають можливість провести експерименти з пневматичними пристроями та мильними бульбашками, влаштувати мініураган або морський щторм, виробити електроенергію на мініелектростанції, пограти на музичних інструментах у студії звукозапису, поспілкуватися з роботом RoboThespian, покерувати роборукою KUKA KR 210, побувати в різних куточках Землі завдяки VR-технологіям та навіть поміняти колеса гоночної автівки на пітстопі.\n' +
          '\n' +
          "На першому поверсі розташована зона відпочинку з кав'ярнею та сувенірною крамницею.\n" +
          '\n' +
          'Двоповерхова будівля львівського музею науки облаштована з урахуванням стандартів доступності, зокрема обладнана ліфтом.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Science/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Science/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Science/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Science/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Science/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Science/5.png'
        ],
        location: 'вулиця Стрийська, 200А',
        date_of_foundation: '2022 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.2448961207697!2d24.01435847683126!3d49.80026343396473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae73cecd42323%3A0x8eadfeaa29a95614!2z0JzRg9C30LXQuSDQvdCw0YPQutC4INCb0YzQstGW0LI!5e0!3m2!1suk!2sua!4v1697304495360!5m2!1suk!2sua',
        online_tour_link:
          'https://kuula.co/share/collection/7FqFK?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'
      },
      {
        name: 'Аптека-музей "Під чорним орлом"',
        description:
          'Найдавніша аптека у Львові працює на площі Ринок вже майже 300 років.\n' +
          '\n' +
          'Аптеку в кам\'яниці "Під чорним орлом" відкрив у 1735 році військовий фармацевт Франц Вільгельм Наторп, про що свідчить кована вивіска з емблемою медицини над входом. По обидві сторони акуратного порталу розташовано рельєфні портрети бога лікування Ескулапа та його доньки - богині здоров\'я Гігієни.\n' +
          '\n' +
          "Зберігся старовинний інтер'єр торгового залу, розписи віденських майстрів на стелі, старовинні ваги та касові апарати.\n" +
          '\n' +
          'В 1966 році тут відкрився Музей історії фармацевтики, експозиція якого налічує понад 3 тисячі експонатів. В експозиційних залах можна оглянути різноманітні фармацевтичні пристрої, реконструкцію житла аптекаря, підземну алхімічну лабораторію.\n' +
          '\n' +
          "На подвір'ї відтворено вигляд житлового будинку багатого міщанина ХVI-XVII століття.\n" +
          '\n' +
          'Аптека "Під чорним орлом" продовжує служити людям і в наш час, ставши державною аптекою № 15. Окрім ліків, тут можна придбати відоме у всьому світі "Залізне вино" (водний розчин сахарату заліза, що вживається при залізодефіцитній анемії) та популярну львівську настоянку "Вігор", яка вважається засобом підвищення потенції. Продаються тут і пам\'ятні сувеніри.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Pharmacy-museum-under-the-black-eagle/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Pharmacy-museum-under-the-black-eagle/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Pharmacy-museum-under-the-black-eagle/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Pharmacy-museum-under-the-black-eagle/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Pharmacy-museum-under-the-black-eagle/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Pharmacy-museum-under-the-black-eagle/5.png'
        ],
        location: 'вулиця Друкарська, 2',
        date_of_foundation: '1735 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.988008898518!2d24.02983977683316!3d49.84268283093759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d04f8c285%3A0x40e2b720ff31d419!2z0JDQv9GC0LXQutCwLdC80YPQt9C10Lk!5e0!3m2!1suk!2sua!4v1697305705932!5m2!1suk!2sua',
        online_tour_link: '//pharmacy-museum-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Арт Центр Дзиґа',
        description:
          'Арт Центр "Дзиґа" у Львові є резиденцією творчого об\'єднання "Дзиґа" - організації художників, громадських діячів та підприємців. Діє з 1993 року.\n' +
          '\n' +
          'В галереї представлено сучасне мистецтво. Щовечора в клубі проходять джазові чи блюзові концерти.\n' +
          '\n' +
          'При галереї працює кафе "Під клепсидрою" - місце зустрічей львівської богеми з демократичною та творчою атмосферою.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Art-Center-Dziga/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Art-Center-Dziga/1.png'
        ],
        location: 'вулиця Вірменська, 35',
        date_of_foundation: '1993 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9525690224323!2d24.03125727683313!3d49.84334873088987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6cdde4f9cf%3A0x3998555dd6b61c5f!2z0JDRgNGC0YbQtdC90YLRgCDQlNCX0JjSkNCQ!5e0!3m2!1suk!2sua!4v1697305740431!5m2!1suk!2sua'
      },
      {
        name: 'Археологічний музей Інституту українознавства',
        description:
          "Археологічний музей Інституту українознавства імені Івана Крип'якевича НАН України працює у Львові з 2001 року.\n" +
          '\n' +
          'Розміщений в історичному будинку Наукового товариства імені Шевченка, яке раніше керувало українськими археологічними дослідженнями у Галичині.\n' +
          '\n' +
          'У музеї представлені артефакти від доби палеоліту до пізнього середньовіччя, виявлені на території Західної України.\n' +
          '\n' +
          'Поряд з оригінальними артефактами з каменю, кістки, рогу, глини, чорних і кольорових металів представлено реконструкції у натуральну величину способів житлобудівництва доби палеоліту (більше 50 тисяч років тому), у період існування трипільської культури (IV–III тисячоліття до нашої ери), у ранньослов’янський час (V-VII столріччя нашої ери), відтворені стародавні методи обробки шкіри, свердління кам’яних сокир, виготовлення глиняного посуду, плавки заліза та інше.\n' +
          '\n' +
          'Загалом представлено понад 2000 експонатів.\n' +
          '\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Archaeological-Museum-of-the-Institute-of-Ukrainian-Studies/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Archaeological-Museum-of-the-Institute-of-Ukrainian-Studies/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Archaeological-Museum-of-the-Institute-of-Ukrainian-Studies/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Archaeological-Museum-of-the-Institute-of-Ukrainian-Studies/3.png'
        ],
        location: 'вулиця Козельницька, 4',
        date_of_foundation: '2001 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.3811341606283!2d24.02102207683195!3d49.81650143280608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f2da6a363b%3A0xeab15b20edc63a03!2z0IbQvdGB0YLQuNGC0YPRgiDRg9C60YDQsNGX0L3QvtC30L3QsNCy0YHRgtCy0LAg0ZbQvC7Qhi7QmtGA0LjQvyfRj9C60LXQstC40YfQsA!5e0!3m2!1suk!2sua!4v1697305965065!5m2!1suk!2sua'
      },
      {
        name: 'Державний природознавчий музей',
        description:
          'Державний природознавчий музей Національної академії наук України у Львові вважається одним із найстаріших природничих музеїв Європи.\n' +
          '\n' +
          'Заснований у 1870 році природознавцем-колекціонером, графом українського походження Володимиром Дідушицьким у реконструйованій будівлі в стилі раннього неокласицизму початку XIX століття. У 1880 році Дідушицький подарував музей громаді Львова, і з 1940 року він перебуває у підпорядкуванні НАН України.\n' +
          '\n' +
          'З 2013 року в Державному природознавчому музеї триває створення нової основної експозиції "Симфонія життя", палеонтологічна частина якої відкрилася у 2019 році під назвою "Льодовиковий період". Серед найцікавіших експонатів: скелети мамонта і волохатого носорога з озокеритового родовища у Старуні, кістки інших викопаних тварин фігура кроманьйонця пізньої кам’яної доби, реконструкція житла первісної людини. Експозицію доповнюють інтерактивні мультимедійні кіоски.\n' +
          '\n' +
          'Своєрідним музейним експонатом є також найстаріший в Україні діючий механічний ліфт, облаштований ще 1870 році графом Дідушицьким, який у старшому віці був частково паралізованим і пересувався на колісному візку. Для найменших відвідувачів працює інтерактивна дитяча зона.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/State-Museum-of-Natural-Sciences/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/State-Museum-of-Natural-Sciences/1.png'
        ],
        location: 'вулиця Театральна, 18',
        date_of_foundation: '1870 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9963326153893!2d24.026539076833178!3d49.842526430948624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d814af1d3%3A0x88513dd89be3d3bd!2z0JTQtdGA0LbQsNCy0L3QuNC5INC_0YDQuNGA0L7QtNC-0LfQvdCw0LLRh9C40Lkg0LzRg9C30LXQuSDQndCQ0J0g0KPQutGA0LDRl9C90Lg!5e0!3m2!1suk!2sua!4v1697306010681!5m2!1suk!2sua'
      },
      {
        name: 'Дім Франка',
        description:
          'Львівський національний літературно-меморіальний музей Івана Франка (Дім Франка) відкрився у 1940 році за ініціативи молодшого сина письменника – Петра.\n' +
          '\n' +
          'Музей розташовується у невеликій двоповерховій віллі у швейцарському стилі, де Іван Франко з родиною провів останні 14 років свого життя. В основу експозиції була покладена колекція автографів, листів, документів, фотографій, книжкок та особистих речей із кабінету письменника, зібрана Науковим товариством імені Тараса Шевченка.\n' +
          '\n' +
          'В будинку Франка детально відтворено атмосферу життя письменника та його родини: робочий кабінет, бібліотека, їдальня, спальня Івана Франка, жіноча кімната, кімната Ольги Франко, кімната Тараса і Петра Франків. 2018 року створено експозицію "Кухня Франкового дому".\n' +
          '\n' +
          'Літературна експозиція розташована в сусідньому двоповерховому будинку польського підприємця Антонія Ув’єри, спорудженому в 1923-1925 роках у стилі неокласицизму за проєктом львівського архітектора Івана Багенського.\n' +
          '\n' +
          'Під замовлення колектив музею проводить театралізовані, тематичні, авторські, інтерактивні екскурсії, екскурсії-прогулянки вулицями Львова, тематичні квести, майстеркласи. Також в музеї періодично проходять літературні вечори, театральні вистави, концерти класичної і сучасної музики, різнопланові виставки й перформанси.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Franks-House/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Franks-House/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Franks-House/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Franks-House/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Franks-House/4.png'
        ],
        location: 'вулиця Івана Франка, 150-152',
        date_of_foundation: '1940 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0761296675537!2d24.02900437683215!3d49.82223433239703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f574262733%3A0x747c1f490c13827e!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0L3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INC70ZbRgtC10YDQsNGC0YPRgNC90L4t0LzQtdC80L7RgNGW0LDQu9GM0L3QuNC5INC80YPQt9C10Lkg0IbQstCw0L3QsCDQpNGA0LDQvdC60LAgKNCU0ZbQvCDQpNGA0LDQvdC60LAp!5e0!3m2!1suk!2sua!4v1697306051393!5m2!1suk!2sua'
      },
      {
        name: 'Історичний комплекс музею імені Андрея Шептицького',
        description:
          'Історичний музейний комплекс Національного музею у Львові імені Андрея Шептицького розташовується в колишній віллі професора львівського університету Еміля Дуніковського, яка збудована у 1896-1898 роках за проєктом архітектора Владислава Рауша в стилі необароко.\n' +
          '\n' +
          'У 1911 році її придбав для потреб Церковного музею його засновник і меценат митрополит Андрей Шептицький. Саме тут у 1913 році відбулося відкриття першої експозиції Національного музею у Львові.\n' +
          '\n' +
          'Зараз в Історичному музейному комплексі розгорнута постійна експозиція "Українське мистецтво ХХ століття". Вона є продовженням експозиції українського мистецтва ХІІ-ХІХ століть, яка знаходиться у головній будівлі музею на проспекті Свободи.\n' +
          '\n' +
          'Представлені твори презентують становлення та розвиток української художньої культури у руслі основних стилів та напрямків світового мистецтва минулого століття, а також відображає культурно-мистецькі процеси радянського періоду, що розвивалися поза рамками нормативної естетики соцреалізму.\n' +
          '\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Historical-Complex-of-the-Andrey-Sheptytsky-Museum/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Historical-Complex-of-the-Andrey-Sheptytsky-Museum/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Historical-Complex-of-the-Andrey-Sheptytsky-Museum/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Historical-Complex-of-the-Andrey-Sheptytsky-Museum/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Historical-Complex-of-the-Andrey-Sheptytsky-Museum/4.png'
        ],
        location: 'вулиця Михайла Драгоманова, 42',
        date_of_foundation: '1913 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20592.59656846975!2d24.010979774167353!3d49.8222636269443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add65d965b53f%3A0x7d947f0016676640!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INC80YPQt9C10Lkg0ZbQvNC10L3RliDQkC7QqNC10L_RgtC40YbRjNC60L7Qs9C-ICgyLdC5INC60L7RgNC_0YPRgSk!5e0!3m2!1suk!2sua!4v1697307150668!5m2!1suk!2sua'
      },
      {
        name: 'Львівська національна галерея мистецтв імені Бориса Возницького (Палац Лозинського)',
        description:
          'Львівська національна галерея мистецтв імені Бориса Возницького є одним із найбільших художніх музеїв України. Її фонди налічують понад 62 тисячі творів мистецтва різних епох.\n' +
          '\n' +
          'Заснована вона в 1914 році як Львівська картинна галерея і відтоді розташовується в будинку 1874 року побудови, який належав видатному історику та колекціонеру Владиславу Лозинському.\n' +
          '\n' +
          'Зараз в палаці Лозинського розміщується адміністрація Львівської національної галереї мистецтв та її відділ "Європейське мистецтво ХІХ-ХХІ століть". У 24 залах представлено близько 400 робіт французьких, австрійських, німецьких, польських, російських та українських майстрів.\n' +
          '\n' +
          'Перлиною вважається єдиний в Україні твір Жоржа де ла Тура "У лихваря", одне з найдорожчих та найцінніших полотен світового значення на території країни. У світі збереглося лише 32 картини цього загадкового європейського майстра. Також представлено кілька портретів Артура Гротгера, "Портрет доньки" Генриха Родаковського та інші.\n' +
          '\n' +
          'Зали мистецтва Львова 1900-1930 років знайомлять з творами художників, які входили в об’єднань АНУМ, АRTES, "Нова генерація".',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-National-Art-Gallery-named-after-Boris-Voznytsky-Palace-of-Lozinsky/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-National-Art-Gallery-named-after-Boris-Voznytsky-Palace-of-Lozinsky/1.png'
        ],
        location: 'вулиця Василя Стефаника, 3',
        date_of_foundation: '1914 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.2886617372465!2d24.02299857683283!3d49.83703343134072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6fc106e0b1%3A0xb65653855455046!2z0JvRjNCy0ZbQstGB0YzQutCwINC90LDRhtGW0L7QvdCw0LvRjNC90LAg0LPQsNC70LXRgNC10Y8g0LzQuNGB0YLQtdGG0YLQsiDRltC80LXQvdGWINCRLtCTLiDQktC-0LfQvdC40YbRjNC60L7Qs9C-!5e0!3m2!1suk!2sua!4v1697307187822!5m2!1suk!2sua'
      },
      {
        name: 'Львівський Будинок вчених',
        description:
          'Будівля львівського Будинку вчених була побудована фірмою "Фельнер та Гельмер" у 1897-1898 роках за проєктом віденських архітекторів Фердинанда Фельнера та Германа Гельмера.\n' +
          '\n' +
          'Цей творчий тандем також працював над готелем "Жорж" у Львові, оперним театром в Одесі, міським театром у Чернівцях.\n' +
          '\n' +
          'Проєкт з будівництва був здійснений на замовлення клубу власників кінних заводів. Імпозантний вигляд фасадів будинку витриманий у стилі необароко.\n' +
          '\n' +
          'З 1918 до 1939 рік тут розміщувалося Народне (аристократичне, графське, дворянське) казино (збори). З 1948 року тут розміщується Львівський Будинок вчених.\n' +
          '\n' +
          "Відмінно збережені елементи інтер'єру - парадні сходи, ліпнина, алебастрові каміни, оригінальна прозора стеля, витончений балкон - все це робить колишнє казино одним з найкрасивіших та найархітектурніших будинків Львова.\n" +
          '\n' +
          'Саме тут знімали сцену з фільму "Д\'Артаньян і три мушкетери", де Д\'Артаньян піднімався сходами до кардинала, щоб зіграти з ним у шахи.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-House-of-Scientists/6.png'
        ],
        location: 'вулиця Листопадового Чину, 6',
        date_of_foundation: '1897-1898 рр.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0724745753887!2d24.018835076833046!3d49.841095731050814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add716898f5e1%3A0x9f35ab750998d3df!2z0JHRg9C00LjQvdC-0Log0LLRh9C10L3QuNGF!5e0!3m2!1suk!2sua!4v1697307280635!5m2!1suk!2sua',
        online_tour_link:
          '//house-scientists-lviv.virtual.ua/ua/embed-tour/269827/'
      },
      {
        name: 'Львівський музей пивоваріння "Львіварня"',
        description:
          'Музейно-культурний комплекс історії пивоваріння "Львіварня" відкрито у Львові в 2016 році на території "Львівської пивоварні", яка вважається найстарішою в Україні.\n' +
          '\n' +
          'Перша письмова згадка про львівське пиво датується 1384 роком, коли якийсь Ганко Клепер купив пивне виробництво у Краківському передмісті, яке досі називається Клепаровом. Офіційною датою відкриття "Львівської пивоварні" вважається 1715 рік.\n' +
          '\n' +
          'Перший музей пивоваріння було відкрито на пивоварні у 2005 році. Після реконструкції він перетворився на сучасний арт-центр "Львіварня".\n' +
          '\n' +
          'У музеї пива можна ознайомитись із старовинною технологією виробництва. Представлено варильну піч, бродильний чан, бочки для дозрівання пива тощо. Цікаві колекції пивних бочок та пляшок, пивних кухлів, зразки реклами, технологічна книга та інші унікальні документи. Особливий експонат – легендарний 10-літровий келих акціонера пивоварні Роберта Домса.\n' +
          '\n' +
          'Завдяки інтерактивним експонатам музею кожен його відвідувач може відчути себе справжнім пивоваром, торкнутися історії пива та зазирнути у процес пивоваріння.\n' +
          '\n' +
          'Наприкінці екскурсії проводиться дегустація 12 видів кегового пива у ресторані "Хмільний дім Роберта Домса", що розташований у колишніх пивних підвалах. Працює сувенірна крамниця.\n' +
          '\n' +
          'Також "Львіварня" функціонує як сучасний арт-центр, де відбуваються виставки, концерти, культурні події, конференції та корпоративні заходи.\n' +
          '\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Brewery-Lvivarnya/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Brewery-Lvivarnya/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Brewery-Lvivarnya/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Brewery-Lvivarnya/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Museum-of-Brewery-Lvivarnya/4.png'
        ],
        location: 'вулиця Клепарівська, 18',
        date_of_foundation: '2016 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.7278458287497!2d24.0130655768334!3d49.84757103058859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add9fe362a8ab%3A0x234e560980b647cb!2z0JzRg9C30LXQudC90L4t0LrRg9C70YzRgtGD0YDQvdC40Lkg0LrQvtC80L_Qu9C10LrRgSDQv9C40LLQvdC-0Zcg0ZbRgdGC0L7RgNGW0ZcgLSDQm9GM0LLRltCy0LDRgNC90Y8!5e0!3m2!1suk!2sua!4v1697307368230!5m2!1suk!2sua'
      },
      {
        name: 'Львівський палац мистецтв',
        description:
          'Виставковий комплекс "Львівський палац мистецтв" - найбільший виставковий та культурно-мистецький центр Західної України.\n' +
          '\n' +
          'Будівля у стилі модерну за проєктом архітектора Василя Каменщика збудована в 1996 році. Фасади прикрашені класицистичними аркадними лоджіями та скульптурою покровителя художників Святого Луки.\n' +
          '\n' +
          'При загальній площі 8,7 тисяч квадратних метрів, площа 12 експозиційних зал складає 3,6 тисячі квадратних метрів. В палаці є конференц-зал на 200 місць зі сценою та арт-вітальня.\n' +
          '\n' +
          'Тут проводяться такі регулярні події, як Міжнародний форум видавців, Львівський осінній салон "Високий Замок", Всеукраїнський конкурс дитячого малюнка "Весняні настрої", щорічна мистецька виставка до Шевченківських днів "Свою Україну любите...".\n' +
          '\n' +
          'На основі подарованих творів та документів тут постійно функціонує кімната-музей Тараса Шевченка. Також у Палаці мистецтв працює Фабрика помічників Святого Миколая та проходить Національне Свято Шоколаду.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Palace-of-Arts/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Palace-of-Arts/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Palace-of-Arts/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Palace-of-Arts/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Palace-of-Arts/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Lviv-Palace-of-Arts/5.png'
        ],
        location: 'вулиця Миколи Коперника, 17',
        date_of_foundation: '1996 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.243922492254!2d24.024304576832908!3d49.837874131280735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6fcf5f425b%3A0xccdedeecfc37df9e!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0J_QsNC70LDRhiDQnNC40YHRgtC10YbRgtCy!5e0!3m2!1suk!2sua!4v1697307402971!5m2!1suk!2sua',
        online_tour_link: '//arts-palace-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Меморіальний музей Михайла Грушевського',
        description:
          'Меморіальний музей Михайла Грушевського у Львові засновано в 1998 році в особняку, в якому він із родиною жив у 1902-1914 роках.\n' +
          '\n' +
          'В цей час Грушевський був професором Львівського університету, тут же став ініціатором створення Української національно-демократичної партії.\n' +
          '\n' +
          'Основна експозиція музею присвячена львівському періоду у житті Грушевського. Представлено оригінали його видань, фотографії, листи вченого, особисті речі родини Грушевських.\n' +
          '\n' +
          'Також висвітлюється діяльність Михайла Грушевського на чолі Центральної Ради Української Народної Республіки.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/6.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Mikhail-Hrushevsky-Memorial-Museum/7.png'
        ],
        location: 'вулиця Івана Франка, 154',
        date_of_foundation: '1998 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10296.252214578966!2d24.0309566!3d49.8224801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f56e0fcd4f%3A0x31cce06856446e71!2z0JTQtdGA0LbQsNCy0L3QuNC5INC80LXQvNC-0YDRltCw0LvRjNC90LjQuSDQvNGD0LfQtdC5INCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQvg!5e0!3m2!1suk!2sua!4v1699824895698!5m2!1suk!2sua'
      },
      {
        name: 'Меморіальний музей Станіслава Людкевича',
        description:
          'Меморіальний музей Станіслава Людкевича відкрився 1995 року в будинку композитора у Львові за ініціативи його дружини, мистецтвознавиці Зеновії Штундер.\n' +
          '\n' +
          'Двоповерховий будинок зведено у другій половині 1950-х років. Пані Зеновія виділила під музей другий поверх успадкованого нею будинку і почала працювати в музею старшою науковою співробітницею.\n' +
          '\n' +
          'У двох експозиційних кімнатах збережені інтер’єри кабінету композитора та його спальні. У третій кімнаті експонуються видання музичних творів композитора, сімейні світлини, предмети образотворчого мистецтва.\n' +
          '\n' +
          'Меморіальний музей Станіслава Людкевича є відділом Музично-меморіального музею Соломії Крушельницької. На фасаді будинку встановлено художньо-меморіальну таблицю з горельєфом композитора.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Stanislav-Ludkevich-Memorial-Museum/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Stanislav-Ludkevich-Memorial-Museum/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Stanislav-Ludkevich-Memorial-Museum/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Stanislav-Ludkevich-Memorial-Museum/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Stanislav-Ludkevich-Memorial-Museum/4.png'
        ],
        location: 'вулиця Людкевича, 7',
        date_of_foundation: '1995 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10294.922775175652!2d24.0351544!3d49.8287266!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add5de8c7904b%3A0x6e5977daf517b9a0!2z0JzQtdC80L7RgNGW0LDQu9GM0L3QuNC5INC80YPQt9C10Lkg0KHRgtCw0L3RltGB0LvQsNCy0LAg0JvRjtC00LrQtdCy0LjRh9Cw!5e0!3m2!1suk!2sua!4v1699824819588!5m2!1suk!2sua'
      },
      {
        name: 'Меморіальний музей тоталітарних режимів "Територія терору"',
        description:
          'Меморіальний музей тоталітарних режимів "Територія терору" відкрито у Львові на території пересильної в\'язниці №25.\n' +
          '\n' +
          "В'язниця була створена в 1944 році радянською окупаційною адміністрацією, що прийшла на зміну нацистській. В роки Другої світової війни на цьому місці було львівське гетто.\n" +
          '\n' +
          "В музейному комплексі відтворено два бараки, сторожові вежі, загорожа з колючого дроту та інші інфраструктурні об'єкти.\n" +
          '\n' +
          'Музей розповідає про історію політичних, соціальних, етнічних та релігійних репресій тоталітарних режимів проти населення, яке мешкало на території України.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Memorial-Museum-of-totalitarian-regimes-Territory-of-terror/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Memorial-Museum-of-totalitarian-regimes-Territory-of-terror/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Memorial-Museum-of-totalitarian-regimes-Territory-of-terror/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Memorial-Museum-of-totalitarian-regimes-Territory-of-terror/3.png'
        ],
        location: "проспект В'ячеслава Чорновола, 45Г",
        date_of_foundation: '2013 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10290.129499428569!2d24.0236111!3d49.8512435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0a348e79b3%3A0x5065008b9edbc9bd!2z0JzRg9C30LXQuSAi0KLQtdGA0LjRgtC-0YDRltGPINGC0LXRgNC-0YDRgyI!5e0!3m2!1suk!2sua!4v1699824959090!5m2!1suk!2sua'
      },
      {
        name: 'Музей "Каплиця Боїмів"',
        description:
          "Каплиця Боїмів біля стін Латинського собору – одна з найпримітніших архітектурних пам'яток Львова.\n" +
          '\n' +
          'Каплиця збудована на початку XVII століття над фамільним склепом львівських патриціїв Боїмів (поряд із собором знаходився міський цвинтар). Імовірно, будівництво велося артіллю архітектора Андрія Бемера.\n' +
          '\n' +
          "Цю споруду в стилі зрілого ренесансу з переходом до бароко фахівці називають яскравим взірцем південного маньєризму в Україні. Західний фасад каплиці вражає багатством декоративного оздоблення. Автором скульптурної композиції вважається майстер із Вроцлава Гануш Шольц. Купол увінчує незвичайна скульптура Христа, що сидить. Інтер'єр також насичений безліччю скульптурних зображень, більшість із яких виконано Яном Пфістером.\n" +
          '\n' +
          'Наразі Каплиця Боїмів є відділом Львівської галереї мистецтв.\n' +
          '\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Bohima-Chapel/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Bohima-Chapel/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Bohima-Chapel/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Bohima-Chapel/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Bohima-Chapel/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/musehttps://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.372373640146!2d24.0310645!3d49.8407083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69df8cbbc3%3A0x55ed8822b7920a9f!2z0JrQsNC_0LvQuNGG0Y8g0JHQvtGX0LzRltCy!5e0!3m2!1suk!2sua!4v1699825028128!5m2!1suk!2suaums/Museum-of-Bohima-Chapel/5.png'
        ],
        location: 'вулиця Катедральна, 1',
        date_of_foundation: '1609-1615 рр.',
        category_id: museums,
        online_tour_link: '//boimy-chapel.virtual.ua/ua/embed-tour/269912/',
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.372373640146!2d24.0310645!3d49.8407083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69df8cbbc3%3A0x55ed8822b7920a9f!2z0JrQsNC_0LvQuNGG0Y8g0JHQvtGX0LzRltCy!5e0!3m2!1suk!2sua!4v1699825028128!5m2!1suk!2sua'
      },
      {
        name: 'Музей "Львів стародавній"',
        description:
          'Музей "Львів стародавній" відкрився у 2020 році у підземеллях Преображенської церкви, що у середмісті Львова, поруч із площею Ринок.\n' +
          '\n' +
          'Це вже другий заклад великого проєкту інноваційних музеїв під брендом "Становлення української нації", що поєднує сучасні експозиційні технології, реалістичні 3-D фігури видатних українців та експонати з приватних колекцій і музейних фондів.\n' +
          '\n' +
          "У львівському музеї представлено 40 фігур визначних особистостей, що мали вплив на розвиток міста з 1256 до 1772 року. Серед них король Данило Галицький, князь Василько Романович, король Казимир ІІІ, скульптор Іоан Пінзель, засновник перших віденських кав'ярень Юрій Кульчицький та багато інших.\n" +
          '\n' +
          'Проводяться класичні і тематичні екскурсії, дитячі квести, майстеркласи з декорування зброї, плетіння кольчуг, гончарства, виготовлення ляльки-мотанки, малювання кавою, середньовічних танців.\n' +
          '\n' +
          'Квитки можна завчасно придбати онлайн.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Lviv-Museum-is-ancient/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Lviv-Museum-is-ancient/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Lviv-Museum-is-ancient/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Lviv-Museum-is-ancient/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Lviv-Museum-is-ancient/4.png'
        ],
        location: 'вулиця Краківська, 21',
        date_of_foundation: '2020 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10291.749588987128!2d24.0292316!3d49.8436338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add84db327775%3A0x5a312e4fd842fce1!2z0JzRg9C30LXQuSAi0JvRjNCy0ZbQsiDQodGC0LDRgNC-0LTQsNCy0L3RltC5Ig!5e0!3m2!1suk!2sua!4v1699825092143!5m2!1suk!2sua'
      },
      {
        name: 'Музей "Таємна аптека"',
        description:
          'Інтерактивний музей "D.S. Таємна аптека" у Львові - чарівне та загадкове місце.\n' +
          '\n' +
          'Історія цього музею розпочалася у травні 2012 року, коли в одній із найстаріших львівських аптек "Під Угорською короною" під час будівельно-реставраційних робіт було знайдено таємний вхід до підвалу, в якому виявили колишню фармацевтичну лабораторію, яка діяла наприкінці ХІХ – початку ХХ століття.\n' +
          '\n' +
          'Назва аптеки пов\'язана з легендою про розташований поруч Бернардинський монастир, де деякий час знаходилися реліквії Святого Стефана - короля та покровителя Угорщини. "Таємний аптекар" і зараз варить тут "мило для хабарників" та виробляє "пігулки для щастя".\n' +
          '\n' +
          'Головну таємницю аптеки охороняє єдиний у світі Лев-аптекар. Історію "Таємної аптеки" відвідувачі відкривають для себе у легкому форматі відео-екскурсії з елементами театрального перформансу та дегустацією "аптечного еліксиру щастя та довголіття".',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-is-a-secret-pharmacy/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-is-a-secret-pharmacy/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-is-a-secret-pharmacy/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-is-a-secret-pharmacy/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-is-a-secret-pharmacy/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-is-a-secret-pharmacy/5.png'
        ],
        location: 'площа Соборна, 1',
        date_of_foundation: '2012 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.636679125619!2d24.0332418!3d49.8394667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add11f8d06119%3A0x8c9e77b2e4ec35fe!2z0JDQv9GC0LXQutCwIEQuUy4!5e0!3m2!1suk!2sua!4v1699825148905!5m2!1suk!2sua'
      },
      {
        name: 'Музей "Третя після опівночі"',
        description:
          'Львівська філія музею у темряві "Третя після опівночі" відкрилася у 2023 році.\n' +
          '\n' +
          'Тут можна відвідати виставку "Мистецтво на дотик" з екскурсією в абсолютній темряві та у супроводі незрячого гіда. Така екскурсія дасть можливість по-новому дослідити 25 експонатів, що представляють відомі твори архітектури, живопису та кіномистецтва, які більшість людей звикли сприймати лише візуально.\n' +
          '\n' +
          'Екскурсії в темряві проводяться для груп до 3-х осіб, тривають 45 хвилин. Після цього відвідувачам пропонують провести час за цікавими активностями в кімнаті відпочинку – навчитесь писати шрифтом Брайля, пограти в сенсорні ігри тощо.\n' +
          '\n' +
          'Для дітей до 10 років пропонується командний квест, який дозволяє дізнатися цікаві факти про органи чуття та зрозуміти особливості сприйняття світу незрячими людьми.\n' +
          '\n' +
          'Крім закладу у Львові, також працює музей "Третя після опівночі" у Києві.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-third-after-midnight/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-third-after-midnight/1.png'
        ],
        location: 'вулиця Личаківська, 8',
        date_of_foundation: '2023 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.155859605339!2d24.038552199999998!3d49.8395289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6bb5c78403%3A0xb6905cd3b0743d70!2z0LLRg9C70LjRhtGPINCb0LjRh9Cw0LrRltCy0YHRjNC60LAsIDgsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1699825241228!5m2!1suk!2sua'
      },
      {
        name: 'Музей етнографії та художнього промислу',
        description:
          'Музей етнографії та художнього промислу Інституту народознавства НАН України займає неоренесансну будівлю на головній вулиці Львова.\n' +
          '\n' +
          'В основі купола розміщена алегорична скульптурна група, що символізує економічне процвітання Галичини, яку називають єдиною у світі статуєю Свободи, що сидить.\n' +
          '\n' +
          'В експозиції представлена багата колекція кераміки, фарфору та фаянсу, виробів із художнього скла. Колекція годинників XVI-XX століття налічує близько 350 екземплярів.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/6.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Ethnography-and-Artistic-Crafts/7.png'
        ],
        location: 'проспект Свободи, 15',
        date_of_foundation: '1951 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.155642090092!2d24.0328949!3d49.8417264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6c57088bff%3A0x767a31a84edb353e!2z0JzRg9C30LXQuSDQtdGC0L3QvtCz0YDQsNGE0ZbRlyDRgtCwINGF0YPQtNC-0LbQvdGM0L7Qs9C-INC_0YDQvtC80LjRgdC70YM!5e0!3m2!1suk!2sua!4v1699825280923!5m2!1suk!2sua'
      },
      {
        name: 'Музей історії електрифікації Львівщини',
        description:
          'Музей історії електрифікації Львівщини відкрився у 2018 році за ініціативи ПрАТ "Львівобленерго".\n' +
          '\n' +
          'Експозиція розташована на першому поверсі будівлі "Львівобленерго" біля парку "Залізна вода".\n' +
          '\n' +
          'Музей розповідає про історію розвитку енергетики у Львові від кінця XIX століття. Зокрема, представлено макет першого електричного трамваю, який запустили у місті 1894 року. Відвідувачам пропонують привести трамвайчик у рух за допомогою динамомашини.\n' +
          '\n' +
          'Також можна побачити план прокладання кабельних ліній міста Львова 1908 року, копію вуличної дугової лампи 1909 року, макет вугільної шахти та її електричного обладнання, електичні лічильники різних часів, робочі інструменти та реманент електриків.\n' +
          '\n' +
          "В музеї відтворено інтер'єр лабораторії інженера-винахідника Ніколи Тесли, демонструється робота котушки Тесли.\n" +
          '\n' +
          'Перед входом в музей встановлено стенд, присвячений пам’яті директора Львівських міських електромереж Тараса Крукеницького. Орієнтиром для відвідувачів є мурал із зображенням Ніколи Тесли та Томаса Едісона на паркані.\n' +
          '\n' +
          'Відвідування музею можливе лише з екскурсійним супроводом і за попереднім записом.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Electrification-History-of-Lviv-Region/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Electrification-History-of-Lviv-Region/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Electrification-History-of-Lviv-Region/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-Electrification-History-of-Lviv-Region/3.png'
        ],
        location: 'вулиця Юрія Мушака, 56',
        date_of_foundation: '2018 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10296.440026737273!2d24.0370087!3d49.8215976!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7c807de6909%3A0xba00b1de9db68e84!2z0JzRg9C30LXQuSDRltGB0YLQvtGA0ZbRlyDQtdC70LXQutGC0YDQuNGE0ZbQutCw0YbRltGXINCb0YzQstGW0LLRidC40L3QuA!5e0!3m2!1suk!2sua!4v1699825387787!5m2!1suk!2sua'
      },
      {
        name: 'Музей історії Ліцею імені Героїв Крут',
        description:
          'Музей історії Львівського державного військового ліцею імені Героїв Крут висвітлює історію створення й розвитку навчального закладу, а також деякі сторінки історії становлення української державності.\n' +
          '\n' +
          'Перший розділ експозиції присвячений Бою під Крутами у січні 1918 року та пам\'яті Героїв Крут. На стендах представлено співвідношення сил, склад підрозділів, хід бою. Все це ілюструється схемами, мапами, таблицями. Стенд доповнюється елементами озброєння тих часів: німецької самозарядної гвинтівки Маузер 98 зразка 1898 року, російської гвинтівки Мосіна зразка 1891 року, станковий кулемет "Максим". \n' +
          '\n' +
          'Окремий експозиційний розділ присвячений передісторії створення ліцею – Львівській республіканській спеціальній школі-інтернату з посиленою військово-фізичною підготовкою, яка функціонувала з 1985 по 1992 рік, і на базі якої формувався ліцей. Розділ історії ліцею та його розвитку в умовах становлення української державності складається з 4 блоків: створення та розбудова Львівського військового ліцею (1992-1996 роки); розвиток Львівського державного ліцею з посиленою військово-фізичною підготовкою (1996-2010 роки); ліцей у період до 2018 року; ліцей на сучасному етапі.\n' +
          '\n' +
          'Два стенди в музеї присвячені зброї різних періодів. На експозиції представлено 18 зразків зброї, починаючи з ХVIII cтоліття. Частина матеріалів представлена в мультимедійній формі на інтерактивній панелі, яка була презентована під час відкриття оновленої експозиції 2022 року.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Lyceum-named-after-Krut-Heroes/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Lyceum-named-after-Krut-Heroes/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Lyceum-named-after-Krut-Heroes/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Lyceum-named-after-Krut-Heroes/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Lyceum-named-after-Krut-Heroes/4.png'
        ],
        location: 'вулиця Пасічна, 68',
        date_of_foundation: '2022 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10295.310818546064!2d24.0714318!3d49.8269034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ac2b25dab0b21%3A0xaa29c91489fce204!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0LvRltGG0LXQuSDRltC80LXQvdGWINCT0LXRgNC-0ZfQsiDQmtGA0YPRgg!5e0!3m2!1suk!2sua!4v1699825458939!5m2!1suk!2sua'
      },
      {
        name: 'Музей історії науки і техніки "Ретро Гараж"',
        description:
          'Виставка раритетних зразків транспорту "Ретро Гараж" з 2018 року експонується в приміщенні Музею історії науки і техніки, що є відділом Львівського історичного музею.\n' +
          '\n' +
          'Експозиція ретроавтівок розгорнута у найстарішому ангарі з комплексу першого трамвайного депо Львова, спорудженого в 1894 році львівським архітектором Альфредом Каменобродським. Прямокутна мурована з цегли споруда має двосхилий дах, що тримається на дерев’яних фермах, опертих на бічні стіни та дерев’яні стовпи.\n' +
          '\n' +
          'На площі понад 500 квадратних метрів представлена приватна колекція велосипедів, мопедів, мотоциклів, першої половини ХХ століття Андрія Гладуна та ряд зразків американського автопрому 1970-1980 років із збірки колекціонера Тараса Майби.\n' +
          '\n' +
          'Найбільше увагу відвідувачів привертає поліцейський автомобіль Chevrolet Caprice Classic 1986 року випуску. Крім того, в музеї представлене перше міське таксі довоєнного Львова Citroen AC4 Berline Lux і справжній фіакр (кінне таксі). Можна ознайомитися зі зразками продукції Львівського мотозаводу 1950-1970 років із фондів Львівського історичного музею.\n' +
          '\n' +
          'Також на виставці експонуються приватні колекції автомоделей та американських номерних автомобільних знаків.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-and-Technology-Retro-Garage/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-and-Technology-Retro-Garage/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-and-Technology-Retro-Garage/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-and-Technology-Retro-Garage/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-and-Technology-Retro-Garage/4.png'
        ],
        location: 'вулиця Дмитра Вітовського, 57А',
        date_of_foundation: '2018 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10294.3243225649!2d24.0182935!3d49.8315383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add91735699cf%3A0xc3020207065ff127!2z0KDQtdGC0YDQviDQk9Cw0YDQsNC2LCDQvNGD0LfQtdC5INGC0YDQsNC90YHQv9C-0YDRgtGD!5e0!3m2!1suk!2sua!4v1699825493407!5m2!1suk!2sua'
      },
      {
        name: 'Музей історії пожежної справи',
        description:
          'Пожежно-технічна виставка ГУ МНС відкрита в будівлі Управління пожежної безпеки у Львівській області.\n' +
          '\n' +
          'В першій залі відображено історію розвитку пожежної справи на Галичині та, зокрема, у Львові. Серед експонатів - насос австрійського виробництва 1849 року.\n' +
          '\n' +
          'Друга зала присвячена бойовим будням вогнеборців.\n' +
          '\n' +
          'Експозицію завершує зала, присвячена Чорнобильській катастрофі.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-of-Fire-Branch-History/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/The-Museum-of-Fire-Branch-History/1.png'
        ],
        location: 'вулиця Підвальна, 6',
        date_of_foundation: '',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9092482823735!2d24.034156100000004!3d49.844162700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d2beeabf5%3A0x5632f868c9afca36!2z0LLRg9C70LjRhtGPINCf0ZbQtNCy0LDQu9GM0L3QsCwgNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1699825534039!5m2!1suk!2sua'
      },
      {
        name: 'Музей історії України (Массарівська кам’яниця)',
        description:
          'Музей історії України Львівського історичного музею розміщується в чотириповерховій будівлі на площі Ринок у Львові, що відома як "Массарівська кам’яниця".\n' +
          '\n' +
          'Зведена у XV столітті в готичному стилі, згодом перебудована у стилі епохи Відродження. Певний час будинок належав родині венеційського консула Антоніо Массарі. У середині ХІХ століття тут містилася крамниця ласощів Геннемана. На початку XX століття фасад прикрасив трикутний фронтон, оздоблений алегоричним рельєфом авторства скульптора Курчинського. Збереглися пізньоготичні склепіння і вікна першого поверху, елементи декоративного оздоблення інтер’єрів у стилі ренесансу.\n' +
          '\n' +
          'Зараз у "Массарівській кам’яниці" розміщено історичну експозицію, де представлено понад 2100 пам’яток історії України від найдавніших часів до початку ХХ століття: неолітичні знаряддя та музичні інструменти, трипільська кераміка, золотий скіфський скарб, давньоруські хрести-енколпіони, катівські мечі середньовічного Львова, маґнатське жіноче і чоловіче вбрання, козацька зброя, астрономічний настільний годинник XVIII століття, колекції стародруків і творів живопису. Досі зберігає таємниці портрет молодої Роксолани – дівчини Насті Лісовської з Рогатина, турецької бранки, яка стала дружиною султана Сулеймана II.\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/6.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-of-History-of-Ukraine-Massarivska-Kruzhnitsa/7.png'
        ],
        location: 'площа Ринок, 24',
        date_of_foundation: 'XV ст.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.064486566936!2d24.0326527!3d49.8421546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adda23f74df31%3A0x1e61f61574a65615!2z0JrQsNC8J9GP0L3QuNGG0Y8g0JrQvtGA0L3Rj9C60YLQsCwg0LLRltC00LTRltC7INCb0YzQstGW0LLRgdGM0LrQvtCz0L4g0ZbRgdGC0L7RgNC40YfQvdC-0LPQviDQvNGD0LfQtdGO!5e0!3m2!1suk!2sua!4v1699825611972!5m2!1suk!2sua'
      },
      {
        name: 'Музей карет (Каретний двір)',
        description:
          'Приватний музей карет у Львові функціонує на базі кінного клубу "Каретний двір", де розводять торійську породу коней.\n' +
          '\n' +
          'В експозиції представлено 14 карет різних типів: ландо, фіакр, фаетон, тарантас, візаві тощо. Також "Каретний двір" пропонує іпотерапію, навчання верховій їзді, кінний туризм та екскурсію вулицями старого Львова на кареті.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-carriage-carriage-yard/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-carriage-carriage-yard/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-carriage-carriage-yard/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-carriage-carriage-yard/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/museums/Museum-carriage-carriage-yard/4.png'
        ],
        location: 'вулиця Винниця, 43',
        date_of_foundation: '2022 р.',
        category_id: museums,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10287.207761440079!2d23.979393!3d49.864965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adddad14d3d09%3A0x5c68686341c98d31!2z0JrQsNGA0LXRgtC90LjQuSDQtNCy0ZbRgA!5e0!3m2!1suk!2sua!4v1698929718474!5m2!1suk!2sua'
      }
    ]
  });

  // Парки
  await prisma.architectural_landmarks.createMany({
    data: [
      {
        name: 'Парк культури та відпочинку імені Богдана Хмельницького',
        description:
          'Парк культури та відпочинку імені Богдана Хмельницького розташований у центральній частині Львова, на схилі пагорба між вулицями Стрийською, Героїв Майдану, Вітовського та Зарицьких. Зона відпочинку та розваг існувала тут ще у XIX столітті. Сучасний парк був закладений у 1951 році та облаштований за радянськими традиціями створення типових парків культури та відпочинку трудящих. З тих часів збереглася центральна алея довжиною понад 800 метрів, колонада центрального входу та приміщення кінотеатру "Дружба". У 1970 році центральний вхід прикрасили фонтани. З 1984 року Парк культури має статус пам\'ятки садово-паркового мистецтва місцевого значення. На території функціонують дитяча зона розваг "Жу-Жу Парк" і парк рухомих фігур динозаврів. Працюють вуличні кафе та ресторан. Регулярно проводяться різноманітні фестивалі та ярмарки.\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Bogdan-Khmelnitsky-Park-and-Recreation-Park/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Bogdan-Khmelnitsky-Park-and-Recreation-Park/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Bogdan-Khmelnitsky-Park-and-Recreation-Park/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Bogdan-Khmelnitsky-Park-and-Recreation-Park/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Bogdan-Khmelnitsky-Park-and-Recreation-Park/4.png'
        ],
        location: 'вулиця Дмитра Вітовського, 51',
        date_of_foundation: '1951 р.',
        category_id: parks,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.4181445903304!2d24.021929656691793!3d49.829818784936876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add63820d301f%3A0xed0384dac856c50!2z0J_QsNGA0Log0LrRg9C70YzRgtGD0YDQuCDRgtCwINCy0ZbQtNC_0L7Rh9C40L3QutGDINGW0LzQtdC90ZYg0JHQvtCz0LTQsNC90LAg0KXQvNC10LvRjNC90LjRhtGM0LrQvtCz0L4!5e0!3m2!1suk!2sua!4v1697552260044!5m2!1suk!2sua'
      },
      {
        name: 'Стрийський парк',
        description:
          "Стрийський парк – один із найстаріших та найкрасивіших парків Львова, пам'ятка садово-паркового мистецтва національного значення.\n" +
          '\n' +
          'До Другої світової війни вважався одним із найкрасивіших парків Польщі.\n' +
          '\n' +
          'Закладений в 1879 році Арнольдом Рерінгом на місці цвинтаря. Нині займає площу 56 гектарів. Складається з трьох частин: зона нижніх партерів (дном балки), лісопаркова зона (на схилах балки), верхня тераса.\n' +
          '\n' +
          'У Стрийському парку знаходяться Львівська дитяча залізниця, пам\'ятник Яну Кілінському (учаснику польського повстання під командуванням Тадеуша Костюшка) та пам\'ятник українському футболу (на честь перемоги львівського клубу "Сокіл" над краківською командою).\n' +
          '\n' +
          'Також Стрийський парк може похвалитися декоративним ставком та прекрасними алеями.\n' +
          '\n' +
          'Вхід вільний.\n',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/3.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/4.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/5.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Stryi-Park/6.png'
        ],
        location: 'вулиця Стрийська, 15',
        date_of_foundation: '1879 р.',
        category_id: parks,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.0340444832714!2d24.022406076805513!3d49.82302533234057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae78ac19b0467%3A0x2b2237553544c794!2z0KHRgtGA0LjQudGB0YzQutC40Lkg0L_QsNGA0Lo!5e0!3m2!1suk!2sua!4v1697552489502!5m2!1suk!2sua',
        online_tour_link: '//stryjskyj-park-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Парк імені Івана Франка',
        description:
          'Затишні алеї парку — чудове місце для прогулянок удвох чи роздумів на самоті. Найстаріший та один з центральних парків Львова розташований перед головним корпусом університету ім. Івана Франка. Його також вважають найстарішим міським парком в Україні.\n' +
          '\n' +
          "Головний вхід у парк знаходиться на вулиці Січових Стрільців, яка з'єднує його з історичною частиною міста. Заснований парк на території колишніх міських ланів наприкінці XVI століття патрицієм М. Шольц — Вольфовичем. Займає близько 11 га.\n" +
          "Знаходиться парк за адресою вул. Листопадового чину, С. Крушельницької. Сьогодні у парку ім. Івана Франка знаходиться будинок почесного консульства Болгарії у Львові, будиночок  садівника, альтанка та дитячий майданчик з гойдалками та дитячими гірками. Парк ім. І. Франка - пам'ятка садово-паркового мистецтва і занесений до Списку світової культурної спадщини ЮНЕСКО.\n" +
          'Сьогодні  цей  "зелений оазис" у середмісті Львова – справжнє сучасне європейське місце відпочинку.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Franko-Park/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Franko-Park/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Franko-Park/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Franko-Park/3.jpeg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Franko-Park/4.jpeg'
        ],
        location: 'вул. Листопадового чину',
        date_of_foundation: 'XVI століття',
        category_id: parks,
        online_tour_link: '//park-franko-lviv.virtual.ua/ua/embed-tour/',
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5146.346655830996!2d24.01804268783896!3d49.839200660353804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add70fa2c2b45%3A0x5f11ad5efa4909fc!2z0J_QsNGA0Log0ZbQvC4g0IbQstCw0L3QsCDQpNGA0LDQvdC60LA!5e0!3m2!1suk!2sua!4v1697612558562!5m2!1suk!2sua'
      },
      {
        name: 'Парк „Високий замок”',
        description:
          'Парк „Високий замок”, що велично височіє над віковічним Львовом, поєднує в собі старовину із сучасністю. Закладений він у 1838 році на ділянці двох гір – Княжої і Замкової та видолинку, що їх з’єднує. Княжа гора була облюбована князем Данилом Романовичем для свого західного форпосту (ХІІІ ст.). Збереглись залишки мурів замку, який втративши своє оборонне значення поступово руйнується.\n' +
          "Розташований парк на Замковій горі. Перша згадка про Львів пов'язана з цією горою. Тут є грот з левами, тераса, яка відкриває красивий вид на місто, алеї, телевізійна вежа, кургани, монумент Максима Кривоноса і красива природа. Займає більше 30 га. парку гарний сад який налічує понад 45 видів деревних і чагарникових порід. Пам’ятник-камінь козацькому полковникові Максиму Кривоносу, грот – альтанка із двома кам’яними левами перенесеними сюди в 1874 році від міської ратуші. В кінці ХІХ століття насипаний копець (зараз оглядовий майданчик), з якого видно панораму Львова (висота 411 м). Телевізійна вежа. ",
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/High-Castle-Park/1.jpeg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/High-Castle-Park/1.jpeg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/High-Castle-Park/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/High-Castle-Park/3.jpeg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/High-Castle-Park/4.jpg'
        ],
        location: 'вулиця Високий Замок, 1',
        date_of_foundation: '',
        category_id: parks,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.7127672713514!2d24.031341676079254!3d49.84785433056929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addaa75911429%3A0xd9a4d4ea5f95ca11!2z0J_QsNGA0Lot0L_QsNC8J9GP0YLQutCwICLQktC40YHQvtC60LjQuSDQl9Cw0LzQvtC6Ig!5e0!3m2!1suk!2sua!4v1697613242175!5m2!1suk!2sua'
      },
      {
        name: 'Снопківський парк',
        description:
          'Стара назва парку „Дружба”, однойменну назву мав стадіон (з 1990р. – стадіон Україна). Був розбитий на місці глиняних кар’єрів у 1959 – 1963 рр. і займає площу 60 га. Мережа алей і доріжок прокладена з таким розрахунком, щоб краще розкрити характерні краєвиди парку, а також домогтися максимальної пропускної спроможності під час масового відвідування найбільшого стадіону міста, який розташований у центральній частині парку і розрахований на 30 тисяч місць.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Snopkivsky-Park/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Snopkivsky-Park/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Snopkivsky-Park/2.jpeg'
        ],
        location: 'вулиця Василя Стуса, 47',
        date_of_foundation: '1959 – 1963 рр.',
        category_id: parks,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29123.79818494712!2d24.043309126413483!3d49.81982342982964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7c71130f90d%3A0xd80c0001dc08af53!2z0KHQvdC-0L_QutGW0LLRgdGM0LrQuNC5INC_0LDRgNC6!5e0!3m2!1suk!2sua!4v1697613667572!5m2!1suk!2sua'
      },
      {
        name: 'Парк Залізна вода',
        description:
          'Створений парк в 1905р. Зелений куточок недалеко від центру. У парку є багато джерел води з великим вмістом заліза, це і стало причиною виникнення назви парку. Площа його близько 20га. Адреса: вул. Стуса, Мишуги, Тернопільська та Ярославенка. Закладений у 1905 році на схилах яру ріки Полтви.Розташований між вулицями Стуса, Мішуги, Тернопільською і Ярославенко. \n' +
          "Пересічений рельєф місцевості, хвилясті узгір'я і яри, – все це додає парку дуже мальовничий і своєрідний вигляд. Тут бере свій початок річка Полтва. Основа парку – столітній буковий ліс.",
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Iron-water-park/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Iron-water-park/1.jpg'
        ],
        location: 'вул. Стуса',
        date_of_foundation: '1894-1905 р.',
        category_id: parks,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.1946572123293!2d24.034842476832107!3d49.82000653255597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f6fc3fc115%3A0x37466c2a5fa66b86!2z0JfQsNC70ZbQt9C90LAg0LLQvtC00LA!5e0!3m2!1suk!2sua!4v1698929953757!5m2!1suk!2sua'
      },
      {
        name: 'Сквер імені Івана Павла ІІ',
        description:
          'Невеличкий сквер на Сихові, поруч з храмом Різдва Пресвятої Богородиці, уже встиг стати улюбленою локацією для прогулянок сихівчан. Сакури, які квітнуть у сквері навесні, приваблюють сюди охочих з усього міста сфотографуватись та помилуватись деревцями.\n' +
          'Сквер розташований у Сихівському районі Львова біля греко-католицької церкви Різдва Пресвятої Богородиці та на місці зустрічі Папи Римського Івана Павла II-го з українською молоддю в 2001 році.\n' +
          'Це перший в Україні парк, закладений після здобуття нею незалежності. Ініціатором заснування Парку, був громадський діяч Андрій Рожнятовський.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Paul-II-Square/1.jpeg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Paul-II-Square/1.jpeg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Paul-II-Square/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Paul-II-Square/3.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/parks/Ivan-Paul-II-Square/4.jpg'
        ],
        location: 'проспект Червоної Калини',
        date_of_foundation: '',
        category_id: parks,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3642.4695503744324!2d24.05401043080064!3d49.79330611868388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae86d73dd1475%3A0xca2ec847bd7e13c1!2z0KHQutCy0LXRgCDQhtC-0LDQvdC90LAg0J_QsNCy0LvQsCBJSQ!5e0!3m2!1suk!2sua!4v1702130828740!5m2!1suk!2sua'
      }
    ]
  });

  // Пам'ятники
  await prisma.architectural_landmarks.createMany({
    data: [
      {
        name: "Пам'ятник Адамові Міцкевичу",
        description:
          "Колона Адама Міцкевича – один з двох пам'ятників видатному польському поетові, створеним в Україні до його сторіччя (другий знаходиться в Івано-Франківську).\n" +
          '\n' +
          'Ідею проєкту монумента як колони запропонував письменник Адам Креховецький. Урочисте закладання першого каменю в постамент на Маріацькій площі (зараз площа Адама Міцкевича) відбулося в день століття Міцкевича в 1898 році.\n' +
          '\n' +
          "Спорудження монумента тривало п'ять років, він був відкритий 30 жовтня 1904 року. Вважається одним з найкращих пам'ятників Міцкевичу в світі.",
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Adam-Mickiewicz/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Adam-Mickiewicz/1.png'
        ],
        location: 'площа Адама Міцкевича',
        date_of_foundation: '1904 р.',
        category_id: monuments,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.64187322494!2d24.0300241!3d49.8394423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add56971dd2fd%3A0xdb88944b7ac8c270!2z0J_QsNC8J9GP0YLQvdC40Log0JDQtNCw0LzQvtCy0ZYg0JzRltGG0LrQtdCy0LjRh9GD!5e0!3m2!1suk!2sua!4v1697552969572!5m2!1suk!2sua',
        online_tour_link: '//mickevych-monument-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: "Пам'ятник Данилові Галицькому",
        description:
          "Пам'ятник королю Данилові Галицькому, засновнику Львова та творцю Галицько-Волинської держави, встановлено до 745-річчя міста.\n" +
          '\n' +
          "Князь Данило Романович із галицької гілки роду Рюриковичів силою об'єднав країну, розгромивши в 1245 році полки угорських та польських феодалів, а також галицьких бояр.\n" +
          '\n' +
          "Проєкт пам'ятника розробили скульптори Ярич та Романович, а також архітектор Чурилик. Пам'ятник є кінною фігурою з бронзи на гранітному п'єдесталі.",
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Danilov-Halytsky/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Danilov-Halytsky/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Danilov-Halytsky/2.png'
        ],
        location: 'площа Галицька',
        date_of_foundation: '2001 р.',
        category_id: monuments,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.1592479500987!2d24.02996587680635!3d49.83946523116724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7ff1d539eb%3A0xe74b3f0f16293dce!2z0J_QsNC8J9GP0YLQvdC40Log0LrQvtGA0L7Qu9GOINCU0LDQvdC40LvRgyDQk9Cw0LvQuNGG0YzQutC-0LzRgw!5e0!3m2!1suk!2sua!4v1697553265558!5m2!1suk!2sua',
        online_tour_link: '//danylo-monument-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: "Пам'ятник Тарасові Шевченку",
        description:
          "Пам'ятник видатному українському поетові та громадському діячеві Тарасові Шевченку було відкрито в центрі Львова лише в 1992 році.\n" +
          '\n' +
          'Питання про спорудження вирішувалося цілих 5 років, на двох конкурсах проєктів переможця не було визначено, і в результаті компромісу було вирішено використати "відносно кращий" проєкт скульпторів Володимира та Андрія Сухорських та архітекторів Юрія Диби та Юрія Хромей.\n' +
          '\n' +
          'Пам\'ятник виготовили в Аргентині. Урочисте відкриття відбулося на річницю ухвалення декларації незалежності України. Через 4 роки було відкрито другий елемент пам\'ятника – 12-метрова бронзова "Хвиля Національного Відродження".',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Taras-Shevchenko/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Taras-Shevchenko/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Taras-Shevchenko/2.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/monuments/Monument-to-Taras-Shevchenko/3.png'
        ],
        location: 'проспект Свободи',
        date_of_foundation: '1992 р.',
        category_id: monuments,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.0803829864303!2d24.02579437680641!3d49.840947131061355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6df012ae6b%3A0xed47f6b8efbbfd20!2z0J_QsNC8J9GP0YLQvdC40Log0KLQsNGA0LDRgdC-0LLRliDQqNC10LLRh9C10L3QutGD!5e0!3m2!1suk!2sua!4v1697553572391!5m2!1suk!2sua',
        online_tour_link: '//shevchenko-monument-lviv.virtual.ua/ua/embed-tour/'
      }
    ]
  });

  // Театри
  await prisma.architectural_landmarks.createMany({
    data: [
      {
        name: 'Театр опери та балету ім. Соломії Крушельницької',
        description:
          'Львівський Оперний театр є візитівкою Львова та України. Його можна побачити на національній валюті, будівлю часто порівнюють із найкрасивішими спорудами у світі. Враховуючи багатство оздоблення та декорацій театру, це виправдано. Над фасадом театру височіють скульптури: Слави з золотою пальмовою гілкою в центрі та Геній Трагедії і Геній Музики обабіч неї. Їх автором є українець Петро Війтович. Нижче бачимо скульптурну композицію на тему страждань і радощів життя авторства Антонія Попеля, ще нижче – фігури муз та алегорій.\n' +
          '\n' +
          '   Екстер’єр театру є ворітьми, через які ми занурюємося у світ мистецьких символів та розкішних оздоблень в середині. Мармуровими сходинками, минаючи портал із алегоріями «Трагедії» й «Комедії» та барельєф із портретом Зиґмунда Ґорґолевського у вестибюлі, ми потрапляємо до глядацького та дзеркального залів. Над нашою головою в той момент камеї з алегоріями та мальовничі композиції, присвячені порам року, родам мистецтва і категоріям населення, представники яких здійснювали пожертви на будівництво оперного. Венеційськими дзеркалами, скульптурою, алегоріями пір року та частин світу, мальовничими полотнами на тему вистав і погруддями видатних діячів опери можна насолоджуватися у дзеркальній залі.\n' +
          '\n' +
          '   Головна зала театру, яка у формі ліри, уміщує біля тисячі відвідувачів. У ложах, поміж якими і колишня імператорська, сценічне дійство можуть оглядати особливо шановані відвідувачі. По всьому периметру залу оздоблено каріатидами та гермами, а її окрасою є плафон із алегоріями та завіса «Парнас», виконана за ескізами Генрика Семирадського',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Opera-and-Ballet-Theatre.Solomiya-Krushelnytska/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Opera-and-Ballet-Theatre.Solomiya-Krushelnytska/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Opera-and-Ballet-Theatre.Solomiya-Krushelnytska/2.jpeg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Opera-and-Ballet-Theatre.Solomiya-Krushelnytska/3.jpeg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Opera-and-Ballet-Theatre.Solomiya-Krushelnytska/4.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Opera-and-Ballet-Theatre.Solomiya-Krushelnytska/5.jpg'
        ],
        location: 'проспект Свободи, 28',
        date_of_foundation: '1897-1900 рр.',
        category_id: theatres,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.917020192228!2d24.02363737652166!3d49.84401667148279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72f9bc6a89%3A0xf9783fecb4fecf1f!2z0JvRjNCy0ZbQstGB0YzQutCwINCd0LDRhtGW0L7QvdCw0LvRjNC90LAg0J7Qv9C10YDQsA!5e0!3m2!1suk!2sua!4v1698931289988!5m2!1suk!2sua',
        online_tour_link: '//opera-theatre-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Національний академічний український драматичний театр імені Марії Заньковецької',
        description:
          'Марія Заньковецька була відомою актрисою, яка привернула увагу та прихильність Костянтина Станіславського, батька “методу акторської гри” – стилю акторської майстерності, який практикують відомі сьогодні актори театру. Національний академічний український драматичний театр ім. М. Заньковецької відкрився у 1842 році відомим графом Станіславом Скарбеком. Збудований у неокласичному стилі він був однією з трьох найбільших будівель у тогочасній Центральній Європі. З того часу будівля збільшилась, а її класичний драматичний репертуар та музичні концерти продовжували залучати задоволених глядачів. Гарне фойє, Глядацька зала та Колонна зала використовуються як особливі локації для зустрічей та виставок.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/National-Academic-Ukrainian-Drama-Theater-named-after-Maria-Zankovetskaya/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/National-Academic-Ukrainian-Drama-Theater-named-after-Maria-Zankovetskaya/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/National-Academic-Ukrainian-Drama-Theater-named-after-Maria-Zankovetskaya/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/National-Academic-Ukrainian-Drama-Theater-named-after-Maria-Zankovetskaya/3.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/National-Academic-Ukrainian-Drama-Theater-named-after-Maria-Zankovetskaya/4.png'
        ],
        location: 'вулиця Лесі Українки, 1',
        date_of_foundation: '1842 р.',
        category_id: theatres,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10291.657600642631!2d24.0275736!3d49.8440659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72edb3d779%3A0x9b429d5ca46e6711!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INC00YDQsNC80LDRgtC40YfQvdC40Lkg0YLQtdCw0YLRgCDRltC80LXQvdGWINCc0LDRgNGW0Zcg0JfQsNC90YzQutC-0LLQtdGG0YzQutC-0Zc!5e0!3m2!1suk!2sua!4v1698931842074!5m2!1suk!2sua',
        online_tour_link: '//zankovetska-theatre-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Львівський академічний театр імені Леся Курбаса',
        description:
          'Львівський театр імені Леся Курбаса створений Володимиром Кучинським та групою молодих акторів у 1988 (тоді – Молодіжний театр-студія). Театр завжди вирізнявся високоінтелектуальним і неповторним репертуаром. Зокрема, широкого визнання здобули його сценічні адаптації таких творів, як філософські діалоги Г. Сковороди «Благодарний Еродій» та «Наркіс»; «Злочин і кара» Ф. Достоєвського (вистави «Сни», «Забави для Фауста»); «Бенкет» Платона (вистави «Хвала Еросу» та «Silenius Alcibiadis»); поезії В. Стуса (драматична поема «Марко Проклятий, або Східна легенда») та Б. І. Антонича (вечір поезії «Молитва до зір», поетична інсталяція «Формули екстази»).\n' +
          'Театр імені Леся Курбаса — унікальний методологічний центр, який опанував і розробив цикл театральних методик та тренінгів акторської психофізики, пластики, голосу, провів серію спільних проектів з Workcenter Єжи Ґротовського (Італія), Школою драматичного мистецтва Анатолія Васільєва (Росія), Осередком театральних практик Gardzienice (Польща), Саратозьким міжнародним театральним центром (США). У 2006 році за творчі здобутки Театр імені Леся Курбаса було нагороджено найвищою українською нагородою в галузі культури — Національною премією імені Тараса Шевченка, а у 2007 році театру було присвоєно статус академічного.\n' +
          'З 1994 року Театр імені Леся Курбаса проводив свій власний міжнародний театральний фестиваль «Театр: Метод і Практика». Театр веде активну міжнародну діяльність, є членом міжнародної театральної мережі IETM.\n' +
          'Окрім того, Театр імені Леся Курбаса є унікальним для України театром-школою, що виховала не одне покоління акторів та режисерів спершу в Студії театру, а з 2001 року на базі Львівського Національного університету імені Івана Франка.\n' +
          'Критика називає цей колектив унікальним театральним явищем, бо він повернув українській сцені інтелектуальний престиж, створив свою методологічну школу і поєднав багатогранну сценічну практику з процесом пізнання Людини.\n' +
          'Репертуар театру складається тільки з високохудожніх класичних і сучасних творів. На таких творах актори-курбасівці, театральні педагоги, виховали не одне покоління своїх учнів.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/3.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/4.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/5.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Les-Kurbas-Academic-Theater-Lviv-Academic-Theater/6.jpg'
        ],
        location: 'вулиця Леся Курбаса, 3',
        date_of_foundation: '1988 р.',
        category_id: theatres,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.093268102015!2d24.0255834!3d49.8420194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add723eb4e497%3A0xbd6498f3f65ca92!2sLes%20Kurbas%20Theatre!5e0!3m2!1suk!2sua!4v1698933727334!5m2!1suk!2sua',
        online_tour_link: '//kurbas-theatre-lviv.virtual.ua/ru/embed-tour'
      },
      {
        name: 'Львівський драматичний театр імені Лесі Українки',
        description:
          'Театр Лесі Українки – це простір для творчості, де молоді, енергійні актори  втілюють ідеї та відповідають на глибокі питання людства, не забуваючи також задавати запитання. Театр, де митець не боїться слова, лайки чи сленгу, руйнує стереотипи.\n' +
          '\n' +
          'Вистави даного театру націлені на аудиторію 16+ та 18+, жанром яких є драма. Теми, які режисери втілюють у постановки зачіпають теперішні реалії, висвітлюють світ таким, яким він є без жодної цезури. Це і «Горизонт 200», «Люди», «Галдамаш», «Мої родичі та інші покидьки» та ін..\n' +
          '\n' +
          'Так однією з топ-інсценізацій  є вистава «Баба Пріся», головна героїня якої є стара українська баба, яка головує в сім’ї. Події відбуваються у Чорнобильській зоні відчуження, тому сама баба дуже цікава особа, яка є не зовсім простою жінкою. Вистава багатогранна, комедійна, за якою криється трагедія. Вона торкається різних струн душі, викликаючи то сльози,то сміх. ',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/3.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/4.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/5.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lesya-Ukrainka-Lviv-Drama-Theater/6.jpg'
        ],
        location: 'вулиця Городоцька, 36',
        date_of_foundation: '1931 p.',
        category_id: theatres,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.09284234008!2d24.0161772!3d49.8420214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7691d89587%3A0xbe1c96f35253e8f6!2z0KLQtdCw0YLRgCDQm9C10YHRlg!5e0!3m2!1suk!2sua!4v1698934210620!5m2!1suk!2sua',
        online_tour_link:
          '//lesya-ukrainian-theater-lviv.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Львівський академічний духовний театр «Воскресіння»',
        description:
          'Львівський академічний духовний театр  “Воскресіння” був заснований у 1990 році режисером Ярославом Федоришиним, який закінчив Харківський інститут театрального мистецтва ім.. І.Котляревського в класі Всеволода Цвєткова та Московський Державний інститут театрального мистецтва в класі Анатолія Ефроса та групою акторів, які були запрошені в театр з різних театрів України. 19 грудня 1990 року театр вийшов на суд глядача з новою роботою “Чудо Св. Отця Миколая над Половчином” С. Перського. Це була дипломна робота Ярослава Федоришина. Вистава отримала несподіваний успіх. З цією виставою театр об¢їздив багато місць, навіть такі, як віддалене село Турківського району, де ніколи не бував театр.Потім було “Благовіщення Марії” П. Клоделя, коли актори ледь не півсвіту підняли на ноги, поки отримали переклад Віри Вовк. Першою на Українській сцені була і “Юдита” Ф.-Х. Геббеля, “Каїн” Д. Байрона, “Гірські Велетні” Л. Піранделло. Одні з перших вистав ще 1991 року театр повіз на Міжнародний театральний фестиваль до Ченстохови (Польща). Митці заприязнилися з українським Фондом св. Володимира Великого, який очолює професор Володимир Мокрий. За його сприяння “Воскресіння” запросили до Кракова. Це був перший прорив у світ.Театр „Воскресіння” – це завжди експеримент на сцені і несподіванка  для глядача,тому він має своїх прихильників у різних містах України та за кордоном. “Воскресіння” ставить такі вистави, які ніколи не йшли на українській сцені. Це правило стало традицією театру. Завдяки цьому він має успіх. За короткий час театр завоював прихильність публіки та театральної критики послідовним пошуком виразної театральної мови і конкретної сценічної форми. Відкриваючи українському глядачеві світову драматургію, яка ніколи не бачила світло рампи на Україні, театр крок за кроком розширює театральне світосприйняття публіки та актора. У театральних пошуках “Воскресіння” поєднались традиції психологічного театру та пошуки сучасних театральних форм.З 1992 року на базі театру “Воскресіння” відновлюється театральний фестиваль “Золотий Лев”. В 1994 році цей фестиваль набуває статусу Міжнародного і на сьогоднішній день являється одним з найяскравіших театральних форумів України.На сьогоднішній день театр «Воскресіння» – це один з найяскравіших колективів України, який грає 190 вистав на рік, з них 50-60 вистав – в різних країнах світу. Театр працює як на сцені, так і на вулиці. Вуличні вистави зачаровують своєю атмосферою, акторською грою та різноманітними ефектами, які впливають на глядача і заставляють його задуматись над тим прекрасним, що існує в нас і поза нами.Театр „Воскресіння” єчлеміжнародногєвропейського мітингу (IETM) і асоціації міжнародних театральних фестивалів (IFEA).',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lviv-Academic-Theater-(Resurrection)/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lviv-Academic-Theater-(Resurrection)/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lviv-Academic-Theater-(Resurrection)/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lviv-Academic-Theater-(Resurrection)/3.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/Lviv-Academic-Theater-(Resurrection)/4.jpg'
        ],
        location: 'площа Генерала Григоренка, 5',
        date_of_foundation: '1990 р.',
        category_id: theatres,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.125178923397!2d24.0230544!3d49.8418695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6e7963a703%3A0x8878129fea5a5d76!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0LDQutCw0LTQtdC80ZbRh9C90LjQuSDQtNGD0YXQvtCy0L3QuNC5INGC0LXQsNGC0YAgItCS0L7RgdC60YDQtdGB0ZbQvdC90Y8i!5e0!3m2!1suk!2sua!4v1698934967851!5m2!1suk!2sua',
        online_tour_link: '//voskresinnya-theatre.virtual.ua/ua/embed-tour/'
      },
      {
        name: 'Львівський обласний театр ляльок',
        description:
          'Будівлю, в якій зараз знаходиться Львівський театр ляльок, збудували приблизно в 1914-му році, як Ремісничу палату. Тут проводились зібрання всіх ремісників Львова та області.\n' +
          'Але через нестабільну ситуацію, котра виникла у зв’язку з Першою світовою війною, після глибокої фінансової кризи багато приміщень здавалося в оренду, Реміснича палата не була винятком. Підприємець Марек Парізер орендував великий зал Ремісничої палати і 1926-го року облаштував тут кінотеатр “Штука” на 290 глядацьких місць, а у міжвоєнний період великий зал було передано у використання Кінотеатру “Балтик”. До 1941-го змінювались власники залу, але завжди функціонував кінотеатр.\n' +
          'В наші дні, у театрі на стелі досі збереглися фрагменти автентичного вітража у стилі сецесія і неймовірна ковка. За дзеркалом колись також був вітраж. Через ці два вітражі у фойє потрапляло багато денного світла.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-Lviv-Regional-Puppet-Theater/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-Lviv-Regional-Puppet-Theater/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-Lviv-Regional-Puppet-Theater/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-Lviv-Regional-Puppet-Theater/3.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-Lviv-Regional-Puppet-Theater/4.jpg'
        ],
        location: 'площа Данила Галицького, 1',
        date_of_foundation: '1945 р.',
        category_id: theatres,
        online_tour_link: '//puppet-theatre-lviv.virtual.ua/ua/embed-tour/',
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10291.59260597922!2d24.0310412!3d49.8443712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add6d59f43809%3A0xca29c722b0cbfcf8!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0LDQutCw0LTQtdC80ZbRh9C90LjQuSDQvtCx0LvQsNGB0L3QuNC5INGC0LXQsNGC0YAg0LvRj9C70YzQvtC6!5e0!3m2!1suk!2sua!4v1698935368913!5m2!1suk!2sua'
      },
      {
        name: 'Театр естрадних мініатюр «І люди, і ляльки»',
        description:
          'Камерний зал на 40 місць — чи то іграшковий, чи домашній...\n' +
          'Тут все мініатюрне — від сцени — до кабінету директора.\n' +
          'Затишок та гостинність — є незмінними атрибутами, що\n' +
          'зустрічають глядача. Творча атмосфера, креативність, пошук\n' +
          'нових форм, любов до ляльки — це сьогоднішнє лице ТЕАТРУ\n' +
          '— ДОМУ, бо він став домом і людям, і лялькам.',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-variety-miniature-theater-(both-people-and-dolls)/1.png',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-variety-miniature-theater-(both-people-and-dolls)/1.png',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-variety-miniature-theater-(both-people-and-dolls)/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/The-variety-miniature-theater-(both-people-and-dolls)/3.jpeg'
        ],
        location: 'вулиця Олександра Фредра, 6',
        date_of_foundation: '1990 р',
        category_id: theatres,
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10293.352829885582!2d24.032964399999997!3d49.836102399999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add68da131a9b%3A0x71bc7efd8212fa0c!2z0IYg0LvRjtC00LgsINGWINC70Y_Qu9GM0LrQuA!5e0!3m2!1suk!2sua!4v1698935768513!5m2!1suk!2sua'
      },
      {
        name: 'Перший український театр для дітей та юнацтва',
        description:
          'Перший академічний український театр для дітей та юнацтва — перший театр в Україні та світі, розрахований на дитячу та юнацьку аудиторію. Заснований 1920 року в Харкові, з 1944 р. перебазований до Львова',
        main_image:
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/First-Ukrainian-Theater-for-Children-and-Youth/1.jpg',
        images: [
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/First-Ukrainian-Theater-for-Children-and-Youth/1.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/First-Ukrainian-Theater-for-Children-and-Youth/2.jpg',
          'https://8y9u0dodlxxf6ihz.public.blob.vercel-storage.com/theatres/First-Ukrainian-Theater-for-Children-and-Youth/3.jpg'
        ],
        location: 'вулиця Академіка Гнатюка, 11',
        date_of_foundation: '1920 року',
        category_id: theatres,
        online_tour_link: '//young-peoples-theatre.virtual.ua/ua/embed-tour/',
        google_maps_link:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10292.234428780426!2d24.0244855!3d49.8413563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add722425b365%3A0x141cb9760f7acb79!2z0J_QtdGA0YjQuNC5INGC0LXQsNGC0YA!5e0!3m2!1suk!2sua!4v1698936643071!5m2!1suk!2sua'
      }
    ]
  });

  return res.status(200).json({ status: 'ok' });
}
