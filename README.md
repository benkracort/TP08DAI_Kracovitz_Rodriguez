## Base de datos

La base de datos se tiene que llamar 'DAI'

``` sql
CREATE TABLE provinces (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    latitude DECIMAL(10,6),
    longitude DECIMAL(10,6),
    display_order INTEGER
);
INSERT INTO provinces
(name, full_name, latitude, longitude, display_order)
VALUES
('Buenos Aires', 'Provincia de Buenos Aires', -36.676941, -60.558831, 1),

('Cordoba', 'Provincia de Cordoba', -31.399287, -64.264384, 2),

('Santa Fe', 'Provincia de Santa Fe', -31.633330, -60.700000, 3),

('Mendoza', 'Provincia de Mendoza', -32.889458, -68.845839, 4),

('Chaco', 'Provincia del Chaco', -27.451389, -58.986667, 5),

('Misiones', 'Provincia de Misiones', -27.367080, -55.896080, 6),

('Salta', 'Provincia de Salta', -24.782127, -65.423198, 7),

('Tucuman', 'Provincia de Tucuman', -26.808285, -65.217590, 8),

('Entre Rios', 'Provincia de Entre Rios', -31.731970, -60.523800, 9),

('Neuquen', 'Provincia del Neuquen', -38.951610, -68.059100, 10);

SELECT * FROM provinces;
```

## .env

``` env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=DAI
DB_PASSWORD=root
DB_PORT=5432

LOG_FILE_PATH=./logs/
LOG_FILE_NAME=app.log
LOG_TO_FILE_ENABLED=true
LOG_TO_CONSOLE_ENABLED=true
```

## Logs

Los errores se guardan automáticamente en: logs/app.log
Pusimos "SELECT * FROM provincesS" para que genere un error
