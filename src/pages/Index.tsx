import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Newspaper, Trophy, User, ExternalLink } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import PhoneMockup from "@/components/PhoneMockup";
import SeasonCard from "@/components/SeasonCard";
import TeamCard from "@/components/TeamCard";
import MediaCard from "@/components/MediaCard";
import heroBg from "@/assets/hero-bg.jpg";
import basketballIcon from "@/assets/basketball-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Season Badge */}
            <div className="flex justify-center mb-6">
              <img 
                src={basketballIcon} 
                alt="Media Basket" 
                className="w-24 h-24 animate-wave"
              />
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-foreground">2K</span>
              <span className="text-primary">25</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold text-muted-foreground">
              <span>Осень</span>
              <span className="text-primary">•</span>
              <span>6 сезон</span>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
              Мини-апп о медийном баскетболе: контент, задания, профили
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://t.me/ligastavok_mediabasket', '_blank')}
              >
                Открыть в Telegram
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://instagram.com/ligastavok_mediabasket', '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                Instagram
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://media-basket.ru', '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                Сайт лиги
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Что внутри
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё для фанатов медийного баскетбола
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={Newspaper}
              title="Новости и хайлайты"
              description="Актуальные новости, лучшие моменты и эксклюзивный контент"
            />
            <FeatureCard
              icon={Trophy}
              title="Задания и награды"
              description="Выполняй миссии, зарабатывай очки и получай уникальные призы"
            />
            <FeatureCard
              icon={User}
              title="Профили и рейтинг"
              description="Создай свой профиль, следи за статистикой и соревнуйся с другими"
            />
          </div>
        </div>
      </section>

      <Separator className="bg-border" />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Примеры экранов
            </h2>
            <p className="text-xl text-muted-foreground">
              Интерфейс приложения
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            <PhoneMockup label="Дом" />
            <PhoneMockup label="Миссии" />
            <PhoneMockup label="Профиль" />
            <PhoneMockup label="Матчи" />
            <PhoneMockup label="Команды" />
            <PhoneMockup label="Медиа" />
          </div>
        </div>
      </section>

      <Separator className="bg-border" />

      {/* Seasons Section */}
      <section id="seasons" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Сезоны
            </h2>
            <p className="text-xl text-muted-foreground">
              История турнира
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <SeasonCard season={4} year="2024 • Зима" status="past" />
            <SeasonCard season={5} year="2024 • Весна" status="past" />
            <SeasonCard season={6} year="2025 • Осень" status="current" />
          </div>
          
          <div className="text-center">
            <Button 
              variant="default"
              size="lg"
              onClick={() => window.open('https://t.me/ligastavok_mediabasket', '_blank')}
            >
              Подписаться на обновления
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-border" />

      {/* Teams Section */}
      <section id="teams" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Команды
            </h2>
            <p className="text-xl text-muted-foreground">
              Участники сезона
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <TeamCard name="Команда A" icon="🏀" />
            <TeamCard name="Команда B" icon="⚡" />
            <TeamCard name="Команда C" icon="🔥" />
            <TeamCard name="Команда D" icon="💎" />
            <TeamCard name="Команда E" icon="🌟" />
            <TeamCard name="Команда F" icon="🎯" />
          </div>
        </div>
      </section>

      <Separator className="bg-border" />

      {/* Media Section */}
      <section id="media" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Медиа
            </h2>
            <p className="text-xl text-muted-foreground">
              Видео и хайлайты
            </p>
          </div>
          
          {/* Video Player Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video bg-secondary rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:border-primary transition-all">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110 cursor-pointer">
                  <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[24px] border-l-primary border-b-[16px] border-b-transparent ml-2" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Media Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <MediaCard 
              title="Лучшие моменты сезона" 
              description="Топ-10 данков и передач"
            />
            <MediaCard 
              title="Интервью с игроками" 
              description="Эксклюзивные разговоры"
            />
            <MediaCard 
              title="Обзор финала" 
              description="Решающий матч сезона"
            />
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('https://instagram.com/ligastavok_mediabasket', '_blank')}
            >
              Смотреть ещё
            </Button>
          </div>
        </div>
      </section>

      <Separator className="bg-border" />

      {/* Final CTA Section */}
      <section id="cta" className="py-32 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Врывайся в медийный баскетбол
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйся к сообществу фанатов прямо сейчас
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="text-xl px-12 py-8 h-auto"
              onClick={() => window.open('https://t.me/ligastavok_mediabasket', '_blank')}
            >
              Открыть в Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Button 
                variant="ghost" 
                onClick={() => window.open('https://t.me/ligastavok_mediabasket', '_blank')}
              >
                Telegram
              </Button>
              <Button 
                variant="ghost"
                onClick={() => window.open('https://instagram.com/ligastavok_mediabasket', '_blank')}
              >
                Instagram
              </Button>
              <Button 
                variant="ghost"
                onClick={() => window.open('https://media-basket.ru', '_blank')}
              >
                Сайт лиги
              </Button>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Вдохновлено эстетикой медийного баскетбола
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Не аффилировано с правообладателями
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
