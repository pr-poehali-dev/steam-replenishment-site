import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [amount, setAmount] = useState('500');
  const [steamId, setSteamId] = useState('');

  const tariffs = [
    {
      amount: 500,
      bonus: 0,
      popular: false,
    },
    {
      amount: 1000,
      bonus: 50,
      popular: true,
    },
    {
      amount: 2000,
      bonus: 150,
      popular: false,
    },
    {
      amount: 5000,
      bonus: 500,
      popular: false,
    },
  ];

  const paymentMethods = [
    { name: 'Банковская карта', icon: 'CreditCard' },
    { name: 'СБП', icon: 'Smartphone' },
    { name: 'Qiwi', icon: 'Wallet' },
    { name: 'ЮMoney', icon: 'Banknote' },
  ];

  const instructions = [
    { step: 1, title: 'Введите Steam ID', description: 'Найдите свой ID в профиле Steam' },
    { step: 2, title: 'Выберите сумму', description: 'Укажите желаемую сумму пополнения' },
    { step: 3, title: 'Оплатите', description: 'Выберите удобный способ оплаты' },
    { step: 4, title: 'Получите', description: 'Средства зачислятся в течение 5 минут' },
  ];

  const faqs = [
    {
      question: 'Как быстро зачисляются средства?',
      answer: 'Средства поступают на ваш Steam аккаунт в течение 5 минут после успешной оплаты.',
    },
    {
      question: 'Какая минимальная сумма пополнения?',
      answer: 'Минимальная сумма пополнения составляет 100 рублей.',
    },
    {
      question: 'Безопасно ли пополнять через ваш сервис?',
      answer: 'Да, мы используем защищённые каналы передачи данных и работаем только через официальные методы.',
    },
    {
      question: 'Могу ли я вернуть средства?',
      answer: 'После зачисления средств на Steam аккаунт возврат невозможен согласно политике Steam.',
    },
  ];

  const reviews = [
    { name: 'Игорь М.', rating: 5, text: 'Быстро и удобно! Средства пришли через 3 минуты.' },
    { name: 'Анна К.', rating: 5, text: 'Отличный сервис, пополняю уже не первый раз.' },
    { name: 'Дмитрий П.', rating: 5, text: 'Бонусы за большие суммы - очень приятно!' },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <span className="text-2xl font-bold">SteamPay</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#replenish" className="hover:text-primary transition-colors">Пополнение</a>
              <a href="#tariffs" className="hover:text-primary transition-colors">Тарифы</a>
              <a href="#instructions" className="hover:text-primary transition-colors">Инструкция</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="glow-purple">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-gaming opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Пополни <span className="text-primary">Steam</span> за секунды
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстрое и безопасное пополнение Steam кошелька. Бонусы на крупные суммы. Зачисление за 5 минут.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="glow-purple text-lg px-8">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Пополнить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">5 мин</div>
                  <div className="text-sm text-muted-foreground">Зачисление</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b20c858a-24b5-4e07-a564-150e03d5c165/files/1b94858c-6375-44d6-a533-e1c2d7a26443.jpg" 
                alt="Gaming hero"
                className="rounded-2xl glow-purple w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="replenish" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Пополнить Steam</h2>
            <p className="text-muted-foreground text-lg">Выберите сумму и способ оплаты</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="glow-blue">
              <CardHeader>
                <CardTitle className="text-2xl">Форма пополнения</CardTitle>
                <CardDescription>Заполните данные для пополнения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Steam ID</label>
                  <Input 
                    placeholder="Введите ваш Steam ID"
                    value={steamId}
                    onChange={(e) => setSteamId(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сумма пополнения (₽)</label>
                  <Input 
                    type="number"
                    placeholder="500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block mb-3 font-medium">Способ оплаты</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {paymentMethods.map((method) => (
                      <Button
                        key={method.name}
                        variant="outline"
                        className="h-20 flex-col gap-2 hover:border-primary hover:glow-purple transition-all"
                      >
                        <Icon name={method.icon as any} size={24} />
                        <span className="text-xs">{method.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full h-14 text-lg glow-purple">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Перейти к оплате
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы с бонусами</h2>
            <p className="text-muted-foreground text-lg">Чем больше пополняете - тем больше бонус!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tariffs.map((tariff) => (
              <Card 
                key={tariff.amount}
                className={`relative transition-all hover:scale-105 ${
                  tariff.popular ? 'border-primary glow-purple' : ''
                }`}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярное
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-4xl font-bold">{tariff.amount}₽</CardTitle>
                  {tariff.bonus > 0 && (
                    <CardDescription className="text-lg text-accent font-semibold">
                      +{tariff.bonus}₽ бонус
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Мгновенное зачисление</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Без комиссии</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Поддержка 24/7</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full"
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructions" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как пополнить Steam</h2>
            <p className="text-muted-foreground text-lg">Простая инструкция в 4 шага</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructions.map((instruction) => (
              <Card key={instruction.step} className="text-center hover:glow-blue transition-all">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">{instruction.step}</span>
                  </div>
                  <CardTitle className="text-xl">{instruction.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{instruction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы пользователей</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:glow-purple transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Контакты</h2>
                <p className="text-muted-foreground mb-8">
                  Свяжитесь с нами любым удобным способом. Мы работаем 24/7 и всегда готовы помочь!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">support@steampay.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name="MessageCircle" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-muted-foreground">@steampay_support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">8 (800) 555-35-35</div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="glow-blue">
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input placeholder="Тема обращения" />
                  <Button className="w-full glow-purple">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Gamepad2" size={24} className="text-primary" />
                <span className="text-xl font-bold">SteamPay</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Быстрое и безопасное пополнение Steam кошелька с бонусами
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Пополнение Steam</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Бонусная программа</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Инструкция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:glow-purple">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:glow-blue">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover:glow-orange">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 SteamPay. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
