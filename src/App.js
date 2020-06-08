import React from 'react';
import './App.css';
import './bootstrap.min.css';
import shortid from 'shortid';
import Block from './components/Block';
import TitleBlock from './components/TitleBlock';
import List from './components/List';
import ListItem from './components/ListItem';
import Tiser from './components/Tiser';
import Course from './components/Course';
import Search from './components/Search';
import Banner from './components/Banner';
import Weather from './components/Weather';

function App() {
  const titleNews = [
    {
      href: '#0',
      text: 'Сейчас в СМИ',
    },
    {
      href: '#0',
      text: 'в Москве',
    },
    {
      href: '#0',
      text: 'Интересное',
    },
  ];

  const listNews = [
    {
      icon: 'icon',
      href: '#0',
      title: 'В Госдуме разработали законопроект о почасовой оплате труда',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'На сайт голосования по Конституции внесли изменения',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'На Украине рассказали, как ракеты США могут ударить по Сибири',
    },
    {
      icon: 'icon',
      href: '#0',
      title: '«Ъ» узнал о планах ограничить выплаты топ-менеджерам госкомпаний',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'В России могут закрепить приоритет граждан при трудоустройстве',
    },
  ];

  const dataTiser = {
    href: '#0',
    title: 'Работа над ошибками',
    text: 'Смотрите на Яндексе и запоминайте',
  };

  const searchLink = [
    '#Лучшедома',
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Музыка',
    'Эфир',
    'ещё',
  ];

  const dataBanner = {
    img: '/',
    href: '#0',
  };

  const dataVisited = [
    {
      href: '#0',
      title: 'Недвижемость',
      text: ' — о сталинках',
    },
    {
      href: '#0',
      title: 'Маркет',
      text: ' — люстры и светильники',
    },
    {
      href: '#0',
      title: 'Авто.ру',
      text: ' — привод 4х4 до 500 000',
    },
  ];

  const tvProgramm = [
    {
      href: '#0',
      title: 'ТНТ Best',
      text: ' ТНТ International',
    },
    {
      href: '#0',
      title: 'Джинглики',
      text: ' Карусель',
    },
    {
      href: '#0',
      title: 'Наедине со всеми',
      text: ' Первый',
    },
  ];

  const dataStream = [
    {
      icon: 'icon',
      href: '#0',
      title: 'Управление как искусство',
      text: ' Успех',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Ночь Мир в это время ',
      text: ' earthTV',
    },
    {
      icon: 'icon',
      href: '#0',
      title: 'Андрей Воз...',
      text: ' Совершенно секретно',
    },
  ];

  return (
    <>
      <Block className='top-block'>
        <Block className='news'>
          <TitleBlock items={titleNews}>
            <span className='date'>08 июня, понедельник 11:23</span>
          </TitleBlock>
          <List>
            {listNews.map((item) => <ListItem key={shortid.generate()} item={item} />)}
          </List>
          <Block className='course'>
            <Course />
          </Block>
        </Block>
        <Block className='tiser'>
          <Tiser {...dataTiser} />
        </Block>
      </Block>
      <Block className='search'>
        {searchLink.map((item) => <a key={shortid.generate()} href='#0'>{item}</a>)}
        <Search />
        <span>Найдется всё. <a href='#0'><span className='example-search'>Фаза луны сегодня</span></a></span>
      </Block>
      <Block className='banner'>
        <Banner {...dataBanner} />
      </Block>
      <Block className='columns'>
        <Block className='col-4'>
          <Block className='weather'>
          <TitleBlock items={[{
            href: '#0',
            text: 'Погода',
          }]} />
            <Weather />
          </Block>
          <Block className='visited'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Посещаемое',
            }]} />
            <List>
              {dataVisited.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
          </List>
          </Block>
        </Block>
        <Block className='col-4'>
          <Block className='maps'>
            <a href='#0'>Карта Германии</a>
            <p>Расписания</p>
          </Block>
          <Block className='tv'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Телепрограмма',
            }]}>
              <span className='tv-show'>Эфир</span>
            </TitleBlock>
            <List>
              {tvProgramm.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
        <Block className='col-4'>
        <Block className='stream'>
            <TitleBlock items={[{
              href: '#0',
              text: 'Эфир',
            }]} />
            <List>
              {dataStream.map((item) => <ListItem key={shortid.generate()} item={item}>
                {item.text}
              </ListItem>)}
            </List>
          </Block>
        </Block>
      </Block>
    </>
  );
}

export default App;
