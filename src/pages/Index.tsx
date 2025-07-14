import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-slate-700" />
              <span className="text-2xl font-bold text-slate-800">АурумСтрой</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-slate-800 transition-colors">Услуги</a>
              <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">О компании</a>
              <a href="#portfolio" className="text-slate-600 hover:text-slate-800 transition-colors">Портфолио</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-slate-800 hover:bg-slate-700">
              Получить расчет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/img/7e648352-8acf-4e08-872d-3cc6e25a21c6.jpg')"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Монолитные работы
              <span className="text-slate-300"> любой сложности</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Профессиональное строительство промышленных объектов, металлоконструкций, 
              кровельных работ и устройство промышленных полов с применением современных технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный спектр строительных работ для промышленных и коммерческих объектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Hammer" size={48} className="text-slate-700 mb-4" />
                <CardTitle className="text-slate-800">Монолитные работы</CardTitle>
                <CardDescription>
                  Бетонирование фундаментов, стен, перекрытий любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Фундаменты всех типов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Монолитные стены и перекрытия
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Сложные архитектурные формы
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Wrench" size={48} className="text-slate-700 mb-4" />
                <CardTitle className="text-slate-800">Металлоконструкции</CardTitle>
                <CardDescription>
                  Изготовление и монтаж стальных конструкций промышленных зданий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Каркасы зданий
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Технологические площадки
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Опорные конструкции
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Home" size={48} className="text-slate-700 mb-4" />
                <CardTitle className="text-slate-800">Кровельные работы</CardTitle>
                <CardDescription>
                  Устройство кровель промышленных и коммерческих объектов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Плоские кровли
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Скатные кровли
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Гидроизоляция
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Layers" size={48} className="text-slate-700 mb-4" />
                <CardTitle className="text-slate-800">Сэндвич-панели</CardTitle>
                <CardDescription>
                  Монтаж ограждающих конструкций из сэндвич-панелей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Стеновые панели
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Кровельные панели
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Холодильные панели
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Square" size={48} className="text-slate-700 mb-4" />
                <CardTitle className="text-slate-800">Промышленные полы</CardTitle>
                <CardDescription>
                  Устройство высокопрочных полов для промышленных объектов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Полы с топпингом
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Наливные полы
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Полимерные покрытия
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Settings" size={48} className="text-slate-700 mb-4" />
                <CardTitle className="text-slate-800">Комплексные решения</CardTitle>
                <CardDescription>
                  Полный цикл строительства от проекта до сдачи объекта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Проектирование
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Строительство
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    Пуско-наладка
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">О компании</h2>
              <p className="text-lg text-slate-600 mb-6">
                АурумСтрой — надежный партнер в области промышленного строительства 
                с многолетним опытом реализации сложных проектов. Мы специализируемся 
                на монолитных работах, металлоконструкциях и комплексном строительстве 
                промышленных объектов.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-slate-700" />
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-slate-800">Сертификаты качества</h3>
                    <p className="text-slate-600">ISO 9001, допуски СРО</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-slate-700" />
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-slate-800">Опытная команда</h3>
                    <p className="text-slate-600">Более 50 квалифицированных специалистов</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-slate-700" />
                  </Badge>
                  <div>
                    <h3 className="font-semibold text-slate-800">Соблюдение сроков</h3>
                    <p className="text-slate-600">98% проектов сдано в срок</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/4bad0a18-8f3b-468d-b2a9-482863b4bb8b.jpg" 
                alt="Строительные работы"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-slate-300">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-slate-300">Завершенных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500К+</div>
              <div className="text-slate-300">м² построено</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-slate-300">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Связаться с нами</h2>
              <p className="text-xl text-slate-600">
                Получите консультацию и расчет стоимости вашего проекта
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" size={24} className="text-slate-600" />
                    <div>
                      <p className="font-semibold text-slate-800">+7 (495) 123-45-67</p>
                      <p className="text-slate-600">Круглосуточно</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" size={24} className="text-slate-600" />
                    <div>
                      <p className="font-semibold text-slate-800">info@aurumstroy.ru</p>
                      <p className="text-slate-600">Электронная почта</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" size={24} className="text-slate-600" />
                    <div>
                      <p className="font-semibold text-slate-800">Москва, ул. Строителей, 15</p>
                      <p className="text-slate-600">Головной офис</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>
                    Мы свяжемся с вами в течение 30 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input placeholder="Email" />
                  <Textarea placeholder="Описание проекта" rows={4} />
                  <Button className="w-full bg-slate-800 hover:bg-slate-700">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={24} />
                <span className="text-xl font-bold">АурумСтрой</span>
              </div>
              <p className="text-slate-400">
                Профессиональное строительство промышленных объектов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Монолитные работы</li>
                <li>Металлоконструкции</li>
                <li>Кровельные работы</li>
                <li>Промышленные полы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@aurumstroy.ru</p>
                <p>Москва, ул. Строителей, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 АурумСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;