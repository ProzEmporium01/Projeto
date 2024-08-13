- Criação da tabela grao
CREATE TABLE grao (
  ID_GRAO SERIAL PRIMARY KEY,
  TIPO_DO_GRAO VARCHAR(50) NOT NULL
);

-- Criação da tabela origem
CREATE TABLE origem (
  ID_ORIGEM SERIAL PRIMARY KEY,
  PAIS_ORIGEM VARCHAR(50) NOT NULL
);

-- Criação da tabela torra
CREATE TABLE torra (
  ID_TORRA SERIAL PRIMARY KEY,
  TIPO_TORRA VARCHAR(50) NOT NULL
);

-- Criação da tabela cafe
CREATE TABLE cafe (
  ID_CAFE SERIAL PRIMARY KEY,
  NOME_CAFE VARCHAR(50) NOT NULL,
  GRAO_ID INT NOT NULL,
  PAIS_ID INT NOT NULL,
  TORRA_ID INT NOT NULL,
  PRECO DECIMAL(10, 2) NOT NULL,
  CONSTRAINT fk_grao FOREIGN KEY (GRAO_ID) REFERENCES grao(ID_GRAO),
  CONSTRAINT fk_pais FOREIGN KEY (PAIS_ID) REFERENCES origem(ID_ORIGEM),
  CONSTRAINT fk_torra FOREIGN KEY (TORRA_ID) REFERENCES torra(ID_TORRA)
);

-- Inserção de dados na tabela grao
INSERT INTO grao (TIPO_DO_GRAO) VALUES
  ('ARABICA'),
  ('ROBUSTA'),
  ('HIBRIDO');

-- Inserção de dados na tabela origem
INSERT INTO origem (PAIS_ORIGEM) VALUES
  ('BRASIL'),
  ('AFRICA OCIDENTAL'),
  ('COLOMBIA'),
  ('ETIOPIA'),
  ('HAVAI'),
  ('ILHA DE MADAGASCAR');

-- Inserção de dados na tabela torra
INSERT INTO torra (TIPO_TORRA) VALUES
  ('CLARA'),
  ('MEDIO-CLARO'),
  ('MEDIO'),
  ('ESCURO');

-- Inserção de dados na tabela cafe
INSERT INTO cafe (NOME_CAFE, GRAO_ID, PAIS_ID, TORRA_ID, PRECO) VALUES
  ('ARABICO', 1, 4, 3, 12.50),
  ('BOURBON', 1, 6, 1, 15.25),
  ('ACAIÁ', 3, 3, 3, 10.90),
  ('CATUAÍ', 1, 1, 3, 12.50),
  ('ROBUSTA', 2, 2, 4, 16.80),
  ('GEISHA', 1, 4, 3, 22.30),
  ('KONA', 1, 5, 3, 18.40)
  
  SELECT * FROM origem  