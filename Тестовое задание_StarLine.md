# Тестовое задание

![](https://i.ibb.co/TwPV7s4/Screenshot-2023-11-30-at-15-22-56.png)

Реализовать интерфейс отображение POI в текущей области карты. В интерфейсе всего 2 элемента - карта и боковая панель. Дизайн условный, не обязательно соблюдать 1 в 1.

## Задача 1
отобразить карту и список категорий POI. Для простоты их всего 5 - fuel, pharmacy, shop, atm, cafe

# Задача 2
при клике по категории POI необходит отправить запрос в API, затем отобразить списком и маркерами на карте все найденные результаты. Формат запроса к POI API описан ниже. Также можно вернуться назад и выбрать другую категорию.

![](https://i.ibb.co/QC7yXM2/Screenshot-2023-11-30-at-15-23-15.png)

# Задача 3
при наведении курсора на определенный элемент в списке соответствующий маркер на карте меняет цвет на другой

## Запросы к POI API
POI API принимает 3 параметра - `PoiSearch[category]` (категория, `fuel`, `pharmacy`, etc.), `PoiSearch[bounds]` ([гео-границы](https://maplibre.org/maplibre-gl-js/docs/API/classes/maplibregl.Map/#getbounds)) и `accessToken` (ключ доступа). Пример запроса для поиска кафе/ресторанов в Санкт-Петербурге:

`https://maps.starline.ru/api/poi/v1/poi/index?page=1&PoiSearch[category]=cafe&PoiSearch[bounds]=30.474242863278562,59.984429928138894%3B30.17177551708764,59.877347653770556&accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIiwiZG9tYWluIjoiIn0.eyJpc3MiOiJodHRwczovL21hcHMuc3RhcmxpbmUucnUiLCJpYXQiOjE3MDEyNDU1MzEuMzk0MzM2LCJ1aWQiOjF9.`

## Примечения:
- задание должно быть реализовано с помощью React и [Maplibe GL JS](https://maplibre.org/maplibre-gl-js/docs/)
- ваш ключ доступа к POI API `eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIiwiZG9tYWluIjoiIn0.eyJpc3MiOiJodHRwczovL21hcHMuc3RhcmxpbmUucnUiLCJpYXQiOjE3MDEyNDU1MzEuMzk0MzM2LCJ1aWQiOjF9.`
- задание может быть реализовано с помощью Javascript или TypeScript (на выбор)
- в качестве подложки (mapStyle) можно использовать `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json`